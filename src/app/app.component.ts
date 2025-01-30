import { Component } from '@angular/core';
//import { NgModule } from '@angular/core';
import { ProductTableComponent } from './components/product-table/product-table.component';
import { AppModule } from './app.module';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-hello-world';
}
