using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using QLDienHoa03.Models;

namespace QLDienHoa03.Areas.Admin.Controllers
{
    public class DanhMucHoaController : Controller
    {
        private QL_Dien_HoaEntities db = new QL_Dien_HoaEntities();

        // GET: Admin/DanhMucHoa
        public ActionResult Index()
        {
            return View(db.DM_Hoa.ToList());
        }

        // GET: Admin/DanhMucHoa/Details/5
        public ActionResult Details(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DM_Hoa dM_Hoa = db.DM_Hoa.Find(id);
            if (dM_Hoa == null)
            {
                return HttpNotFound();
            }
            return View(dM_Hoa);
        }

        // GET: Admin/DanhMucHoa/Create
        public ActionResult Create()
        {
            return View();
        }
       
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Create([Bind(Include = "MaHoa,TenHoa,MauSac,Gia,HinhAnh")] DM_Hoa dM_Hoa)
        {
            if (ModelState.IsValid)
            {
                db.DM_Hoa.Add(dM_Hoa);
                db.SaveChanges();
                return RedirectToAction("Index");
            }

            return View(dM_Hoa);
        }

        // GET: Admin/DanhMucHoa/Edit/5
        public ActionResult Edit(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DM_Hoa dM_Hoa = db.DM_Hoa.Find(id);
            if (dM_Hoa == null)
            {
                return HttpNotFound();
            }
            return View(dM_Hoa);
        }
       
        [HttpPost]
        [ValidateAntiForgeryToken]
        public ActionResult Edit([Bind(Include = "MaHoa,TenHoa,MauSac,Gia,HinhAnh")] DM_Hoa dM_Hoa)
        {
            if (ModelState.IsValid)
            {
                db.Entry(dM_Hoa).State = EntityState.Modified;
                db.SaveChanges();
                return RedirectToAction("Index");
            }
            return View(dM_Hoa);
        }

        // GET: Admin/DanhMucHoa/Delete/5
        public ActionResult Delete(string id)
        {
            if (id == null)
            {
                return new HttpStatusCodeResult(HttpStatusCode.BadRequest);
            }
            DM_Hoa dM_Hoa = db.DM_Hoa.Find(id);
            if (dM_Hoa == null)
            {
                return HttpNotFound();
            }
            return View(dM_Hoa);
        }

        // POST: Admin/DanhMucHoa/Delete/5
        [HttpPost, ActionName("Delete")]
        [ValidateAntiForgeryToken]
        public ActionResult DeleteConfirmed(string id)
        {
            DM_Hoa dM_Hoa = db.DM_Hoa.Find(id);
            db.DM_Hoa.Remove(dM_Hoa);
            db.SaveChanges();
            return RedirectToAction("Index");
        }

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
