import {Component, OnInit, Input, ViewEncapsulation} from '@angular/core';
import { ItemSlide, ListaTexto } from '../model/slide.model';

@Component({
  selector: 'app-item-slide',
  templateUrl: './item-slide.component.html',
  styleUrls: ['./item-slide.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ItemSlideComponent implements OnInit {

  @Input() item: ItemSlide;

  constructor() { }

  public get getType() {
    return this.item.constructor.name;
  }

  ngOnInit() {
  }

}
