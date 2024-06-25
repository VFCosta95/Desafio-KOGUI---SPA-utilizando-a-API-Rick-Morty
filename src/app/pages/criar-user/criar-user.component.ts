import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-user',
  templateUrl: './criar-user.component.html',
  styleUrls: ['./criar-user.component.css']
})

export class CriarUserComponent {

  registrarForm: FormGroup; // FormGroup para o formulário de registro
  erroMsg: string | null = null; // Mensagem de erro, inicialmente nula
  registroSucesso = false; // Indicador de registro bem-sucedido, inicialmente falso

  constructor(
    private fb: FormBuilder, // Injetando o FormBuilder para construção do formulário
    private authService: AuthService, // Injetando o AuthService para autenticação
    private router: Router // Injetando o Router para navegação
  ) {
    // Inicializando o FormGroup no construtor
    this.registrarForm = this.fb.group({
      username: ['', Validators.required], // Campo de usuário obrigatório
      nome: ['', Validators.required], // Campo de nome obrigatório
      sobrenome: ['', Validators.required], // Campo de sobrenome obrigatório
      password: ['', [Validators.required, Validators.minLength(6)]], // Campo de senha obrigatório e mínimo de 6 caracteres
      confirmPassword: ['', Validators.required] // Campo de confirmação de senha obrigatório
    }, { validator: this.passwordMatchValidator }); // Adicionando validador customizado para verificar correspondência de senha
  }

  // Função para validar se as senhas correspondem
  passwordMatchValidator(form: FormGroup) {
    return form.get('password')!.value === form.get('confirmPassword')!.value ? null : { mismatch: true };
  }

  // Função chamada ao enviar o formulário
  onSubmit() {
    if (this.registrarForm.valid) { // Verifica se o formulário é válido

      // Extrai os valores do formulário
      const { username, password, nome, sobrenome } = this.registrarForm.value;

      // Chama o serviço de autenticação para registrar o usuário
      if (this.authService.register(username, password, nome, sobrenome)) {
        this.registroSucesso = true; // Define o registro como bem-sucedido
      } else {
        this.erroMsg = 'Usuário já existe!'; // Define uma mensagem de erro caso o usuário já exista
      }
    }
  }

  ngOnInit(): void {
    // Lógica de inicialização, se necessário
  }

}


