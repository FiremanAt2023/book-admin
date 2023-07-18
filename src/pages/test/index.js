
import React, { useEffect, useState } from "react";
import api from '@/api';
import "@/api/mock";
import { Table, Typography } from 'antd';

const columns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    {
        title: '书名',
        dataIndex: 'name',
        key: 'name',
    },
    {
        title: '作者',
        dataIndex: 'author',
        key: 'author',
    },
    {
        title: '出版日期',
        dataIndex: 'date',
        key: 'date',
    },
];

export default function Songs() {
    const [data, setData] = useState([]);

    useEffect(() => {

        // api.get("/test").then((res) => {
        //     setData(res.data.list);
        // });

    }, []);

    return (
        <Table dataSource={data} columns={columns} rowKey={'id'} />
    );
}
