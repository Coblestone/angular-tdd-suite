import { Injectable } from '@angular/core';
import { Autoregister, Service, Resource, DocumentCollection, DocumentResource } from 'ngx-jsonapi';
import { Author } from '../authors/authors.service';

export class Book extends Resource {
    public attributes = {
        title: '',
        date_published: '',
        isbn: ''
    };

    public relationships = {
        author: new DocumentResource<Author>()
     };
}

@Injectable()
export class BooksService extends Service<Book> {
    public resource = Book;
    public type = 'books';
}
