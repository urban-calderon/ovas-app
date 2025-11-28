import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styles: ``
})
export class HeaderComponent {

  @Input()
  public lessonTitle: string = '';
}
