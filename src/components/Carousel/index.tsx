import React, { useState } from "react";
import Carousel from "react-simply-carousel";
import { BtnPropsStyle, ContainerPropsStyle } from "./Styles";
import WeatherCard from "../WeatherCard/WeatherCard";
import { ArrowBackIos, ArrowForwardIos } from "@material-ui/icons";

const index = ({ data }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [activeSlide, setActiveSlide] = useState(4);
  console.log(data);
  return (
    <Carousel
      containerProps={{
        style: ContainerPropsStyle,
      }}
      activeSlideIndex={activeSlide}
      onRequestChange={setActiveSlide}
      forwardBtnProps={{
        children: <ArrowForwardIos fontSize="small" />,
        style: BtnPropsStyle,
      }}
      backwardBtnProps={{
        children: <ArrowBackIos fontSize="small" />,
        style: BtnPropsStyle,
      }}
      speed={400}
    >
      {data?.map((item, index) => (
        <div className="has-text-centered">
          <WeatherCard data={item} key={index} />
        </div>
      ))}
    </Carousel>
  );
};

export default index;
