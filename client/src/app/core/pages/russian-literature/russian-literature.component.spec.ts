import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RussianLiteratureComponent } from './russian-literature.component';

describe('RussianLiteratureComponent', () => {
  let component: RussianLiteratureComponent;
  let fixture: ComponentFixture<RussianLiteratureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RussianLiteratureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RussianLiteratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
