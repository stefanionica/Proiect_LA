import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurneuComponent } from './turneu.component';

describe('TurneuComponent', () => {
  let component: TurneuComponent;
  let fixture: ComponentFixture<TurneuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TurneuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TurneuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
