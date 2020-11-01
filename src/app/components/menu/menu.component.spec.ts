import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Menu } from './menu.component';
import { AppComponent } from 'src/app/app.component';

describe('Menu', () => {
  let component: Menu;
  let fixture: ComponentFixture<Menu>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Menu ],
      providers: [ AppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Menu);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
