import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import 'rxjs/add/operator/map';

export class Character {
  id: number;
  name: string;
}

export class Car{	
	id:number;
	name:string;	
}

@Injectable()
export class CharacterService{

	constructor(private http: Http){}

	getCharacters(storyId: number){
		 return this.http.get('api/characters.json').map((response: Response)=> response.json().data);
	}

	getVehicles(){
		return this.http.get('api/vehicles.json').map((response: Response)=> response.json().data);
	}

}