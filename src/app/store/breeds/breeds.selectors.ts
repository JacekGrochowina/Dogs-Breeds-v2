import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { BreedsState } from './breeds.state';
import { BreedsListState } from './interfaces/breeds-list.interface';
import { BreedDetailsState } from './interfaces/breed-details.interface';
import { BreedPhotosState } from './interfaces/breed-photos.interface';

const selectBreeds = (state: AppState) => state.breeds;

// ========== Selectors List
const selectBreedsList = createSelector(
  selectBreeds,
  (state: BreedsState) => state.list
);

// Items
export const selectBreedsListItems = createSelector(
  selectBreedsList,
  (state: BreedsListState) => state.items
);

// Loading
export const selectBreedsListLoading = createSelector(
  selectBreedsList,
  (state: BreedsListState) => state.loading
);

// Success
export const selectBreedsListSuccess = createSelector(
  selectBreedsList,
  (state: BreedsListState) => state.success
);

// Error
export const selectBreedsListError = createSelector(
  selectBreedsList,
  (state: BreedsListState) => state.error
);


// ========== Selectors Details
const selectBreedDetails = createSelector(
  selectBreeds,
  (state: BreedsState) => state.details
);

// Items
export const selectBreedDetailsItems = createSelector(
  selectBreedDetails,
  (state: BreedDetailsState) => state.item
);

// Loading
export const selectBreedDetailsLoading = createSelector(
  selectBreedDetails,
  (state: BreedDetailsState) => state.loading
);

// Success
export const selectBreedDetailsSuccess = createSelector(
  selectBreedDetails,
  (state: BreedDetailsState) => state.success
);

// Error
export const selectBreedDetailsError = createSelector(
  selectBreedDetails,
  (state: BreedDetailsState) => state.error
);


// ========== Selectors Photos
const selectBreedPhotos = createSelector(
  selectBreeds,
  (state: BreedsState) => state.photos
);

// Items
export const selectBreedPhotosItems = createSelector(
  selectBreedPhotos,
  (state: BreedPhotosState) => state.photos
);

// Loading
export const selectBreedPhotosLoading = createSelector(
  selectBreedPhotos,
  (state: BreedPhotosState) => state.loading
);

// Success
export const selectBreedPhotosSuccess = createSelector(
  selectBreedPhotos,
  (state: BreedPhotosState) => state.success
);

// Error
export const selectBreedPhotosError = createSelector(
  selectBreedPhotos,
  (state: BreedPhotosState) => state.error
);
