using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using QLDienHoa03.Models;

namespace QLDienHoa03.Controllers
{
    public class ShoppingCartController : Controller
    {
        QL_Dien_HoaEntities db = new QL_Dien_HoaEntities();
        public class CartItem
        {
            public string id { get; set; }
            public int SL { get; set; }
        }
        public ActionResult Index()
        {
            ShoppingCart cart = (ShoppingCart)Session["Cart"];
            if (cart == null)
            {
                cart = new ShoppingCart();
                Session["Cart"] = cart; // Ensure the cart is initialized in the session
            }
            ViewBag.Total = cart.GetTongTienFormat();
            ViewBag.CartItems = cart.Items.ToList();
            return View();
        }

        public ActionResult PatialIndexCart()
        {
            ShoppingCart cart = (ShoppingCart)Session["Cart"];
            if (cart == null)
            {
                cart = new ShoppingCart();
                Session["Cart"] = cart; // Ensure the cart is initialized in the session
            }
            ViewBag.Total = cart.GetTongTienFormat();
            ViewBag.CartItems = cart.Items.ToList();
            return PartialView();
        }



        [HttpPost]
        public ActionResult AddToCart(string id, int SL)
        {
            var result = new { success = false, msg = "", code = -1, Count = 0 };
            var checkProduct = db.DM_Hoa.FirstOrDefault(x => x.MaHoa == id);
            if (checkProduct != null)
            {
                ShoppingCart cart = (ShoppingCart)Session["Cart"];
                if (cart == null)
                {
                    cart = new ShoppingCart();
                }

                ShoppingCartItem item = new ShoppingCartItem();
                item.MaHoa = checkProduct.MaHoa;
                item.TenHoa = checkProduct.TenHoa;
                item.SoLuong = SL;
                item.HinhAnh = checkProduct.HinhAnh;
                item.Gia = checkProduct.Gia;
                item.TongTien = item.Gia * SL;
                cart.AddToCart(item, SL);
                Session["Cart"] = cart;
                result = new { success = true, msg = "Thêm sản phẩm thành công", code = 1, Count = cart.Items.Count };
            }
            return Json(result);
        }
        [HttpGet]
        public JsonResult ShowCount()
        {
            ShoppingCart cart = (ShoppingCart)Session["Cart"];
            if (cart != null)
            {
                return Json(new { success = true, Count = cart.Items.Count }, JsonRequestBehavior.AllowGet);
            }
            return Json(new { success = true, Count = 0 }, JsonRequestBehavior.AllowGet);
        }

        [HttpPost]
        public ActionResult Delete(string id)
        {
            var result = new { success = false,code = -1, Count = 0 };
            ShoppingCart cart = (ShoppingCart)Session["Cart"];
            if (cart != null)
            {
                var checkProduct = cart.Items.FirstOrDefault(x => x.MaHoa == id);
                if (checkProduct != null)
                {
                    cart.Remove(id);
                    result = new { success = true, code = 1, Count = cart.Items.Count };
                }
            }
            return Json(result);
        }

        [HttpPost]
        public ActionResult DeleteAll()
        {           
            ShoppingCart cart = (ShoppingCart)Session["Cart"];
            if (cart != null)
            {
                cart.clear();
                return Json(new { success = true});                
            }
            return Json(new { success = false });
        }

        [HttpPost]
        public ActionResult Update(List<CartItem> cartItems)
        {
            var result = new { success = false};
            foreach (var item in cartItems)
            {               
                    ShoppingCart cart = (ShoppingCart)Session["Cart"];
                    cart.UpdateSoLuong(item.id, item.SL);
                    ViewBag.Total = cart.GetTongTienFormat();
                    result = new { success = true};                
            }          
            
            return Json(result);
        }

        public ActionResult Create()
        {

            ViewBag.KhuVuc = new SelectList(db.GiaPhiVanChuyens, "MaKhuVuc", "TenKhuVuc");
            return View();
        }

        [HttpPost]
        public ActionResult Create(PhieuDat phieudat)
        {
            ShoppingCart cart = (ShoppingCart)Session["Cart"];           
            foreach (var item in cart.Items)
            {
                PhieuDat PD = new PhieuDat();
                PD.SoPhieu = getma();
                PD.Hoa = item.MaHoa;
                PD.TenNguoiGui = phieudat.TenNguoiGui;
                PD.TenNguoiNhan = phieudat.TenNguoiNhan;
                PD.DiaChiNguoiNhan = phieudat.DiaChiNguoiNhan;
                PD.NgayGiao = phieudat.NgayGiao;
                PD.SoLuong = item.SoLuong; 
                PD.DaGiao = 0;
                PD.GioGiao = phieudat.GioGiao;
                PD.KhuVuc = phieudat.KhuVuc;
                PD.Sdt = phieudat.Sdt;                
                db.PhieuDats.Add(PD);
                db.SaveChanges();               
            }
            DeleteAll();
            return RedirectToAction("Index"); // Chuyển hướng sau khi thêm thành công
        }

        public string getma()
        {
            int ma = db.PhieuDats.Count() + 1;
            return "PD" + ma.ToString();
        }
    }
}