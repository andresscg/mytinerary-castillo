const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());

const cities = [
  {
    img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1559669413/MERN/20170624_104816.jpg",
    _id: "5cf6aafbc003394d306a541e",
    name: "Amsterdam",
    country: "Netherland",
    __v: 0,
  },
  {
    img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1560349362/MERN/20161125_152715_Richtone_HDR.jpg",
    _id: "5d010b102c711e2fe4092390",
    name: "Edinburgh",
    country: "Scotland",
    __v: 0,
  },
  {
    img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1560349488/MERN/20170221_210941.jpg",
    _id: "5d010b4f2c711e2fe4092391",
    name: "Sydney",
    country: "Australia",
    __v: 0,
  },
  {
    img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1560349570/MERN/20171105_190049.jpg",
    _id: "5d010ba62c711e2fe4092392",
    name: "Abu Dhabi",
    country: "United Arab Emirates",
    __v: 0,
  },
  {
    img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1560349630/MERN/20170409_193026.jpg",
    _id: "5d010bf82c711e2fe4092393",
    name: "Singapore",
    country: "Singapore",
    __v: 0,
  },
  {
    img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1560349735/MERN/20131227_134911.jpg",
    _id: "5d010c442c711e2fe4092394",
    name: "London",
    country: "United Kingdom",
    __v: 0,
  },
  {
    img: "https://media.traveler.es/photos/61376a47bf63e581e0100e86/master/w_1600%2Cc_limit/153580.jpg",
    _id: "5d1df9547576640017cf93d4",
    name: "Verona",
    country: "Italia",
    __v: 0,
  },
  {
    img: "https://www.toulouse-tourisme.com/sites/www.toulouse-tourisme.com/files/styles/top_banniere/public/thumbnails/image/garonne.jpg?itok=8EbHwsvs",
    _id: "5d665dbd53c1690017c9bf9c",
    name: "Toulouse",
    country: "France",
    __v: 0,
  },
  {
    img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1568970561/MERN/20160206_101158_Richtone_HDR.jpg",
    _id: "5d8497817d86990017af7905",
    name: "Vienna",
    country: "Austria",
    __v: 0,
  },
  {
    img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1570637687/MERN/20171130_172803.jpg",
    _id: "5d9e07a4f204ac00170ca30e",
    name: "Dubai",
    country: "United Arab Emirates",
    __v: 0,
  },
  {
    img: "https://www.oirealtor.com/noticias-inmobiliarias/wp-content/uploads/2021/01/c1.jpg",
    _id: "5dc001d5f204e100173913c0",
    name: "Ciudad Real",
    country: "Spain",
    __v: 0,
  },
  {
    img: "https://www.cocinayvino.com/wp-content/uploads/2017/03/55156298_l.jpg",
    _id: "5dd40d33befd130017f49dea",
    name: "Bologna",
    country: "Italy",
    __v: 0,
  },
  {
    img: "https://res.cloudinary.com/ds3w3iwbk/image/upload/v1570632597/MERN/20180519_150452.jpg",
    _id: "5dd9ef1787c6f50017f3bf36",
    name: "Buenos Aires",
    country: "Argentina",
    __v: 0,
  },
  {
    img: "https://media.tacdn.com/media/attractions-splice-spp-674x446/06/6a/b6/81.jpg",
    _id: "5ddd11e3f0b2730017fc723d",
    name: "Amman(petra)",
    country: " Jordan",
    __v: 0,
  },
  {
    img: "https://img.bekiaviajes.com/ciudades/portada/0000/6-h.jpg",
    _id: "5dddb3833891f300178c6e00",
    name: "Roma",
    country: "Italia",
    __v: 0,
  },
  {
    img: "https://content.r9cdn.net/rimg/dimg/c7/0d/f4964725-city-27638-16d080a1e39.jpg?width=1750&height=1000&xhint=3016&yhint=2622&crop=true",
    _id: "5dddb3b1a8e6520017984d2d",
    name: "Rimini",
    country: "Italia",
    __v: 0,
  },
  {
    img: "https://tse3.mm.bing.net/th?id=OIP.FMiTyxdgfsX_rCwJGbbqlgHaFj&pid=Api",
    _id: "5ea3e680b2a6df0017abad8b",
    name: "Odessa",
    country: "Ukrain",
    __v: 0,
  },
  {
    img: "https://i0.wp.com/leerdelviaje.com/wp-content/uploads/2020/01/IMG_7665B.jpg?resize=1117.5%2C718&ssl=1",
    _id: "61085062db3aec00174f128d",
    name: "Jujuy",
    country: "Argentina",
    __v: 0,
  },
  {
    img: "https://tripin.travel/wp-content/uploads/2020/06/turismo-mendoza-2-web.jpg",
    _id: "610860f71d65840017fe3ca4",
    name: "Mendoza",
    country: "Argentina",
    __v: 0,
  },
  {
    img: "https://www.krisporelmundo.com/wp-content/uploads/2020/05/Alc%C3%A1zar-de-los-Reyes-Cristianos-1170x777.jpg",
    _id: "6108674b163f0c0017df08aa",
    name: "Cordoba",
    country: "Argentina",
    __v: 0,
  },
];

app.get("/api/cities", (req, res) => {
  console.log("GET received");
  res.json({ response: { cities: cities } });
});

app.listen(4000, () => console.log("Server is listening on port 4000"));
