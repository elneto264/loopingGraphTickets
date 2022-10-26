import { Component, OnInit } from '@angular/core';
import { Tiquet } from '../../entities/tiquet.entity';

const tiquets: Tiquet[]=[
  { product: "water", type: "drinks", quantity: 10, unitPrice: 1 },
  { product: "chicken wings", type: "food", quantity: 3, unitPrice: 5 },
  { product: "steak", type: "food", quantity: 1, unitPrice: 9 },
  { product: "coffee", type: "drinks", quantity: 4, unitPrice: 2 },
  { product: "wine bottle", type: "drinks", quantity: 1, unitPrice: 7 },
]
let total = 0
let importe = 0
let des= {};

const full = tiquets.map( tiquet=> {
  importe = tiquet.unitPrice * tiquet.quantity
  total += importe;
  des = {
      uds:tiquet.quantity,
      product: tiquet.product,
      precio: tiquet.unitPrice,
      imp: importe,
  }
  return des;
  //console.log(Object.values(des).toString())


})

@Component({
  selector: 'app-cuestion-uno',
  templateUrl: './cuestion-uno.component.html',
  styleUrls: ['./cuestion-uno.component.css']
})
export class CuestionUnoComponent implements OnInit {

  displayedColumns: string[] = ['Uds', 'Producto', 'Precio', 'Importe']
  dataSource = full;
  total:number= total;

  constructor() { }

  ngOnInit(): void {

  }

}
