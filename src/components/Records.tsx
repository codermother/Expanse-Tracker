import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Space, Table, Tag } from "antd";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import { getRecords } from "../store/actions/recordActions";
import { Category } from "../types/category";
import { Record } from "../types/record";

function Records() {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.records
  );
  const dispatch = useDispatch();

  const columns = [
    {
      title: "Title",
      dataIndex: "title",
      key: "title",
    },
    {
      title: "Amount",
      dataIndex: "amount",
      key: "amount",
      render: (amount: Record["amount"], record: Record) => {
        return (
          <>
            {Intl.NumberFormat("en-US", {
              style: "currency",
              currency: "USD",
            }).format(amount)}
          </>
        );
      },
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category: Category, record: Record) => {
        return (
          <>
            <Tag color={category.color}>{category.name.toUpperCase()}</Tag>
          </>
        );
      },
    },
    {
      title: "Action",
      dataIndex: "id",
      key: "action",
      render: (text: string, record: Record) => {
        const { title, amount } = record;
        const category_id = record.category.id;
        return (
          <Space size="middle">
            <EditOutlined style={{ color: "#0390fc" }} onClick={() => {}} />
            <DeleteOutlined style={{ color: "#c20808" }} onClick={() => {}} />
          </Space>
        );
      },
    },
  ];

  useEffect(() => {
    dispatch(getRecords());
  }, []);
  return (
    <>
      <Table loading={loading} columns={columns} dataSource={data} />
    </>
  );
}

export default Records;
