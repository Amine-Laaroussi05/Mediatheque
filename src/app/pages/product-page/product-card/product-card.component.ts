import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss']
})
export class ProductCardComponent implements OnInit {


  // @Input()
  // titre!: string;

  // @Input()
  // image!: string;

  // @Input()
  // descriptif!: string;

  // @Input()
  // id!: number;

  @Input()
  product!: any;

  constructor() { }

  ngOnInit(): void {
  }

}
