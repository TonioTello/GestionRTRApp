import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-servicio',
  templateUrl: './crear-servicio.component.html',
  styleUrls: ['./crear-servicio.component.css']
})
export class CrearServicioComponent implements OnInit {

  selected = 'Mantenimiento preventivo';
  constructor() { }

  ngOnInit(): void {
  }

}
