import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  standalone: false,
  templateUrl: './sidebar.component.html',
  styles: ``
})
export class SidebarComponent {
  public menuItems = [
    { label: 'Introducción', path: '/introduccion' },
    { label: 'Objetivos', path: '/objetivos' },
    { label: 'Contenido', path: '/contenido' },
    { label: 'Actividad', path: '/actividad' }
  ];
}
