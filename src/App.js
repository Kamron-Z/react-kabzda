import "./App.css";
import Header from "./components/Header/Header";
import SiderBar from "./components/SiderBar/SiderBar";
import Profile from "./components/Profile/Profile";
import { Layout } from "antd";
import Footer from "./components/Footer/Footer";

const layoutStyle = {
  width: "100%",
  maxWidth: 1200,
  margin: '0 auto',
};

function App() {
  return (
    <div>
      <Layout style={layoutStyle}>
        <Header />

        <Layout>
          <SiderBar />
          <Profile />
        </Layout>

        <Footer />
      </Layout>
    </div>
  );
}

export default App;
