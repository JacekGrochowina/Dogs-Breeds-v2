import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { BreedsFacade } from '../../../../store/breeds/breeds.facade';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Subject } from 'rxjs';
import { Breed } from '../../../../store/breeds/interfaces/breed.interface';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-breeds-table',
  templateUrl: './breeds-table.component.html',
  styleUrls: ['./breeds-table.component.scss'],
})
export class BreedsTableComponent implements OnInit {

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  // ========== Selectors List
  public breedsListItems$ = this.breedsFacade.breedsListItems$;
  public breedsListLoading$ = this.breedsFacade.breedsListLoading$;
  public breedsListSuccess$ = this.breedsFacade.breedsListSuccess$;
  public breedsListError$ = this.breedsFacade.breedsListError$;

  public dataSource!: MatTableDataSource<Breed>;
  public displayedColumns: string[] = [
    'name',
    'group',
    'action',
  ];

  private unsubscribe$ = new Subject<void>();

  constructor(
    private breedsFacade: BreedsFacade,
    private router: Router
  ) {}

  public ngOnInit(): void {
    this.breedsFacade.getBreedsList();
    this.initTablePaginator();
  }

  public goToDetails(breedName: string): void {
    this.router.navigate([`/details/${breedName}`]);
  }

  private initTablePaginator(): void {
    this.breedsListItems$
      .pipe(takeUntil(this.unsubscribe$))
      .subscribe((items) => {
        this.dataSource = new MatTableDataSource<Breed>(items);
        this.dataSource.paginator = this.paginator;
      });
  }

}
