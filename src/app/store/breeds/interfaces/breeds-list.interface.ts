import { LoadingHandler } from 'src/app/shared/utils/interfaces/loading-handler.interface';
import { Breed } from './breed.interface';

export interface BreedsListState extends LoadingHandler {
  items: Breed[];
}
