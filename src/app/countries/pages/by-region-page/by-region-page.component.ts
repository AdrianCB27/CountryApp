import { Component, Input } from '@angular/core';
import { Country, } from '../../interfaces/Country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
})

export class ByRegionPageComponent {
  public paises:Country[]=[];
  public regions: Region[]=['Africa','America','Europe','Asia','Oceania'];
  public selectedRegion?:Region 
  constructor(private service:CountriesService) {}

  @Input()
  public valor:string=""

  recibirValor(region:Region){
    this.selectedRegion=region;
    this.valor=region;
    this.service.searchRegion(region).subscribe((countries)=>
    this.paises=countries)

  }
}
