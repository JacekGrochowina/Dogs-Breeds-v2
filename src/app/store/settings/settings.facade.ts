import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Themes } from '../../shared/utils/enums/themes.enum';
import { SetPhotoAmount, SetSidenavMode, SetTheme } from './settings.actions';
import { selectPhotoAmount, selectSidenavMode, selectTheme } from './settings.selectors';
import { SidenavModes } from '../../shared/utils/enums/sidenav-modes.enum';

@Injectable()
export class SettingsFacade {

  settingsTheme$ = this.store.select(selectTheme);
  settingsPhotoAmount$ = this.store.select(selectPhotoAmount);
  settingsSidenavMode$ = this.store.select(selectSidenavMode);

  constructor(private store: Store<AppState>) {}

  public setTheme(theme: Themes): void {
    this.store.dispatch(new SetTheme(theme));
  }

  public setPhotoAmount(photoAmount: number): void {
    this.store.dispatch(new SetPhotoAmount(photoAmount));
  }

  public setSidenavMode(sidenavMode: SidenavModes): void {
    this.store.dispatch(new SetSidenavMode(sidenavMode));
  }

}
