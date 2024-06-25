import { Component, HostListener, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/service/rick-morty.service'

@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.css']
})

export class PersonagensComponent implements OnInit {

  personagem: any[] = [];
  pagina: number = 1;
  pesquisa: string = '';
  loading: boolean = false;

  constructor(private api: RickMortyService) { }

  /* inicia Carregando os Personagens */
  ngOnInit(): void {
    this.carregarPersonagem();
  }

  /* Metodo para Carregar os Personagens */
  carregarPersonagem() {
    this.api.ObterPersonagem(this.pagina).subscribe(data => {
      this.personagem = [...this.personagem, ...data.results];
      console.log(data)
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.scrollInfinito();
    }
  }

  /* Função Scrool Infinito */
  scrollInfinito() {
    if (this.loading) return;
    this.loading = true;

    /* Metodo para Carregamento das outras Páginas */
    setTimeout(() => {
      this.pagina++;
      this.api.procurarPersonagem(this.pesquisa, this.pagina).subscribe(data => {
        this.personagem = [...this.personagem, ...data.results];
        this.loading = false;
      }, () => {
        /* Em caso de erro, redefinir o estado de loading */
        this.loading = false;
      });
      /* Duração 2 segundos */
    }, 2000);
  }

  /* Metodo para Pesquisar os personagens */
  pesquisarPersonagem(pesquisaOn: string) {
    this.pagina = 1;
    this.personagem = [];
    this.pesquisa = pesquisaOn;
    this.api.procurarPersonagem(pesquisaOn, this.pagina).subscribe(data => {
      this.personagem = data.results;
    });
  }

}
