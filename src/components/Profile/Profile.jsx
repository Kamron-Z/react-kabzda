import {
    Layout,
    Avatar,
    Descriptions,
    Button,
    Form,
    Input,
    Typography,
} from "antd";
import {UserOutlined} from "@ant-design/icons";
import Post from "./Post";
import MyPost from "./MyPost";


const items = [
    {
        label: "Name",
        children: "Komron",
    },
    {
        label: "Live",
        span: "filled",
        // span = 2
        children: "Uzb",
    },
    {
        label: "Remark",
        span: "filled",
        // span = 3
        children: "empty",
    },
    {
        label: "Address",
        span: 1,
        // span will be 3 and warning for span is not align to the end
        children: "No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China",
    },
];

function Profile() {

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
                <Avatar shape="square" size={64} icon={<UserOutlined/>}/>
                <Descriptions bordered items={items} style={{width: "50%"}}/>
            </div>

            <MyPost/>

            <Post messege={'Hola amigo'}/>
            <Post messege={'Konnichiwa'}/>
        </div>
    );
}

export default Profile;
