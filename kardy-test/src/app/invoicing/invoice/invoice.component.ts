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

  constructor() { }

  ngOnInit(): void {
  }

}
