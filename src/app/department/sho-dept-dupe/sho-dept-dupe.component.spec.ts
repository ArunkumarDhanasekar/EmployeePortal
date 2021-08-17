import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoDeptDupeComponent } from './sho-dept-dupe.component';

describe('ShoDeptDupeComponent', () => {
  let component: ShoDeptDupeComponent;
  let fixture: ComponentFixture<ShoDeptDupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoDeptDupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoDeptDupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
