## Bem-vindo ao execute.js! Este arquivo fornece as chamadas necessárias para executar as chamadas disponíveis.

# execute.js

#### 1) CHAMADA PARA LISTAR TODOS OS CONTAINERS DA VM EM ORDEM ALFABÉTICA
   
```bash
curl -X GET http://endereco-do-servidor:porta/listcontainers
```

#### 2) CHAMADA PARA LISTAR OS CONTAINERS PARADOS EM ORDEM ALFATBÉTICA

```bash
curl -X GET http://endereco-do-servidor:porta/listexited
```

#### 3) CHAMADA PARA LISTAR APLICAR RESTART EM UM CONTAINER ESPECÍFICO

```bash
curl -X POST -H "Content-Type: application/json" -d '{"Nome do container": "nomedocontainer"}' http://endereco-do-servidor:porta/restartcontainer
```

#### 4) CHAMADA PARA EXCLUIR UM CONTAINER ESPECÍFICO

```bash
curl -X POST -H "Content-Type: application/json" -d '{"Nome do container": "nomedocontainer"}' http://endereco-do-servidor:porta/deletecontainer
```

#### 5) CHAMADA PARA EXECUTAR QUALQUER COMANDO NA VM

```bash
curl -X POST -H "Content-Type: application/json" -d '{"Comando": "comando-a-ser-executado"}' http://endereco-do-servidor:porta/executar
```
