import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ErrorPage } from './error.component';
import { AppComponent } from 'src/app/app.component';

describe('ErrorPage', () => {
  let component: ErrorPage;
  let fixture: ComponentFixture<ErrorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ErrorPage ],
      providers: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
