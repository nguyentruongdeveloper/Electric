import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionAdvertisementComponent } from './section-advertisement.component';

describe('SectionAdvertisementComponent', () => {
  let component: SectionAdvertisementComponent;
  let fixture: ComponentFixture<SectionAdvertisementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionAdvertisementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionAdvertisementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
