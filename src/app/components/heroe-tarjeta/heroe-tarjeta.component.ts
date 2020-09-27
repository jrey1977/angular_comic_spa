import { Component, OnInit, Input, Output, EventEmitter  } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  // Producto que recibe una propiedad desde otro componente 
  @Input() heroe: Heroe;
  @Input() indice: number;

  @Output() heroeSeleccionado: EventEmitter<any> = new EventEmitter();

  constructor(private _router: Router) { }

  ngOnInit(): void {
   
  }

  verHeroe(){
    this._router.navigate(['/heroe',this.indice]);
    console.log('Mando evento al padre');
    //this.heroeSeleccionado.emit(this.indice);
  }

}
