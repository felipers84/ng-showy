import {Injectable} from '@angular/core';
import {Apresentacao, Imagem, Slide, Texto} from "./model/slide.model";

@Injectable({
  providedIn: 'root'
})
export class TxtPresentationParserService {

  constructor() {
  }


  public parsearApresentacao(conteudoTexto: string) {


    const regexParametros = /\{.*\:.*\}/gm;

    const apresentacao = new Apresentacao();

    conteudoTexto.split('\n').filter(l => l).forEach(linha => {
      if (linha.substring(0, 3) === '(i)') {
        const novaImagem = new Imagem(linha.substring(3).replace(regexParametros,''));

        const parametrosImagem = regexParametros.exec(linha);
        if ((parametrosImagem || []).length === 1) {
          const propriedades = JSON.parse(parametrosImagem[0]);
          novaImagem.visible = propriedades.visible || novaImagem.visible;
        }
        apresentacao.slides[apresentacao.slides.length - 1].itens.push(novaImagem);
      } else if (linha.substring(0, 2) === '- ') {
        apresentacao.slides[apresentacao.slides.length - 1].itens.push(new Texto(linha.substring(2)));
      } else if (linha === '[NO-TITLE]') {
        apresentacao.slides.push(new Slide(''));
      } else {

        const novoSlide = new Slide(linha.replace(regexParametros, ''));

        const parametros = regexParametros.exec(linha);

        if ((parametros || []).length=== 1) {
          const propriedades = JSON.parse(parametros[0]);
          novoSlide.corHexadecimal = propriedades.corHexadecimal || novoSlide.corHexadecimal;
        }

        apresentacao.slides.push(novoSlide);

      }
    });

    return apresentacao;


  }
}
