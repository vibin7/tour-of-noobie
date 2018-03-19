import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {By} from '@angular/platform-browser';
import {Component, DebugElement} from '@angular/core';

import { LoginComponent, User } from './login.component';

xdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let submitEl: DebugElement;
  let loginEl: DebugElement;
  let passwordEl: DebugElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    submitEl = fixture.debugElement.query(By.css('button'));
    loginEl = fixture.debugElement.query(By.css('input[type=email]'));
    passwordEl = fixture.debugElement.query(By.css('input[type=password]'));
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Setting enabled to false disables the submit button', () => {
    component.enabled = false;
  });
  it('Setting enabled to false disables the submit button', () => {
    component.enabled = false;
    fixture.detectChanges();
    expect(submitEl.nativeElement.disabled).toBeTruthy();
});
it('Entering email and password emits loggedIn event', () => {
  let user: User;
  loginEl.nativeElement.value = "test@example.com";
  passwordEl.nativeElement.value = "123456";

  // Subscribe to the Observable and store the user in a local variable.
  component.loggedIn.subscribe((value) => user = value);

  // This sync emits the event and the subscribe callback gets executed above
  submitEl.triggerEventHandler('click', null);

  // Now we can check to make sure the emitted value is correct
  expect(user.email).toBe("test@example.com");
  expect(user.password).toBe("123456");
});
});
