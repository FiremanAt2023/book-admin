import { MenuProps } from "antd";
import Icons from "../Icons";
const { IconLibraryBooks, IconCategory, IconReaderMode, IconUserManage } = Icons;

const managementList: MenuProps['items'] = [
    {
        key: 'book',
        label: '图书管理',
        icon: <IconLibraryBooks />,
        children: [
            { label: '图书列表', key: '/book' },
            { label: '图书添加', key: '/book/add' },
        ]
    },
    {
        key: 'borrow',
        label: '借阅列表',
        icon: <IconReaderMode />,
        children: [
            { label: '借阅列表', key: '/borrow' },
            { label: '图书借阅', key: '/borrow/add' },
        ]
    },
    {
        key: '/category',
        label: '分类管理',
        icon: <IconCategory />,
    },
    {
        key: 'user',
        label: '用户管理', icon: <IconUserManage />,
        children: [
            { label: '用户列表', key: '/user' },
            { label: '用户添加', key: '/user/add' },
        ]
    },
];

const userOption: MenuProps['items'] = [
    { key: '1', label: '个人中心' },
    { key: '2', label: '登出' },
]

export default {
    managementList,
    userOption,
};