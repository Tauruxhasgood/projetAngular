import { Component, Input, OnInit } from '@angular/core';
import { FiliereService } from '../filiere/filiere.service';
import { Filiere } from '../interfaces/filiere.interface';

@Component({
  selector: 'update-filiere',
  templateUrl: './update-filiere.component.html',
  styleUrls: ['./update-filiere.component.css']
})
export class UpdateFiliereComponent implements OnInit {

 @Input() filiere: Filiere | null = null;

 filiereId: number = 0;

  filieres: Filiere = {
    libelle: "",
    stagiaires: []
  }

  constructor(private filiereService: FiliereService) { }

  ngOnInit(): void {
  }

  handleSubmit(){
    console.log("submit form ...");
    this.filiereService
    .getFiliereId(this.filiere?.id)
    .subscribe((res) => {
      console.log(res);
    }) 
  }
}
