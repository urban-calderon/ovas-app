import { Component } from '@angular/core';

@Component({
  selector: 'activity-page',
  standalone: false,
  templateUrl: './activity.component.html',
  styles: ``
})
export class ActivityPageComponent {

  public quizData = {
    question: '¿Qué tipo de analítica se enfoca en estimar la probabilidad de que un estudiante repruebe en el futuro?',
    options: [
      'Analítica Descriptiva (¿Qué pasó?)',
      'Analítica Predictiva (¿Qué pasará?)',
      'Analítica Prescriptiva (¿Cómo podemos prevenirlo?)',
      'Analítica Diagnóstica (¿Por qué pasó?)'
    ],
    correctIndex: 1
  };
}
