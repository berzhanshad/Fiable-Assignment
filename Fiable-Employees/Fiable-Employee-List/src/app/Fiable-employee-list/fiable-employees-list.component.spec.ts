import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiableEmployeesListComponent } from './fiable-employees-list.component';

describe('FiableEmployeesListComponent', () => {
  let component: FiableEmployeesListComponent;
  let fixture: ComponentFixture<FiableEmployeesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiableEmployeesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiableEmployeesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
