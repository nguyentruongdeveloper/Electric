import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionHotDealComponent } from './section-hot-deal.component';

describe('SectionHotDealComponent', () => {
  let component: SectionHotDealComponent;
  let fixture: ComponentFixture<SectionHotDealComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionHotDealComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionHotDealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
