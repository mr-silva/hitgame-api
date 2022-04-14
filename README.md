# Hitgame Backend Challenge

### Desafio

Implementar uma API mínima e funcional que permita o cadastramento
de jogadores e clubes de Futebol.

### Como utilizar

Para iniciar você deve instalar as dependências:

```zsh
foo@bar:~$ npm i
ou
foo@bar:~$ yarn
```

Em seguida você poderá executar exemplos de utilização do sistema criado através do comando:

```zsh
foo@bar:~$ npm run dev
ou
foo@bar:~$ yarn dev
```

:warning: É necessário executar a migration que está na pasta `resources/migrations/V1.0__initial.sql` para criar o banco de dados.

### Rotas da aplicação

Abaixo uma breve explicação de como utilizar as rotas disponíveis na aplicação:

- **`GET /player`**: Essa rota deve retornar uma listagem com todos os jogadores, caso existam:

_Retorno esperado_

```json
[
  {
    "id": "990bee75-45d2-4a57-9733-84b04e4426cc",
    "name": "Messi",
    "position": "STRIKER",
    "height": 1.7,
    "weight": 60,
    "hasTeam": true,
    "team": {
      "id": "2eec1b8b-8987-4cf8-80c5-a6a604009d07",
      "name": "Grêmio",
      "state": "RS"
    }
  },
  {
    "id": "dfa88a66-463b-4e55-94c6-f41e24e74eb2",
    "name": "Neymar",
    "position": "STRIKER",
    "height": 1.75,
    "weight": 68,
    "hasTeam": false,
    "team": null
  }
]
```

- **`GET /player/:id`**: A rota deve receber `id` como parâmetro, sendo `id` o id do jogador. Essa rota deve retornar um jogador, caso exista.

_Retorno esperado_

```json
{
  "id": "990bee75-45d2-4a57-9733-84b04e4426cc",
  "name": "Messi",
  "position": "STRIKER",
  "height": 1.7,
  "weight": 60,
  "hasTeam": true,
  "team": {
    "id": "2eec1b8b-8987-4cf8-80c5-a6a604009d07",
    "name": "Grêmio",
    "state": "RS"
  }
}
```

_Retorno de Erro (Jogador NÃO existe)_

```json
{
  "code": "404.playerNotFoundError",
  "message": "Player not found.",
  "details": []
}
```

- **`POST /player`**: Essa rota deve criar um jogador:

_Payload de Criação_

```json
{
  "name": "string | required | Nome do jogador.",
  "position": "enum('STRIKER', 'MIDFIELD', 'FULLBACK', 'DEFENDER', GOALKEEPER') | required | Posição do jogador.",
  "height": "float (min(1.4) | max(2.5)) | required  | Altura do jogador.",
  "weight": "float (min(30) | max(170)) | required | Peso do jogador."
}
```

_Retorno esperado_

```json
{
  "id": "990bee75-45d2-4a57-9733-84b04e4426cc",
  "name": "Messi",
  "position": "STRIKER",
  "height": 1.7,
  "weight": 60,
  "hasTeam": false,
  "team": null
}
```

- **`PUT /player/:id/assign-team/:teamId`**: A rota deve receber `id` e `teamId` como parâmetro, sendo `id` o id do jogador e `teamId` o id do Time para vincular o jogador. Essa rota deve vincular um jogador a um time e retornar os dados do jogador:

_Retorno esperado_

```json
{
  "id": "990bee75-45d2-4a57-9733-84b04e4426cc",
  "name": "Messi",
  "position": "STRIKER",
  "height": 1.7,
  "weight": 60,
  "hasTeam": true,
  "team": {
    "id": "2eec1b8b-8987-4cf8-80c5-a6a604009d07",
    "name": "Grêmio",
    "state": "RS"
  }
}
```

_Retorno de Erro (Jogador NÃO existe)_

```json
{
  "code": "404.playerNotFoundError",
  "message": "Player not found.",
  "details": []
}
```

_Retorno de Erro (Time NÃO existe)_

```json
{
  "code": "404.teamNotFoundError",
  "message": "Team not found.",
  "details": []
}
```

_Retorno de Erro (Jogador JÁ vinculado a outro time)_

```json
{
  "code": "409.playerAlreadyHasTeamError",
  "message": "Player already assigned to a team.",
  "details": []
}
```

- **`PUT /player/:id/remove-team`**: A rota deve receber `id` como parâmetro, sendo `id` o id do jogador. Essa rota deve remover o vínculo de um jogador com um time e retornar os dados do jogador:

_Retorno esperado_

```json
{
  "id": "990bee75-45d2-4a57-9733-84b04e4426cc",
  "name": "Messi",
  "position": "STRIKER",
  "height": 1.7,
  "weight": 60,
  "hasTeam": false,
  "team": null
}
```

_Retorno de Erro (Jogador NÃO existe)_

```json
{
  "code": "404.playerNotFoundError",
  "message": "Player not found.",
  "details": []
}
```

- **`GET /team`**: Essa rota deve retornar uma listagem com todos os times, caso existam:

_Retorno esperado_

```json
[
  {
    "id": "0958322f-fd4a-4591-a020-a1b2229e5c52",
    "name": "Palmeiras",
    "openningDate": "1900-10-10T03:06:28.000Z",
    "state": "SP",
    "numberOfPlayers": 0
  },
  {
    "id": "2eec1b8b-8987-4cf8-80c5-a6a604009d07",
    "name": "Grêmio",
    "openningDate": "1903-09-15T03:06:28.000Z",
    "state": "RS",
    "numberOfPlayers": 1
  }
]
```

- **`GET /team/:id`**: A rota deve receber `id` como parâmetro, sendo `id` o id do time. Essa rota deve retornar um time, caso exista.

_Retorno esperado_

```json
{
  "id": "2eec1b8b-8987-4cf8-80c5-a6a604009d07",
  "name": "Grêmio",
  "openningDate": "1903-09-15T03:06:28.000Z",
  "state": "RS",
  "numberOfPlayers": 1,
  "roster": [
    {
      "id": "990bee75-45d2-4a57-9733-84b04e4426cc",
      "name": "Messi",
      "position": "STRIKER",
      "height": 1.7,
      "weight": 60
    }
  ]
}
```

_Retorno de Erro (Time NÃO existe)_

```json
{
  "code": "404.teamNotFoundError",
  "message": "Team not found.",
  "details": []
}
```

- **`POST /player`**: Essa rota deve criar um jogador:

_Payload de Criação_

```json
{
  "name": "string | required | Nome do time.",
  "openningDate": "date | required | Data de inauguração do time.",
  "state": "enum('AC', 'AL', 'AM', 'AP', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MG', 'MS', 'MT', 'PA', 'PB', 'PE', 'PI', 'PR', 'RJ', 'RN', 'RO', 'RR', 'RS', 'SC', 'SE', 'SP', 'TO') |required | Estado do time."
}
```

_Retorno esperado_

```json
{
  "id": "2eec1b8b-8987-4cf8-80c5-a6a604009d07",
  "name": "Grêmio",
  "openningDate": "1903-09-15T03:06:28.000Z",
  "state": "RS",
  "numberOfPlayers": 0,
  "roster": []
}
```
