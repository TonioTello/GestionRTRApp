import { Component, OnInit, ViewChild } from '@angular/core';
import {MatAccordion} from '@angular/material/expansion';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: any;
  selectedTabview = 0;

  constructor() { }

  ngOnInit(): void {
  }

  onCrearServicio() {
    this.selectedTabview = 1;
  }

  onCronograma(){
    this.selectedTabview = 2;
  }

  onRegistrarEquipo() {
      this.selectedTabview = 3;
  }

  onStockEquipos() {
      this.selectedTabview = 4;
  }

  onRegistrarCliente() {
    this.selectedTabview = 5;
  }

  onRegistrarVenta() {
    this.selectedTabview = 6;
  }

  onHistorialVentas() {
    this.selectedTabview = 7;
  }








}
