import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngresarnuevoComponent } from './ingresarnuevo.component';

describe('IngresarnuevoComponent', () => {
  let component: IngresarnuevoComponent;
  let fixture: ComponentFixture<IngresarnuevoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IngresarnuevoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IngresarnuevoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
