import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/interfaces/product';
import { ProductAPIService } from 'src/app/services/product-api.service';
@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent implements AfterViewInit {
  productArray: Product[] = [
  
  ];
  @ViewChild(MatPaginator) paginator: MatPaginator;

  datasource = new MatTableDataSource();

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

  ngAfterViewInit(): void {
    this.getproducts();
  

  }
  getproducts() {
    this.productAPI.GetProducts().subscribe({
      next: (response: any) => {
        this.productArray = response.products;
        console.log(1);
        this.datasource = new MatTableDataSource(this.productArray);
        console.log(2)
        this.datasource.paginator = this.paginator
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }
}
