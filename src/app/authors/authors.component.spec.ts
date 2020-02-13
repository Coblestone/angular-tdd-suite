import { async, ComponentFixture, TestBed,fakeAsync } from '@angular/core/testing';
import { NgxJsonapiModule } from 'ngx-jsonapi';
import { By } from '@angular/platform-browser';
import { of } from 'rxjs';
import Pretender from 'pretender';

import { AuthorsComponent } from './authors.component';
import { AuthorsService, Author } from './authors.service';
import { DocumentCollection } from 'ngx-jsonapi';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// TODO Implémentation Pretender ici quand tout ok

describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AuthorsComponent ],
      providers: [AuthorsService],
      imports: [
        NgxJsonapiModule.forRoot({
          url: '//jsonapiplayground.reyesoft.com/v2/'
      })
      ]
    })
    .compileComponents();
  })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('show all the authors', async (done) =>  {
    let dca: DocumentCollection<Author> = null;
    const fixture = TestBed.createComponent(AuthorsComponent);
    const component = fixture.debugElement.componentInstance;
    let authorElements = fixture.debugElement.queryAll(By.css('.authors'));
    expect(authorElements.length).toBe(0);

    //spyOn(fixture.debugElement.injector.get(AuthorsService), 'all').and.returnValue(of(dca))
    fixture.detectChanges();

    await new Promise((resolve, reject) => {
        const timer = setInterval(
          () => {
            if (component.authors.data.length > 0){
              resolve()
              clearInterval(timer)
            }
          }
        , 5);
    })

    fixture.detectChanges();
    authorElements = fixture.debugElement.queryAll(By.css('.authors'));
    expect(authorElements.length).toBe(10);
    done()
  });

});
