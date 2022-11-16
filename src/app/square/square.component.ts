import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-square',
  template: ` <button class="button">{{ value }}</button> `,
  styles: [],
})
export class SquareComponent {
  @Input() value: string = 'X';
}
