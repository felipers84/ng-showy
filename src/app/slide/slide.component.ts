import { Component, OnInit, Input } from '@angular/core';
import { Apresentacao, Slide } from '../model/slide.model';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css']
})
export class SlideComponent implements OnInit {

  constructor() { }


  @Input()
  public slide = new Slide();


  ngOnInit() { }

}
