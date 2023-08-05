import { Component } from '@angular/core';

@Component({
  selector: 'storybook-demo-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  public disabled = false;

  public buttonText = 'This is simple button!';
}
