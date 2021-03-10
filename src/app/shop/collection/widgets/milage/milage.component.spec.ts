import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MilageComponent } from './milage.component';

describe('MilageComponent', () => {
  let component: MilageComponent;
  let fixture: ComponentFixture<MilageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MilageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MilageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
