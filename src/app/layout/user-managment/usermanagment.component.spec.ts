import { async, TestBed } from '@angular/core/testing'
import { RouterTestingModule } from '@angular/router/testing'

import {UsermanagmentComponent  } from './usermanagment.component'
import { UserManagmentModule } from './usermanagment.module'

describe('TablesComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ UserManagmentModule, RouterTestingModule ],
    })
    .compileComponents()
  }))

  it('should create', () => {
    const fixture = TestBed.createComponent(UsermanagmentComponent)
    const component = fixture.componentInstance
    expect(component).toBeTruthy()
  })
})
