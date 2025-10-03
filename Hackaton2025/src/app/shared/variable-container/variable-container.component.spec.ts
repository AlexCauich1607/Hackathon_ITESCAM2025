import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VariableContainerComponent } from './variable-container.component';

describe('VariableContainerComponent', () => {
  let component: VariableContainerComponent;
  let fixture: ComponentFixture<VariableContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VariableContainerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VariableContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
