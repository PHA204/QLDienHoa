using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using QLDienHoa03.App_Start;
using QLDienHoa03.Models;

namespace QLDienHoa03.Controllers
{
    public class HomeController : Controller
    {
        QL_Dien_HoaEntities data = new QL_Dien_HoaEntities();
        public ActionResult Index()
        {            

            ViewBag.Women = data.DM_Hoa.Where(hoa => hoa.MauSac.Contains("Đỏ") || hoa.TenHoa.Contains("")).ToList();
            ViewBag.Furniture = data.DM_Hoa.Where(hoa => hoa.Gia > 1000000).ToList();
            ViewBag.Men = data.DM_Hoa.Where(hoa => hoa.MauSac.Contains("trắng")).ToList();
            ViewBag.Kid = data.DM_Hoa.Where(hoa => hoa.MauSac.Contains("vàng") || hoa.MauSac.Contains("Đa sắc")).ToList();
            return View();
        }

        public ActionResult About()
        {
            ViewBag.Message = "Your application description page.";

            return View();
        }

        public ActionResult Contact()
        {
            ViewBag.Message = "Your contact page.";

            return View();
        }


        public ActionResult Detail(string id)
        {
            var model = data.DM_Hoa.FirstOrDefault(x => x.MaHoa == id);
            return View(model);
        }
        /* [HttpPost]
         public ActionResult SaveProduct(DM_Hoa sp)
         {
             data.DM_Hoa.Add(sp);
             data.SaveChanges();
             return RedirectToAction("Index");
         }
 */
        [HttpPost]
        public ActionResult addCMT(int rate, string comment, string MaHoa)
        {
            BangCMT cmt = new BangCMT();
            if (SessionConfig.GetUser() == null)
            {
                TempData["error"] = "Bạn cần đăng nhập để thực hiện chức năng này.";
                TempData["solution"] = "Đăng nhập ngay";
                return Redirect("Detail/" + MaHoa);
            }

            cmt.TenTK = SessionConfig.GetUser().TenTK;
            cmt.CMT = comment;
            cmt.MaHoa = MaHoa;
            cmt.NgayDang = DateTime.Now.Date;
            cmt.DanhGia = rate;
            data.BangCMTs.Add(cmt);
            data.SaveChanges();
            return Redirect("Detail/" + MaHoa);
        }

    }
}