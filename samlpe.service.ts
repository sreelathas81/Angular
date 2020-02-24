import { Injectable, Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SamlpeService {
count =new BehaviorSubject<any>(0);
  constructor() { }
  add(){
    this.count.next(this.count.getValue()+1);

  }
  clear(){
    this.count.next(0);

  }
  countOf(){
    this.count.subscribe( document.getElementById("count").innerHTML = this.count.getValue());
  }
}
