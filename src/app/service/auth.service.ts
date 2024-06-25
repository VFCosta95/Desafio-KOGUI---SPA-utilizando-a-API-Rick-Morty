import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class AuthService {

  // BehaviorSubjects para controlar o estado de login e o usuário atual
  private loggedIn = new BehaviorSubject<boolean>(false);
  private currentUser = new BehaviorSubject<any>(null);

  constructor() {
    this.loadUserFromLocalStorage(); // Carrega o usuário do armazenamento local ao inicializar o serviço
  }

  // Método para registro de novos usuários
  register(username: string, password: string, nome: string, sobrenome: string): boolean {
    const users = this.getUsersFromLocalStorage();

    // Verifica se o usuário já existe
    if (users.some(user => user.username === username)) {
      return false; // Retorna falso se o usuário já existir
    }

    // Adiciona o novo usuário à lista
    users.push({ username, password, nome, sobrenome });
    this.saveUsersToLocalStorage(users); // Salva a lista atualizada no armazenamento local
    return true; // Retorna verdadeiro para indicar sucesso no registro
  }

  // Método para login de usuário
  login(username: string, password: string): boolean {
    const users = this.getUsersFromLocalStorage();
    const user = users.find(u => u.username === username && u.password === password);

    // Verifica se encontrou um usuário com as credenciais fornecidas
    if (user) {
      // Atualiza o estado de login para verdadeiro
      this.loggedIn.next(true);
      localStorage.setItem('loggedIn', 'true');

      // Define o usuário atual e armazena no localStorage
      this.currentUser.next(user);
      localStorage.setItem('currentUser', JSON.stringify(user));

      return true; // Retorna verdadeiro para indicar sucesso no login
    }
    return false; // Retorna falso se as credenciais forem inválidas
  }

  // Método para logout de usuário
  logout() {
    // Atualiza o estado de login para falso
    this.loggedIn.next(false);
    localStorage.removeItem('loggedIn');

    // Limpa o usuário atual
    this.currentUser.next(null);
    localStorage.removeItem('currentUser');
  }

  // Método para verificar se o usuário está logado
  isLoggedIn(): Observable<boolean> {
    const loggedIn = localStorage.getItem('loggedIn') === 'true';

    // Atualiza o BehaviorSubject com o estado atual de login
    if (loggedIn) {
      this.loggedIn.next(true);
    }

    return this.loggedIn.asObservable(); // Retorna um Observable do estado de login
  }

  // Método para obter o usuário atualmente logado
  getCurrentUser(): any {
    const userJson = localStorage.getItem('currentUser');
    return userJson ? JSON.parse(userJson) : null; // Retorna o usuário atual ou null se não houver usuário logado
  }

  // Método privado para obter a lista de usuários do armazenamento local
  private getUsersFromLocalStorage(): any[] {
    const usersJson = localStorage.getItem('users');
    return usersJson ? JSON.parse(usersJson) : []; // Retorna a lista de usuários ou um array vazio se não houver usuários salvos
  }

  // Método privado para salvar a lista de usuários no armazenamento local
  private saveUsersToLocalStorage(users: any[]) {
    localStorage.setItem('users', JSON.stringify(users)); // Converte a lista de usuários para JSON e salva no localStorage
  }

  // Método privado para carregar o usuário do armazenamento local ao inicializar o serviço
  private loadUserFromLocalStorage() {
    const user = this.getCurrentUser();
    if (user) {
      this.currentUser.next(user); // Define o usuário atual no BehaviorSubject ao carregar do localStorage
    }
  }

}

