using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace QLDienHoa03.Models
{
    public class ShoppingCart
    {
        public List<ShoppingCartItem> Items { get; set; }
        public ShoppingCart()
        {
            this.Items = new List<ShoppingCartItem>();
        }

        public void AddToCart(ShoppingCartItem item,int SL)
        {
            var checkExits = Items.FirstOrDefault(x => x.MaHoa == item.MaHoa);
            if(checkExits != null)
            {
                checkExits.SoLuong += SL;
                checkExits.TongTien = checkExits.Gia * checkExits.SoLuong;
            }
            else
            {
                Items.Add(item);
            }
        }

        public void Remove(string maHoa)
        {
            var checkExits = Items.FirstOrDefault(x => x.MaHoa == maHoa);
            if (checkExits != null)
            {
                Items.Remove(checkExits);              
            }          
        }

        public void UpdateSoLuong(string maHoa, int SL)
        {
            var checkExits = Items.FirstOrDefault(x => x.MaHoa == maHoa);
            if (checkExits != null)
            {
                checkExits.SoLuong  = SL;
                checkExits.TongTien = checkExits.Gia * checkExits.SoLuong;
            }           
        }
        public string GetTongTien()
        {
            return string.Format("{0:N0}", Items.Sum(x => x.TongTien));
        }
        public string GetTongTienFormat()
        {
            return string.Format("{0:N0}", Items.Sum(x => x.TongTien));
        }
        
         public int GetSoLuong()
        {
            return Items.Sum(x => x.SoLuong);
        }

         public void clear()
        {
            Items.Clear();
        }

        
    }
    public class ShoppingCartItem
    {
        public string MaHoa { get; set; }
        public string TenHoa { get; set; }
        public string HinhAnh { get; set; }
        public int Gia { get; set; }
        public int SoLuong { get; set; }
        public int TongTien { get; set; }

    }

}