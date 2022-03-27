import { HttpErrorResponse } from '@angular/common/http';
import { Action } from '@ngrx/store';
import { Breed } from './interfaces/breed.interface';
import { BreedPhoto } from './interfaces/breed-photo.interface';

export enum BreedsActionTypes {
  getList = '[Breeds/List] Get List Breeds',
  getListSuccess = '[Breeds/List] Get List Breeds Success',
  getListFail = '[Breeds/List] Get List Breeds Fail',
  getListClear = '[Breeds/List] Get List Breeds Clear',
  getListClearError = '[Breeds/List] Get List Breeds Clear Error',

  getDetails = '[Breeds/Details] Get Details Breed',
  getDetailsSuccess = '[Breeds/Details] Get Details Breed Success',
  getDetailsFail = '[Breeds/Details] Get Details Breed Fail',
  getDetailsClear = '[Breeds/Details] Get Details Breed Clear',
  getDetailsClearError = '[Breeds/Details] Get Details Breed Clear Error',

  getPhotos = '[Breeds/Photos] Get Photos Breed',
  getPhotosSuccess = '[Breeds/Photos] Get Photos Breed Success',
  getPhotosFail = '[Breeds/Photos] Get Photos Breed Fail',
  getPhotosClear = '[Breeds/Photos] Get Photos Breed Clear',
  getPhotosClearError = '[Breeds/Photos] Get Photos Breed Clear Error',
}

// ========== Get Breeds List
export class GetListBreeds implements Action {
  readonly type = BreedsActionTypes.getList;
}

export class GetListBreedsSuccess implements Action {
  readonly type = BreedsActionTypes.getListSuccess;

  constructor(public payload: Breed[]) {}
}

export class GetListBreedsFail implements Action {
  readonly type = BreedsActionTypes.getListFail;

  constructor(public payload: HttpErrorResponse) {}
}

export class GetListBreedsClear implements Action {
  readonly type = BreedsActionTypes.getListClear;
}

export class GetListBreedsClearError implements Action {
  readonly type = BreedsActionTypes.getListClearError;
}

// ========== Get Breed Details
export class GetDetailsBreed implements Action {
  readonly type = BreedsActionTypes.getDetails;

  constructor(public payload: string) {}
}

export class GetDetailsBreedSuccess implements Action {
  readonly type = BreedsActionTypes.getDetailsSuccess;

  constructor(public payload: Breed[]) {}
}

export class GetDetailsBreedFail implements Action {
  readonly type = BreedsActionTypes.getDetailsFail;

  constructor(public payload: HttpErrorResponse) {}
}

export class GetDetailsBreedClear implements Action {
  readonly type = BreedsActionTypes.getDetailsClear;
}

export class GetDetailsBreedClearError implements Action {
  readonly type = BreedsActionTypes.getDetailsClearError;
}

// ========== Get Breed Photos
export class GetPhotosBreed implements Action {
  readonly type = BreedsActionTypes.getPhotos;

  constructor(public payload: number) {}
}

export class GetPhotosBreedSuccess implements Action {
  readonly type = BreedsActionTypes.getPhotosSuccess;

  constructor(public payload: BreedPhoto[]) {}
}

export class GetPhotosBreedFail implements Action {
  readonly type = BreedsActionTypes.getPhotosFail;

  constructor(public payload: HttpErrorResponse) {}
}

export class GetPhotosBreedClear implements Action {
  readonly type = BreedsActionTypes.getPhotosClear;
}

export class GetPhotosBreedClearError implements Action {
  readonly type = BreedsActionTypes.getPhotosClearError;
}

export type BreedsActions =
  | GetListBreeds
  | GetListBreedsSuccess
  | GetListBreedsFail
  | GetListBreedsClear
  | GetListBreedsClearError
  | GetDetailsBreed
  | GetDetailsBreedSuccess
  | GetDetailsBreedFail
  | GetDetailsBreedClear
  | GetDetailsBreedClearError
  | GetPhotosBreed
  | GetPhotosBreedSuccess
  | GetPhotosBreedFail
  | GetPhotosBreedClear
  | GetPhotosBreedClearError;
