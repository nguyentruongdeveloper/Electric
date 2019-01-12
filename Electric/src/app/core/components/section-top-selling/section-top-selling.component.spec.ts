import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionTopSellingComponent } from './section-top-selling.component';

describe('SectionTopSellingComponent', () => {
  let component: SectionTopSellingComponent;
  let fixture: ComponentFixture<SectionTopSellingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionTopSellingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionTopSellingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
