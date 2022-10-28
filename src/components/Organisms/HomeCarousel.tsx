import { Carousel } from "antd";
import React from "react";

const HomeCarousel: React.FC = () => {
  const contentStyle: React.CSSProperties = {
    height: "400px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
  };
  return (
    <Carousel autoplay className="relative z-0">
      <div>
        <div style={contentStyle}>
          <img src="https://picsum.photos/1000" alt="..." className="w-full" />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src="https://picsum.photos/1000" alt="..." className="w-full" />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src="https://picsum.photos/1000" alt="..." className="w-full" />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img src="https://picsum.photos/1000" alt="..." className="w-full" />
        </div>
      </div>
    </Carousel>
  );
};

export default HomeCarousel;
