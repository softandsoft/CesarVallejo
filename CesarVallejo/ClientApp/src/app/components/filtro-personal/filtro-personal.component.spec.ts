import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPersonalComponent } from './filtro-personal.component';

describe('FiltroPersonalComponent', () => {
  let component: FiltroPersonalComponent;
  let fixture: ComponentFixture<FiltroPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
