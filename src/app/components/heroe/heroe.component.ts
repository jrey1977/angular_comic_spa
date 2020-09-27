import { Component } from '@angular/core';
import {ActivatedRoute, Params } from '@angular/router';

import { HeroesService } from '../../services/heroes.service';

import { Heroe } from '../../interfaces/heroe.interface';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html'
})
export class HeroeComponent {

  public heroe: Heroe;

  constructor( private _heroesService: HeroesService,
               private _activatedRoute: ActivatedRoute
    ) { 

      this._activatedRoute.params.subscribe( parametros => {
        this.heroe = this._heroesService.getHeroe(parametros.id)
      })

    }


}
