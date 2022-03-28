import { Component, OnInit } from '@angular/core';
import { Themes } from './shared/utils/enums/themes.enum';
import { SettingsFacade } from './store/settings/settings.facade';
import { map, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { SidenavModes } from './shared/utils/enums/sidenav-modes.enum';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {

  public theme!: Observable<Themes>;
  private unsubscribe$ = new Subject<void>();

  constructor(private settingsFacade: SettingsFacade) {}

  public ngOnInit(): void {
    this.getThemeFromLocalStorage();
    this.getPhotoAmountFromLocalStorage();
    this.getSidenavModeFromLocalStorage();

    this.theme = this.getTheme();
  }

  private getTheme(): Observable<Themes> {
    return this.settingsFacade.settingsTheme$.pipe(
      takeUntil(this.unsubscribe$),
      map((theme: Themes) => theme)
    );
  }

  private getThemeFromLocalStorage(): void {
    const theme = localStorage.getItem('theme');

    switch (theme) {
      case Themes.light:
        this.settingsFacade.setTheme(theme);
        break;
      case Themes.dark:
        this.settingsFacade.setTheme(theme);
        break;
      default:
        this.settingsFacade.setTheme(Themes.light);
        break;
    }
  }

  private getPhotoAmountFromLocalStorage(): void {
    const amount = Number(localStorage.getItem('photoAmount'))
      ? Number(localStorage.getItem('photoAmount'))
      : 9;

    this.settingsFacade.setPhotoAmount(amount);
  }

  private getSidenavModeFromLocalStorage(): void {
    const mode = localStorage.getItem('sidenavMode');

    switch (mode) {
      case SidenavModes.side:
        this.settingsFacade.setSidenavMode(SidenavModes.side);
        break;
      case SidenavModes.over:
        this.settingsFacade.setSidenavMode(SidenavModes.over);
        break;
      case SidenavModes.push:
        this.settingsFacade.setSidenavMode(SidenavModes.push);
        break;
      default:
        this.settingsFacade.setSidenavMode(SidenavModes.side);
        break;
    }
  }

}
