import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { BreedsService } from './breeds.service';
import {
  BreedsActionTypes, GetDetailsBreed,
  GetDetailsBreedFail,
  GetDetailsBreedSuccess,
  GetListBreedsFail,
  GetListBreedsSuccess, GetPhotosBreed, GetPhotosBreedFail, GetPhotosBreedSuccess
} from './breeds.actions';

@Injectable()
export class BreedsEffects {

  constructor(
    private actions$: Actions,
    private breedsService: BreedsService
  ) {}

  getBreedsList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BreedsActionTypes.getList),
      switchMap(() =>
        this.breedsService.getBreedsList().pipe(
          map((response) => new GetListBreedsSuccess(response)),
          catchError((error) => of(new GetListBreedsFail(error)))
        )
      )
    )
  );

  getBreedDetails$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BreedsActionTypes.getDetails),
      switchMap((action: GetDetailsBreed) =>
        this.breedsService.getBreedDetails(action.payload).pipe(
          map((response) => new GetDetailsBreedSuccess(response)),
          catchError((error) => of(new GetDetailsBreedFail(error)))
        )
      )
    )
  );

  getBreedPhotos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(BreedsActionTypes.getPhotos),
      switchMap((action: GetPhotosBreed) =>
        this.breedsService.getBreedPhotos(action.payload).pipe(
          map((response) => new GetPhotosBreedSuccess(response)),
          catchError((error) => of(new GetPhotosBreedFail(error)))
        )
      )
    )
  );

}
