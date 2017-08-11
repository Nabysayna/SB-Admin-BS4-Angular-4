import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuperviseurComponent } from './superviseur.component';

describe('SuperviseurComponent', () => {
  let component: SuperviseurComponent;
  let fixture: ComponentFixture<SuperviseurComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuperviseurComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuperviseurComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
