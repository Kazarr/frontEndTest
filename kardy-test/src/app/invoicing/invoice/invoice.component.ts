import {Component, Input, OnInit} from '@angular/core';
import {InvoiceModel} from "./invoice.model";

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.scss']
})
export class InvoiceComponent implements OnInit {

  @Input()
  invoice: InvoiceModel

  invoiceState;
  invoiceStateStyle

  constructor() { }

  ngOnInit(): void {
    if (this.invoice.price >= 0.5) {
      this.invoiceState = 'zaplatena';
      this.invoiceStateStyle = 'badge-primary';
    }else {
      this.invoiceState = 'nezaplatena';
      this.invoiceStateStyle = 'badge-success';
    }

  }

}
