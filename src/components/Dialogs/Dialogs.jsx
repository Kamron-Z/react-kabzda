import {Flex, Menu} from "antd";
import Post from "../Profile/Post";

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

    function onClick() {
        console.log('click dialogs')
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
                <Post messege={'Privet'}/>
                <Post messege={'Privet'}/>
            </div>
        </Flex>
    )
}