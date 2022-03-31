import { Component, OnInit } from '@angular/core';
import { MatDrawerMode } from '@angular/material/sidenav';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { SettingsFacade } from '../../../store/settings/settings.facade';
import { Breakpoints } from '../../utils/enums/breakpoints.enum';
import { SettingsService } from '../../../store/settings/settings.service';
import { SidenavModes } from '../../utils/enums/sidenav-modes.enum';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss'],
})
export class MainTemplateComponent implements OnInit {

  public mode!: MatDrawerMode;
  private innerWidth!: number;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private settingsFacade: SettingsFacade,
    private settingsService: SettingsService
  ) {}

  public ngOnInit(): void {
    this.setInnerWidth();
    this.setSidenavMode();
  }

  private setSidenavMode(): void {
    if (this.innerWidth <= Breakpoints.lg) {
      this.settingsService.setSidenavMode(SidenavModes.over);
    }

    this.settingsFacade.settingsSidenavMode$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((mode) => {
        this.mode = mode;
      });
  }

  private setInnerWidth(): void {
    this.innerWidth = window.innerWidth;
  }

}
