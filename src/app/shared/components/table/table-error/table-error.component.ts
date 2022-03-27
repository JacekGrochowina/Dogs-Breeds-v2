import { Component, Input, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { map, takeUntil } from 'rxjs/operators';
import { ErrorResponse } from '../../../utils/interfaces/error-response.interface';

@Component({
  selector: 'app-table-error',
  templateUrl: './table-error.component.html',
  styleUrls: ['./table-error.component.scss']
})
export class TableErrorComponent implements OnInit {

  @Input() error$!: Observable<ErrorResponse>;

  public errorMessage$!: Observable<string>;
  private unsubscribe$ = new Subject<void>();

  public ngOnInit(): void {
    this.errorMessage$ = this.getErrorMessage();
  }

  private getErrorMessage(): Observable<string> {
    return this.error$.pipe(
      takeUntil(this.unsubscribe$),
      map((error) => error.message)
    );
  }

}
