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
    
    public partial class GioHang
    {
        public string MaHoa { get; set; }
        public string MaKhach { get; set; }
        public int SoLuong { get; set; }
    
        public virtual DM_Hoa DM_Hoa { get; set; }
        public virtual KhachHang KhachHang { get; set; }
    }
}
