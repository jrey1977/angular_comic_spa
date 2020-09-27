import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe } from '../../interfaces/heroe.interface';
import { Router } from '@angular/router';  

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];

  constructor( private _heroesService: HeroesService,
               private _router: Router) { }

  ngOnInit(): void {
      this.heroes = this._heroesService.getHeroes();
  }

  muestroHeroe(id:number){
    console.log('Recibo id del hijo');
    this._router.navigate(['/heroe',id]);
  }

}
