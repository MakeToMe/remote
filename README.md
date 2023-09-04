## Bem-vindo ao execute.js! Esta API foi desenvolvida para permitir a execução de comandos remotamente em servidores virtuais. Abaixo, você encontrará um guia simples para instalar e começar a usar a API.

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

### 3) INSTALAR O NODE.JS 16.X

```bash
nvm install 16
```

### 4) CONFIRMAR A VERSÃO DO NODE.JS

```bash
nvm use 16
```

### 5) INSTALAR O GIT

```bash
sudo apt-get update && sudo apt-get install git
```

### 6) REALIZAR O CLONE DO PROJETO PARA PASTA EXECUTE

```bash
git clone https://github.com/MakeToMe/remote.git execute

```

### 7) ENTRAR NA PASTA EXECUTE

```bash
cd \execute
```

### 8) INICIAR O PROJETO

```bash
npm init -y
```

### 9) INSTALAR A BIBLIOTECA EXPRESS PARA CRIAR AS ROTAS

```bash
npm install express
```

### 10) INSTALAR A BIBLIOTECA CHILD_PROCESS PARA EXECUTAR OS COMANDOS NA VM

```bash
npm install child_process
```


### 10) INSTALAR A BIBLIOTECA CHILD_PROCESS PARA PROCESSAR O CORPO JSON

```bash
npm install body-parser
```
