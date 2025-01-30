import {
  Layout,
  Avatar,
  Descriptions,
  Button,
  Form,
  Input,
  Typography,
} from "antd";
import { UserOutlined } from "@ant-design/icons";
import Post from "./Post";
import MyPost from "./MyPost";

function Profile(props) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          gap: "20px",
          alignItems: "center",
          background: "#fff",
          padding: "20px",
          marginBottom: "20px",
        }}
      >
        <Avatar shape="square" size={64} icon={<UserOutlined />} />
        <Descriptions
          bordered
          items={props.profileDate}
          style={{ width: "50%" }}
        />
      </div>

      <MyPost addPost={props.addPost} />
      {props.postsDate.map((p) => {
        return <Post key={p.id} postsData={p} />;
      })}
    </div>
  );
}

export default Profile;
