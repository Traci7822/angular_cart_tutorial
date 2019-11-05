import { Component, OnInit } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {

  products:any;
  cartProducts:any;

  constructor(private router:Router) { }

  ngOnInit() {
    let data=localStorage.getItem('cart');
    if(data!==null) {
      this.cartProducts = JSON.parse(data);
    } else {
      this.cartProducts = [];
    }

    this.products = [
      {
        id: 1,
        title: "Test Thing #1",
        description: "Americano",
        img: "assets/img_4.png",
        price: 3
      },
      {
        id: 2,
        title: "Test Thing #2",
        description: "Americano",
        img: "assets/img_2.png",
        price: 6
      },
      {
        id: 3,
        title: "Test Thing #3",
        description: "Americano",
        img: "assets/img_1.png",
        price: 9
      },
      {
        id: 4,
        title: "Test Thing #4",
        description: "Americano",
        img: "assets/img_2.png",
        price: 1
      },
      {
        id: 5,
        title: "Test Thing #5",
        description: "Americano",
        img: "assets/img_3.png",
        price: 2
      },
      {
        id: 6,
        title: "Test Thing #6",
        description: "Americano",
        img: "assets/img_4.png",
        price: 12
      },
      {
        id: 7,
        title: "Test Thing #7",
        description: "Americano",
        img: "assets/img_3.png",
        price: 22
      },      {
        id: 8,
        title: "Test Thing #8",
        description: "Americano",
        img: "assets/img_2.png",
        price: 2
      },
      {
        id: 9,
        title: "Test Thing #9",
        description: "Americano",
        img: "assets/img_1.png",
        price: 21
      },
    ];
  }

  addToCart(index) {
    let product = this.products[index];
    let cartData = [];
    let data = localStorage.getItem('cart');
    console.log(data);
    if (data !== "null") {
      cartData = JSON.parse(data);
    }
    cartData.push(product);
    this.updateCartData(cartData);
    localStorage.setItem('cart', JSON.stringify(cartData));
    this.products[index].isAdded = true;
  }
  updateCartData(cartData) {
    this.cartProducts = cartData;
  }
  goToCart() {
    this.router.navigate(['/cart']);
  }
}
