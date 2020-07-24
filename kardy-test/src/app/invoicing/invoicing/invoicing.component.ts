import {Component, OnInit} from '@angular/core';
import {FormControl} from "@angular/forms";
import {InvoiceModel} from "../invoice/invoice.model";
import {InvoicingService} from "./invoicing.service";

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent implements OnInit {

  invoices: InvoiceModel[];
  filtered: InvoiceModel[];

  addTerm = new FormControl();


  constructor(private invoicingService: InvoicingService) {
  }

  ngOnInit(): void {
    this.invoices = this.invoicingService.getInvoices();
    this.filtered = this.invoices
  }

  filter(filterTerm: string) {
    if (filterTerm) {
      this.filtered = this.invoices.filter(x => x.name.includes(filterTerm))
    } else {
      this.filtered = this.invoices
    }
  }

  add() {
    this.invoices.unshift({name: this.addTerm.value, price: Math.random()});
    this.filter('');
  }
}
