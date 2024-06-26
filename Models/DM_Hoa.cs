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

    public partial class DM_Hoa
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public DM_Hoa()
        {
            this.PhieuDats = new HashSet<PhieuDat>();
            this.BangCMTs = new HashSet<BangCMT>();
        }

        public string MaHoa { get; set; }
        public string TenHoa { get; set; }
        public string MauSac { get; set; }
        public int Gia { get; set; }
        public string GiaFormatted
        {
            get { return string.Format("{0:N0}", Gia); }
        }
        public string GiaFormat(int g)
        {
            GetType();
            { return string.Format("{0:N0}", g); }
        }
        public string HinhAnh { get; set; }
        public string MANL { get; set; }
        public Nullable<int> DanhGia { get; set; }

        public virtual NGUYENLIEU NGUYENLIEU { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PhieuDat> PhieuDats { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<BangCMT> BangCMTs { get; set; }
    }
}