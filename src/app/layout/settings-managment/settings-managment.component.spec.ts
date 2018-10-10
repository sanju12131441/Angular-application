import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SettingsManagmentComponent } from './settings-managment.component';

describe('SettingsManagmentComponent', () => {
  let component: SettingsManagmentComponent;
  let fixture: ComponentFixture<SettingsManagmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SettingsManagmentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SettingsManagmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
