using QLDienHoa03.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using System.Web.Routing;

namespace QLDienHoa03.App_Start
{
    public class Role : AuthorizeAttribute
    {
        public string idQuyen { get; set; } // tao bien rieng cho check quyen
        public override void OnAuthorization(AuthorizationContext filterContext)
        {
            var User = SessionConfig.GetUser();
            //check session
            if (User == null)
            {
                filterContext.Result = new RedirectToRouteResult(
                    new RouteValueDictionary(new
                    {
                        controller = "Account",
                        action = "Login",
                        area = ""
                    }));
                return;
            }
            //check quyen
            if (string.IsNullOrEmpty(idQuyen) == false)
            {
                if (User.TenTK == "admin")
                {
                    return;
                }
                var check = new CheckQuyen().Check(User.TenTK, idQuyen);
                if (check == false)// khong co quyen
                {
                    filterContext.Result = new RedirectToRouteResult(
                    new RouteValueDictionary(new
                    {
                        controller = "Main",
                        action = "Eror",
                        area = "Admin"
                    }));
                    return;
                }
            }
            return;
        }
    }
}