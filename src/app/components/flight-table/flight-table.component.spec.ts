import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlightTableComponent } from './flight-table.component';

describe('FlightTableComponent', () => {
  let component: FlightTableComponent;
  let fixture: ComponentFixture<FlightTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FlightTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlightTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
