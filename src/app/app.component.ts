import { Component, HostListener, ViewEncapsulation } from '@angular/core';
import { Apresentacao, Imagem, Texto, Slide } from './model/slide.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent {

  title = 'ng-showy';

  apresentacao = new Apresentacao();

  numeroSlideAtual = 0;

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    switch (event.key) {
      case 'ArrowRight':
        if (this.apresentacao.slides.length - 1 > this.numeroSlideAtual) {
          this.numeroSlideAtual++;
        }
        break;
      case 'ArrowLeft':
        if (this.numeroSlideAtual > 0) {
          this.numeroSlideAtual--;
        }
        break;
    }
  }

  ngOnInit(): void {
    const slide1 = new Slide();
    slide1.titulo = 'Blábláblá';
    slide1.corHexadecimal = '#f00';
    slide1.itens.push(new Texto('Tópico 1'));
    slide1.itens.push(new Texto('Tópico 2'));
    slide1.itens.push(new Texto('Tópico 3'));
    this.apresentacao.slides.push(slide1);

    const slide2 = new Slide();
    slide2.titulo = 'Blábláblá 2';
    slide2.corHexadecimal = '#0f0';
    slide2.itens.push(new Imagem(`https://upload.wikimedia.org/wikipedia/commons/d/d9/São_Paulo_City.jpg`));

    slide2.itens.push(new Imagem(`https://upload.wikimedia.org/wikipedia/commons/d/d9/São_Paulo_City.jpg`));

    this.apresentacao.slides.push(slide2);

    const slide3 = new Slide();
    slide3.titulo = 'Terceiro slide';
    slide3.corHexadecimal = '#f0f';
    slide3.itens.push(new Texto('Afinal, para que serve o Angular 6?'));
    slide3.itens.push(new Imagem('https://media1.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif'));
    this.apresentacao.slides.push(slide3);

  }

  public classeSlide(idx: number) {
    if (idx === this.numeroSlideAtual) {
      return 'container-slide';
    }
    if (idx > this.numeroSlideAtual) {
      return 'container-slide oculto depois';
    }

    return 'container-slide oculto antes';
  }
}
