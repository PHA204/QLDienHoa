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
    
    public partial class GiaPhiVanChuyen
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public GiaPhiVanChuyen()
        {
            this.PhieuDats = new HashSet<PhieuDat>();
        }
    
        public string MaKhuVuc { get; set; }
        public string TenKhuVuc { get; set; }
        public int KhoangCach { get; set; }
        public int Gia { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<PhieuDat> PhieuDats { get; set; }
    }
}
