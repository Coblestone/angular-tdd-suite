import { Component, OnInit } from '@angular/core';
import { DocumentCollection } from 'ngx-jsonapi';
import { AuthorsService, Author } from './authors.service';



@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.sass'],
  providers: [AuthorsService]
})
export class AuthorsComponent implements OnInit {

  public authors: DocumentCollection<Author>;
  public idAuthor: Number;

  public constructor(private authorsService: AuthorsService) {
    this.authorsService.all({
      })
      .subscribe(authors => {
        this.authors = authors;
      },
      error => console.error('Could not load authors :(', error));
  }

  ngOnInit() {

  }
}
