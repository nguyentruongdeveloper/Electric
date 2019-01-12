import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNewLetterComponent } from './section-new-letter.component';

describe('SectionNewLetterComponent', () => {
  let component: SectionNewLetterComponent;
  let fixture: ComponentFixture<SectionNewLetterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionNewLetterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNewLetterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
