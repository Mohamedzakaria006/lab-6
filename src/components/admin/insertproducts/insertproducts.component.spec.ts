import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsertproductsComponent } from './insertproducts.component';

describe('InsertproductsComponent', () => {
  let component: InsertproductsComponent;
  let fixture: ComponentFixture<InsertproductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsertproductsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InsertproductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
