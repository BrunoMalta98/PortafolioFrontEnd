import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NieblaComponent } from './niebla.component';

describe('NieblaComponent', () => {
  let component: NieblaComponent;
  let fixture: ComponentFixture<NieblaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NieblaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NieblaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
