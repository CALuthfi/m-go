const restorants = [
  {
    id: "1",
    name: "Star Bucks",
    lokasi: "Jln Sleman Yogyakarta",
    image: "https://www.narita-airport.jp/img/original/10873",
    food: [
      {
        id: "1",
        nama: "Caramel puccino",
        harga: 30000,
        price: 0,
        gambar:
          "https://assets.mystarbucks.com.au/imagecache/bestfit/620x634/_files/Beverages/processed-2013/caramelfrapp.jpg"
      },
      {
        id: "2",
        nama: "Frappuccino",
        harga: 55000,
        price: 0,
        gambar:
          "https://www.chatelaine.com/wp-content/uploads/2018/05/starbucks-mocha-frappuccino-1.jpg"
      },
      {
        id: "3",
        nama: "Pumkin spice",
        harga: 115000,
        price: 0,
        gambar:
          "https://www.uvroom.ca/wp-content/uploads/2016/10/pumpkin-spice-frappuccino.jpg"
      },
      {
        id: "4",
        nama: "chocolate chip",
        harga: 25000,
        price: 0,
        gambar:
          "https://www.uvroom.ca/wp-content/uploads/2016/10/double-chocolate-chip-frappuccino-1.jpg"
      }
    ]
  },
  {
    id: "2",
    name: "Eat fish",
    lokasi: "Jln Ciciru Raya Bandung",
    image: "https://image.freepik.com/vecteurs-libre/chef-logo_20448-9.jpg",
    food: [
      {
        id: "1",
        nama: "ikan bakar",
        harga: 10000,
        price: 0,
        gambar:
          "https://food.fnr.sndimg.com/content/dam/images/food/fullset/2012/5/4/1/FNM_060112-Duff-Goldman-Spanish-Style-Grilled-Fish-recipe_s4x3.jpg.rend.hgtvcom.826.620.suffix/1371606208411.jpeg"
      },
      {
        id: "2",
        nama: "Pepes Ikan",
        harga: 20000,
        price: 0,
        gambar:
          "http://www.resepsedapku.com/wp-content/uploads/2015/12/resep-pepes-ikan-daun-kemangi.jpg"
      },
      {
        id: "3",
        nama: "Sup ikan",
        harga: 10000,
        price: 0,
        gambar:
          "https://2.bp.blogspot.com/-b87A9k9uhL8/V_-qeDlgytI/AAAAAAAABFw/-t6ZqHBu5yo73dS2txdxlTtqpqHPs2YTwCLcB/s1600/Sop%2BIkan%2BNila%2BKemangi%2BBlog.jpg"
      },
      {
        id: "4",
        nama: "Ikan Presto",
        harga: 10000,
        price: 0,
        gambar:
          "https://selerasa.com/wp-content/uploads/2018/05/images_ikanbandengotakotak.jpg"
      }
    ]
  },
  {
    id: "3",
    name: "Restorant Cafe",
    lokasi: "Jln Solo Raya",
    image:
      "https://www.logolynx.com/images/logolynx/9d/9d573190c8a93a92a502656ee0d54f01.jpeg",
    food: [
      {
        id: "1",
        nama: "Sepageti",
        harga: 15000,
        price: 0,
        gambar:
          "https://doktersehat.com/wp-content/uploads/2018/12/resep-spaghetti-doktersehat.jpg"
      },
      {
        id: "2",
        nama: "Steak Ikan",
        harga: 20000,
        price: 0,
        gambar: "http://www.dapurkobe.co.id/wp-content/uploads/steak-ikan.jpg"
      },
      {
        id: "3",
        nama: "Mie Terbang",
        harga: 40000,
        price: 0,
        gambar:
          "https://ksmtour.com/media/images/articles14/mie-terbang-cafe-sosmed-medan.jpg"
      },
      {
        id: "4",
        nama: "Shusi",
        harga: 2000,
        price: 0,
        gambar:
          "https://media-cdn.tripadvisor.com/media/photo-s/0f/1a/cc/43/sushi-misto.jpg"
      }
    ]
  },
  {
    id: "4",
    name: "Angkringan",
    lokasi: "Jln Kalibata Jakarta",
    image: "https://i1.sndcdn.com/artworks-000040212582-tn5ln9-t500x500.jpg",
    food: [
      {
        id: "1",
        nama: "Nasi Rames",
        harga: 13000,
        price: 0,
        gambar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRo54YDsESOGw8VelyyOpqU0cZT2gGfDX6vn_JsUzCdRluxgBPi"
      },
      {
        id: "2",
        nama: "Nasi ayam",
        harga: 13000,
        price: 0,
        gambar:
          "http://2.bp.blogspot.com/-441UbCRSgGI/VQk35EuQPrI/AAAAAAAABBk/0QK4n6cYAjc/s1600/Nasi%2Bjinggo.jpg"
      },
      {
        id: "3",
        nama: "Sate keong",
        harga: 9000,
        price: 0,
        gambar:
          "https://1.bp.blogspot.com/-_iytq13F2Nw/XF7oOiwirgI/AAAAAAAAAUM/8MQzgoad3SEkpWPtGmgt_T6uz4lE6WSUgCLcBGAs/s1600/mkm.jpg"
      },
      {
        id: "4",
        nama: "Sate Telur puyuh",
        harga: 9000,
        price: 0,
        gambar:
          "https://img-global.cpcdn.com/003_recipes/d3dabec82c0e5ae7/751x532cq70/sate-telur-puyuh-baceman-telur-foto-resep-utama.jpg"
      }
    ]
  },
  {
    id: "5",
    name: "Snack house",
    lokasi: "Jln Ngaliyan Raya",
    image:
      "https://cdn5.f-cdn.com/contestentries/13416/1097701/5277-19-1360157166511259eea27ec/Sample%208_thumb900.jpg",
    food: [
      {
        id: "1",
        nama: "Macz",
        harga: 12000,
        price: 0,
        gambar:
          "https://cdn.sribu.com/assets/media/contest_detail/2014/1/testing-52e60fa83c0aa1073c000ada/faf588fb5e.png"
      },
      {
        id: "2",
        nama: "Milidi",
        harga: 14000,
        price: 0,
        gambar:
          "https://id-live-01.slatic.net/original/2b38cd87fcb1a850927eafd15dbf397f.jpg"
      },
      {
        id: "3",
        nama: "Canasta",
        harga: 28000,
        price: 0,
        gambar:
          "http://news.netmedia.co.id/wp-content/uploads/2018/11/Canasta-2.png"
      },
      {
        id: "4",
        nama: "pocky",
        harga: 13000,
        price: 0,
        gambar:
          "https://jualbeli.mysenaraiharga.org/id/1050/products/p/2/pocky-chocolate-stick-biscuit-[47-g-x-10-pcs]-1234-85845399-bfa4217898da28ad59c347af1e88722d.jpg"
      }
    ]
  },
  {
    id: "6",
    name: "Grobak",
    lokasi: "Jln Piere Tandean Jakarta",
    image:
      "https://image.indonetwork.co.id/products/thumbs/600x600/2016/02/16/9e507664e555b3ea2e421860f42e75fa.jpg",
    food: [
      {
        id: "1",
        nama: "Mie Ayam",
        harga: 19000,
        price: 0,
        gambar:
          "http://3.bp.blogspot.com/-yW3xginov8E/UHb3p2liz0I/AAAAAAAABDo/GkQllgPKRxU/s1600/mie_ayam_pangsit.jpg"
      },
      {
        id: "2",
        nama: "Mie Ayam Bakso",
        harga: 11000,
        price: 0,
        gambar:
          "http://www.tokomesin.com/wp-content/uploads/2017/09/mie-ayam-bakso.jpg?x28090"
      },
      {
        id: "3",
        nama: "Mie ayam Goreng",
        harga: 40000,
        price: 0,
        gambar:
          "https://cdn.idntimes.com/content-images/community/2017/09/1-mie-ayam-subur-aaad9a236e93bcf0dafb0470ebb366be.jpg"
      },
      {
        id: "4",
        nama: "Mie Ayam Geprek",
        harga: 30000,
        price: 0,
        gambar:
          "https://reddoorz.files.wordpress.com/2017/09/mie-ayam-bbt.jpg?w=750"
      }
    ]
  }
];

export default restorants;
