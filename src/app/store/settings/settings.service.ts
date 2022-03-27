import { Injectable } from '@angular/core';
import { Themes } from '../../shared/utils/enums/themes.enum';
import { OverlayContainer } from '@angular/cdk/overlay';
import { SidenavModes } from '../../shared/utils/enums/sidenav-modes.enum';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {

  constructor(private overlayContainer: OverlayContainer) {}

  public setTheme(theme: Themes): void {
    localStorage.setItem('theme', theme);

    const overlayContainerClasses = this.overlayContainer.getContainerElement().classList;
    const themeClassesToRemove = Array.from(overlayContainerClasses)
      .filter((item: string) => item.includes('-theme'));

    if (themeClassesToRemove.length) {
      overlayContainerClasses.remove(...themeClassesToRemove);
    }

    overlayContainerClasses.add(theme);
  }

  public setPhotoAmount(photoAmount: number): void {
    localStorage.setItem('photoAmount', String(photoAmount));
  }

  public setSidenavMode(sidenavMode: SidenavModes): void {
    localStorage.setItem('sidenavMode', sidenavMode);
  }

}
