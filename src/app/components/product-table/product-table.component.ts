import { Component, OnInit } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { Product } from 'src/app/interfaces/product';
import { ProductAPIService } from 'src/app/services/product-api.service';
@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent implements OnInit {
  productArray: Product[] = [
   
  ];

  columnsToDisplay: string[] = [
    'title',
    'description',
    'price',
    'discountPerc',
    'rating',
    'brand',
    'thumbnail'
  ];
  constructor(private productAPI: ProductAPIService) {}

  ngOnInit(): void {
    this.getproducts();
  }

  getproducts() {
    this.productAPI.GetProducts().subscribe({
      next: (response: any) => {
        this.productArray = response.products;
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }
}
