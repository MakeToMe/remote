## Bem-vindo ao execute.js. Esta API foi desenvolvida para permitir a execução de comandos remotamente em servidores virtuais. Abaixo, você encontrará um guia simples para instalar e começar a usar a API.

# execute.js

Passo a passo para instalação

#### 1) INSTALAR O NODE VERSION MANAGER
   
```bash
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.38.0/install.sh | bash
```

#### 2) CARREGAR AS CONFIGURAÇÕES DO NVM

```bash
source ~/.bashrc
```

#### 3) INSTALAR O NODE.JS 16.X

```bash
nvm install 16
```

#### 4) CONFIRMAR A VERSÃO DO NODE.JS

```bash
nvm use 16
```

#### 5) INSTALAR O GIT

```bash
sudo apt-get update && sudo apt-get install git
```

#### 6) REALIZAR O CLONE DO PROJETO PARA PASTA EXECUTE

```bash
git clone https://github.com/MakeToMe/remote.git execute

```

#### 7) ENTRAR NA PASTA EXECUTE

```bash
cd \execute
```

#### 8) INICIAR O PROJETO

```bash
npm init -y
```

#### 9) INSTALAR A BIBLIOTECA EXPRESS PARA CRIAR AS ROTAS

```bash
npm install express
```

#### 10) INSTALAR A BIBLIOTECA CHILD_PROCESS PARA EXECUTAR OS COMANDOS NA VM

```bash
npm install child_process
```

#### 10) INSTALAR A BIBLIOTECA BODY-PARSER PARA PROCESSAR O CORPO JSON

```bash
npm install body-parser
```

#### 11) EDITAR O ARQUIVO DO PROJETO 

```bash
nano execute.js
```

###### Insira o IP da sua VM e o seu Token de Segurança. Em seguida salve e feche o arquivo (ctrl + x) ( y ) (enter)
![image](https://github.com/MakeToMe/remote/assets/137015334/6b076595-ec17-4b97-a4e1-625c29cfbcea)


#### 12) INSTALAR O PM2 GLOBALMENTE (caso já tenha instalado pule para etapa seguinte)

```bash
npm install -g pm2
```

#### 13) INICIAR O PROJETO NO PM2

```bash
pm2 start execute.js
```

#### 13) ADICIONAR O PROJETO NO INIT DO PM2

```bash
pm2 startup && pm2 save
```

***


> Após iniciar o projeto no pm2 você deve configurar as rotas das chamadas.
> As rotas serão utilizadas para receber as requisições externas e executar as funções na VM.

#### 1) ROTA PARA LISTAR SEUS CONTAINERS

[Link para as Rotas](routes.md)

***

📞 +55(11)9.4918-1591 │ Flávio Guardia

