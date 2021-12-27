import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonteSeuPcComponent } from './monte-seu-pc.component';

describe('MonteSeuPcComponent', () => {
  let component: MonteSeuPcComponent;
  let fixture: ComponentFixture<MonteSeuPcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MonteSeuPcComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MonteSeuPcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
