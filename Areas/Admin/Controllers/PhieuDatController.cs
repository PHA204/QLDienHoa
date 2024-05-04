using QLDienHoa03.Models;
using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;

namespace QLDienHoa03.Areas.Admin.Controllers
{
    public class PhieuDatController : Controller
    {
        private QL_Dien_HoaEntities db = new QL_Dien_HoaEntities();

        // GET: Admin/PhieuDat
        /* [RoleUser(idQuyen = "Q4")]*/
        public ActionResult Index()
        {
            ViewBag.phieuDat = db.PhieuDats.ToList();
            ViewBag.Hoa = new SelectList(db.DM_Hoa, "MaHoa", "TenHoa");
            ViewBag.KhuVuc = new SelectList(db.GiaPhiVanChuyens, "MaKhuVuc", "TenKhuVuc");
            return View();
        }


        [HttpPost]
        public ActionResult SaveProduct(PhieuDat sp)
        {
            db.PhieuDats.Add(sp);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

        public JsonResult Delete(string id)
        {
            bool result = false;

            var sp = db.PhieuDats.FirstOrDefault(s => s.SoPhieu == id);

            if (sp != null)
            {
                db.PhieuDats.Remove(sp);
                db.SaveChanges();
                result = true;
            }

            return Json(result, JsonRequestBehavior.AllowGet);

        }


        // GET: Admin/PhieuDat/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PhieuDat phieuDat = db.PhieuDats.Find(id);
            if (phieuDat == null)
            {
                return HttpNotFound();
            }
            return View(phieuDat);
        }

        // GET: Admin/PhieuDat/Create
        /*[RoleUser(idQuyen = "Q1")]*/
        public ActionResult Create()
        {
            ViewBag.Hoa = new SelectList(db.DM_Hoa, "MaHoa", "TenHoa");
            ViewBag.KhuVuc = new SelectList(db.GiaPhiVanChuyens, "MaKhuVuc", "TenKhuVuc");
            return View();
        }

        // POST: Admin/PhieuDat/Create
        // To protect from overposting attacks, enable the specific properties you want to bind to, for       
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "SoPhieu,Hoa,TenNguoiGui,TenNguoiNhan,DiaChiNguoiNhan,KhuVuc,NgayGiao,GioGiao,DaGiao")] PhieuDat phieuDat)
        {
            db.PhieuDats.Add(phieuDat);
            db.SaveChanges();
            ViewBag.Hoa = new SelectList(db.DM_Hoa, "MaHoa", "TenHoa", phieuDat.Hoa);
            ViewBag.KhuVuc = new SelectList(db.GiaPhiVanChuyens, "MaKhuVuc", "TenKhuVuc", phieuDat.KhuVuc);
            return View(phieuDat);
        }

        // GET: Admin/PhieuDat/Edit/5
        /*[RoleUser(idQuyen = "Q3")]*/
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            PhieuDat phieuDat = db.PhieuDats.Find(id);
            if (phieuDat == null)
            {
                return HttpNotFound();
            }
            ViewBag.Hoa = new SelectList(db.DM_Hoa, "MaHoa", "TenHoa", phieuDat.Hoa);
            ViewBag.KhuVuc = new SelectList(db.GiaPhiVanChuyens, "MaKhuVuc", "TenKhuVuc", phieuDat.KhuVuc);
            return View(phieuDat);
        }

        // POST: Admin/PhieuDat/Edit/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for 

        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "SoPhieu,Hoa,TenNguoiGui,TenNguoiNhan,DiaChiNguoiNhan,KhuVuc,NgayGiao,GioGiao,DaGiao")] PhieuDat phieuDat)
        {
            if (ModelState.IsValid)
            {
                db.Entry(phieuDat).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            ViewBag.Hoa = new SelectList(db.DM_Hoa, "MaHoa", "TenHoa", phieuDat.Hoa);
            ViewBag.KhuVuc = new SelectList(db.GiaPhiVanChuyens, "MaKhuVuc", "TenKhuVuc", phieuDat.KhuVuc);
            return View(phieuDat);
        }

        // GET: Admin/PhieuDat/Delete/5
        /*[RoleUser(idQuyen = "Q2")]*/
        /*  public ActionResult Delete(string id)
          {
              if (id == null)
              {
                  return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
              }
              PhieuDat phieuDat = db.PhieuDats.Find(id);
              if (phieuDat == null)
              {
                  return HttpNotFound();
              }
              return View(phieuDat);
          }*//*

          // POST: Admin/PhieuDat/Delete/5
          [HttpPost, ActionName("Delete")]
          [ValidateAntiForgeryToken]
          public ActionResult DeleteConfirmed(string id)
          {
              PhieuDat phieuDat = db.PhieuDats.Find(id);
              db.PhieuDats.Remove(phieuDat);
              db.SaveChanges();
              return RedirectToAction("Index");
          }
  */
        protected override void Dispose(bool disposing)
        {
            if (disposing)
            {
                db.Dispose();
            }
            base.Dispose(disposing);
        }
    }
}