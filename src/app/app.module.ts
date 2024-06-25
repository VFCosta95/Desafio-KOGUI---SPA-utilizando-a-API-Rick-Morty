import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';


import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { DashbordComponent } from './pages/dashbord/dashbord.component';
import { PersonagensComponent } from './pages/personagens/personagens.component';
import { LocalizacaoComponent } from './pages/localizacao/localizacao.component';
import { EpisodiosComponent } from './pages/episodios/episodios.component';
import { MenuComponent } from './components/menu/menu.component';
import { PaginaPerfilComponent } from './pages/pagina-perfil/pagina-perfil.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PersonagemDetalheComponent } from './detalhes/personagem-detalhe/personagem-detalhe.component';
import { CriarUserComponent } from './pages/criar-user/criar-user.component';
import { AuthService } from 'src/app/service/auth.service';
import { TabBarComponent } from './components/tab-bar/tab-bar.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashbordComponent,
    PersonagensComponent,
    LocalizacaoComponent,
    EpisodiosComponent,
    MenuComponent,
    PaginaPerfilComponent,
    PersonagemDetalheComponent,
    CriarUserComponent,
    TabBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    ReactiveFormsModule
  ],
  exports: [
    MenuComponent,
    CriarUserComponent,
    LoginComponent
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
