import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEditDeptDupeComponent } from './add-edit-dept-dupe.component';

describe('AddEditDeptDupeComponent', () => {
  let component: AddEditDeptDupeComponent;
  let fixture: ComponentFixture<AddEditDeptDupeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEditDeptDupeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEditDeptDupeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
