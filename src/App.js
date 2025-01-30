import "./App.css";
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import { Layout } from "antd";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router";
import SideBar from "./components/SideBar/SideBar";
import { Dialogs } from "./components/Dialogs/Dialogs";
import { News } from "./components/News/News";

const layoutStyle = {
  width: "100%",
  maxWidth: 1200,
  margin: "0 auto",
};

const contentStyle = {
  // textAlign: "center",
  minHeight: 120,
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "green",
  padding: "1rem",
};

function App(props) {
  return (
    <BrowserRouter>
      <div>
        <Layout style={layoutStyle}>
          <Header />

          <Layout>
            <SideBar />
            <Layout.Content style={contentStyle}>
              <Routes>
                <Route
                  path="/profile"
                  element={
                    <Profile
                      postsDate={props.state.postsDate}
                      profileDate={props.state.profileDate}
                      addPost={props.addPost}
                    />
                  }
                />
                <Route
                  exate={false}
                  path={`/dialogs/*`}
                  element={<Dialogs />}
                />
                <Route path="/news" element={<News />} />
              </Routes>
            </Layout.Content>
          </Layout>

          <Footer />
        </Layout>
      </div>
    </BrowserRouter>
  );
}

export default App;
