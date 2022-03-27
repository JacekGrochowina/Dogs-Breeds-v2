import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { BreedsRoutingModule } from './breeds-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { TextMaskModule } from 'angular2-text-mask';
import { BreedsComponent } from './breeds.component';
import { BreedsTableComponent } from './components/breeds-table/breeds-table.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { BreedDetailsComponent } from './pages/breed-details/breed-details.component';
import { BreedDetailsInfoComponent } from './pages/breed-details/components/breed-details-info/breed-details-info.component';
import { BreedDetailsPhotosComponent } from './pages/breed-details/components/breed-details-photos/breed-details-photos.component';
import { BreedDetailsTitleComponent } from './pages/breed-details/components/breed-details-title/breed-details-title.component';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  declarations: [
    BreedsComponent,
    BreedsTableComponent,
    BreedDetailsComponent,
    BreedDetailsInfoComponent,
    BreedDetailsPhotosComponent,
    BreedDetailsTitleComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    BreedsRoutingModule,
    SharedModule,
    TextMaskModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatPaginatorModule,
  ],
  providers: [MatDatepickerModule],
})
export class BreedsModule {}
