export class Slide {
  titulo = '';
  imgSrc = '';
  corHexadecimal = '';
  itens = new Array<ItemSlide>();
}


export abstract class ItemSlide {
  ordem = 0;
}

export class ListaTexto extends ItemSlide {
  public textos = new Array<String>();

  constructor(primeiroTexto: string, ...demaisTextos: string[]) {
    super();
    this.textos.push(primeiroTexto);
    demaisTextos.forEach(texto => this.textos.push(texto));
  }
}

export class Imagem extends ItemSlide {
  public imgSrc = '';

  constructor(imgSrc: string) {
    super();
    this.imgSrc = imgSrc;
  }


}

export class Apresentacao {
  public slides = new Array<Slide>();
  public possuiIndice = true;
}
