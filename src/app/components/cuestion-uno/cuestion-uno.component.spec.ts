import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuestionUnoComponent } from './cuestion-uno.component';

describe('CuestionUnoComponent', () => {
  let component: CuestionUnoComponent;
  let fixture: ComponentFixture<CuestionUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuestionUnoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuestionUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
