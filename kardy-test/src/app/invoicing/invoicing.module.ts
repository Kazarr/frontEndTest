import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InvoicingComponent } from './invoicing/invoicing.component';
import {InvoicingRoutingModule} from "./invoicing-routing.module";
import { InvoiceComponent } from './invoice/invoice.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {PayedDirective} from "../directives/payed.directive";



@NgModule({
  declarations: [InvoicingComponent, InvoiceComponent, PayedDirective],
  imports: [
    InvoicingRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class InvoicingModule { }
