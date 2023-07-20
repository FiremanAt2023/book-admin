
const categories = ['科学','历史','艺术',]

const columns = [
  { title: 'ID', dataIndex: 'id', key: 'id' },
  { title: '书名', dataIndex: 'name', key: 'name' },
  { title: '作者', dataIndex: 'author', key: 'author' },
  { title: '分类', dataIndex: 'category', key: 'category' },
  { title: '库存', dataIndex: 'stock', key: 'stock' },
  { title: '出版时间', dataIndex: 'publish_time', key: 'publish_time' },

];

export default {
  categories,
  columns,
};