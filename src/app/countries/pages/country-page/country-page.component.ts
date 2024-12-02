import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CountriesService } from '../../services/countries.service';
import { switchMap } from 'rxjs';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'app-country-page',
  templateUrl: './country-page.component.html',
  styles: ``
})
export class CountryPageComponent implements OnInit {
  public country?:Country;
  constructor(private activedRoute:ActivatedRoute, private servisio:CountriesService, private router:Router) {}
  ngOnInit(): void {
    this.activedRoute.params.pipe(switchMap(({id})=>this.servisio.searchByAlphaCode(id)))
    .subscribe ( country => {
      if ( !country ){
        return this.router.navigateByUrl( '' );
      }
      console.log('Encontramos País');
      return this.country=country;
    }
)
  }
}
