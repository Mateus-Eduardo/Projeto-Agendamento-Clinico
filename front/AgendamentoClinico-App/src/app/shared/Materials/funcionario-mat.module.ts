
import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';



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
    MatButtonModule,
    MatGridListModule,
    MatInputModule,
    MatCardModule,

  ],
  declarations:[],
  providers:[],
  imports: [],
})


export class FuncionarioMaterialModule { }
