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
    
    public partial class PhanQuyen
    {
        public string TenTK { get; set; }
        public string Quyen { get; set; }
        public string GhiChu { get; set; }
    
        public virtual Quyen Quyen1 { get; set; }
        public virtual TaiKhoan TaiKhoan { get; set; }
    }
}
