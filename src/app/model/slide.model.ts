export class Slide {
  titulo = '';
  imgSrc = '';
  corHexadecimal = '';
  itens = new Array<ItemSlide>();
}


export abstract class ItemSlide {
  ordem = 0;
  visible = false;
}

export class Texto extends ItemSlide {
  public texto = '';

  constructor(texto: string) {
    super();
    this.texto = texto;
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
