import { Fragment } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import {  discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import Feature from "./Feature";

const Home = () => {
  
  return (
    <Fragment>
      <SliderHome />
      <Feature />

      <Section
        title="Big Discount"
        bgColor="#f6f9fc"
        productItems={discoutProducts}
      />
            <Wrapper />

     
    </Fragment>
  );
};

export default Home;
