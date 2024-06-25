import { Component, HostListener, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/service/rick-morty.service'

@Component({
  selector: 'app-episodios',
  templateUrl: './episodios.component.html',
  styleUrls: ['./episodios.component.css']
})
export class EpisodiosComponent implements OnInit {

  episodios: any[] = [];
  pagina: number = 1;
  pesquisa: string = '';
  loading: boolean = false;
  modalEpisodio: any = {};

  constructor(private api: RickMortyService) { }

  ngOnInit(): void {
    this.carregarEpisodios()
  }

  carregarEpisodios() {
    this.api.ObterEpisodio(this.pagina).subscribe(data => {
      this.episodios = [...this.episodios, ...data.results];
      console.log(data)
    });
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      this.scrollInfinito();
    }
  }

  scrollInfinito() {
    if (this.loading) return;
    this.loading = true;

    setTimeout(() => {
      this.pagina++;
      this.api.procurarPersonagem(this.pesquisa, this.pagina).subscribe(data => {
        this.episodios = [...this.episodios, ...data.results];
        this.loading = false;
      }, () => {
        this.loading = false;
      });
    }, 4000);
  }

  pesquisarEpisodios(pesquisaOn: string) {
    this.pagina = 1;
    this.episodios = [];
    this.pesquisa = pesquisaOn;
    this.api.procurarPersonagem(pesquisaOn, this.pagina).subscribe(data => {
      this.episodios = data.results;
    });
  }

  openModal(episodio: any) {
    this.modalEpisodio = episodio; // Define o episódio para exibição no modal

    // Abre o modal
    const modal = document.getElementById('detalhesModal');
    if (modal) {
      modal.classList.add('show');
      modal.style.display = 'block';
      modal.setAttribute('aria-hidden', 'false');
      document.body.classList.add('modal-open');
    }
  }

  fecharModal() {
    // Fecha o modal
    const modal = document.getElementById('detalhesModal');
    if (modal) {
      modal.classList.remove('show');
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('modal-open');
    }
  }

}
