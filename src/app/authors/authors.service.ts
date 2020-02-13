import { Injectable } from '@angular/core';
import { Book, BooksService } from '../books/books.service'
import { Autoregister, Service, Resource, DocumentCollection, DocumentResource } from 'ngx-jsonapi';

export class Author extends Resource {
  public attributes = {
    id: '',
    name: 'default name',
    date_of_birth: ''
  };

  public relationships = {
    books: new DocumentCollection<Book>()
  };
}

@Injectable()
export class AuthorsService extends Service<Author> {
  public resource = Author;
  public type = 'authors';

  constructor(){
    super();
    new BooksService();
    this.register()
  }

}
