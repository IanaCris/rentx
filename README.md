# Rentx

<h1 name="sobre">ℹ Sobre o Projeto</h1>
Uma API em NodeJS que gerencia aluguéis de carros 🎯

- ### **Pré-requisitos**

  - É **necessário** possuir o **[Node.js](https://nodejs.org/en/)** instalado no computador
  - É **necessário** possuir o **[Git](https://git-scm.com/)** instalado e configurado no computador
  - Também, é **preciso** ter um gerenciador de pacotes seja o **[NPM](https://www.npmjs.com/)** ou **[Yarn](https://yarnpkg.com/)**.

```bash
# Clone Repository
$ git clone https://github.com/IanaCris/rentx.git
```

<h3 name='api'>📦 Instala as Dependências</h3><br>

```bash
# Vá até a pasta
$ cd rentx
# Instale as dependências
$ yarn # ou npm install
```

## 📌 Requisitos

- **Cadastro de Carro**

    *Requisito Funcional:*

    - [x] Deve ser possivel cadastrar um novo carro

    *Requisito Não Funcional:*
    
    - [x] Não deve ser possivel cadastrar um carro com uma placa já existente
    - [x] O carro deve ser cadastrado, por padrão com disponibilidade 
    - [x] O usuário responsável pelo cadastro deve ser um usuário administrador

- **Listagem de Carros**

    *Requisito Funcional:*

    - [x] Deve ser possível listar todos os carros disponíveis
    - [x] Deve ser possível listar todos os carros disponíveis pelo nome da categoria
    - [x] Deve ser possível listar todos os carros disponíveis pelo nome da marca 
    - [x] Deve ser possível listar todos os carros disponíveis pelo nome do carro

    *Requisito Não Funcional:*

    - [x] O usuário não precisa estar logado no sistema

- **Cadastro de Especificação do Carro**

    *Requisito Funcional:*

    - [x] Deve ser possível cadastrar uma especificação para um carro

    *Requisito Não Funcional:*

    - [x] Não deve ser possível cadastrar uma especificação para um carro não cadastrado
    - [x] Não deve ser possível cadastrar uma especificação já existente para o mesmo carro
    - [x] O usuário responsável pelo cadastro deve ser um usuário administrador

- **Cadastro de imagens do carro**

    *Requisito Funcional:*

    - [x] Deve ser possível cadastrar a imagem do carro

    *Requisito Não Funcional:*

    - [x] Utilizar o multer para upload dos arquivos
    - [x] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro
    - [x] O usuário responsável pelo cadastro deve ser um usuário administrador

- **Cadastro de Aluguel de carro**

    *Requisito Funcional:*

    - [x] Deve ser possível cadastrar um aluguel

    *Requisito Não Funcional:*

    - [x] O aluguel deve ter duração mínima de 24 horas
    - [x] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
    - [x] Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
    - [x] O usuário deve estar logado na aplicação
    - [x] Ao realizar um aluguel, o status do carro deverá ser alterado para indisponível

- **Devolução do carro de Aluguel**

    *Requisito Funcional:*

    - [x] Deve ser possível realizar a devolução de um carro de aluguel

    *Requisito Não Funcional:*

    - [x] Se o carro for devolvido com menos de 24 horas, deverá ser cobrado diária completa
    - [x] Ao realizar a devolução, o carro deverá ser liberado para outro aluguel
    - [x] Ao realizar a devolução, o usuário deverá ser liberado para outro aluguel
    - [x] Ao realizar a devolução, deverá ser calculado o total do aluguel
    - [x] Caso o horário de devolução seja supeiro ao horário previsto de entrega, deverá ser cobrado multa proporcional aos dias de atraso
    - [x] Caso haja multa, deverá ser somado ao total do aluguel.
    - [x] O usuário deve estar logado na aplicação

- **Listagem de alugueis para o usuário**

    *Requisito Funcional:*

    - [x] Deve ser possível realizar a busca de todos os aluguéis para o usuário

    *Requisito Não Funcional:*
    
    - [x] O usuário deve estar logado na aplicação

- **Recuperar Senha**

    *Requisito Funcional:*

    - [x] Deve ser possível o usuario recuperar a senha informando o email
    - [x] O usuario deve receber um email com o passo a passo para a recuperação da senha
    - [x] O usuario deve conseguir inserir uma nova senha

    *Requisito Não Funcional:*
    
    - [x] O usuário precisa informar uma nova senha
    - [x] O link enviado para a recuperação deve expirar em 3 horas
