import { Themes } from '../../shared/utils/enums/themes.enum';
import { SidenavModes } from '../../shared/utils/enums/sidenav-modes.enum';

export interface SettingsState {
  theme: Themes;
  photoAmount: number;
  sidenavMode: SidenavModes;
}

export const settingsInitialState: SettingsState = {
  theme: Themes.light,
  photoAmount: 9,
  sidenavMode: SidenavModes.side,
};
