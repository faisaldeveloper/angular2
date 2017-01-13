import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Character, Car, CharacterService } from './character.service';
import { ChildComponent } from './child.component';


@Component({  
  selector: 'app-characters',
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.css'],
  providers: [CharacterService, ChildComponent]
})
export class CharactersComponent implements OnInit {
  @Output() changed = new EventEmitter<Character>();
  @Input() storyId: number;

  childTitle:string = 'Title from parent to child';//variable to pass data to child component template
  eventMsg;

  cars: Car[];
  selectedCar: Car;

  characters: Character[];
  selectedCharacter: Character;  

  constructor(private characterService: CharacterService) { 
  	 	
  }

  ngOnInit() {
  	 this.characterService.getCharacters(this.storyId)
      .subscribe(characters => this.characters = characters); 

     this.characterService.getVehicles().subscribe(cars => this.cars = cars);
  }

  select(selectedCharacter: Character) {
    this.selectedCharacter = selectedCharacter;
    this.changed.emit(selectedCharacter);
  }

  selectCar(selectedCar: Car){
  	this.selectedCar = selectedCar;
  }

  //handle event raised from child component template
  onNotify(message:string):void {
    this.eventMsg = message;
  }

  whenLiked(message:string):void{
  	this.eventMsg = message;
  }

}
