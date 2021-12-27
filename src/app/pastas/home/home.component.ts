import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Noticia } from 'src/app/models/noticia';
import { NoticiaService } from 'src/app/services/noticia.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  listaNoticias = [] as Noticia[];

  constructor(private noticiaService: NoticiaService) {}

  ngOnInit() {
    this.carregarNoticias();
  }

  carregarNoticias() {
    this.noticiaService
      .getNoticias()
      .subscribe((noticiasRecebidas: Noticia[]) => {
        this.listaNoticias = noticiasRecebidas;
        console.log(this.listaNoticias);
      });
  }

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    stagePadding: 7,
    dots: false,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    items: 3,
    navText: [
      "<img src='./assets/imagens/icon_previous.png'>",
      "<img src='./assets/imagens/icon_next.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 3,
        nav: true,
        loop: true,
      },
    },
  };

  customOptions2: OwlOptions = {
    loop: true,
    autoplay: true,
    stagePadding: 7,
    dots: false,
    autoWidth: true,
    margin: 20,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav: true,
    items: 2,
    navText: [
      "<img src='./assets/imagens/icon_previous.png'>",
      "<img src='./assets/imagens/icon_next.png'>",
    ],
    responsive: {
      0: {
        items: 1,
        nav: false,
        autoWidth: false,
      },
      600: {
        items: 1,
        nav: false,
        autoWidth: false,
      },
      1000: {
        items: 2,
        nav: true,
        loop: true,
      },
    },
  };
}
