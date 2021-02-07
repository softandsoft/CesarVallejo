import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NuevoPersonalComponent } from './nuevo-personal.component';

describe('NuevoPersonalComponent', () => {
  let component: NuevoPersonalComponent;
  let fixture: ComponentFixture<NuevoPersonalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NuevoPersonalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NuevoPersonalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
