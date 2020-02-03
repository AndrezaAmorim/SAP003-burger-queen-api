# Burger Queen - Back-end

## 1. Preâmbulo

O front-end da aplicação Burger Queen já está criado, agora precisamos de um back-end para manejar os dados.

Neste caso, isso será feito através de uma _API rest_ que será compatível com as requisições vindas do front.

## 2. Resumo do projeto

Como back-end, nesse caso nos referimos a um _servidor web_, que é basicamente um programa que _ouve_ o que acontece na aplicação através de uma porta de rede, pela qual podemos enviar _requisições_ (_requests_) e obter _respostas_ (_responses_).

Um servidor web deve _manejar_ as requisições que chegam e devolver respostas a elas, que serão enviadas de volta ao _cliente_. Quando falamos de _aplicações de servidor_, isso implica uma arquitetura de _cliente/servidor_, onde o cliente é um programa que faz requisições através de uma rede (por exemplo o navegador, o cURL, etc) e o servidor é o programa que recebe essas requisições e as responde.

Neste projeto vamos partir de um _boilerplate_ que já contém a estrutura básica do projeto (para criar essa estrutura, utilizamos o comando para criação de _boilerplates_ básicos do Sequelize). 

Entre os arquivos, incluímos um `docker-compose.yml`. Isso significa que, neste projeto, foi utilizado os serviços de "containerização" do _Docker_. Resumindo: Um serviço de container, como _Docker_ ou _Kubernetes_, serve para, principalmente, garantir que os ambientes de desenvolvimento e produção sejam exatamente os mesmos, não importa em que sistemas operacional/versão funciona o computador da desenvolvedora. O _Docker_ cria uma máquina virtual onde podemos definir sistema operacional e versões de softwares, entre outras coisas.


## 3. HTTP API

#### `/products`

* [ ] `GET /products`
* [ ] `GET /products/:productid`
* [ ] `POST /products`
* [ ] `PUT /products/:productid`
* [ ] `DELETE /products/:productid`

#### `/orders`

* [ ] `GET /orders`
* [ ] `GET /orders/:orderid`
* [ ] `POST /orders`
* [ ] `PUT /orders/:orderid`
* [ ] `DELETE /orders/:orderid`

#### `/ordersItens`

* [ ] `GET /ordersItens`
* [ ] `GET /ordersItens/:ordersItensid`
* [ ] `POST /ordersItens`
* [ ] `PUT /ordersItens/:ordersItensid`
* [ ] `DELETE /ordersItens/:ordersItensid`

## 4. Tecnologias utilizadas

* Api
* Node.js
* Sequelize
* PostgreSQL
* Postman
* DBeaver
* Docker
* Heroku
* JavasScript (ES6)
* HTML5