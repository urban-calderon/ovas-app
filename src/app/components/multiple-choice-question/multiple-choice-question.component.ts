import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  standalone: false,
  templateUrl: './multiple-choice-question.component.html',
  styles: ``
})
export class MultipleChoiceQuestionComponent {

  @Input() question: string = '';
  @Input() options: string[] = [];
  @Input() correctIndex: number = 0;

  public selectedOption: number | null = null;
  public isAnswered: boolean = false;
  public isCorrect: boolean = false;
  public feedbackMessage: string = '';

  submitAnswer() {
    if (this.selectedOption === null) return;

    this.isAnswered = true;
    this.isCorrect = this.selectedOption === this.correctIndex;

    if (this.isCorrect) {
      this.feedbackMessage = '¡Excelente! Respuesta correcta.';
    } else {
      this.feedbackMessage = 'Incorrecto. Intenta revisar el contenido nuevamente.';
    }
  }

  reset() {
    this.selectedOption = null;
    this.isAnswered = false;
    this.feedbackMessage = '';
  }
}
