import { Component, OnInit } from '@angular/core';
import { SettingsFacade } from '../../../store/settings/settings.facade';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { MatDrawerMode } from '@angular/material/sidenav';

@Component({
  selector: 'app-main-template',
  templateUrl: './main-template.component.html',
  styleUrls: ['./main-template.component.scss']
})
export class MainTemplateComponent implements OnInit {

  public mode!: MatDrawerMode;
  private unsubscribe$ = new Subject<void>();

  constructor(private settingsFacade: SettingsFacade) {}

  public ngOnInit(): void {
    this.setSidenavMode();
  }

  private setSidenavMode(): void {
    this.settingsFacade.settingsSidenavMode$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((mode) => {
        this.mode = mode;
      });
  }

}
