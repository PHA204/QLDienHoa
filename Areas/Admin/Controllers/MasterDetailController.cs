using QLDienHoa03.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace QLDienHoa03.Areas.Admin.Controllers
{
    public class MasterDetailController : Controller
    {
        QL_Dien_HoaEntities data = new QL_Dien_HoaEntities();
        //Danh sách các phiếu nhập
        public ActionResult DSPhieuNhap()
        {
            ViewBag.DSPN = data.PHIEUNHAPKHOes.Include("NHACUNGCAP").ToList();
            return View();
        }
        // Hiển thị form tạo mới
        [HttpGet]
        public ActionResult Create()
        {
            ViewBag.NhaCungCapList = new SelectList(data.NHACUNGCAPs, "MANCC", "TENNCC");
            ViewBag.NguyenLieuList1 = new SelectList(data.NGUYENLIEUx, "MANL", "TENNL");
            ViewBag.NguyenLieuList2 = new SelectList(data.NGUYENLIEUx, "MANL", "GIA");
            return View();
        }

        // Xử lý khi submit form tạo mới
        [HttpPost]
        public ActionResult Create(PhieuNhap_ChiTietPN model, List<string> MANLs, List<int> SOLUONGs)
        {
            if (MANLs == null || SOLUONGs == null || MANLs.Count != SOLUONGs.Count)
            {
                // Xử lý trường hợp dữ liệu gửi lên không hợp lệ
                ModelState.AddModelError("", "Dữ liệu không hợp lệ.");
                ViewBag.NhaCungCapList = new SelectList(data.NHACUNGCAPs, "MANCC", "TENNCC");
                // Lấy danh sách nguyên liệu từ cơ sở dữ liệu
                var nguyenLieuList = data.NGUYENLIEUx.ToList();

                // Truyền danh sách nguyên liệu và giá vào ViewBag hoặc ViewModel
                ViewBag.NguyenLieuList1 = new SelectList(nguyenLieuList, "MANL", "TENNL");
                ViewBag.NguyenLieuList2 = new SelectList(data.NGUYENLIEUx, "MANL", "GIA");



                return View(model);
            }

            // Tiếp tục xử lý khi dữ liệu hợp lệ
            // Tạo mới phiếu nhập kho
            PHIEUNHAPKHO pn = new PHIEUNHAPKHO();
            pn.MAPHIEU = model.MAPHIEU;
            pn.NGAYLAP = model.NGAYLAP;
            pn.MANCC = model.MANCC;
            pn.GHICHU = model.GHICHU;
            data.PHIEUNHAPKHOes.Add(pn);
            data.SaveChanges();

            // Thêm từng nguyên liệu vào chi tiết phiếu nhập
            for (int i = 0; i < MANLs.Count; i++)
            {
                CHITIETPHIEUNHAP ctpn = new CHITIETPHIEUNHAP();
                ctpn.MAPHIEU = model.MAPHIEU;
                ctpn.MANL = MANLs[i];
                ctpn.SOLUONG = SOLUONGs[i]; // Chuyển đổi SOLUONG từ int sang string để phù hợp với kiểu dữ liệu trong model
                data.CHITIETPHIEUNHAPs.Add(ctpn);
            }
            data.SaveChanges();
            return RedirectToAction("DSPhieuNhap"); // Chuyển hướng sau khi thêm thành công
        }
        public ActionResult Detail(string ma)
        {

            ViewBag.chitiet = ma;
            return View();
        }
        
        public JsonResult Delete(string id)
        {
            bool result = false;

            var pnk = data.PHIEUNHAPKHOes.FirstOrDefault(s => s.MAPHIEU == id);           
            if (pnk != null)
            {
                // Xóa tất cả các chi tiết phiếu nhập có mã phiếu trùng khớp với id
                var ctpnList = data.CHITIETPHIEUNHAPs.Where(ctpn => ctpn.MAPHIEU == id).ToList();
                data.CHITIETPHIEUNHAPs.RemoveRange(ctpnList);

                data.PHIEUNHAPKHOes.Remove(pnk);
                data.SaveChanges();
                result = true;
            }

            return Json(result, JsonRequestBehavior.AllowGet);

        }
    }
}