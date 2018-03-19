import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {
  ReactiveFormsModule,
  FormsModule,
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';
import { SharedService } from '../shared.service';

export class User {
  constructor(public email: string,
              public password: string) {
  }
}



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'Welcome to home';
  constructor( private sharedService: SharedService, private fb: FormBuilder) { }
  langs: string[] = [
    'English',
    'French',
    'German',
  ];
  @Output() loggedIn = new EventEmitter<User>();
  form: FormGroup;

  ngOnInit() {
    this.form = this.fb.group({
      email: ['', [
        Validators.required,
        Validators.pattern('[^ @]*@[^ @]*')]],
      password: ['', [
        Validators.required,
        Validators.minLength(8)]],
    });
  }
  login() {
    console.log(`Login ${this.form.value}`);
    if (this.form.valid) {
      this.loggedIn.emit(
          new User(
              this.form.value.email,
              this.form.value.password
          )
      );
    }
  }

}
