import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {InvoicingComponent} from "./invoicing/invoicing.component";

const routes: Routes = [
  {
    path: '',
    component: InvoicingComponent
  },
]

@NgModule({
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ]
})
export class InvoicingRoutingModule { }
