import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.scss',
})
export class ChildComponent {
  @Input() childDataSource: any[] = ['JR', 'Miranda'];

  @Output() passValue = new EventEmitter();

  onCustomTrigger() {
    this.passValue.emit('This is triggering from child.');
  }
}
