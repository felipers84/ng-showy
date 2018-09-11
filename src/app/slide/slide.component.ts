import {Component, Input, OnInit, ViewEncapsulation} from '@angular/core';
import {Slide} from '../model/slide.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SlideComponent implements OnInit {

  constructor() { }


  @Input()
  public slide = new Slide('');

  public get itensSlide() {
    return this.slide.itens.sort((a, b) => a.ordem - b.ordem);
  }

  ngOnInit() { }

}
