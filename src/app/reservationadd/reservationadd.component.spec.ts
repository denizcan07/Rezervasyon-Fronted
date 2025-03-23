import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservationaddComponent } from './reservationadd.component';

describe('ReservationaddComponent', () => {
  let component: ReservationaddComponent;
  let fixture: ComponentFixture<ReservationaddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReservationaddComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReservationaddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
