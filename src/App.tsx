import { Route, Routes, useNavigate } from "react-router-dom";
import SignUp from "./components/SignUp";
import { Layout } from "antd";
import Login from "./components/Login";
import Categories from "./components/Category";
import Records from "./components/Records";
import AppHeader from "./components/AppHeader";

function App() {
  const { Content, Footer } = Layout;
  const navigate = useNavigate();
  /* 
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/");
    } else {
      navigate("/login");
    }
  }, []); */

  return (
    <Layout>
      <AppHeader />
      <Content
        className="site-layout"
        style={{ padding: "0 250px", marginTop: 164 }}
      >
        <Routes>
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/records" element={<Records />} />
        </Routes>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Expense Tracker @Codermother 2022
      </Footer>
    </Layout>
  );
}

export default App;
