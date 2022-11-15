import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: ` <p>{{ value }}</p> `,
  styles: [],
})
export class SquareComponent {
  @Input() value: string = 'X';
}
