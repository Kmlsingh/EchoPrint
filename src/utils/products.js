import productImg01 from "../Images/double-sofa-01.jpeg";
import productImg02 from "../Images/double-sofa-02.jpeg";
import productImg03 from "../Images/double-sofa-03.jpeg";

import productImg04 from "../Images/single-sofa-01.jpeg";
import productImg05 from "../Images/single-sofa-02.jpeg";
import productImg06 from "../Images/single-sofa-03.jpeg";
import productImg13 from "../Images/single-sofa-04.jpeg";
import productImg14 from "../Images/tshirt-05.jpeg";
import productImg16 from "../Images/cup-01.jpeg";
import productImg18 from "../Images/pen-11.jpeg";
import productImg19 from "../Images/cover-11.jpeg"
import productImg12 from "../Images/tote-bag-01.jpeg";
import productImg11 from "../Images/keyChain.jpeg";
import productImg07 from "../Images/arm-chair-01.jpeg";
import productImg08 from "../Images/arm-chair-02.jpeg";
import productImg09 from "../Images/arm-chair-03.jpeg";
import productImg10 from "../Images/arm-chair-00.jpeg";


import phone03 from "../Images/phone-03.jpeg";
import phone04 from "../Images/phone-04.jpeg";

import phone08 from "../Images/phone-08.jpeg";


import wireless01 from "../Images/wireless-01.jpeg";


import sofaSlide from "../Images/hero-img.jpeg";
import watchSlide from "../Images/watch-07.jpeg";

export const SliderData = [
  {
      id: 1,
      title: "Custom Photo Frames",
      desc: "Get your favorite memories framed with our custom photo framing service. High-quality materials and various designs available.",
      cover: sofaSlide,
  },
  {
      id: 2,
      title: "Personalized T-Shirts",
      desc: "Print your favorite images or designs on t-shirts. Available in various sizes and colors. Perfect for gifts or personal use.",
      cover: phone08,
  },
  {
      id: 3,
      title: "Image Printing on Cups",
      desc: "Customize your cups with your favorite images. High-quality printing that lasts. Ideal for gifts or personal use.",
      cover: wireless01,
  },
  {
      id: 4,
      title: "custom mobile covers",
      desc: "Add a personal touch to your covers with our image printing service. High-quality and durable prints.",
      cover: watchSlide,
  },
];

export const serviceData = [
  {
    icon: <ion-icon name="car"></ion-icon>,
    title: "Free Shipping",
    subtitle: "Enjoy free shipping on all orders.",
    bg: "#fdefe6",
  },
  {
    icon: <ion-icon name="card"></ion-icon>,
    title: "Safe Payment",
    subtitle: "Your payment information is secure with us.",
    bg: "#ceebe9",
  },
  {
    icon: <ion-icon name="shield-half-outline"></ion-icon>,
    title: "Quality Assurance",
    subtitle: "We ensure high-quality products for all your needs.",
    bg: "#e2f2b2",
  },
  {
    icon: <ion-icon name="headset"></ion-icon>,
    title: "Customer Support",
    subtitle: "24/7 customer support for all your queries.",
    bg: "#d6e5fb",
  },
];

