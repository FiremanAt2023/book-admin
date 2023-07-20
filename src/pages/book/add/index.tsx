import React, { useState } from 'react';
import book from '@/assets/data/book';
import styles from '../book.module.css';
import {
  Button,
  DatePicker,
  Form,
  Input,
  InputNumber,
  Select,
} from 'antd';


const { TextArea } = Input;
const config = {
  rules: [{ type: 'object' as const, required: true, message: 'Please select time!' }],
};

export default function Home() {
  return (
    <>
      <Form
        labelCol={{ span: 2 }}
        wrapperCol={{ span: 14 }}
        labelAlign="left" 
        // wrapperAlign="left"
        layout="horizontal"
        className={styles.bookAddForm}
      >
        <Form.Item label="图书名称">
          <Input />
        </Form.Item>
        <Form.Item label="作者">
          <Input />
        </Form.Item>
        <Form.Item label="类别">
          <Select>
            {book.categories.map((item: string) => {
              return <Select.Option value={item}>{item}</Select.Option>
            })}
          </Select>
        </Form.Item>

        <Form.Item name="month-picker" label="出版时间" {...config}>
          <DatePicker picker="month" />
        </Form.Item>

        <Form.Item label="库存">
          <InputNumber min={0} />
        </Form.Item>
        <Form.Item label="描述">
          <TextArea rows={4} />
        </Form.Item>


        <Form.Item label="Button">
          <Button>Button</Button>
        </Form.Item>
  
      </Form>
    </>
  );
}
