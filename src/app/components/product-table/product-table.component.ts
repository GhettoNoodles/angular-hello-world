import { LiveAnnouncer } from '@angular/cdk/a11y';
import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterViewInit,
  Component,
  inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/interfaces/product';
import { ProductAPIService } from 'src/app/services/product-api.service';
import { MatFormField } from '@angular/material/form-field';
@Component({
  selector: 'app-product-table',
  templateUrl: './product-table.component.html',
  styleUrls: ['./product-table.component.css'],
})
export class ProductTableComponent implements AfterViewInit, OnInit {
  // private _liveAnnouncer = inject(LiveAnnouncer);
  productArray: Product[] = [];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  dataSource = new MatTableDataSource();

  columnsToDisplay: string[] = [
    'title',
    'description',
    'price',
    'discountPerc',
    'rating',
    'brand',
    'thumbnail',
  ];

  constructor(private productAPI: ProductAPIService) {}
  ngOnInit(): void {
    this.GetProducts();
  }

  ngAfterViewInit(): void {
    this.UpdateTable;
  }

  GetProducts() {
    this.productAPI.GetProducts().subscribe({
      next: (response: any) => {
        this.productArray = response.products;
        this.dataSource = new MatTableDataSource(this.productArray);
        this.UpdateTable();
      },
      error: (error: Error) => {
        console.log(error);
      },
    });
  }

  UpdateTable() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ApplyFilter(filterValue:string)
  {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  /* announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      console.log(`Sorted ${sortState.direction}ending`);
      // this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      console.log('Sorting cleared');
      // this._liveAnnouncer.announce('Sorting cleared');
    }
  } */
}
