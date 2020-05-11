import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { OurWorkComponent } from './our-work.component';
import { AppComponent } from 'src/app/app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

describe('OurWorkComponent', () => {
  let component: OurWorkComponent;
  let fixture: ComponentFixture<OurWorkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OurWorkComponent ],
      providers: [ AppComponent, NoopAnimationsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OurWorkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
