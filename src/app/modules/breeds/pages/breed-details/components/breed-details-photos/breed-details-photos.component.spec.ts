import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BreedDetailsPhotosComponent } from './breed-details-photos.component';

describe('BreedDetailsPhotosComponent', () => {
  let component: BreedDetailsPhotosComponent;
  let fixture: ComponentFixture<BreedDetailsPhotosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BreedDetailsPhotosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BreedDetailsPhotosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
