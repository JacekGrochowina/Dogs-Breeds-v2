import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Breed } from '../../../../../../store/breeds/interfaces/breed.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-breed-details-title',
  templateUrl: './breed-details-title.component.html',
  styleUrls: ['./breed-details-title.component.scss']
})
export class BreedDetailsTitleComponent {

  @Input() breedDetailsItems$!: Observable<Breed | null>;

  constructor(private router: Router) {}

  public backToList(): void {
    this.router.navigate(['../../']);
  }

}
