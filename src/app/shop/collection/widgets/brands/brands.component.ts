import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../../shared/classes/product';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.scss']
})
export class BrandsComponent implements OnInit {

  @Input() products: Product[] = [];
  @Input() brands: any[] = [];

  @Output() brandsFilter: EventEmitter<any> = new EventEmitter<any>();

  public collapse: boolean = true;

  constructor() {
  }

  ngOnInit(): void {
  }

  get filterbyBrand() {
    return this.products.map((product) => product.brand).filter((value, index, _arr) => _arr.indexOf(value) == index);
  }

  appliedFilter(event) {
    // debugger
    let index = this.brands.indexOf(event.target.value);  // checked and unchecked value
    if (event.target.checked)
      this.brands.push(event.target.value); // push in array cheked value
    else
      this.brands.splice(index, 1);  // removed in array unchecked value  

    let brands = this.brands.length ? { brand: this.brands.join(",") } : { brand: null };
    this.brandsFilter.emit(brands);
  }

  // check if the item are selected
  checked(item) {
    if (this.brands.indexOf(item) != -1) {
      return true;
    }
  }

}
