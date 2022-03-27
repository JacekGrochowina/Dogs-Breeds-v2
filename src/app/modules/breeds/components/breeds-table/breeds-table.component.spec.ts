import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedsTableComponent } from './breeds-table.component';

describe('DriversTableComponent', () => {
  let component: BreedsTableComponent;
  let fixture: ComponentFixture<BreedsTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedsTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedsTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
