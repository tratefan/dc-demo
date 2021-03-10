import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YachtsComponent } from './yachts.component';

describe('YachtsComponent', () => {
  let component: YachtsComponent;
  let fixture: ComponentFixture<YachtsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YachtsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YachtsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
