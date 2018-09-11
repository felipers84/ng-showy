import {Component, HostListener, ViewEncapsulation} from '@angular/core';
import {Apresentacao, Imagem, Texto, Slide} from './model/slide.model';
import {TxtPresentationParserService} from "./txt-presentation-parser.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None,
  providers: [TxtPresentationParserService]
})
export class AppComponent {

  title = 'ng-showy';

  apresentacao = new Apresentacao();

  private _numeroSlideAtual = 0;

  constructor(private txtPresentationParser: TxtPresentationParserService) {

  }


  set numeroSlideAtual(valor: number) {
    this._numeroSlideAtual = valor;
    this.ocultarTodosOsItensDeTodosOsSlides();
  }

  get numeroSlideAtual(): number {
    return this._numeroSlideAtual;
  }

  parsearApresentacao(event) {
    let input = event.target;
    for (var index = 0; index < input.files.length; index++) {
      let reader = new FileReader();

      reader.onload = () => {

        this.apresentacao = this.txtPresentationParser.parsearApresentacao(reader.result);

      };

      reader.readAsText(input.files[index]);
    }
    ;
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
    const slide0 = new Slide('');
    slide0.itens.push(new Imagem(`https://media.wired.com/photos/5955a88dad90646d424bb24f/master/w_582,c_limit/Untitled-1.jpg`));
    this.apresentacao.slides.push(slide0);


    const slide1 = new Slide('HOJE VAMOS FALAR DE...');
    slide1.corHexadecimal = '#f00';
    slide1.itens.push(new Texto('Angular e tecnologias SPA'));
    slide1.itens.push(new Texto('NODEJS / EXPRESS / SOCKET.IO'));
    slide1.itens.push(new Texto('SCSS/UGLIFY/GULP'));
    slide1.itens.push(new Imagem(`https://upload.wikimedia.org/wikipedia/commons/d/d9/São_Paulo_City.jpg`));
    this.apresentacao.slides.push(slide1);

    const slide2 = new Slide('ANGULAR');
    slide2.corHexadecimal = '#0f0';

    slide2.itens.push(new Texto('Desenvolvido pelo Google'));
    slide2.itens.push(new Texto('Utiliza o conceito de SPA (Single Page Application)'));


    this.apresentacao.slides.push(slide2);

    const slide3 = new Slide('Terceiro slide');
    slide3.corHexadecimal = '#f0f';
    slide3.itens.push(new Texto('Afinal...'));
    slide3.itens.push(new Texto('Para que serve o Angular 6?'));
    slide3.itens.push(new Imagem('https://media1.giphy.com/media/26ufdipQqU2lhNA4g/giphy.gif'));
    this.apresentacao.slides.push(slide3);


    this._numeroSlideAtual = 0;
    this.ocultarTodosOsItensDeTodosOsSlides();
    this.apresentacao.slides[this._numeroSlideAtual].itens.forEach(item => item.visible = true);

    console.log('apresentacao', JSON.stringify(this.apresentacao));
    this.apresentacao = null;


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
