import { Component, Input, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: ``
})
export class ByCapitalPageComponent implements OnInit {
  public isLoading:boolean=false;
  public paises:Country[]=[];
  constructor(private service:CountriesService) {}

  ngOnInit(): void {
    this.paises = this.service.cacheStore.byCapital.countries;
  }

  @Input()
  public valor:string=""

  recibirValor(valorEnviado:string){
    this.isLoading=true;
    this.valor=valorEnviado;
    this.service.searchCapital(valorEnviado).subscribe((countries)=>{
    this.paises=countries;
    this.isLoading=false;
  })
  }
}
