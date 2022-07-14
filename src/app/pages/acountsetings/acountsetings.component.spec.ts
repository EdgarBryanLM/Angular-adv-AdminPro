import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcountsetingsComponent } from './acountsetings.component';

describe('AcountsetingsComponent', () => {
  let component: AcountsetingsComponent;
  let fixture: ComponentFixture<AcountsetingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcountsetingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcountsetingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
