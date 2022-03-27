import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsFacade } from '../../store/settings/settings.facade';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-home',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public form!: FormGroup;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsFacade,
    private snackBar: MatSnackBar,
  ) {}

  public ngOnInit(): void {
    this.initForm();
  }

  public onSubmit(): void {
    const photoAmount = this.form.controls.photoAmount.value;
    const sidenavMode = this.form.controls.sidenavMode.value;

    this.settingsService.setPhotoAmount(photoAmount);
    this.settingsService.setSidenavMode(sidenavMode);

    this.showSuccessSnackbar();
  }

  public initForm(): void {
    this.form = this.fb.group({
      photoAmount: [9, [Validators.required, Validators.min(1), Validators.max(20)]],
      sidenavMode: ['side', Validators.required]
    });

    this.setFormControlsValues();
  }

  private setFormControlsValues(): void {
    this.setPhotoAmountControlValue();
    this.setSidenavModeControlValue();
  }

  private setPhotoAmountControlValue(): void {
    this.settingsService.settingsPhotoAmount$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((amount) => {
        this.form.controls.photoAmount.setValue(amount);
      });
  }

  private setSidenavModeControlValue(): void {
    this.settingsService.settingsSidenavMode$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((mode) => {
        this.form.controls.sidenavMode.setValue(mode);
      });
  }

  private showSuccessSnackbar(): void {
    this.snackBar.open('Zmieniono ustawienia. Zostały zapisane dla tej sesji.', 'Ok', {
      duration: 3500,
    });
  }

}
