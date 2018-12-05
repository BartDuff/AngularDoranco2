import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Projet1';
  name = 'Florian';
  surname = 'Bartkowiak';
  num1 = 0;
  jours = ["Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi"];
  x = 19;
  birthday = new Date(1988, 5, 15);
  stagiaires = [
    {id: 1, nom: "Emma", prenom: "Thomas", age: 15},
    {id: 2, nom: "Antoine", prenom: "Simon", age: 23},
    {id: 3, nom: "Elodie", prenom: "John", age: 80},
    {id: 4, nom: "Dupond", prenom: "Caroline", age: 7},
  ];

  afficher(){
    console.log(`le prénom est ${this.name} et le nom est ${this.surname}`);
  }
  
  afficherNum(){
    var num2 = this.num1*this.num1;
    document.getElementById('num').innerHTML = num2.toString();
  }

  editer(champ){
    console.log(champ);
  }
}


