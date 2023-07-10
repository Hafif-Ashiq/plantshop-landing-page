import cartIcon from "../assets/cartIcon.svg"
import search from "../assets/search.svg"

import feature1 from "../assets/feature1.svg"
import feature2 from "../assets/feature2.svg"
import feature3 from "../assets/feature3.svg"

import arrowRight from "../assets/arrowRight.svg"
import plus from "../assets/plus.svg"
import rating from "../assets/rating.png"

import plant1 from "../assets/plant1.png"
import plant2 from "../assets/plant2.png"
import plant3 from "../assets/plant3.png"

import livingRoom from "../assets/livingRoom.png"
import bedroom from "../assets/bedroom.png"
import office from "../assets/office.png"
import tipsImage from "../assets/tipsImage.png"


import tip1 from "../assets/tip1.svg"
import tip2 from "../assets/tip2.svg"
import tip3 from "../assets/tip3.svg"
import tip4 from "../assets/tip4.svg"

import left from "../assets/left.svg"
import right from "../assets/right.svg"


import menu from "../assets/menu.svg"
import arrowDown from "../assets/arrowDown.svg"





const navLinks = [
    {
        id: "Home",
        link: "Home"
    },
    {
        id: "Shop",
        link: "Shop"
    },
    {
        id: "About Us",
        link: "About Us"
    },
    {
        id: "Contact",
        link: "Contact"
    },
]

const features = [
    {
        id: 1,
        heading: "Free Shipping",
        exp: "No charge for each delivery",
        logo: feature1
    },
    {
        id: 2,
        heading: "Quick Payment",
        exp: "100% secure Payment",
        logo: feature2
    },
    {
        id: 3,
        heading: "24/7 Support",
        exp: "Quick Support",
        logo: feature3
    },
]


const bestPlants = [
    {
        id: 1,
        name: "Cammile",
        price: "65.00",
        rating: "",
        img: plant1,
    },
    {
        id: 2,
        name: "Cammile",
        price: "65.00",
        rating: "",
        img: plant2,
    },
    {
        id: 3,
        name: "Cammile",
        price: "65.00",
        rating: "",
        img: plant3,
    },

]

const tipsPlants = [
    {
        id:1,
        heading: "Adjust Lighting",
        exp: "When caring for indoor plants, make sure the room temperature is neither too cold nor too hot",
        img: tip1
    },
    {
        id:2,
        heading: "Don't water too often",
        exp: "Watering ornamental plants indoors does not have to be done every day.",
        img: tip2
    },
    {
        id:3,
        heading: "Don't water too often",
        exp: "Watering ornamental plants indoors does not have to be done every day.",
        img: tip3
    },
    {
        id:4,
        heading: "Ferilize reguraly",
        exp: "The nutrients most indoor houseplants need are nitrogen for balance and potassium for stem strength",
        img: tip4
    },

]

const supportLinks = [
    {
        name: "About Us",
        link: "about"
    },
    {
        name: "Careers",
        link: "careers"
    },
    {
        name: "Blog",
        link: "blog"
    },
]

const usefulLinks = [
    {
        name: "Payment & Tax",
        link: "payments"
    },
    {
        name: "Terms of service",
        link: "termsofservice"
    },
    {
        name: "Privacy Policy",
        link: "privacypolicy"
    },
]

const menuLinks = [
    {
        name: "Best Products",
        link: "bestproducts"
    },
    {
        name: "category",
        link: "category"
    },
    
]
const addressLinks = [
    {
        name: "JL. Setiabudhi No. 193 Sukasari, Bandung West Java, Indonesia",
        link: "address"
    },
    {
        name: "hallo@daunku.com",
        link: "email"
    },
    
]



export {
    navLinks,
    cartIcon,
    search,
    features,
    arrowRight,
    bestPlants,
    plus,
    rating,
    livingRoom,
    bedroom,
    office,
    tipsImage,
    tipsPlants,
    supportLinks,
    menuLinks,
    usefulLinks,
    addressLinks,
    left,
    right,
    menu,
    arrowDown

}