import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCardModule } from '@angular/material/card'; // Importe MatCardModule
import { MatProgressBarModule } from '@angular/material/progress-bar'; // Importe MatProgressBarModule
import { MatDividerModule } from '@angular/material/divider'; // Importe MatDividerModule
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';


@NgModule({
  exports: [
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
    MatButtonModule,
    MatTooltipModule,
    MatFormFieldModule,
    MatTableModule,
    MatProgressBarModule,
    MatDividerModule,
    MatProgressSpinnerModule,
    MatTooltipModule,
    MatCardModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  declarations: [],
  providers: [],
  imports: []
})
export class FuncionarioMaterialModule { }
