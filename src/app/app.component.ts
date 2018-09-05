import {Component, HostListener, ViewEncapsulation} from '@angular/core';
import {Apresentacao, Imagem, ListaTexto, Slide} from './model/slide.model';

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
    const listaTexto1 = new ListaTexto();
    listaTexto1.textos.push('Tópico 1');
    listaTexto1.textos.push('Tópico 2');
    slide1.itens.push(listaTexto1);

    const slide2 = new Slide();
    slide2.titulo = 'Blábláblá 2';
    slide2.corHexadecimal = '#0f0';
    const imagemSlide2 = new Imagem();
    imagemSlide2.imgSrc = `https://upload.wikimedia.org/wikipedia/commons/d/d9/São_Paulo_City.jpg`;
    slide2.itens.push(imagemSlide2);
    slide2.itens.push(listaTexto1);
    slide2.itens.push(imagemSlide2);
    this.apresentacao.slides.push(slide1);
    this.apresentacao.slides.push(slide2);
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
