import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
	selector: 'subcomp',
	template: `<h2 (click)='onClick()'> .:{{ title }}:.</h2>`,
})
export class SubComponent{
	@Input() title: string;
	@Output() notify: EventEmitter<string> = new EventEmitter<string>();

	onClick() {
    this.notify.emit('Click from child component');    
  }
}