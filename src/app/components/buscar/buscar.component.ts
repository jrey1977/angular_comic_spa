import { Component, OnInit } from '@angular/core';
import { Heroe } from '../../interfaces/heroe.interface';
import { HeroesService } from '../../services/heroes.service';
import {ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  resultados:Heroe[] = [];
  termino: string;

  constructor( private _heroesService:HeroesService,
               private _activatedRoute: ActivatedRoute,
               private _router: Router
               ) { }
  

  ngOnInit(): void {
    this._activatedRoute.params.subscribe( parametros => {
      this.termino = parametros.cadena;
      this.resultados = this._heroesService.buscaHeroes(parametros.cadena);
      console.log(this.resultados);
    })
    
  }

  muestroHeroe(id:number){
    console.log('Recibo id del hijo');
    this._router.navigate(['/heroe',id]);
  }


}
