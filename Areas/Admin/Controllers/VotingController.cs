using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;
using QLDienHoa03.Models;
using QLDienHoa03.ViewModel;

namespace QLDienHoa03.Areas.Admin.Controllers
{
    public class VotingController : Controller
    {
        QL_Dien_HoaEntities db = new QL_Dien_HoaEntities();
        public ActionResult Index()
        {

            return View(db.TaiKhoans.ToList());
        }
    }
}