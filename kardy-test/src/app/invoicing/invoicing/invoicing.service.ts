import { Injectable } from '@angular/core';
import {InvoiceModel} from "../invoice/invoice.model";

@Injectable({
  providedIn: 'root'
})
export class InvoicingService {

  constructor() { }

  getInvoices(): InvoiceModel[] {
    let name;
    let ret: InvoiceModel[] = []
    for(let i = 0; i< 500; i++){
      name =  Math.random().toString(36).substring(2,10);
      ret.push({name: name, price: Math.round((Math.random() * 10) / 10)})
    }
    return ret;
  }
}
