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
    
    public partial class PHIEUNHAPKHO
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public PHIEUNHAPKHO()
        {
            this.CHITIETPHIEUNHAPs = new HashSet<CHITIETPHIEUNHAP>();
        }
    
        public string MAPHIEU { get; set; }
        public System.DateTime NGAYLAP { get; set; }
        public string MANCC { get; set; }
        public string GHICHU { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CHITIETPHIEUNHAP> CHITIETPHIEUNHAPs { get; set; }
        public virtual NHACUNGCAP NHACUNGCAP { get; set; }
    }
}
