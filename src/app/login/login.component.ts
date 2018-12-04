import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  formGrpOptions: any;

  constructor(private fb: FormBuilder) {
    this.formGrpOptions = {
      email: ['', Validators.required, Validators.email],
      passphrase: ['', Validators.required]
    };
  }

  ngOnInit() {
    this.fb.group(this.formGrpOptions);
  }

  onSubmit({ value, valid }: { value: any; valid: boolean }): void {
    if (!this.loginForm.touched) {
      return;
    }
    return valid ? this.loginRequest(value) : this.showErrors(valid);
  }

  loginRequest(value: any): void {}

  showErrors(valid: boolean): void {}
}
