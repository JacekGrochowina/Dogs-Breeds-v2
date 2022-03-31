import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SettingsFacade } from '../../store/settings/settings.facade';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Breakpoints } from '../../shared/utils/enums/breakpoints.enum';
import { SidenavModes } from '../../shared/utils/enums/sidenav-modes.enum';
import { ConfirmDialogComponent } from '../../shared/components/confirm-dialog/confirm-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.scss']
})
export class SettingsComponent implements OnInit {

  public form!: FormGroup;
  public isMobile!: boolean;
  private innerWidth!: number;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private fb: FormBuilder,
    private settingsService: SettingsFacade,
    private snackBar: MatSnackBar,
    private dialog: MatDialog,
  ) {}

  public ngOnInit(): void {
    this.initForm();
    this.setInnerWidth();
    this.setIsMobile();
  }

  public onSubmit(): void {
    const photoAmount = this.form.controls.photoAmount.value;
    const sidenavMode = this.form.controls.sidenavMode.value;

    this.settingsService.setPhotoAmount(photoAmount);
    this.settingsService.setSidenavMode(sidenavMode);

    this.showSuccessSnackbar();
  }

  public onReset(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      data: {
        title: 'Reset Settings',
        message: 'Are you sure you want to restart the settings?',
        confirmLabel: 'Reset',
        dismissLabel: 'Cancel',
        isAsync: false,
        confirmed: () => {
          this.settingsService.setPhotoAmount(9);
          this.settingsService.setSidenavMode(SidenavModes.side);
          dialogRef.close();
        },
      },
      width: '90%',
      maxWidth: '400px',
    });

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
    this.snackBar.open('Settings have been changed successfully.', 'Ok', {
      duration: 3500,
    });
  }

  private setInnerWidth(): void {
    this.innerWidth = window.innerWidth;
  }

  private setIsMobile(): void {
    if (this.innerWidth <= Breakpoints.lg) {
      this.isMobile = true;
    } else {
      this.isMobile = false;
    }
  }

}
