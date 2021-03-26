import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltradoPersonalComponent } from './filtrado-personal.component';

describe('FiltradoPersonalComponent', () => {
  let component: FiltradoPersonalComponent;
  let fixture: ComponentFixture<FiltradoPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltradoPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltradoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
