//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace QLDienHoa03.Models
{
    using System;
    using System.Collections.Generic;
    
    public partial class BangCMT
    {
        public string MACMT { get; set; }
        public Nullable<System.DateTime> Ngaydang { get; set; }
        public Nullable<int> DanhGia { get; set; }
        public string TenTK { get; set; }
        public string Comment { get; set; }
        public string MaHoa { get; set; }
    
        public virtual DM_Hoa DM_Hoa { get; set; }
        public virtual TaiKhoan TaiKhoan { get; set; }
    }
}