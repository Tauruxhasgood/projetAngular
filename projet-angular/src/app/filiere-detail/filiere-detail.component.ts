import { Component, Input, OnInit } from '@angular/core';
import { FiliereService } from '../filiere/filiere.service';
import { Filiere } from '../interfaces/filiere.interface';

@Component({
  selector: 'filiere-detail',
  templateUrl: './filiere-detail.component.html',
  styleUrls: ['./filiere-detail.component.css']
})
export class FiliereDetailComponent implements OnInit {
  @Input() filiere: Filiere | null = null;
  filiereId: number = 0;
  filieres: Filiere[] = [];

  constructor(private filiereService: FiliereService) { }

  ngOnInit(): void {

  }

  handleClick(){
    this.filiereService
    .getFiliereId(this.filiereId)
    .subscribe((data: Filiere[]) => {
      console.log(data);
      this.filieres = data;
      
    })
  }

}
