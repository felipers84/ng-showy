import { Component } from '@angular/core';
import { Apresentacao, Slide } from './model/slide.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'ng-showy';

  apresentacao = new Apresentacao();

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    const slide1 = new Slide();
    slide1.titulo = 'Blábláblá';
    const slide2 = new Slide();
    slide2.titulo = 'Blábláblá 2';
    this.apresentacao.slides.push(slide1);
    this.apresentacao.slides.push(slide2);
  }

}
