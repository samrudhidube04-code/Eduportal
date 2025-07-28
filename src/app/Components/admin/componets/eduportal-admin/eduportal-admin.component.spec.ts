import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EduportalAdminComponent } from './eduportal-admin.component';

describe('EduportalAdminComponent', () => {
  let component: EduportalAdminComponent;
  let fixture: ComponentFixture<EduportalAdminComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EduportalAdminComponent]
    });
    fixture = TestBed.createComponent(EduportalAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
