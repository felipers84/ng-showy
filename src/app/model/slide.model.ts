export class SlideModel {
  titulo = '';
  imgSrc = '';
}

export class PaginaSlide {
  slide = new SlideModel();
  pagina = 0;
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
  public slides = new Array<PaginaSlide>();
  public possuiIndice = true;
}
