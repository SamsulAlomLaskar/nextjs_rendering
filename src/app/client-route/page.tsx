"use client";

// import { serverSideFunction } from "@/utils/server-utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ClientRoutePage = () => {
  console.log("Client Route Page Rendered");
  const settings = {
    dots: true,
  };

  //   const result = serverSideFunction();
  return (
    <>
      <h1>Client Route Page</h1>
      {/* <p>{result}</p> */}
      <div className="image-slider-container">
        <Slider {...settings}>
          <div>
            <img alt="1st" src="https://picsum.photos/g/400/200" />
          </div>
          <div>
            <img alt="2nd" src="https://picsum.photos/g/400/200" />
          </div>
          <div>
            <img alt="3rd" src="https://picsum.photos/g/400/200" />
          </div>
          <div>
            <img alt="4th" src="https://picsum.photos/g/400/200" />
          </div>
        </Slider>
      </div>
    </>
  );
};

export default ClientRoutePage;
