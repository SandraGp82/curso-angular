import { Component } from '@angular/core';
import { Personaje } from '../interfaces/dbv.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent  {

  nuevo: Personaje={
    nombre: 'Maestro Roshi',
    poder: 1800
  }

  constructor( private dbzService: DbzService){
   
  }

}
