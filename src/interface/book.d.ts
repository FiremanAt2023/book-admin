declare namespace Book {

    interface BookObj {
        id: number;
        name: string;
        author: string;
        category: string;
        details: string;
        publish_time: string;
        stock: number;
    }

    type BookSearchType = {
        name?: string;
        author?: string;
        category?: string;
    }
    
}

export default Book;
