import {Flex, Menu} from "antd";
import Post from "../Profile/Post";
import { useNavigate } from "react-router";

const items = [
    {
        key: "dialogs",
        type: "group",
        children: [
            {
                key: "komron",
                label: "Komron",
            },
            {
                key: "firdavs",
                label: "Firdavs",
            },
            {
                key: "jonibek",
                label: "Jonibek",
            },
            {
                key: "jasur",
                label: "Jasur",
            },
            {
                key: "komil",
                label: "Komil",
            },
        ],
    },
];


export function Dialogs() {
    const navigator = useNavigate()
    function onClick(e) {
        navigator('/dialogs/' + e.key, { replace: true });
    }

    return (
        <Flex gap='middle' align='start'>
            <div className={'dialogs-item'} style={{padding: '0 15px', width: '50%'}}>
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
            </div>
            <div className={'messages-item'} style={{padding: '10px', width: '50%', background: 'greenyellow'}}>
                <Post postsData={'Privet'}/>
                <Post postsData={'Privet'}/>
            </div>
        </Flex>
    )
}