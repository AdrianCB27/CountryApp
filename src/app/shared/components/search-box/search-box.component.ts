import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'shared-search-box',
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent implements OnInit, OnDestroy {
  ngOnDestroy(): void {
console.log("DESTRUYO EL COMPONENTE");
  }


  public placeholder:string="Escribe una capital"
  public resultadoReal:string="";

  @Output()
  public emitir:EventEmitter<string>=new EventEmitter();

  @Output()
  public onDebounce = new EventEmitter<string>();

  private debouncer:Subject<string>=new Subject()
  ngOnInit(): void {
    this.debouncer
    .pipe(
      debounceTime(300)
    )
    .subscribe( value => {
      this.onDebounce.emit (value);
    })
  }


  emitirResultado(){
    this.emitir.emit(this.resultadoReal);
  }
  onKeyPress(termino:string){

    this.debouncer.next(termino);
    this.emitirResultado()

  }


}
