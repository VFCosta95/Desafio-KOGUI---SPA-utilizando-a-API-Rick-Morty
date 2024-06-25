import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  loginForm: FormGroup; // FormGroup para o formulário de login
  errorMessage: string | null = null; // Mensagem de erro, inicialmente nula

  constructor(
    private fb: FormBuilder, // Injetando o FormBuilder para construção do formulário
    private authService: AuthService, // Injetando o AuthService para autenticação
    private router: Router // Injetando o Router para navegação
  ) {
    // Inicializando o FormGroup no construtor
    this.loginForm = this.fb.group({
      username: ['', Validators.required], // Campo de usuário obrigatório
      password: ['', Validators.required] // Campo de senha obrigatório
    });
  }

  ngOnInit(): void {
    // Lógica de inicialização, se necessário
  }

  // Função chamada ao enviar o formulário de login
  onSubmit() {
    if (this.loginForm.valid) { // Verifica se o formulário é válido
      
      // Extrai os valores do formulário de login
      const { username, password } = this.loginForm.value;
      
      // Chama o serviço de autenticação para realizar o login
      if (this.authService.login(username, password)) {
        this.router.navigate(['/dashboard']); // Navega para a página de dashboard se o login for bem-sucedido
      } else {
        this.errorMessage = 'Credenciais inválidas!'; // Define uma mensagem de erro caso as credenciais sejam inválidas
      }
    }
  }

}
