import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/Country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: ``
})
export class ByCountryPageComponent {
  public paises:Country[]=[];
  constructor(private service:CountriesService) {}

  @Input()
  public valor:string=""

  recibirValor(valorEnviado:string){
    this.valor=valorEnviado;
    this.service.searchCountry(valorEnviado).subscribe((countries)=>
    this.paises=countries)

  }
}
