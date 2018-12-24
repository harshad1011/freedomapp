import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products = [];

  constructor() { }

  ngOnInit() {

    this.products.push([{
      name: "First Product",
      img: "https://s7d1.scene7.com/is/image/PETCO/puppy-090517-dog-featured-355w-200h-d",
      description: "First Product"
    }]);
  }

}
