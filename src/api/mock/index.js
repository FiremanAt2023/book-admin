import Mock from 'mockjs'
import book from '@/assets/data/book'
// const baseURL = 'http://book.admin.com/api/v1';
const baseURL = 'http://localhost:3000/mock';

Mock.Random.extend({
    category() {
        return this.pick(book.categories)
    }
})

Mock.mock(`${baseURL}/book`, "get", {
    "list|15": [
        {
            "id|+1": 1,
            name: "@cword(2, 5)",
            author: "@cname",
            category:"@category",
            popularity: "@integer(0, 100000)",
            date: "@date",
        },
    ]
});


