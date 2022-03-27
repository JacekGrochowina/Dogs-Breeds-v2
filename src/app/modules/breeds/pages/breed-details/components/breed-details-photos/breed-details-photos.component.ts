import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { BreedPhoto } from '../../../../../../store/breeds/interfaces/breed-photo.interface';

@Component({
  selector: 'app-breed-details-photos',
  templateUrl: './breed-details-photos.component.html',
  styleUrls: ['./breed-details-photos.component.scss']
})
export class BreedDetailsPhotosComponent {

  @Input() breedPhotosItems$!: Observable<BreedPhoto[]>;

}
