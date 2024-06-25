import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'
import { RickMortyService } from 'src/app/service/rick-morty.service'

@Component({
  selector: 'app-personagem-detalhe',
  templateUrl: './personagem-detalhe.component.html',
  styleUrls: ['./personagem-detalhe.component.css']
})
export class PersonagemDetalheComponent implements OnInit {

  /* Guardar os dados */
  dados: any = {};
  
  /* Arrumar o formato da Data */
  data = {
    created: '2017-11-04T18:48:46.250Z'
  };

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString(); 
  }

  constructor(
    private route: ActivatedRoute,
    private api: RickMortyService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id']; 
      this.buscarDados(id);
    });
  }

  /* Metodo para buscar os Dados de acordo com o id */
  buscarDados(id: number): void {
    this.api.ObterPersonagemId(id).subscribe(
      (dados: any) => {
        if (dados) {
          console.log(dados);
          this.dados = dados;
        } else {
          console.log('Nenhum dado encontrado com o ID especificado.');
        }
      },
      error => {
        console.error('Erro ao buscar dados:', error);
        console.log('Nenhum dado retornado pela busca.');
      }
    );
  }


}