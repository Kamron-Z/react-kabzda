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

function Post() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "10px",
        marginBottom: "10px",
      }}
    >
      <Avatar shape="square" size={40} icon={<UserOutlined />} />
      <Typography>post</Typography>
    </div>
  );
}

export default Post;
