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
}

export class Imagem extends ItemSlide {
  public imgSrc = '';
}

export class Apresentacao {
  public slides = new Array<Slide>();
  public possuiIndice = true;
}
