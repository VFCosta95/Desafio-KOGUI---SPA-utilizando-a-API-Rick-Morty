import { Component, HostListener, OnInit } from '@angular/core';
import { RickMortyService } from 'src/app/service/rick-morty.service'

@Component({
  selector: 'app-localizacao',
  templateUrl: './localizacao.component.html',
  styleUrls: ['./localizacao.component.css']
})
export class LocalizacaoComponent implements OnInit {

  localizacao: any[] = [];
  pagina: number = 1;
  pesquisa: string = '';
  loading: boolean = false;

  constructor(private api: RickMortyService) { }

  ngOnInit(): void {
    this.carregarLocalizacao();
  }

  carregarLocalizacao() {
    this.api.ObterLocalizacao(this.pagina).subscribe(data => {
      this.localizacao = [...this.localizacao, ...data.results];
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
        this.localizacao = [...this.localizacao, ...data.results];
        this.loading = false;
      }, () => {
        this.loading = false;
      });
    }, 4000);
  }

  pesquisarLocalizacao(pesquisaOn: string) {
    this.pagina = 1;
    this.localizacao = [];
    this.pesquisa = pesquisaOn;
    this.api.procurarPersonagem(pesquisaOn, this.pagina).subscribe(data => {
      this.localizacao = data.results;
    });
  }

  // Objeto para armazenar os detalhes do item
  modalItem: any = {};

  // Definindo o Item para exibição
  openModal(item: any) {
    this.modalItem = item;

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

  data = {
    created: '2017-11-04T18:48:46.250Z'
  };

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(); // Apenas a data no formato local
  }

}
