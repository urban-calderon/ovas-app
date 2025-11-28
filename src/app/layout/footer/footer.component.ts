import { Component } from '@angular/core';
import { LessonService } from '../../services/lesson.service';

@Component({
  selector: 'app-footer',
  standalone: false,
  templateUrl: './footer.component.html',
  styles: ``
})
export class FooterComponent {

  public currentStep = 0;

  constructor(public lessonService: LessonService) {}

  ngOnInit() {
    // Suscribirse para actualizar la barra de progreso (opcional)
    this.lessonService.currentIndex$.subscribe(index => {
      this.currentStep = index;
    });
  }
}
