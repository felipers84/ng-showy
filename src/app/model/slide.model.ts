export class Slide {
  titulo = '';
  imgSrc = '';
  itens = new Array<ItemSlide>();
}

export class PaginaSlide {
  slide = new Slide();
  pagina = 0;
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
  public slides = new Array<PaginaSlide>();
  public possuiIndice = true;
}
