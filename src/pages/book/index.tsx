import React, { useEffect, useState } from "react";
import { Button, Form, Input, Select, Space, Table } from "antd";
import book from "@/assets/data/book";
import { useRouter } from "next/router";
import { getBookList, searchBooks } from '@/api/book'
import api from '@/api';
import "@/api/mock";
import qs, { stringify } from 'qs'

export default function Home() {
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const res: any = await getBookList(); // 等待异步请求返回结果
        setData(res); // 更新组件状态
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);
  const router = useRouter()
  const [form] = Form.useForm()
  const columns = [...book.columns, {
    title: '操作', key: 'action', render: (_: any, row: any) => {
      return <>
        <Space>
          <Button type="link" onClick={handleBookEdit}>Edit</Button>
          <Button type="link" danger>Delete</Button>
        </Space>
      </>

    }
  }]
  const handleSearch = (values: any) => {
    const filteredData: any = searchBooks(values, data);
    setFilteredData(filteredData);

  }
  const Reset = () => {
    setFilteredData([]);
    form.resetFields();
  }
  const handleBookEdit = (id: any) => {
    router.push(`/book/edit/${id}`)
  }

  return (
    <>
      <Form
        name="search"
        layout="inline"
        form={form}
        onFinish={handleSearch}
        initialValues={{
          name: '', author: '', category: '',
        }}
      >
        <Form.Item name="name" label="名称" >
          <Input placeholder="请输入" allowClear />
        </Form.Item>
        <Form.Item name="author" label="作者" >
          <Input placeholder="请输入" allowClear />
        </Form.Item>
        <Form.Item name="category" label="分类" >
          <Select options={[
            { value: 'jack', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
          ]}
            placeholder='请输入'
            style={{ width: '150px' }}
            allowClear />
        </Form.Item>
        <Form.Item>
          <Space>
            <Button type="primary" htmlType="submit">
              Search
            </Button>
            <Button htmlType="button" onClick={Reset}>
              Clear
            </Button>
          </Space>
        </Form.Item>
      </Form>

      <Table
        dataSource={filteredData.length == 0 ? data : filteredData}
        columns={columns}
        rowKey={"id"}
        scroll={{ y: 530 }}
      />

    </>
  );
}
