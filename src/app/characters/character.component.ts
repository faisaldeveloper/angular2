import { Component, Input } from '@angular/core';
import { Character, Car } from './character.service';

@Component({
  //moduleId: module.id,
  selector: 'story-character',
  template: `<h3 *ngIf="character">You selected {{character.name}}</h3>
  <h3 *ngIf="car">You selected {{car.name}}</h3>`,
})
export class CharacterComponent {
  @Input() character: Character;
  @Input() car: Car;
}
