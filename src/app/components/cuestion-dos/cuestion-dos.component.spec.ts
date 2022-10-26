import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionDosComponent } from './cuestion-dos.component';

describe('CuestionDosComponent', () => {
  let component: CuestionDosComponent;
  let fixture: ComponentFixture<CuestionDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestionDosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
