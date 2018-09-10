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

  private _numeroSlideAtual = 0;

  set numeroSlideAtual(valor: number) {
    this._numeroSlideAtual = valor;
    this.ocultarTodosOsItensDeTodosOsSlides();
  }

  get numeroSlideAtual(): number {
    return this._numeroSlideAtual;
  }

  private ocultarTodosOsItensDeTodosOsSlides() {
    this.apresentacao.slides.forEach(slide => slide.itens.forEach(itemSlide => itemSlide.visible = false));
  }

  private ExibirProximoItemSlide(numeroSlide): boolean {
    const proximoItemSlide = this.apresentacao.slides[numeroSlide].itens.find(i => !i.visible);
    if (proximoItemSlide) {
      proximoItemSlide.visible = true;
    }
    return proximoItemSlide != null;
  }

  @HostListener('document:keyup', ['$event'])
  handleKeyboardEvent(event: KeyboardEvent) {
    console.log(event);
    switch (event.key) {
      case 'ArrowRight':
        if (!this.ExibirProximoItemSlide(this._numeroSlideAtual)) {
          if (this.apresentacao.slides.length - 1 > this.numeroSlideAtual) {
            this.numeroSlideAtual++;
          }
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
    slide1.titulo = 'HOJE VAMOS FALAR DE...';
    slide1.corHexadecimal = '#f00';
    slide1.itens.push(new Texto('Angular e tecnologias SPA'));
    slide1.itens.push(new Texto('NODEJS / EXPRESS / SOCKET.IO'));
    slide1.itens.push(new Texto('SCSS/UGLIFY/GULP'));
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
    slide3.itens.push(new Texto('Afinal...'));
    slide3.itens.push(new Texto('Para que serve o Angular 6?'));
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
