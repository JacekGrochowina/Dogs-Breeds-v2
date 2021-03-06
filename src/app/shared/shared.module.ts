import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { FluidLoadingComponent } from './components/fluid-loading/fluid-loading.component';
import { MainTemplateComponent } from './templates/main-template/main-template.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';
import { TableComponent } from './components/table/table.component';
import { TableLoadingComponent } from './components/table/table-loading/table-loading.component';
import { TableContentComponent } from './components/table/table-content/table-content.component';
import { TableErrorComponent } from './components/table/table-error/table-error.component';
import { TableEmptyComponent } from './components/table/table-empty/table-empty.component';
import { PageContentTemplateComponent } from './templates/page-content-template/page-content-template.component';
import { PageContainerTemplateComponent } from './templates/page-container-template/page-container-template.component';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatSidenavModule } from '@angular/material/sidenav';

@NgModule({
  declarations: [
    ConfirmDialogComponent,
    ToolbarComponent,
    FooterComponent,
    FluidLoadingComponent,
    MainTemplateComponent,
    SidenavComponent,
    TableComponent,
    TableLoadingComponent,
    TableContentComponent,
    TableErrorComponent,
    TableEmptyComponent,
    PageContentTemplateComponent,
    PageContainerTemplateComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatListModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatSlideToggleModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatSnackBarModule,
    MatSidenavModule,
  ],
  exports: [
    MatProgressSpinnerModule,
    ToolbarComponent,
    FooterComponent,
    FluidLoadingComponent,
    MainTemplateComponent,
    SidenavComponent,
    TableComponent,
    PageContentTemplateComponent,
    PageContainerTemplateComponent,
  ],
})
export class SharedModule {
}
