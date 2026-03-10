import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomeInput } from './custome-input';

describe('CustomeInput', () => {
  let component: CustomeInput;
  let fixture: ComponentFixture<CustomeInput>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CustomeInput]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CustomeInput);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
