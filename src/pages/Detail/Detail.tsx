import React, { useState } from "react";
import { CustomCard } from "@tsamantanis/react-glassmorphism";
import "@tsamantanis/react-glassmorphism/dist/index.css";
import "../../assets/styles/circle.css";
import { Tabs } from "antd";
type TabPosition = "left";
const Detail = () => {
  const [tabPosition, setTabPosition] = useState<TabPosition>("left");
  return (
    <div style={{ backgroundImage: 'url("https://picsum.photos/1000")' }}>
      <CustomCard
        className="min-h-screen !pt-[150px]"
        effectColor="#fff" // required
        color="#fff" // default color is white
        blur={20} // default blur value is 10px
        borderRadius={0} // default border radius value is 10px
      >
        <div className="grid grid-cols-12">
          <div className="col-span-4 col-start-4">
            <div className="grid grid-cols-2">
              <img src="https://picsum.photos/200/350" alt="123" />
              <div>
                <p>Tên phim</p>
                <p>Mô tả</p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="c100 p50 big orange">
              <span>50%</span>
              <div className="slice">
                <div className="bar" />
                <div className="fill" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-20 container mx-auto">
          <Tabs
            tabPosition={tabPosition}
            items={new Array(3).fill(null).map((_, i) => {
              const id = String(i + 1);
              return {
                label: `Tab ${id}`,
                key: id,
                children: `Content of Tab ${id}`,
              };
            })}
          />
        </div>
      </CustomCard>
    </div>
  );
};

export default Detail;
