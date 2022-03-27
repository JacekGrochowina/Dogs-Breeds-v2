import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigAPI as api } from '../../shared/utils/api/config';
import { Breed } from './interfaces/breed.interface';
import { BreedPhoto } from './interfaces/breed-photo.interface';

@Injectable({
  providedIn: 'root',
})
export class BreedsService {

  constructor(private http: HttpClient) {}

  public getBreedsList(): Observable<Breed[]> {
    const url = `${api.apiURL}/breeds`;
    return this.http.get<Breed[]>(url, api.headers);
  }

  public getBreedDetails(breedName: string): Observable<Breed[]> {
    const url = `${api.apiURL}/breeds/search?q=${breedName}`;
    return this.http.get<Breed[]>(url, api.headers);
  }

  public getBreedPhotos(breedID: number): Observable<BreedPhoto[]> {
    const url = `${api.apiURL}/images/search?limit=9&mime_types=&order=Random&size=small&page=0&breed_ids=${breedID}&sub_id=demo-d438aa`;
    return this.http.get<BreedPhoto[]>(url, api.headers);
  }

}
