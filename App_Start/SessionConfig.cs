using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QLDienHoa03.Models;

namespace QLDienHoa03.App_Start
{
    public class SessionConfig
    {
        public static void SetUser(TaiKhoan user)
        {
            HttpContext.Current.Session["user"] = user;
        }
        // lay session
        public static TaiKhoan GetUser()
        {
            return (TaiKhoan)HttpContext.Current.Session["user"];
        }
    }
}