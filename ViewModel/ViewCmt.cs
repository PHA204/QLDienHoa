using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QLDienHoa03.ViewModel
{
    public class ViewCmt
    {
        public string MACMT { get; set; }
        public Nullable<System.DateTime> Ngaydang { get; set; }
        public Nullable<int> DanhGia { get; set; }
        public string TenTK { get; set; }
        public string Comment { get; set; }

    }
}