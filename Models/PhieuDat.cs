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

    public partial class PhieuDat
    {
        public string SoPhieu { get; set; }
        public string Hoa { get; set; }
        public string TenNguoiGui { get; set; }
        public string TenNguoiNhan { get; set; }
        public string DiaChiNguoiNhan { get; set; }
        public string KhuVuc { get; set; }
        [DisplayFormat(DataFormatString ="{0:dd-MM-yyyy}",ApplyFormatInEditMode =true)]
        public System.DateTime NgayGiao { get; set; }

        public string NgayGiaoFormatted { get { return NgayGiao.ToString("dd-MM-yyyy"); } }


        public System.TimeSpan GioGiao { get; set; }
        public int DaGiao { get; set; }
    
        public virtual DM_Hoa DM_Hoa { get; set; }
        public virtual GiaPhiVanChuyen GiaPhiVanChuyen { get; set; }

        public bool YourPropertyBool { get; set; }
    }
}
