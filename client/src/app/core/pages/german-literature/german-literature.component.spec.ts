import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GermanLiteratureComponent } from './german-literature.component';

describe('GermanLiteratureComponent', () => {
  let component: GermanLiteratureComponent;
  let fixture: ComponentFixture<GermanLiteratureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GermanLiteratureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GermanLiteratureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
