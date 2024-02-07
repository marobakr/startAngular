import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-maintitle',
  templateUrl: './maintitle.component.html',
  styleUrls: ['./maintitle.component.css'],
})
export class MaintitleComponent {
  @Input() darkColor: string = '';
}
