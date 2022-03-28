import { Component, Input, OnInit } from '@angular/core';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { BreedPhoto } from '../../../../../../store/breeds/interfaces/breed-photo.interface';
import { SettingsFacade } from '../../../../../../store/settings/settings.facade';

@Component({
  selector: 'app-breed-details-photos',
  templateUrl: './breed-details-photos.component.html',
  styleUrls: ['./breed-details-photos.component.scss']
})
export class BreedDetailsPhotosComponent implements OnInit {

  @Input() breedPhotosItems$!: Observable<BreedPhoto[]>;

  public settingsPhotoAmount$ = this.settingsFacade.settingsPhotoAmount$;
  public isInfoBarVisible$!: Observable<boolean>;

  private unsubscribe$ = new Subject<void>();

  constructor(private settingsFacade: SettingsFacade) {}

  public ngOnInit(): void {
    this.isInfoBarVisible$ = this.getIsInfoBarVisible();
  }

  private getIsInfoBarVisible(): Observable<boolean> {
    return combineLatest([this.breedPhotosItems$, this.settingsPhotoAmount$])
      .pipe(
        takeUntil(this.unsubscribe$),
        map(([photos, amount]) => photos?.length < amount)
      );
  }

}
