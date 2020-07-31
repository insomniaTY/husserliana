import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HusserlComponent } from './husserl.component';

describe('HusserlComponent', () => {
  let component: HusserlComponent;
  let fixture: ComponentFixture<HusserlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HusserlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HusserlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
