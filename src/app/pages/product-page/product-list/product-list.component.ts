import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  titre!: string;

  @Input()
  titreImage!: string;

  @Input()
  image!: string;

  @Input()
  descriptifImage!: string;

  @Input()
  id!: number;

  @Input()
  cartes: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
