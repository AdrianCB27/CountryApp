import { Component, Input } from '@angular/core';
import { Country } from '../../interfaces/Country';

@Component({
  selector: 'countries-country-table',
  templateUrl: './country-table.component.html',
  styles: ``
})
export class CountryTableComponent {
@Input()
countries:Country[]=[];



}
