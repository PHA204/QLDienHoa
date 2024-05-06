using System;
using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using QLDienHoa03.Models;
using System.IO;
using System.Web.Configuration;
using System.Data.Entity.Validation;
using System.Diagnostics;

namespace QLDienHoa03.Areas.Admin.Controllers
{
    public class DanhMucHoaController : Controller
    {
        private QL_Dien_HoaEntities db = new QL_Dien_HoaEntities();

        // GET: Admin/DanhMucHoa
        public ActionResult Index()
        {

            ViewBag.DM_Hoa = db.DM_Hoa.ToList();
            return View();
        }
        public ActionResult List()
        {
            ViewBag.DM_Hoa = db.DM_Hoa.ToList();
            var c = ViewBag.DM_Hoa.Count;
            // Khởi tạo một mảng để chứa các số ngẫu nhiên
            var random = new int[c];
            var random2 = new int[c];
            // Tạo một đối tượng Random để sinh số ngẫu nhiên
            Random rand = new Random();
            // Sinh và thêm các số ngẫu nhiên vào mảng
            for (int i = 0; i < c; i++)
            {
                random[i] = rand.Next(1,1001); // Sinh số ngẫu nhiên
                random2[i] = rand.Next(100000, 200001);
            }

            // Gán mảng random vào ViewBag để sử dụng trong View
            ViewBag.R = random;
            ViewBag.R2 = random2;
            return View();
        }

        // GET: Admin/DanhMucHoa/Details/5
        public ActionResult Details(string id)
        {
            var model = db.DM_Hoa.FirstOrDefault(x => x.MaHoa == id);
            return PartialView("Details", model);
        }

        /* [HttpPost]
         public ActionResult SaveProduct(DM_Hoa sp)
         {
             db.DM_Hoa.Add(sp);
             db.SaveChanges();
             return RedirectToAction("Index");
         }
 */
        public JsonResult Delete(string id)
        {
            bool result = false;

            var sp = db.DM_Hoa.FirstOrDefault(s => s.MaHoa == id);

            if (sp != null)
            {
                db.DM_Hoa.Remove(sp);
                db.SaveChanges();
                result = true;
            }

            return Json(result, JsonRequestBehavior.AllowGet);

        }

        [HttpPost]
        public ActionResult Create(DM_Hoa Hoa, HttpPostedFileBase imgfile)
        {
            string path = uploadimage(imgfile);
            DM_Hoa ns = new DM_Hoa();
            if (path.Equals("-1"))
            {

            }
            else
            {
                ns.MaHoa = Hoa.MaHoa;
                ns.TenHoa = Hoa.TenHoa;
                ns.MauSac = Hoa.MauSac;
                ns.Gia = Hoa.Gia;
                ns.HinhAnh = path;
                ns.DanhGia = null;
                db.Entry(ns).State = EntityState.Modified;
                db.DM_Hoa.Add(ns);
                try
                {
                    db.SaveChanges();
                }
                catch (DbEntityValidationException ex)
                {
                    foreach (var validationErrors in ex.EntityValidationErrors)
                    {
                        foreach (var validationError in validationErrors.ValidationErrors)
                        {
                            Trace.TraceInformation("Property: {0} Error: {1}", validationError.PropertyName, validationError.ErrorMessage);
                        }
                    }
                }
            }
            return RedirectToAction("Index");
        }

        public string uploadimage(HttpPostedFileBase file)
        {
            Random r = new Random();
            string path = "-1";
            int random = r.Next();
            if (file != null && file.ContentLength > 0)
            {
                string extension = Path.GetExtension(file.FileName);
                if (extension.ToLower().Equals(".jpg") || extension.ToLower().Equals(".jpeg") || extension.ToLower().Equals(".png"))
                {
                    try
                    {
                        path = Path.Combine(Server.MapPath("~/Image/img/"), random + Path.GetFileName(file.FileName));
                        file.SaveAs(path);
                        path = "~/Image/img/" + random + Path.GetFileName(file.FileName);
                        //    ViewBag.Message = "File uploaded successfully";
                    }
                    catch (Exception ex)
                    {
                        path = "-1";
                    }
                }
                else
                {

                    Response.Write("<script>alert('Only jpg ,jpeg or png formats are acceptable....'); </script>");
                }
            }
            else
            {
                Response.Write("<script>alert('Please select a file'); </script>");
                path = "-1";
            }
            return path;
        }



        // GET: Admin/DanhMucHoa/Create
        /* public ActionResult Create()
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
 */
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
        public ActionResult Edit(DM_Hoa Hoa, HttpPostedFileBase imgfile, string id) // truyen them 1 cai string id
        {
            string path = uploadimage(imgfile);
            var update = db.DM_Hoa.Find(id);
            if (path.Equals("-1") && Hoa != null)
            {
                update.MaHoa = Hoa.MaHoa;
                update.TenHoa = Hoa.TenHoa;
                update.MauSac = Hoa.MauSac;
                update.Gia = Hoa.Gia;
                update.HinhAnh = update.HinhAnh;
                update.DanhGia = null;
                db.SaveChanges();
            }
            else
            {
                update.MaHoa = Hoa.MaHoa;
                update.TenHoa = Hoa.TenHoa;
                update.MauSac = Hoa.MauSac;
                update.Gia = Hoa.Gia;
                update.HinhAnh = path;
                update.DanhGia = null;
                db.SaveChanges();
            }
            return RedirectToAction("Index");
        }

        /* public ActionResult Edit([Bind(Include = "MaHoa,TenHoa,MauSac,Gia,HinhAnh")] DM_Hoa dM_Hoa)
         {
             if (ModelState.IsValid)
             {
                 db.Entry(dM_Hoa).State = EntityState.Modified;
                 db.SaveChanges();
                 return RedirectToAction("Index");
             }
             return View(dM_Hoa);
         }*/

        // GET: Admin/DanhMucHoa/Delete/5
        /*  public ActionResult Delete(string id)
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
          }*/

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
