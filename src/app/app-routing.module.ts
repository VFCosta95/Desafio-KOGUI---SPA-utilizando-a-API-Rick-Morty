import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { PersonagensComponent } from './pages/personagens/personagens.component';
import { LocalizacaoComponent } from './pages/localizacao/localizacao.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { LoginComponent } from './pages/login/login.component';
import { PaginaPerfilComponent } from './pages/pagina-perfil/pagina-perfil.component';
import { PersonagemDetalheComponent } from './detalhes/personagem-detalhe/personagem-detalhe.component';
import { CriarUserComponent } from './pages/criar-user/criar-user.component';
import { TabBarComponent} from './components/tab-bar/tab-bar.component'

const routes: Routes = [
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  {path: 'dashboard', component: DashbordComponent},
  {path: 'personagens', component: PersonagensComponent},
  {path: 'localizacao', component: LocalizacaoComponent},
  {path: 'episodios', component: EpisodiosComponent},
  {path: 'login', component: TabBarComponent},
  {path: 'perfil', component: PaginaPerfilComponent},
  {path: 'personagens/:id', component: PersonagemDetalheComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
