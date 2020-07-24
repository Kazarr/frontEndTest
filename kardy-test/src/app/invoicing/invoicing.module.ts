import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicingComponent } from './invoicing/invoicing.component';
import {InvoicingRoutingModule} from "./invoicing-routing.module";



@NgModule({
  declarations: [InvoicingComponent],
  imports: [
    InvoicingRoutingModule,
    CommonModule
  ]
})
export class InvoicingModule { }
