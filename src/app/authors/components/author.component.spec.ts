import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from "@angular/platform-browser";
import { NgxJsonapiModule } from 'ngx-jsonapi';

import { AuthorComponent } from './author.component';
import { AuthorsComponent } from './../authors.component';
import { AuthorsService } from './../authors.service';
import { ActivatedRoute } from '@angular/router';

describe('AuthorComponent', () => {
  let component: AuthorComponent;
  let fixture: ComponentFixture<AuthorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsComponent, AuthorComponent],
      providers: [AuthorsService, ActivatedRoute],

      imports:  [NgxJsonapiModule.forRoot({
        url: '//jsonapiplayground.reyesoft.com/v2/'
      })/*, RouterTestingModule.withRoutes([
        { path: 'authors/:id', component: AuthorComponent}
      ])*/]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create single author', () => {
    expect(component).toBeTruthy();
  });


  it('show all the authors', async () =>  {
    await waitUntilTrue(function(){
      return component.isDataLoaded == true
    });

    fixture.detectChanges();

    const authorElements = fixture.debugElement.queryAll(By.css('.author'));
    expect(authorElements.length).toBeGreaterThan(3);

  });

  async function timeout(ms) {
    return  new Promise(resolve => setTimeout(resolve, ms));
  }

  async function waitUntilTrue (testFunction){
    while (testFunction() != true){
      await timeout(5);
    }
  }
});
