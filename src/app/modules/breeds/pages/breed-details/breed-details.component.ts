import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { BreedsFacade } from '../../../../store/breeds/breeds.facade';
import { combineLatest, Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-breed-details',
  templateUrl: './breed-details.component.html',
  styleUrls: ['./breed-details.component.scss']
})
export class BreedDetailsComponent implements OnInit, OnDestroy {

  // ========== Selectors Details
  public breedDetailsItems$ = this.breedsFacade.breedDetailsItems$;
  public breedDetailsLoading$ = this.breedsFacade.breedDetailsLoading$;
  public breedDetailsSuccess$ = this.breedsFacade.breedDetailsSuccess$;
  public breedDetailsError$ = this.breedsFacade.breedDetailsError$;

  // ========== Selectors Photos
  public breedPhotosItems$ = this.breedsFacade.breedPhotosItems$;
  public breedPhotosLoading$ = this.breedsFacade.breedPhotosLoading$;
  public breedPhotosSuccess$ = this.breedsFacade.breedPhotosSuccess$;
  public breedPhotosError$ = this.breedsFacade.breedPhotosError$;

  public isBreedDetailsContentLoading$!: Observable<boolean>;

  private params: ParamMap = this.route.snapshot.paramMap;
  private unsubscribe$ = new Subject<void>();

  constructor(
    private breedsFacade: BreedsFacade,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const paramsName = this.getNameFromParams();
    this.breedsFacade.getBreedDetails(paramsName);

    this.breedsFacade.breedDetailsItems$
      .pipe(
        takeUntil(this.unsubscribe$)
      )
      .subscribe((items) => {
        if (items) {
          this.breedsFacade.getBreedPhotos(items.id);
        }
      });

    this.isBreedDetailsContentLoading$ = this.getIsBreedDetailsContentLoading();
  }

  public ngOnDestroy(): void {
    this.unsubscribe$.next();
    this.unsubscribe$.complete();
    this.breedsFacade.getBreedDetailsClear();
    this.breedsFacade.getBreedPhotosClear();
  }

  private getNameFromParams(): string {
    return String(this.params.get('name'));
  }

  private getIsBreedDetailsContentLoading(): Observable<boolean> {
    return combineLatest(
      this.breedDetailsLoading$,
      this.breedPhotosLoading$
    ).pipe(
      takeUntil(this.unsubscribe$),
      map(([infoLoading, photosLoading]) =>  infoLoading || photosLoading)
    );
  }

}
