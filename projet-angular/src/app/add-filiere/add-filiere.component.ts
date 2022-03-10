import { Component, OnInit } from '@angular/core';
import { FiliereService } from '../filiere/filiere.service';
import { Filiere } from '../interfaces/filiere.interface';

@Component({
  selector: 'add-filiere',
  templateUrl: './add-filiere.component.html',
  styleUrls: ['./add-filiere.component.css']
})
export class AddFiliereComponent implements OnInit {

  filiere: Filiere = {
    libelle: "",
    stagiaires: []
  }

  constructor(private filiereService: FiliereService) { }

  ngOnInit(): void {
  }

  handleSubmit(){
    console.log("submit form ...");
    this.filiereService
    .postFiliere(this.filiere)
    .subscribe((res) => {
      console.log(res);
    }) 
  }

}
