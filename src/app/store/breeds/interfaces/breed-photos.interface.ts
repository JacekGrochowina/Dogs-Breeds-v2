import { LoadingHandler } from '../../../shared/utils/interfaces/loading-handler.interface';
import { BreedPhoto } from './breed-photo.interface';

export interface BreedPhotosState extends LoadingHandler {
  photos: BreedPhoto[];
}
