import { Component } from '@angular/core';
import { Apresentacao, Slide } from './model/slide.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'ng-showy';

  apresentacao = new Apresentacao();

  ngOnInit(): void {
    // Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    // Add 'implements OnInit' to the class.
    const slide1 = new Slide();
    slide1.titulo = 'Blábláblá';
  }

}
