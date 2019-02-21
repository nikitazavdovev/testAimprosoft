import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  authForm: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
      this.authForm = this.formBuilder.group({
          name: ['', Validators.required],
          password: ['', [Validators.required, Validators.minLength(6)]],
      });
  }
  get f() { return this.authForm.controls; }

  onSubmit() {
      this.submitted = true;
      if (this.authForm.invalid) {
          return;
      }
      alert('SUCCESS')
  }
}
