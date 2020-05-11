import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FaqComponent } from './faq.component';
import { AppComponent } from 'src/app/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('FaqComponent', () => {
  let component: FaqComponent;
  let fixture: ComponentFixture<FaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FaqComponent ],
      providers: [ AppComponent, NoopAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
