import { Injectable } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { BehaviorSubject, filter } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  private pages = ['/introduccion', '/objetivos', '/contenido', '/actividad'];
  private currentIndexSubject = new BehaviorSubject<number>(0);
  currentIndex$ = this.currentIndexSubject.asObservable();

  constructor(private router: Router) {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event: any) => {
      const url = event.urlAfterRedirects;
      const index = this.pages.indexOf(url);
      if (index !== -1) {
        this.currentIndexSubject.next(index);
      }
    });
  }

  nextPage() {
    const currentIndex = this.currentIndexSubject.value;
    if (currentIndex < this.pages.length - 1) {
      this.router.navigate([this.pages[currentIndex + 1]]);
    }
  }

  prevPage() {
    const currentIndex = this.currentIndexSubject.value;
    if (currentIndex > 0) {
      this.router.navigate([this.pages[currentIndex - 1]]);
    }
  }

  // Helpers para el estado de los botones
  get isFirstPage(): boolean {
    return this.currentIndexSubject.value === 0;
  }

  get isLastPage(): boolean {
    return this.currentIndexSubject.value === this.pages.length - 1;
  }
}
