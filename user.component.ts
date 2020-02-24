import { Component, OnInit } from '@angular/core';
import { SamlpeService } from '../samlpe.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  constructor(private service:SamlpeService) { }

  ngOnInit() {
     }
    add(){
      this.service.add();
    }
    clear(){
      this.service.clear();
    }
    countOf(){
      this.service.countOf();
    }

}
