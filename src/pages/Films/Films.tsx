import { Button, Table } from "antd";
import type { ColumnsType, TableProps } from "antd/es/table";
import React, {
  ChangeEvent,
  Fragment,
  HtmlHTMLAttributes,
  SyntheticEvent,
  useEffect,
} from "react";
import { AudioOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Input, Space } from "antd";
import { useSelector } from "react-redux";
import { RootState, useAppDispath } from "../../store/configStore";
import { getListMovie } from "../../store/quanLyPhim";
import noImages from "../../assets/images/noImages.jpg";
import { useNavigate } from "react-router-dom";

interface DataType {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;
  hot: boolean;
  dangChieu: boolean;
  sapChieu: boolean;
}

const Films = () => {
  const navigate = useNavigate();
  const { listMovie } = useSelector((state: RootState) => {
    return state.quanLyPhimReducer;
  });

  const dispatch = useAppDispath();
  const { Search } = Input;
  const onSearch = (value: string) => console.log(value);
  const columns: ColumnsType<DataType> = [
    {
      title: "Mã Phim",
      dataIndex: "maPhim",

      sorter: (a, b) => a.maPhim - b.maPhim,
      sortDirections: ["descend"],
      width: "15%",
    },
    {
      title: "Hình Ảnh",
      dataIndex: "hinhAnh",
      render: (text, film) => {
        return (
          <Fragment>
            <img
              src={film.hinhAnh}
              alt={film.tenPhim}
              className="w-[50px] h-[50px]"
              onError={(e: any) => {
                e.target.onError = null;
                e.target.src = { noImages };
              }}
            />
          </Fragment>
        );
      },
      width: "15%",
    },
    {
      title: "Tên Phim",
      dataIndex: "tenPhim",
      sorter: (a, b) => {
        const phimA = a.tenPhim.toLocaleLowerCase().trim();
        const phimB = b.tenPhim.toLocaleLowerCase().trim();
        if (phimA > phimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["ascend", "descend"],
      width: "20%",
    },
    {
      title: "Mô Tả",
      dataIndex: "moTa",
      sorter: (a, b) => {
        const phimA = a.moTa.toLocaleLowerCase().trim();
        const phimB = b.moTa.toLocaleLowerCase().trim();
        if (phimA > phimB) {
          return 1;
        }
        return -1;
      },
      sortDirections: ["ascend", "descend"],
      render: (text, film) => {
        return (
          <Fragment>
            <span>
              {film.moTa.length > 50
                ? film.moTa.slice(0, 50) + "..."
                : film.moTa}
            </span>
          </Fragment>
        );
      },
      width: "25%",
    },
    {
      title: "Hành động",
      dataIndex: "hanhDong",

      render: (text, film) => {
        return (
          <Fragment>
            <button
              type="button"
              className="focus:outline-none text-white bg-yellow-500 hover:bg-yellow-600 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-3 py-3  dark:focus:ring-yellow-900 mr-2"
              onClick={() => navigate("/")}
            >
              <EditOutlined className="text-2xl" />
            </button>
            <button
              type="button"
              className="focus:outline-none text-white bg-red-500 hover:bg-red-600 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-3 py-3  dark:focus:ring-red-900"
              onClick={() => navigate("/")}
            >
              <DeleteOutlined className="text-2xl" />
            </button>
          </Fragment>
        );
      },
      width: "25%",
    },
  ];
  const data = listMovie;
  const onChange: TableProps<DataType>["onChange"] = (
    pagination,
    filters,
    sorter,
    extra
  ) => {
    console.log("params", pagination, filters, sorter, extra);
  };

  useEffect(() => {
    dispatch(getListMovie());
  }, []);
  return (
    <div>
      <h3 className="capitalize text-4xl">quản lý phim</h3>
      <Button
        className="capitalize mb-5"
        onClick={() => navigate("/admin/films/addfilm")}
      >
        thêm phim
      </Button>
      <Search
        placeholder="Nhập từ khóa..."
        enterButton="Tìm kiếm"
        size="large"
        onSearch={onSearch}
        className="mb-5"
      />
      <Table columns={columns} dataSource={data} onChange={onChange} />
    </div>
  );
};

export default Films;
