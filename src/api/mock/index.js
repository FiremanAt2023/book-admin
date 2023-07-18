import Mock from 'mockjs'
const baseURL = 'http://book.admin.com/api/v1';


Mock.Random.extend({
    category() {
        return this.pick([
            '科学',
            '历史',
            '艺术',
        ])
    }
})

Mock.mock(`${baseURL}/book`, "get", {
    "list|5": [
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


