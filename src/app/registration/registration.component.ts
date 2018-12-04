import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  formGrpOptions: any;
  fullNameLabel = 'Full Name';
  emailLabel = 'Email';
  passwordLabel = 'Password';
  minPassLength = 6;
  minPassLengthHint = 'more characters to meet minimum';
  submitButtonLabel = 'Submit';

  constructor(private fb: FormBuilder) {
    this.formGrpOptions = {
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    };
    this.regForm = this.fb.group(this.formGrpOptions);
  }

  ngOnInit() {}

  onSubmit({ value, valid }: { value: any; valid: boolean }): void {
    console.log('form on submit: ', value, valid);
    if (!this.regForm.touched) {
      return;
    }
    return valid ? this.submitRegistration(value) : this.showErrors();
  }

  submitRegistration(value): void {
    console.log('submitted: ', value);
  }

  showErrors(): void {
    console.log('do show error operations');
  }
}
