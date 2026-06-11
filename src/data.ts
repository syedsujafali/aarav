import beerImg from "./assets/beer.png";
import wineImg from "./assets/wine.png";
import redWineImg from "./assets/red wine.jpeg";
import whiteWineImg from "./assets/white wine.jpeg";
import roseWineImg from "./assets/rose wine.jpeg";
import fruitWineImg from "./assets/fruit wine.jpeg";
import cronoExtraImg from "./assets/Crono Extra.jpeg";
import londonPilsnerImg from "./assets/London Pilsner.jpeg";
import budweiserBeerImg from "./assets/Budweiser beer.jpeg";
import kangarooBeerImg from "./assets/Kangaroo Beer.jpeg";
import shirazCabernetImg from "./assets/shiraz cabernet.jpeg";
import cheninBlancImg from "./assets/chenin blanc.jpeg";
import kingfisherImg from "./assets/kingfisher.jpeg";
import broRedImg from "./assets/bro red.jpeg";
import peaksStrawberryImg from "./assets/peaks strawberry.jpeg";
import samsonXxxImg from "./assets/samson xxx.jpeg";
import image1 from "./assets/1.jpeg";
import image2 from "./assets/2.jpeg";
import image4 from "./assets/4.jpeg";
import image5 from "./assets/5.jpeg";
import image6 from "./assets/6.jpeg";
import image7 from "./assets/7.jpeg";
import image8 from "./assets/8.jpeg";

