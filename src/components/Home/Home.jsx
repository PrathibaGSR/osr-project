import React from "react";
import Banner from "./Banner/Banner";
import About from "./About/About";
import Philosophy from "./Philosophy/Philosophy";
import Industries from "./Industries/Industries";
import Serve from "./Serve/Serve";
import Testimonials from "./Testimonial/Testimonial";
import Product from "./Product/Product";
import Form from "../ContactUs/Form/Form";


export default function Home() {
  return(
    <>
      <Banner/>
      <About/>
      <Philosophy/>
      <Product/>
      <Industries/>
      <Serve/>
      <Testimonials/>
      <Form/>
    </>
  )
}