export const discoutProducts = [
  {
    id: "01",
    productName: "Custom Photo Frame",
    imgUrl: productImg01,
    category: "photo frame",
    price: 500,
    discount: 10,
    shortDesc:
      "High-quality custom photo frames to preserve your memories.",
    description:
      "Our custom photo frames are made with high-quality materials and come in various designs to suit your style. Perfect for preserving your cherished memories.",
    reviews: [
      {
        rating: 4.7,
        text: "Excellent quality and beautiful design.",
      },
    ],
    avgRating: 4.5,
  },
  {
    id: "02",
    productName: "Personalized T-Shirt",
    imgUrl: productImg02,
    category: "t-shirt",
    price: 200,
    discount: 15,
    shortDesc:
      "Print your favorite images or designs on t-shirts.",
    description:
      "Our personalized t-shirts are available in various sizes and colors. Perfect for gifts or personal use, with high-quality printing that lasts.",
    reviews: [
      {
        rating: 4.8,
        text: "Great quality and the print looks amazing.",
      },
      {
        rating: 4.8,
        text: "Very comfortable and the design is perfect.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "03",
    productName: "Image Printed Cup",
    imgUrl: productImg16,
    category: "cup",
    price: 150,
    discount: 20,
    shortDesc:
      "Customize your cups with your favorite images.",
    description:
      "Our image printed cups are perfect for gifts or personal use. High-quality printing that lasts and adds a personal touch to your drinkware.",
    reviews: [
      {
        rating: 4.6,
        text: "The print quality is excellent and the cup is sturdy.",
      },
      {
        rating: 4.9,
        text: "Love my personalized cup, it's perfect!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Printed Phone cover",
    imgUrl: productImg09,
    category: "cutlery",
    price: 250,
    discount: 25,
    shortDesc:
      "Add a personal touch to your cover with our image printing service.",
    description:
      "Our image printed cover is high-quality and durable. Perfect for adding a unique touch to your experience.",
    reviews: [
      {
        rating: 4.6,
        text: "The cutlery looks amazing with the custom print.",
      },
      {
        rating: 4.9,
        text: "Very happy with the quality and design.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "05",
    productName: "Image Printed Pen",
    imgUrl: phone03,
    category: "pen",
    price: 100,
    discount: 5,
    shortDesc:
      "Personalize your pens with images or text.",
    description:
      "Our image printed pens are perfect for promotional items or personal use. High-quality printing that lasts and adds a personal touch to your writing instruments.",
    reviews: [
      {
        rating: 4.8,
        text: "The print quality is great and the pen writes smoothly.",
      },
      {
        rating: 4.9,
        text: "Love my personalized pen, it's perfect for work.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "06",
    productName: "Custom Photo Frame Set",
    imgUrl: phone04,
    category: "photo frame",
    price: 600,
    discount: 15,
    shortDesc:
      "A set of custom photo frames to display your memories.",
    description:
      "Our custom photo frame set includes multiple frames in various sizes and designs. Perfect for creating a beautiful display of your cherished memories.",
    reviews: [
      {
        rating: 4.8,
        text: "The frame set is beautiful and high-quality.",
      },
      {
        rating: 4.9,
        text: "Very happy with my purchase, the frames look great.",
      },
    ],
    avgRating: 4.8,
  },
];

export const products = [
  {
    id: "01",
    productName: "Custom Photo Frame",
    imgUrl: productImg01,
    category: "photo frame",
    price: 500,
    shortDesc:
      "High-quality custom photo frames to preserve your memories.",
    description:
      "Our custom photo frames are made with high-quality materials and come in various designs to suit your style. Perfect for preserving your cherished memories.",
    reviews: [
      {
        rating: 4.8,
        text: "The frame quality is excellent and looks great on my wall.",
      },
      {
        rating: 4.9,
        text: "Very happy with my purchase, the frames are beautiful.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "02",
    productName: "Personalized T-Shirt",
    imgUrl: productImg02,
    category: "t-shirt",
    price: 200,
    shortDesc:
      "Print your favorite images or designs on t-shirts.",
    description:
      "Our personalized t-shirts are available in various sizes and colors. Perfect for gifts or personal use, with high-quality printing that lasts.",
    reviews: [
      {
        rating: 4.8,
        text: "Great quality and the print looks amazing.",
      },
      {
        rating: 4.8,
        text: "Very comfortable and the design is perfect.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "03",
    productName: "Image Printed Cup",
    imgUrl: productImg16,
    category: "cup",
    price: 150,
    shortDesc:
      "Customize your cups with your favorite images.",
    description:
      "Our image printed cups are perfect for gifts or personal use. High-quality printing that lasts and adds a personal touch to your drinkware.",
    reviews: [
      {
        rating: 4.6,
        text: "The print quality is excellent and the cup is sturdy.",
      },
      {
        rating: 4.9,
        text: "Love my personalized cup, it's perfect!",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "04",
    productName: "Personlized backcover",
    imgUrl: productImg19,
    category: "cutlery",
    price: 250,
    shortDesc:
      "Add a personal touch to your cover with our image printing service.",
    description:
      "Our Personlized backcover is high-quality and durable. Perfect for adding a unique touch to your dining experience.",
    reviews: [
      {
        rating: 4.8,
        text: "The cutlery looks amazing with the custom print.",
      },
      {
        rating: 4.9,
        text: "Very happy with the quality and design.",
      },
    ],
    avgRating: 4.7,
  },
  {
    id: "05",
    productName: "Image Printed Pen",
    imgUrl: productImg18,
    category: "pen",
    price: 100,
    shortDesc:
      "Personalize your pens with images or text.",
    description:
      "Our image printed pens are perfect for promotional items or personal use. High-quality printing that lasts and adds a personal touch to your writing instruments.",
    reviews: [
      {
        rating: 4.8,
        text: "The print quality is great and the pen writes smoothly.",
      },
      {
        rating: 4.9,
        text: "Love my personalized pen, it's perfect for work.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "06",
    productName: "Custom Photo Frame Set",
    imgUrl: productImg06,
    category: "photo frame",
    price: 800,
    shortDesc:
      "A set of custom photo frames to display your memories.",
    description:
      "Our custom photo frame set includes multiple frames in various sizes and designs. Perfect for creating a beautiful display of your cherished memories.",
    reviews: [
      {
        rating: 4.8,
        text: "The frame set is beautiful and high-quality.",
      },
      {
        rating: 4.9,
        text: "Very happy with my purchase, the frames look great.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "07",
    productName: "Personalized T-Shirt Set",
    imgUrl: productImg14,
    category: "t-shirt",
    price: 500,
    shortDesc:
      "A set of personalized t-shirts for family or friends.",
    description:
      "Our personalized t-shirt set includes multiple t-shirts in various sizes and colors. Perfect for family gatherings or group events, with high-quality printing that lasts.",
    reviews: [
      {
        rating: 4.8,
        text: "The t-shirts are comfortable and the prints look great.",
      },
      {
        rating: 4.9,
        text: "Very happy with the quality and design.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "08",
    productName: "Image Printed Mug",
    imgUrl: productImg08,
    category: "cup",
    price: 200,
    shortDesc:
      "Customize your mugs with your favorite images.",
    description:
      "Our image printed mugs are perfect for gifts or personal use. High-quality printing that lasts and adds a personal touch to your drinkware.",
    reviews: [
      {
        rating: 4.8,
        text: "The print quality is excellent and the mug is sturdy.",
      },
      {
        rating: 4.9,
        text: "Love my personalized mug, it's perfect!",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "09",
    productName: "I-phone cover",
    imgUrl: productImg09,
    category: "cutlery",
    price: 100,
    shortDesc:
      "Add a personal touch to your spoon with our image printing service.",
    description:
      "Our image printed spoons are high-quality and durable. Perfect for adding a unique touch to your dining experience.",
    reviews: [
      {
        rating: 4.8,
        text: "The spoon looks amazing with the custom print.",
      },
      {
        rating: 4.9,
        text: "Very happy with the quality and design.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "10",
    productName: "Image Printed Notebook",
    imgUrl: productImg10,
    category: "accessories",
    price: 150,
    shortDesc:
      "Personalize your notebooks with images or text.",
    description:
      "Our image printed notebooks are perfect for promotional items or personal use. High-quality printing that lasts and adds a personal touch to your stationery.",
    reviews: [
      {
        rating: 4.8,
        text: "The print quality is great and the notebook is well-made.",
      },
      {
        rating: 4.9,
        text: "Love my personalized notebook, it's perfect for work.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "11",
    productName: "Image Printed Keychain",
    imgUrl: productImg11, 
    category: "accessories",
    price: 50,
    shortDesc:
      "Customize your keychains with your favorite images.",
    description:
      "Our image printed keychains are perfect for gifts or personal use. High-quality printing that lasts and adds a personal touch to your accessories.",
    reviews: [
      {
        rating: 4.8,
        text: "The keychain looks amazing with the custom print.",
      },
      {
        rating: 4.9,
        text: "Very happy with the quality and design.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "12",
    productName: "Image Printed Tote Bag",
    imgUrl: productImg12, // Reusing existing image
    category: "accessories",
    price: 250,
    shortDesc:
      "Personalize your tote bags with images or text.",
    description:
      "Our image printed tote bags are perfect for promotional items or personal use. High-quality printing that lasts and adds a personal touch to your accessories.",
    reviews: [
      {
        rating: 4.8,
        text: "The tote bag is sturdy and the print looks great.",
      },
      {
        rating: 4.9,
        text: "Love my personalized tote bag, it's perfect for shopping.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "13",
    productName: "Image Printed Pillow",
    imgUrl: productImg03, // Reusing existing image
    category: "accessories",
    price: 300,
    shortDesc:
      "Personalize your pillows with images or text.",
    description:
      "Our image printed pillows are perfect for promotional items or personal use. High-quality printing that lasts and adds a personal touch to your home decor.",
    reviews: [
      {
        rating: 4.8,
        text: "The pillow is comfortable and the print looks great.",
      },
      {
        rating: 4.9,
        text: "Love my personalized pillow, it's perfect for my living room.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "14",
    productName: "Image Printed Pillow",
    imgUrl: productImg04, // Reusing existing image
    category: "accessories",
    price: 200,
    shortDesc:
      "Customize your Pillows with your favorite images.",
    description:
      "Our image printed Pillows are perfect for gifts or personal use. High-quality printing that lasts and adds a personal touch to your kitchen accessories.",
    reviews: [
      {
        rating: 4.8,
        text: "The Pillow is well-made and the print looks great.",
      },
      {
        rating: 4.9,
        text: "Love my personalized Pillow, it's perfect for cooking.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "15",
    productName: "Image Printed Mouse Pad",
    imgUrl: productImg05, // Reusing existing image
    category: "accessories",
    price: 150,
    shortDesc:
      "Personalize your mouse pads with images or text.",
    description:
      "Our image printed mouse pads are perfect for promotional items or personal use. High-quality printing that lasts and adds a personal touch to your desk accessories.",
    reviews: [
      {
        rating: 4.8,
        text: "The mouse pad is well-made and the print looks great.",
      },
      {
        rating: 4.9,
        text: "Love my personalized mouse pad, it's perfect for my desk.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "16",
    productName: "Image Printed Phone Case",
    imgUrl: productImg13, // Reusing existing image
    category: "accessories",
    price: 200,
    shortDesc:
      "Customize your phone cases with your favorite images.",
    description:
      "Our image printed phone cases are perfect for gifts or personal use. High-quality printing that lasts and adds a personal touch to your phone accessories.",
    reviews: [
      {
        rating: 4.8,
        text: "The phone case is sturdy and the print looks great.",
      },
      {
        rating: 4.9,
        text: "Love my personalized phone case, it's perfect for my phone.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "17",
    productName: "Image Printed Water Bottle",
    imgUrl: productImg07, // Reusing existing image
    category: "accessories",
    price: 250,
    shortDesc:
      "Personalize your water bottles with images or text.",
    description:
      "Our image printed water bottles are perfect for promotional items or personal use. High-quality printing that lasts and adds a personal touch to your drinkware.",
    reviews: [
      {
        rating: 4.8,
        text: "The water bottle is sturdy and the print looks great.",
      },
      {
        rating: 4.9,
        text: "Love my personalized water bottle, it's perfect for the gym.",
      },
    ],
    avgRating: 4.8,
  },
  {
    id: "18",
    productName: "Image Printed Coaster",
    imgUrl: productImg08, // Reusing existing image
    category: "accessories",
    price: 100,
    shortDesc:
      "Customize your coasters with your favorite images.",
    description:
      "Our image printed coasters are perfect for gifts or personal use. High-quality printing that lasts and adds a personal touch to your drinkware.",
    reviews: [
      {
        rating: 4.8,
        text: "The coasters are well-made and the print looks great.",
      },
      {
        rating: 4.9,
        text: "Love my personalized coasters, they're perfect for my coffee table.",
      },
    ],
    avgRating: 4.8,
  },
];