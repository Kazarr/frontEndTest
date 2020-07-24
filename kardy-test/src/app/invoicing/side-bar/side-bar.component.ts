import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl} from "@angular/forms";
import {InvoiceModel} from "../invoice/invoice.model";

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.scss']
})
export class SideBarComponent implements OnInit {

  @Input()
  invoices: InvoiceModel[];

  payed:number;
  unpayed:number;

  filterTerm = new FormControl();

  @Output()
  searchEvent: EventEmitter<any> = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
    this.payed = this.invoices.filter(x => x.price > 0.5).length
    this.unpayed = this.invoices.filter(x => x.price <= 0.5).length
  }

  searchEventEmit(){
    this.searchEvent.emit(this.filterTerm.value);
  }

}
