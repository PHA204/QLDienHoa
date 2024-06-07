using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using QLDienHoa03.Models;
using QLDienHoa03.App_Start;
using System.Web.Security;

namespace QLDienHoa03.Controllers
{
    public class AccountController : Controller
    {
        QL_Dien_HoaEntities data = new QL_Dien_HoaEntities();
        [HttpGet]
        public ActionResult Login(string returnUrl)
        {
            ViewBag.ReturnUrl = returnUrl;
            return View();
        }

        [HttpPost]        
        public ActionResult Login(string username, string password, string returnUrl)
        {
            using (var TK = new QL_Dien_HoaEntities())
            {
                var account = TK.TaiKhoans.FirstOrDefault(x => x.TenTK.Equals(username.ToLower().Trim()) && x.MK.Equals(password));
                if (account != null)
                {                    
                    SessionConfig.SetUser(account);
                    /* var check = TK.PhanQuyens.FirstOrDefault(x => x.TenTK.Equals(account.TenTK));
                     if (check == null)*/
                    if (string.IsNullOrEmpty(returnUrl))
                    {                                        
                        return RedirectToAction("Index", "Home");
                    }
                    else
                    {
                        return Redirect(returnUrl);
                    }
                }
                else
                {
                    TempData["error"] = "Tài khoản hoặc mật khẩu không đúng";
                    return View();
                }
            }
        }

        public ActionResult DangKy()
        {
            return View();
        }

        [HttpPost]
        public ActionResult DangKy(TaiKhoan TK)
        {
            var check = data.TaiKhoans.FirstOrDefault(x => x.TenTK.Equals(TK.TenTK));
            if (check != null)
            {
                TempData["error"] = "Tên Tài khoản Đã Tồn Tại";
                return View();
            }
            data.TaiKhoans.Add(TK);
            data.SaveChanges();
            return RedirectToAction("Login");
        }

        public ActionResult Logout()
        {
            Session.Remove("user");
            FormsAuthentication.SignOut();
            return RedirectToAction("Index","Home");
           
        }      
    }
}