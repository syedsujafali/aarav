import beerImg from "./assets/beer.png";
import wineImg from "./assets/wine.png";
import whiskyImg from "./assets/whisky.png";
import rumImg from "./assets/rum.png";
import vodkaImg from "./assets/vodka.png";
import ginImg from "./assets/gin.png";
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
    name: "Beer",
    tagline: "Chilled. Crisp. Refreshing.",
    desc: "Lagers, wheat ales and craft brews stocked cold in our refrigerators.",
    img: beerImg,
    
  },
  {
    name: "Wine",
    tagline: "Reds, Whites & Rosé",
    desc: "Curated selection of Indian and popular international wines for every palate.",
    img: wineImg,
   
  },
  {
    name: "Whisky",
    tagline: "Smooth. Aged. Bold.",
    desc: "From everyday pours to premium blends — Royal Stag, Blenders Pride & more.",
    img: whiskyImg,
    
  },
  {
    name: "Rum",
    tagline: "Warm. Rich. Classic.",
    desc: "Dark, white and spiced rums — perfect for any season or celebration.",
    img: rumImg,
    
  },
  {
    name: "Vodka",
    tagline: "Clean. Crisp. Versatile.",
    desc: "Smirnoff, Magic Moments and more — ready for mixers and cocktails.",
    img: vodkaImg,
    
  },
  {
    name: "Gin",
    tagline: "Botanical. Aromatic.",
    desc: "Classic London Dry and Indian craft gins for your perfect G&T.",
    img: ginImg,
    
  },
  {
    name: "Brandy",
    tagline: "Smooth. Warming.",
    desc: "Premium brandies for the connoisseur and the casual sipper alike.",
    img: whiskyImg,
    
  },
];

export const BRANDS = [
  { name: "Kingfisher", type: "Beer" },
  { name: "Budweiser", type: "Beer" },
  { name: "Tuborg", type: "Beer" },
  { name: "Carlsberg", type: "Beer" },
  { name: "Bira 91", type: "Craft Beer" },
  { name: "Heineken", type: "Beer" },
  { name: "Royal Stag", type: "Whisky" },
  { name: "Blenders Pride", type: "Whisky" },
  { name: "Signature", type: "Whisky" },
  { name: "Antiquity", type: "Whisky" },
  { name: "Smirnoff", type: "Vodka" },
  { name: "Magic Moments", type: "Vodka" },
  { name: "Bacardi", type: "Rum" },
  { name: "Sula", type: "Wine" },
  { name: "Fratelli", type: "Wine" },
];

export const WHY_US = [
  {
    title: "Wide Selection",
    desc: "Hundreds of beers, wines, whiskies and spirits — all under one roof.",
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
  { src: image1, alt: "Warm, inviting display of premium bottles and spirits", span: "row-span-2" },
  { src: image2, alt: "Carefully arranged shelves with curated drink selections", span: "" },
  { src: image4, alt: "Close-up of premium spirits on a softly lit shelf", span: "row-span-2" },
  { src: image5, alt: "Stylish drink display with rich color and texture", span: "" },
  { src: image1, alt: "Featured bottle arrangement for a welcoming store vibe", span: "" },
  { src: image2, alt: "Freshly stocked liquor shelves in the shop", span: "" },
  { src: image6, alt: "Newly added store display featuring premium bottles", span: "" },
  { src: image7, alt: "Fresh shelf setup with curated drinks and spirits", span: "" },
  { src: image8, alt: "Clear board-focused store display for the gallery", span: "" },
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
    role: "Whisky Enthusiast",
    rating: 5,
    text: "Whether it's a daily Royal Stag or a special Antiquity Blue evening, Aarav has the stock and the smile. The shop has a warm, welcoming vibe.",
  },
];

export const STORE = {
  name: "Aarav Beer & Wine Shop",
  address1: "Shop No 2, Plot No 7, Sector 19C",
  address2: "Vashi, Navi Mumbai – 400706",
  phone: "+91 72085 59666",
  phoneRaw: "917208559666",
  whatsapp: "917208559666",
  email: "hello@aaravbeerwine.in",
  hours: [
    { day: "Monday – Saturday", time: "10:00 AM – 11:00 PM" },
    { day: "Sunday", time: "11:00 AM – 10:00 PM" },
    { day: "Public Holidays", time: "As per Excise rules" },
  ],
};
