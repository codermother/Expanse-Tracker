import React, { useEffect } from "react";
import { Form, Input, Button, Checkbox, Result } from "antd";
import showError from "../utils/showError";
import api from "../utils/api";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { LoginForm } from "../types/user";
import { login } from "../store/actions/userActions";
import { AppState } from "../store";
import showSuccess from "../utils/showSuccess";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const state = location.state as any;
  const dispatch = useDispatch();

  const { data, loading, error } = useSelector((state: AppState) => state.user);

  const onFinish = (values: LoginForm) => {
    dispatch(login(values));
  };

  useEffect(() => {
    error && showError(error);
  }, [error]);

  useEffect(() => {
    data.username && showSuccess("You have succesfully logged in");
  }, [data.username]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/categories");
    }
  }, [data]);

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      {state?.newSignUp ? (
        <Result
          status="success"
          title="You successfully signed up!"
          subTitle="Please login using your credentials."
        />
      ) : (
        <h2 style={{ textAlign: "center", marginBottom: 40 }}>
          Please login using your credentials
        </h2>
      )}
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: "Please input your username!" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: "Please input your password!" }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{ offset: 8, span: 16 }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}

export default Login;
