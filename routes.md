# execute.js
## Bem-vindo ao execute.js! Este arquivo fornece as rotas necessárias para executar as chamadas disponíveis.

#### 1) CHAMADA PARA LISTAR TODOS OS CONTAINERS DA VM EM ORDEM ALFABÉTICA
   
```bash
curl -X GET http://endereco-do-servidor:porta/listcontainers -H "x-token: SEU_TOKEN_AQUI"
```

#### 2) CHAMADA PARA LISTAR OS CONTAINERS PARADOS EM ORDEM ALFABÉTICA

```bash
curl -X GET http://endereco-do-servidor:porta/listexited -H "x-token: SEU_TOKEN_AQUI"
```

#### 3) CHAMADA PARA LISTAR APLICAR RESTART EM UM CONTAINER ESPECÍFICO

```bash
curl -X POST http://endereco-do-servidor:porta/restartcontainer -H "x-token: SEU_TOKEN_AQUI" -H "Content-Type: application/json" -d '{"Nome do container": "NOME_DO_CONTAINER"}'
```

#### 4) CHAMADA PARA EXCLUIR UM CONTAINER ESPECÍFICO

```bash
curl -X POST http://endereco-do-servidor:porta/deletecontainer -H "x-token: SEU_TOKEN_AQUI" -H "Content-Type: application/json" -d '{"Nome do container": "NOME_DO_CONTAINER"}'
```

#### 5) CHAMADA PARA EXECUTAR QUALQUER COMANDO NA VM

```bash
curl -X POST http://endereco-do-servidor:porta/executar -H "x-token: SEU_TOKEN_AQUI" -H "Content-Type: application/json" -d '{"Comando": "COMANDO_AQUI"}'
```

#### 6) CHAMADA PARA CONSULTAR STATUS DE CONSUMO DA VM (MEMÓRIA E VCPU)

```
curl -X GET http://endereco-do-servidor:porta/globalstatus -H "x-token: SEU_TOKEN_AQUI"
```

