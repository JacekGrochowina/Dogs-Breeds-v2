import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { SettingsService } from './settings.service';
import { SetPhotoAmount, SetSidenavMode, SetTheme, SettingsActionTypes } from './settings.actions';
import { tap } from 'rxjs/operators';
import { AppState } from '../app.state';

@Injectable()
export class SettingsEffects {

  constructor(
    private actions$: Actions,
    private settingsService: SettingsService,
    private store: Store<AppState>
  ) {}

  @Effect({ dispatch: false })
  setTheme$ = this.actions$.pipe(
    ofType(SettingsActionTypes.setTheme),
    tap((action: SetTheme) => {
      this.settingsService.setTheme(action.payload);
    }),
  );

  @Effect({ dispatch: false })
  setPhotoAmount$ = this.actions$.pipe(
    ofType(SettingsActionTypes.setPhotoAmount),
    tap((action: SetPhotoAmount) => {
      this.settingsService.setPhotoAmount(action.payload);
    }),
  );

  @Effect({ dispatch: false })
  setSidenavMode$ = this.actions$.pipe(
    ofType(SettingsActionTypes.setSidenavMode),
    tap((action: SetSidenavMode) => {
      this.settingsService.setSidenavMode(action.payload);
    }),
  );

}
