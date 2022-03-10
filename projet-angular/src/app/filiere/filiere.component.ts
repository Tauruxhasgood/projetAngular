import { Component, OnInit } from '@angular/core';
import { Filiere } from '../interfaces/filiere.interface';
import { FiliereService } from './filiere.service';

@Component({
  selector: 'filiere',
  templateUrl: './filiere.component.html',
  styleUrls: ['./filiere.component.css']
})
export class FiliereComponent implements OnInit {

  filieres: Filiere[] = [];
  selectedId: string = "";

  constructor(private filierService: FiliereService) { }

  ngOnInit(): void {
    this.filierService.getFiliere().subscribe((data: Filiere[]) => {
      console.log(data);
      this.filieres = data;
      
    })
  }

  

}
