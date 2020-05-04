import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubFetchComponent } from './sub-fetch.component';

describe('SubFetchComponent', () => {
  let component: SubFetchComponent;
  let fixture: ComponentFixture<SubFetchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubFetchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubFetchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
