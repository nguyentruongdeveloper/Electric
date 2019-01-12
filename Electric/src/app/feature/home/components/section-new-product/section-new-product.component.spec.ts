import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNewProductComponent } from './section-new-product.component';

describe('SectionNewProductComponent', () => {
  let component: SectionNewProductComponent;
  let fixture: ComponentFixture<SectionNewProductComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionNewProductComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNewProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
