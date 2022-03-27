import { SettingsState } from './settings/settings.state';
import { BreedsState } from './breeds/breeds.state';

export interface AppState {
  settings: SettingsState;
  breeds: BreedsState;
}
