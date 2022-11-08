import React, { useState } from "react";
import {
  Button,
  Cascader,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Radio,
  Select,
  Switch,
  TreeSelect,
} from "antd";

type SizeType = Parameters<typeof Form>[0]["size"];
const AddFilm = () => {
  const [componentSize, setComponentSize] = useState("default");

  return (
    <div>
      {" "}
      <h3 className="capitalize text-4xl">Thêm mới phim</h3>
      <Form
        labelCol={{ span: 4 }}
        wrapperCol={{ span: 14 }}
        layout="horizontal"
        initialValues={{ size: componentSize }}
        size={componentSize as SizeType}
      >
        <Form.Item label="Tên Phim">
          <Input name="tenPhim" placeholder="Nhập vào tên phim" />
        </Form.Item>
        <Form.Item label="Trailer">
          <Input name="trailer" placeholder="Nhập vào trailer" />
        </Form.Item>
        <Form.Item label="Mô tả">
          <Input name="moTa" placeholder="Nhập vào mô tả" />
        </Form.Item>
        <Form.Item label="Ngày khỏi chiếu">
          <DatePicker />
        </Form.Item>
        <Form.Item label="Đang chiếu" valuePropName="checked">
          <Switch />
        </Form.Item>

        <Form.Item label="Sắp chiếu" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Hot" valuePropName="checked">
          <Switch />
        </Form.Item>
        <Form.Item label="Đánh giá">
          <InputNumber />
        </Form.Item>
        <Form.Item label="Hình ảnh">
          <input type="file" />
        </Form.Item>

        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default AddFilm;
