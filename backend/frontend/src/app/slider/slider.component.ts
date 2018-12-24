import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {
  sliderArray: object[];
  selectedIndex: number;
  transform: number;

  constructor() {
    this.transform = 100;
    this.sliderArray = [];
    this.selectedIndex = 0;

    this.sliderArray.push({ text: "product1", img: "../assets/download.jpeg" });
    this.sliderArray.push({ text: "product2", img: "../assets/images.jpeg" });
    this.sliderArray.push({ text: "product3", img: "../assets/download (1).jpeg" });
  }

  ngOnInit() {
  }

  selected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  keySelected(x) {
    this.downSelected(x);
    this.selectedIndex = x;
  }

  downSelected(i) {
    this.transform = 100 - (i) * 50;
    this.selectedIndex = this.selectedIndex + 1;
    if (this.selectedIndex > 4) {
      this.selectedIndex = 0;
    }
  }
}
