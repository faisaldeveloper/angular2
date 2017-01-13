import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'child-selector',
  templateUrl: 'child.component.html'
})
export class ChildComponent {  
  @Input() title:string;//this variable will receive value from parent component
  @Output() notify: EventEmitter<string> = new EventEmitter<string>();
  @Input() mycars:any;
  @Output() like: EventEmitter<string> = new EventEmitter<string>();

 //function to emit an event for parent component, [handled in parent component]
  onClick() {
    this.notify.emit('Click from nested component');    
  }

  onLike(){
  	this.like.emit('I am liked');
  }

}