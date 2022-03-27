import { InitialLoadingHandler } from 'src/app/shared/utils/models/initial-loading-handler.model';
import { BreedsListState } from './interfaces/breeds-list.interface';
import { BreedDetailsState } from './interfaces/breed-details.interface';
import { BreedPhotosState } from './interfaces/breed-photos.interface';

export interface BreedsState {
  list: BreedsListState;
  details: BreedDetailsState;
  photos: BreedPhotosState;
}

export const breedsInitialState: BreedsState = {
  list: {
    items: [],
    ...InitialLoadingHandler,
  },
  details: {
    item: null,
    ...InitialLoadingHandler,
  },
  photos: {
    photos: [],
    ...InitialLoadingHandler,
  }
};
