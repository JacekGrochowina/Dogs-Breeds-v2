import { Action } from '@ngrx/store';
import { Themes } from '../../shared/utils/enums/themes.enum';
import { SidenavModes } from '../../shared/utils/enums/sidenav-modes.enum';

export enum SettingsActionTypes {
  setTheme = '[Settings/Theme] Set Theme',
  setPhotoAmount = '[Settings/PhotoAmount] Set Photo Amount',
  setSidenavMode = '[Settings/SidenavMode] Set Sidenav Mode',
}

// ========== Set Theme
export class SetTheme implements Action {
  readonly type = SettingsActionTypes.setTheme;

  constructor(public payload: Themes) {}
}

// ========== Set Photo Amount
export class SetPhotoAmount implements Action {
  readonly type = SettingsActionTypes.setPhotoAmount;

  constructor(public payload: number) {}
}

// ========== Set Sidenav Mode
export class SetSidenavMode implements Action {
  readonly type = SettingsActionTypes.setSidenavMode;

  constructor(public payload: SidenavModes) {}
}

export type SettingsActions = SetTheme | SetPhotoAmount | SetSidenavMode;
