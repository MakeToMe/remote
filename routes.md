# execute.js
## Bem-vindo ao execute.js. Este arquivo fornece as rotas necessárias para executar as chamadas disponíveis.
>1. Listar os containers em ordem alfabética
>2. Listar os containers parados em ordem alfabética
>3. Aplicar um restart em um container específico
>4. Excluir um container específico
>5. Executar qualquer comando na VM
>6. Consultar status de consumo global da VM

# ⚠️ Alerta Importante
#### A rota /executar descrita no item 5 confere amplos poderes para executar qualquer comando remotamente na VM. Portanto deve seu utilização deve ser precedida de bastante cautala para evitar o envio de comandos que possam danificar o sistema.


#### 1) CHAMADA PARA LISTAR TODOS OS CONTAINERS DA VM EM ORDEM ALFABÉTICA
   
```
curl -X GET http://endereco-do-servidor:porta/listcontainers -H "x-token: SEU_TOKEN_AQUI"
```

#### 2) CHAMADA PARA LISTAR OS CONTAINERS PARADOS EM ORDEM ALFABÉTICA

```
curl -X GET http://endereco-do-servidor:porta/listexited -H "x-token: SEU_TOKEN_AQUI"
```

#### 3) CHAMADA PARA APLICAR RESTART EM UM CONTAINER ESPECÍFICO

```
curl -X POST http://endereco-do-servidor:porta/restartcontainer -H "x-token: SEU_TOKEN_AQUI" -H "Content-Type: application/json" -d '{"Nome do container": "NOME_DO_CONTAINER"}'
```

#### 4) CHAMADA PARA EXCLUIR UM CONTAINER ESPECÍFICO

```
curl -X POST http://endereco-do-servidor:porta/deletecontainer -H "x-token: SEU_TOKEN_AQUI" -H "Content-Type: application/json" -d '{"Nome do container": "NOME_DO_CONTAINER"}'
```

#### 5) CHAMADA PARA EXECUTAR QUALQUER COMANDO NA VM

```
curl -X POST http://endereco-do-servidor:porta/executar -H "x-token: SEU_TOKEN_AQUI" -H "Content-Type: application/json" -d '{"Comando": "COMANDO_AQUI"}'
```

#### 6) CHAMADA PARA CONSULTAR STATUS DE CONSUMO DA VM (MEMÓRIA E VCPU)

```
curl -X GET http://endereco-do-servidor:porta/globalstatus -H "x-token: SEU_TOKEN_AQUI"
```

