import api from './index';
import "./mock/index";
import qs, { stringify } from 'qs';
import Book from '@/interface/book';

export function getBookList() {
    return api.get(`/book`).then((res) => {
        console.log(res.data);
        return res.data;
    }).catch((error) => {
        console.error(error);
        throw error;
    });
}

export function searchBooks(params: Book.BookSearchType,data:any[]) {
    const name = params.name;
    const author = params.author;
    const category = params.category;

    const filteredData = data.filter((item: any) => {
        let match = true
        if (name && !item.name.includes(name)) {
            match = false
        }
        if (author && item.author !== author) {
            match = false
        }
        if (category && item.category !== category) {
            match = false
        }
        return match
    })
    return  filteredData
}