import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectFieldsDialogComponent } from './select-fields-dialog.component';

describe('SelectFieldsDialogComponent', () => {
  let component: SelectFieldsDialogComponent;
  let fixture: ComponentFixture<SelectFieldsDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectFieldsDialogComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectFieldsDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
