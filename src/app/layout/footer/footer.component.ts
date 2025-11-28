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
    this.lessonService.currentIndex$.subscribe(index => {
      this.currentStep = index;
    });
  }
}
