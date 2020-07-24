import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { NgModule } from '@angular/core';
import { InvoicingComponent } from './invoicing/invoicing.component';
import {InvoicingRoutingModule} from "./invoicing-routing.module";
import { InvoiceComponent } from './invoice/invoice.component';

import { SideBarComponent } from './side-bar/side-bar.component';



@NgModule({
  declarations: [InvoicingComponent, InvoiceComponent, SideBarComponent],
  imports: [
    InvoicingRoutingModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
  ]
})
export class InvoicingModule { }
