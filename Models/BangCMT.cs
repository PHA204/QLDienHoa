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
    using System.ComponentModel.DataAnnotations;

    public partial class BangCMT
    {
        public string MaHoa { get; set; }
        public string TenTK { get; set; }

        public string CMT { get; set; }
        public int DanhGia { get; set; }
        [DisplayFormat(DataFormatString = "{0:dd-MM-yyyy}", ApplyFormatInEditMode = true)]
        public System.DateTime NgayDang { get; set; }
        public string NgayDangFormatted { get { return NgayDang.ToString("dd/MM/yyyy"); } }

        public virtual DM_Hoa DM_Hoa { get; set; }
        public virtual TaiKhoan TaiKhoan { get; set; }
    }
}