type Category = {
  name: string;
  tagline: string;
  desc: string;
  img: string;
  images?: string[];
};

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Categories", href: "#categories" },
  { label: "Brands", href: "#brands" },
  { label: "About", href: "#about" },
  { label: "Gallery", href: "#gallery" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export const CATEGORIES: Category[] = [
  {
    name: "Red Wine",
    tagline: "Rich & velvety",
    desc: "A handpicked selection of red wines for dinner, pairing, and premium gifting.",
    img: redWineImg,
  },
  {
    name: "White Wine",
    tagline: "Crisp & refreshing",
    desc: "Chilled white wines that bring bright fruit and minerality to your table.",
    img: whiteWineImg,
  },
  {
    name: "Rosé Wine",
    tagline: "Bright & elegant",
    desc: "Rosé wines with floral notes, perfect for brunch, evenings and modern menus.",
    img: roseWineImg,
  },
  {
    name: "Fruit Wine",
    tagline: "Sweet & vibrant",
    desc: "Premium fruit wines crafted for a lush, juicy tasting experience.",
    img: fruitWineImg,
  },
  {
    name: "Premium Beer",
    tagline: "Crafted excellence",
    desc: "Premium beer labels selected for bold flavor, refined packaging and quality pours.",
    img: cronoExtraImg,
  },
  {
    name: "Strong Beer",
    tagline: "Robust & full-bodied",
    desc: "High-strength beer options for a stronger pour with rich malt character.",
    img: londonPilsnerImg,
  },
  {
    name: "Budweiser beer",
    tagline: "Iconic lager",
    desc: "Budweiser in its classic form — balanced, smooth and instantly recognizable.",
    img: budweiserBeerImg,
  },
  {
    name: "Kangaroo Premium Beer",
    tagline: "Premium beer brand",
    desc: "A strong premium beer label with refined taste and a confident finish.",
    img: kangarooBeerImg,
  },
];

export const BRANDS = [
  { name: "Kingfisher", type: "Beer" },
  { name: "Budweiser", type: "Beer" },
  { name: "London Pilsner Strong", type: "Beer" },
  { name: "Kangaroo Premium Beer", type: "Beer" },
  { name: "Bro Red California Reserve", type: "Beer" },
  { name: "Samson XXX", type: "Beer" },
  { name: "Sula Vineyards", type: "Wine" },
  { name: "Peaks", type: "Wine" },
  { name: "Sula Rosé", type: "Wine" },
  { name: "Sula Shiraz", type: "Wine" },
  { name: "Peaks Jamun", type: "Wine" },
  { name: "Peaks Strawberry", type: "Wine" },
];

export const FEATURED_PRODUCTS = [
  {
    name: "Sula Vineyards Rosé",
    category: "Rosé Wine",
    img: roseWineImg,
  },
  {
    name: "Sula Shiraz Cabernet",
    category: "Red Wine",
    img: shirazCabernetImg,
  },
  {
    name: "Sula Chenin Blanc",
    category: "White Wine",
    img: cheninBlancImg,
  },
  {
    name: "Sula Dindori",
    category: "Red Wine",
    img: whiteWineImg,
  },
  {
    name: "Peaks Pure Jamun Wine",
    category: "Fruit Wine",
    img: fruitWineImg,
  },
  {
    name: "Peaks Strawberry Wine",
    category: "Fruit Wine",
    img: peaksStrawberryImg,
  },
  {
    name: "Kingfisher",
    category: "Premium Beer",
    img: kingfisherImg,
  },
  {
    name: "Budweiser",
    category: "Budweiser beer",
    img: budweiserBeerImg,
  },
  {
    name: "London Pilsner Strong",
    category: "Strong Beer",
    img: londonPilsnerImg,
  },
  {
    name: "Kangaroo Premium Beer",
    category: "Premium Beer",
    img: kangarooBeerImg,
  },
  {
    name: "Bro Red California Reserve",
    category: "Premium Beer",
    img: broRedImg,
  },
  {
    name: "Samson XXX",
    category: "Strong Beer",
    img: samsonXxxImg,
  },
];

export const WHY_US = [
  {
    title: "Wide Selection",
    desc: "Hundreds of chilled, regular and flavoured beers plus wines — all under one roof.",
    icon: "✦",
  },
  {
    title: "Genuine Products",
    desc: "100% authentic. Every bottle is sourced through licensed distributors.",
    icon: "◈",
  },
  {
    title: "Convenient Location",
    desc: "Right in the heart of Sector 19C, Vashi — easy to reach by car or train.",
    icon: "◉",
  },
  {
    title: "Friendly Service",
    desc: "Helpful staff who know the shelves and help you pick the right bottle.",
    icon: "♛",
  },
  {
    title: "Well-Stocked Inventory",
    desc: "Fresh stock arriving daily — your favourites are almost always in.",
    icon: "❖",
  },
  {
    title: "Easy Contact",
    desc: "Call or WhatsApp us anytime during store hours to check availability.",
    icon: "✧",
  },
];

export const GALLERY = [
  { src: image1, alt: "Warm, inviting display of chilled beer and wine bottles", span: "row-span-2" },
  { src: image2, alt: "Carefully arranged shelves with curated beer and wine selections", span: "" },
  { src: image4, alt: "Close-up of beer and wine bottles on a softly lit shelf", span: "row-span-2" },
  { src: image5, alt: "Stylish drink display with rich color and texture", span: "" },
  { src: image1, alt: "Featured bottle arrangement for a welcoming store vibe", span: "" },
  { src: image2, alt: "Freshly stocked beer and wine shelves in the shop", span: "" },
  { src: image6, alt: "Newly added store display featuring beer and wine bottles", span: "" },
  { src: image7, alt: "Fresh shelf setup with curated beer and wine selections", span: "" },
  { src: image8, alt: "Clear shop display focusing on beer and wine products", span: "" },
];

export const REVIEWS = [
  {
    name: "Rohan Mehta",
    role: "Working Professional, Vashi",
    rating: 5,
    text: "Aarav has been my go-to shop for years. The staff actually remembers what I like and the stock is always fresh. Best wine and beer shop in Sector 19C, hands down.",
  },
  {
    name: "Priya Iyer",
    role: "Resident, Sector 17",
    rating: 5,
    text: "Clean, well-organised and surprisingly wide range of wines for a neighbourhood store. They stocked the Fratelli I was looking for when no one else had it.",
  },
  {
    name: "Amit Sharma",
    role: "Regular Customer",
    rating: 5,
    text: "Honest pricing, genuine products and friendly people. The chilled Bira 91 is always ready when I walk in after work. Highly recommended.",
  },
  {
    name: "Sneha Kapoor",
    role: "Vashi Local",
    rating: 5,
    text: "A trustworthy local shop in Navi Mumbai. They never push anything on you and always help you find exactly what you came for. Five stars.",
  },
  {
    name: "Vikram Singh",
    role: "Beer & Wine Lover",
    rating: 5,
    text: "Whether it's a chilled beer after work or a bottle of wine for the weekend, Aarav has the stock and the smile. The shop has a warm, welcoming vibe.",
  },
];

export const STORE = {
  name: "Aarav Beer & Wine Shop",
  address1: "Shop No 2, Plot No 7, Sector 19C",
  address2: "Vashi, Navi Mumbai – 400706",
  phone: "+91 72085 59666",
  phoneRaw: "917208559666",
  whatsapp: "917208559666",
  email: "sandeep24081984@gmail.com",
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 11:00 PM" },
    { day: "Sunday", time: "11:00 AM – 10:00 PM" },
    { day: "Public Holidays", time: "As per Excise rules" },
  ],
};
