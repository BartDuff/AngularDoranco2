import { Component, OnInit } from '@angular/core';
import { Stagiaire } from '../stagiaire';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {
  stagiaire = new Stagiaire(1, "Florian", "Angular");
  matieres = ["Angular", "C#", "Node.js"];
  constructor() { }
  stagiaires = [];
  ngOnInit() {
  }

  onSubmit(form: NgForm){
    var stag = new Stagiaire(form.value.Numero, form.value.nom, form.value.matiere);
    this.stagiaires.push(stag);
  }

}
