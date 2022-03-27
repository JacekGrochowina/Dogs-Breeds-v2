import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BreedsComponent } from './breeds.component';
import { BreedDetailsComponent } from './pages/breed-details/breed-details.component';

const routes: Routes = [
  {
    path: '',
    component: BreedsComponent
  },
  {
    path: 'details/:name',
    component: BreedDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BreedsRoutingModule {}
