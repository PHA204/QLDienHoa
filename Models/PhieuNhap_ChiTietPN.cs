using QLDienHoa03.Models;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace QLDienHoa03.Models
{
    public class PhieuNhap_ChiTietPN
    {
        //Master
        public string MAPHIEU { get; set; }
        [DisplayFormat(DataFormatString ="{0:dd-MM-yyyy}",ApplyFormatInEditMode =true)]
        public System.DateTime NGAYLAP { get; set; }

        public string NGAYLAPFormat { get { return NGAYLAP.ToString("dd-MM-yyyy"); } }
        public string MANCC { get; set; }
        public string GHICHU { get; set; }

        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CHITIETPHIEUNHAP> CHITIETPHIEUNHAPs { get; set; }
        public virtual NHACUNGCAP NHACUNGCAP { get; set; }        

        // Detail //
      
        public string SOLUONG { get; set; }
        public string TENNL { get; set; }              
        public virtual NGUYENLIEU NGUYENLIEU { get; set; }
        public virtual PHIEUNHAPKHO PHIEUNHAPKHO { get; set; }
    }
}