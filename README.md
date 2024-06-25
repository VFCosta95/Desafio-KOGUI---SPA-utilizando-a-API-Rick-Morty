# Documentação da Single Page Application (SPA) - Rick & Morty Dashboard

## Visão Geral
A SPA Rick & Morty Dashboard é uma aplicação web desenvolvida para fornecer uma interface interativa e responsiva que permite aos usuários explorar informações sobre personagens, locais e episódios da série animada Rick & Morty. Utiliza a API pública Rick & Morty para consumir e exibir dados atualizados em tempo real.

## Funcionalidades Principais:

### Página de Listagem
- Apresenta uma lista paginada e filtrável de personagens, locais e episódios da série.
- Implementação de scroll infinito para carregar automaticamente mais itens ao rolar a página.

### Página de Detalhes
- Acessível ao clicar em um item específico da listagem.
- Exibe informações detalhadas do personagem, local ou episódio selecionado.

### Barra de Busca
- Permite aos usuários buscar por personagens, locais ou episódios através de uma barra de busca integrada.
- Os resultados são filtrados dinamicamente conforme o usuário digita.

### Autenticação
- Funcionalidade de criar conta e login para acessar recursos exclusivos da aplicação.
- Após o login, o nome do usuário é exibido na interface para personalização da experiência.

### Página de Perfil
- Permite aos usuários visualizar suas informações pessoais após o login.

## Tecnologias Utilizadas
- Frontend: Desenvolvido com HTML, CSS (utilizando o framework Bootstrap para estilização rápida e responsiva), e Angular para a estruturação dinâmica da interface do usuário.
- Autenticação: Implementada para proteger rotas e garantir acesso seguro às funcionalidades de perfil e dados personalizados.

## Fluxo de Interação do Usuário

### Visitante
- Explora a página inicial com a listagem de personagens, locais e episódios.
- Utiliza a barra de busca para encontrar informações específicas.
- Clica em um item da lista para visualizar detalhes adicionais na página correspondente.

### Usuário Logado
- Realiza login com credenciais pessoais.
- Após autenticação bem-sucedida, é saudado pelo nome na interface.
- Acesse a página de perfil para gerenciar suas informações pessoais e configurações.

# Considerações Finais
A SPA Rick & Morty Dashboard é projetada para oferecer uma experiência de usuário intuitiva e eficiente ao explorar e interagir com os dados da série Rick & Morty. Utilizando tecnologias modernas e práticas, visa proporcionar acesso rápido e seguro às informações desejadas, mantendo uma aparência profissional e responsiva em diferentes dispositivos e tamanhos de tela.
