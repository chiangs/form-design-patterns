import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl
} from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  regForm: FormGroup;
  formGrpControls: any;
  fullNameLabel = 'Full Name';
  emailLabel = 'Email';
  passwordLabel = 'Password';
  minPassLength = 6;
  minPassLengthHint = 'more characters to meet minimum';
  submitButtonLabel = 'Submit';

  // Error Messages
  fullNameError = false;
  emailError = false;
  passwordError = false;
  fullNameErrorMsg = 'Your name is required.';
  emailErrorMsg = 'Email required, it should look like email@email.email';
  passwordErrorMsg = 'Password is required, a minimum of 6 characters';

  constructor(private fb: FormBuilder) {
    this.formGrpControls = {
      fullName: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    };
    this.regForm = this.fb.group(this.formGrpControls);
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
    this.fullNameError = this.checkErrors('fullName', this.regForm);
    this.emailError = this.checkErrors('email', this.regForm);
    this.passwordError = this.checkErrors('password', this.regForm);
  }

  // This should be placed in a form UI service
  checkErrors(formField: string, formGroup: FormGroup): boolean {
    return formGroup.controls[formField].invalid;
  }
}
