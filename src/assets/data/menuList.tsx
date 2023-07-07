import Icons from "../Icons";
const { IconLibraryBooks, IconCategory, IconReaderMode, IconUserManage } = Icons;

const managementList = [
    { value: 'bookManagement', label: '图书管理', icon: IconLibraryBooks },
    { value: 'borrowManagement', label: '借阅管理', icon: IconReaderMode },
    { value: 'categoryManagement', label: '分类管理', icon: IconCategory },
    { value: 'userManagement', label: '用户管理', icon: IconUserManage },
];
// 图书列表
// 图书添加

// 借阅列表
// 书籍借阅
interface optionList {
    [key: string]: string[];
  }
const optionList = {
    bookManagement: ['图书列表', '图书添加'],
    borrowManagement: ['借阅列表', '书籍借阅'],
    userManagement: ['用户列表', '用户添加'],
};

// const bookManagement : ['DM', 'SL', 'GR'];

// const borrowManagement : ['WCH', 'VVIP', 'DMP', 'MAAS', 'SRUG'];

export default {
    managementList,
    optionList,
};