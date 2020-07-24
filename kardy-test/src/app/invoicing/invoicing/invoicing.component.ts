import {Component, OnInit, TemplateRef} from '@angular/core';
import {InvoiceComponent} from "../invoice/invoice.component";
import {InvoiceModel} from "../invoice/invoice.model";
import {InvoicingService} from "./invoicing.service";
import {FormControl} from "@angular/forms";

@Component({
  selector: 'app-invoicing',
  templateUrl: './invoicing.component.html',
  styleUrls: ['./invoicing.component.scss']
})
export class InvoicingComponent implements OnInit {

  invoices: InvoiceModel[];
  filtered: InvoiceModel[];

  filterTerm = new FormControl();
  addTerm = new FormControl();
  payed: number;
  unpayed: number;


  constructor(private invoicingService: InvoicingService) {
  }

  ngOnInit(): void {
    this.invoices = this.invoicingService.getInvoices();
    this.filtered = this.invoices
    this.payed = this.filtered.filter(x => x.price > 0.5).length
    this.unpayed = this.filtered.filter(x => x.price <= 0.5).length
  }


  getState(item: InvoiceModel): string {
    if (item.price >= 0.5) {
      return 'zaplatena';
    }
    return 'nezaplatena';
  }

  getStateStyle(item: InvoiceModel): string {
    if (item.price >= 0.5) {
      return 'badge-primary';
    }
    return 'badge-success';
  }

  filter(){
    if (this.filterTerm.value){
      this.filtered = this.invoices.filter(x => x.name.includes(this.filterTerm.value))
    }else {
      this.filtered = this.invoices
    }
    this.payed = this.filtered.filter(x => x.price > 0.5).length
    this.unpayed = this.filtered.filter(x => x.price <= 0.5).length
  }

  add(){
    this.invoices.unshift({name: this.addTerm.value, price: Math.random()});
    this.filter();
  }

}
