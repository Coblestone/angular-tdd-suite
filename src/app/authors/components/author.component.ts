import { Component, OnInit } from '@angular/core';
import { DocumentCollection } from 'ngx-jsonapi';
import { AuthorsService, Author } from './../authors.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-author',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.sass']
})
export class AuthorComponent implements OnInit {

  public author: Author;
  public isDataLoaded: boolean;
  //private route: ActivatedRoute;

  constructor(private authorsService: AuthorsService, private route: ActivatedRoute) {
    this.route.params.subscribe(({ id }) => {
        authorsService.get(id, {include : ['books']}).subscribe(
          author => {
            this.author = author;
          },
          error => console.error('Impossible de récupérer l\'auteur.', error)
        );
      });
  }

  ngOnInit() {

    this.isDataLoaded = false;
    const data = this.authorsService.all({
      // include: ['books', 'photos'],
    });
    data.subscribe(authors => {
      //this.author = authors;
    }, null, () => {
      this.isDataLoaded = true;
    });
  }

}
