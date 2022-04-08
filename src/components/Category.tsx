import { DeleteOutlined, EditOutlined } from "@ant-design/icons";
import { Button, Form, Input, Modal, Select, Space, Table, Tag } from "antd";
import { useEffect, useState } from "react";
import { SketchPicker } from "react-color";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "../store";
import {
  addCategory,
  deleteCategory,
  getCategories,
  updateCategory,
} from "../store/actions/categoryActions";
import { Category, CategoryForm } from "../types/category";
import { Mode } from "../types/general";

const emptyForm: CategoryForm = {
  name: "",
  type: "expense",
  color: "black",
};

function Categories() {
  const { data, loading, error } = useSelector(
    (state: AppState) => state.categories
  );
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [mode, setMode] = useState<Mode>("new");
  const [form, setForm] = useState<CategoryForm>(emptyForm);
  const [updateId, setUpdateId] = useState<number | null>(null);
  const [deleteId, setDeleteId] = useState<number | null>(null);

  const showModal = (mode: Mode) => {
    setIsModalVisible(true);
    setMode(mode);
  };

  const handleOk = () => {
    // Call create or update action creator function according to type of mode
    if (mode === "new") dispatch(addCategory(form));
    else if (mode === "edit" && typeof updateId === "number")
      dispatch(updateCategory(form, updateId));
    else if (mode === "delete" && typeof deleteId === "number")
      dispatch(deleteCategory(deleteId));
    setIsModalVisible(false);
    setMode("new");
    setForm(emptyForm);
    setUpdateId(null);
  };

  const handleCancel = () => {
    setIsModalVisible(false);
    setMode("new");
    setForm(emptyForm);
    setUpdateId(null);
    setDeleteId(null);
  };

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "id",
      render: (text: string, category: Category) => {
        return <Tag color={category.color}>{text.toUpperCase()}</Tag>;
      },
    },
    {
      title: "Action",
      key: "action",
      render: (text: string, category: Category) => (
        <Space size="middle">
          <EditOutlined
            style={{ fontSize: "16px", color: "#08c" }}
            onClick={() => {
              showModal("edit");
              setForm(category);
              setUpdateId(category.id);
            }}
          />
          <DeleteOutlined
            style={{ color: "#c20808" }}
            onClick={() => {
              showModal("delete");
              setDeleteId(category.id);
            }}
          />
        </Space>
      ),
    },
  ];

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategories());
  }, []);

  return (
    <>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            marginBottom: "10px",
          }}
        >
          <Button type="primary" onClick={() => showModal("new")}>
            New Category
          </Button>
        </div>
        <Modal
          title={
            mode === "new"
              ? "Create New Category"
              : mode === "edit"
              ? "Update Category"
              : "Delete Category"
          }
          visible={isModalVisible}
          onOk={handleOk}
          onCancel={handleCancel}
          okButtonProps={{ disabled: !(mode === "delete") && !form.name }}
        >
          {mode === "edit" || mode === "new" ? (
            <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
              <Form.Item label="Category Name">
                <Input
                  name="name"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                />
              </Form.Item>
              <Form.Item label="Category Type">
                <Select
                  defaultValue="expense"
                  value={form.type}
                  onChange={(type) => setForm({ ...form, type })}
                >
                  <Select.Option value="income">Income</Select.Option>
                  <Select.Option value="expense">Expense</Select.Option>
                </Select>
              </Form.Item>
              <Form.Item label="Color">
                <SketchPicker
                  color={form.color}
                  onChange={(color) => setForm({ ...form, color: color.hex })}
                />
              </Form.Item>
            </Form>
          ) : mode === "delete" ? (
            <>Are you Sure?</>
          ) : null}
        </Modal>
      </div>

      <Table loading={loading} columns={columns} dataSource={data} />
    </>
  );
}

export default Categories;
