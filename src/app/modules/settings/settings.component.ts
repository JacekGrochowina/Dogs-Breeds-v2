import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public onSubmit(): void {
    console.log('form', this.form.value);
  }

  public initForm(): void {
    this.form = this.fb.group({
      photoAmount: ['9', Validators.required],
      sidenavMode: ['side', Validators.required]
    });
  }

}
