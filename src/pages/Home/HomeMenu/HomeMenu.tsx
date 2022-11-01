import React from "react";
import type { RadioChangeEvent } from "antd";
import { Radio, Space, Tabs } from "antd";
import { useState } from "react";

type TabPosition = "left" | "right" | "top" | "bottom";
const HomeMenu: React.FC = () => {
  const [tabPosition, setTabPosition] = useState<TabPosition>("left");

  const changeTabPosition = (e: RadioChangeEvent) => {
    setTabPosition(e.target.value);
  };
  return (
    <>
      <Space style={{ marginBottom: 24 }}>
        Tab position:
        <Radio.Group value={tabPosition} onChange={changeTabPosition}>
          <Radio.Button value="top">top</Radio.Button>
          <Radio.Button value="bottom">bottom</Radio.Button>
          <Radio.Button value="left">left</Radio.Button>
          <Radio.Button value="right">right</Radio.Button>
        </Radio.Group>
      </Space>
      <Tabs
        tabPosition={tabPosition}
        items={new Array(3).fill(null).map((_, i) => {
          const id = String(i + 1);
          return {
            label: (
              <img
                src="https://picsum.photos/200"
                alt="..."
                className="rounded-full w-[50px]"
              ></img>
            ),
            key: id,
            children: `Content of Tab ${id}`,
          };
        })}
      />
    </>
  );
};

export default HomeMenu;
