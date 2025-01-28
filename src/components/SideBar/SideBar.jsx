import {Layout, Menu} from "antd";
import {useNavigate} from "react-router";

const sideStyle = {
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
                key: "profile",
                label: "Profile",
            },
            {
                key: "dialogs",
                label: "Dialogs",
            },
            {
                key: "news",
                label: "News",
            },
            {
                key: "music",
                label: " Music",
            },
            {
                key: "settings",
                label: " Settings",
            },
        ],
    },
];

function SideBar() {
    const navigator = useNavigate();
    const onClick = (e) => {
        navigator(e.key)
    };

    return (
        <Layout.Sider width="25%" style={sideStyle}>
            <Menu
                onClick={(event) => onClick(event)}
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

export default SideBar;
