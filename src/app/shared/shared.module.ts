import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DatatableComponent } from './datatable/datatable.component';
import { SeletizeComponent } from './seletize/seletize.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DatatableComponent, SeletizeComponent]
})
export class SharedModule { }
