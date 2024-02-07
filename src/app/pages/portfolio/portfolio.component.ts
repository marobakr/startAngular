import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent {
  darkColor: string = 'dark';
  urlImages: string[] = [
    './assets/port2.png',
    './assets/poert1.png',
    './assets/port3.png',
  ];
  isImageClicked: boolean = false;
  currentImage: string = '';
  currentIndex: number = 0;

  handleClickIMage(imageUrl: string): void {
    this.currentImage = imageUrl;
    this.isImageClicked = true;
    // search for array to get the current index for imge
    this.currentIndex = this.urlImages.indexOf(this.currentImage);
  }
  handleCloseImage(event: any): void {
    // check if i click out the image to close it
    if (event.target.classList.contains('overlayImage')) {
      this.isImageClicked = false;
    }
  }
  prevImage(): void {
    let prevIndex: number = --this.currentIndex;
    console.log(prevIndex);
    if (prevIndex < 0) {
      prevIndex = this.urlImages.length - 1;
    }
    let newIamge: string = this.urlImages[prevIndex];
    this.currentImage = newIamge;
    this.currentIndex = prevIndex;
    console.log(this.currentIndex);
  }
  nextImage(): void {
    let nextIndex: number = ++this.currentIndex;
    console.log(nextIndex);
    if (nextIndex >= 3) {
      nextIndex = 0;
    }
    let newIamge: string = this.urlImages[nextIndex];
    this.currentImage = newIamge;
    this.currentIndex = nextIndex;
  }
  closeImage(): void {
    this.isImageClicked = false;
  }
}
