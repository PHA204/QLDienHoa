using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using QLDienHoa03.Models;
namespace QLDienHoa03.Models
{
    public class CheckQuyen
    {
         QL_Dien_HoaEntities data = new QL_Dien_HoaEntities();
        public string message = "";

        public bool Check(string idTK, string idQuyen)
        {
            // dem tai khoan
            var dem = data.PhanQuyens.Count(m => m.TenTK == idTK & m.Quyen == idQuyen);
            if (dem > 0)
            {
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}