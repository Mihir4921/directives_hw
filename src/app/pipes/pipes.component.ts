import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrl: './pipes.component.scss',
})
export class PipesComponent {
  newDate = new Date();

  str = 'aBCdEfGhIJk';

  trainer = { name: 'JR', occ: 'trainer' };

  phoneNumber = '1234567890';
}
