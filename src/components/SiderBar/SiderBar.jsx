import { Layout, Menu } from "antd";
import {
  AppstoreOutlined,
  MailOutlined,
  SettingOutlined,
} from "@ant-design/icons";

const siderStyle = {
  textAlign: "center",
  lineHeight: "120px",
  color: "#fff",
  backgroundColor: "#1677ff",
};

const items = [
  {
    key: "menu1",
    type: "group",
    children: [
      {
        key: "1",
        label: "Profile",
      },
      {
        key: "2",
        label: "Messages",
      },
      {
        key: "3",
        label: "News",
      },
      {
        key: "4",
        label: " Music",
      },
      {
        key: "5",
        label: " Settings",
      },
    ],
  },
];



function SiderBar() {
  const onClick = (e) => {
    console.log("click ", e);
  };


  return (
    <Layout.Sider width="25%" style={siderStyle}>
      <Menu
        onClick={onClick}
        style={{
          width: '100%',
        }}
        defaultSelectedKeys={["1"]}
        defaultOpenKeys={["sub1"]}
        mode="inline"
        items={items}
      />
    </Layout.Sider>
  );
}

export default SiderBar;
