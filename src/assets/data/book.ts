
const dataSource = [
  {
    key: '1',
    name: '胡彦斌',
    age: 32,
    address: '西湖区湖底公园1号',
  },
  {
    key: '2',
    name: '胡彦祖',
    age: 42,
    address: '西湖区湖底公园1号',
  },
];

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: '书名', dataIndex: 'name', key: 'name' },
  { title: '作者', dataIndex: 'author', key: 'author' },
  { title: '分类', dataIndex: 'category', key: 'category' },
  { title: '出版日期', dataIndex: 'date', key: 'date' },

];

export default {
  dataSource,
  columns,
};