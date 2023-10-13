import { NgModule } from '@angular/core';
import { MatTabsModule } from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
<<<<<<< Updated upstream
import { MatButtonModule } from '@angular/material/button';
=======
>>>>>>> Stashed changes
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatTableModule } from '@angular/material/table';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatDividerModule } from '@angular/material/divider';
<<<<<<< Updated upstream
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';






@NgModule({

  exports: [
    MatTabsModule,
    MatIconModule,
    MatButtonModule,
=======
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';


@NgModule({
  exports: [
    MatTabsModule,
    MatIconModule,
>>>>>>> Stashed changes
    MatTooltipModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatCardModule,
    MatProgressBarModule,
    MatDividerModule,
<<<<<<< Updated upstream
    MatProgressSpinnerModule



  ],
  declarations:[],
  providers:[],
  imports: [],
})

=======
    MatProgressSpinnerModule,
  ],
  declarations: [],
  providers: [],
  imports: [],
})
>>>>>>> Stashed changes
export class FuncionarioMaterialModule { }
