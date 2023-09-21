import { NgModule } from '@angular/core';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';


import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';

import { ToolbarTitleComponent } from '../components/toolbar-title/toolbar-title.component';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  imports:[
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,

    FlexLayoutModule,
    ReactiveFormsModule
  ],

  declarations:[
    ToolbarTitleComponent

  ],

  exports: [
    ToolbarTitleComponent,
    ReactiveFormsModule
  ]
})

export class SharedModule { }
