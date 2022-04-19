import { Menu } from "antd";
import { Header } from "antd/lib/layout/layout";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AppState } from "../store";
import { isLoggedIn } from "../store/actions/userActions";

function AppHeader() {
  const { data, loading, error } = useSelector((state: AppState) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(isLoggedIn());
  }, []);

  return (
    <Header style={{ position: "fixed", zIndex: 1, width: "100%" }}>
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["2"]}>
        {data.username ? (
          <>
            <Menu.Item key="/records">
              <Link to="/records">Expense Records </Link>
            </Menu.Item>
            <Menu.Item key="/categories">
              <Link to="/categories">Categories </Link>
            </Menu.Item>
            <Menu.Item key="/logout">
              <Link to="/logout">Logout </Link>
            </Menu.Item>
          </>
        ) : loading === true ? null : (
          <>
            <Menu.Item key="/register">
              <Link to="/register">Sign Up </Link>
            </Menu.Item>
            <Menu.Item key="/login">
              <Link to="/login">Login </Link>
            </Menu.Item>
          </>
        )}
      </Menu>
    </Header>
  );
}

export default AppHeader;
