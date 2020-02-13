import { async, ComponentFixture, TestBed, fakeAsync, tick } from '@angular/core/testing';
import { RouterLinkWithHref } from "@angular/router";
import { AuthorComponent } from './author.component';
import { DocumentCollection, NgxJsonapiModule } from 'ngx-jsonapi';
import { Author, AuthorsService } from '../authors.service';
import { By } from '@angular/platform-browser';
import Pretender from 'pretender';
import { Router } from '@angular/router';
import { Location } from "@angular/common"
import { RouterTestingModule } from '@angular/router/testing';
import { routes } from '../../app.module'
import { AuthorsComponent } from '../authors.component';
import { BooksComponent } from '../../books/books.component';

// TODO Implémentation Pretender ici quand tout ok

describe('AuthorComponent', () => {
  let router: Router;
  let location: Location;
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes),
        NgxJsonapiModule.forRoot({
          url: '//jsonapiplayground.reyesoft.com/v2/'
        })
      ],
      providers:[AuthorsService],
      declarations: [ AuthorComponent,AuthorsComponent,BooksComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    router = TestBed.get(Router);
    location = TestBed.get(Location);
    router.initialNavigation();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('show one author detail /authors/1', fakeAsync (() =>  {
    router.navigate(['/authors/1'])
    tick();
    expect(location.path()).toBe('/authors/1');
  }));

});
