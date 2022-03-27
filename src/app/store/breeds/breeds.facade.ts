import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import {
  selectBreedDetailsError,
  selectBreedDetailsItems,
  selectBreedDetailsLoading,
  selectBreedDetailsSuccess,
  selectBreedPhotosError,
  selectBreedPhotosItems,
  selectBreedPhotosLoading,
  selectBreedPhotosSuccess,
  selectBreedsListError,
  selectBreedsListItems,
  selectBreedsListLoading,
  selectBreedsListSuccess,
} from './breeds.selectors';
import {
  GetDetailsBreed,
  GetDetailsBreedClear,
  GetListBreeds,
  GetPhotosBreed,
  GetPhotosBreedClear
} from './breeds.actions';

@Injectable()
export class BreedsFacade {

  // ========== Selectors List
  breedsListItems$ = this.store.select(selectBreedsListItems);
  breedsListLoading$ = this.store.select(selectBreedsListLoading);
  breedsListSuccess$ = this.store.select(selectBreedsListSuccess);
  breedsListError$ = this.store.select(selectBreedsListError);

  // ========== Selectors Details
  breedDetailsItems$ = this.store.select(selectBreedDetailsItems);
  breedDetailsLoading$ = this.store.select(selectBreedDetailsLoading);
  breedDetailsSuccess$ = this.store.select(selectBreedDetailsSuccess);
  breedDetailsError$ = this.store.select(selectBreedDetailsError);

  // ========== Selectors Photos
  breedPhotosItems$ = this.store.select(selectBreedPhotosItems);
  breedPhotosLoading$ = this.store.select(selectBreedPhotosLoading);
  breedPhotosSuccess$ = this.store.select(selectBreedPhotosSuccess);
  breedPhotosError$ = this.store.select(selectBreedPhotosError);

  constructor(private store: Store<AppState>) {}

  public getBreedsList(): void {
    this.store.dispatch(new GetListBreeds());
  }

  public getBreedDetails(breedName: string): void {
    this.store.dispatch(new GetDetailsBreed(breedName));
  }

  public getBreedDetailsClear(): void {
    this.store.dispatch(new GetDetailsBreedClear());
  }

  public getBreedPhotos(breedID: number): void {
    this.store.dispatch(new GetPhotosBreed(breedID));
  }

  public getBreedPhotosClear(): void {
    this.store.dispatch(new GetPhotosBreedClear());
  }

}
