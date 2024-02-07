import { Component, HostListener, Renderer2, ElementRef } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent {
  constructor(private renderer: Renderer2, private el: ElementRef) {}
  AllLinks: string[] = ['about', 'portfolio', 'contact'];
  isScroll: boolean = false;

  @HostListener('window:scroll', ['$event'])
  onScroll(event: Event): void {
    // Get the scroll position
    const scrollY = window.scrollY || document.documentElement.scrollTop;

    // Add a CSS class when scrolling
    if (scrollY > 150) {
      // Adjust the scroll threshold as needed
      this.isScroll = true;
    } else {
      this.isScroll = false;
    }
  }
}
