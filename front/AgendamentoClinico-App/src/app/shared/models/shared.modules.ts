import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { ToolbarComponent } from '../components/toolbar/toolbar.component'; 


@NgModule({
  imports:[
    MatToolbarModule,
    MatIconModule,
    FlexLayoutModule,
    ReactiveFormsModule
  ],

  declarations:[
    ToolbarComponent,

  ],

  exports: [
    ToolbarComponent,
    ReactiveFormsModule
  ]
})

export class SharedModule { }
