import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HomePage } from './home.component';
import { AppComponent } from 'src/app/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('HomePage', () => {
  let component: HomePage;
  let fixture: ComponentFixture<HomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomePage ],
      providers: [ AppComponent, NoopAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
