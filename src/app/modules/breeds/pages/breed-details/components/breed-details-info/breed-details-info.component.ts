import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Breed } from '../../../../../../store/breeds/interfaces/breed.interface';

@Component({
  selector: 'app-breed-details-info',
  templateUrl: './breed-details-info.component.html',
  styleUrls: ['./breed-details-info.component.scss']
})
export class BreedDetailsInfoComponent {

  @Input() breedDetailsItems$!: Observable<Breed | null>;

}
