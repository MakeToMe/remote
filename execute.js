//Bibliotecas necessárias para executar as funções

const express = require('express');
const { exec } = require('child_process');
const bodyParser = require('body-parser');

//Parâmetros padrão do servidor, porta e token de segurança
const app = express();
const porta = 8385; // Porta em que o servidor irá escutar
const ip = 'SEU_IP_AQUI'; // Adicione o o IP do seu servidor
const token = 'SEU_TOKEN'; // Defina o seu token aqui

// Configurar o body-parser para analisar requisições POST em formato JSON
app.use(bodyParser.json());

// Módulo para verificar o token em todas as rotas
const verificarToken = (req, res, next) => {
  const tokenRequisicao = req.header('x-token');
  if (!tokenRequisicao) {
    return res.status(401).json({ error: 'Erro, token não informado' });
  }

  if (tokenRequisicao !== token) {
    return res.status(401).json({ error: 'Token inválido' });
  }

  next();
};

// Aplicar o middleware de verificação de token em todas as rotas
app.use(verificarToken);

// Endpoint para receber o POST com o comando
app.post('/executar', (req, res) => {
  const { Comando } = req.body;

  if (!Comando) {
    return res.status(400).json({ error: 'Comando não informado' });
  }

  // Executar o comando na VM usando child_process
  exec(Comando, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao executar o comando: ${error.message}`);
      return res.status(500).json({ error: 'Erro ao executar o comando' });
    }

    // Enviar o conteúdo do LOG como resposta
    res.json({ log: stdout });
  });
});

// Endpoint para retornar a lista de containers em ordem alfabética
app.get('/listcontainers', (req, res) => {
  const comandoListarContainers = 'docker ps --format "{{.Names}}"';

  exec(comandoListarContainers, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao listar containers: ${error.message}`);
      return res.status(500).json({ error: 'Erro ao listar containers' });
    }

    // Dividir a saída em linhas para obter o nome de cada container
    const containers = stdout.trim().split('\n');

    // Ordenar os containers em ordem alfabética
    containers.sort();

    // Formatar os containers como objetos com a chave "nome"
    const containersFormatados = containers.map((nome) => ({ nome: nome.trim() }));

    // Enviar a resposta no formato JSON
    res.json({ containers: containersFormatados });
  });
});

// Endpoint para retornar a lista de containers stopados (estado "exited") em ordem alfabética
app.get('/listexited', (req, res) => {
  const comandoListarExitedContainers = 'docker ps -a --filter "status=exited" --format "{{.Names}}"';

  exec(comandoListarExitedContainers, (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao listar containers stopados: ${error.message}`);
      return res.status(500).json({ error: 'Erro ao listar containers stopados' });
    }

    // Dividir a saída em linhas para obter o nome de cada container stopado
    const containersExited = stdout.trim().split('\n');

    // Ordenar os containers em ordem alfabética
    containersExited.sort();

    // Formatar os containers como objetos com a chave "nome"
    const containersExitedFormatados = containersExited.map((nome) => ({ nome: nome.trim() }));

    // Enviar a resposta no formato JSON
    res.json({ containers: containersExitedFormatados });
  });
});


// Endpoint para reiniciar e parar um container com base no radical do nome
app.post('/restartcontainer', (req, res) => {
  const { radicalDoNomeContainer } = req.body;

  if (!radicalDoNomeContainer) {
    return res.status(400).json({ error: 'Radical do nome do container não informado' });
  }

  // Listar os containers usando a CLI do Docker
  exec('docker ps -a --format "{{.Names}}"', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao listar os containers: ${error.message}`);
      return res.status(500).json({ error: 'Erro ao listar os containers' });
    }

    const containers = stdout.split('\n').filter((container) => container.includes(radicalDoNomeContainer));

    if (containers.length === 0) {
      return res.status(404).json({ error: 'Nenhum container encontrado com base no radical do nome' });
    }

    containers.forEach((nomeContainer) => {
      const comandoRestartContainer = `docker restart ${nomeContainer}`;
      const comandoStopContainer = `docker stop ${nomeContainer}`;

      // Executar o comando "restart" na VM usando child_process
      exec(comandoRestartContainer, (errorRestart, stdoutRestart, stderrRestart) => {
        if (errorRestart) {
          console.error(`Erro ao reiniciar o container ${nomeContainer}: ${errorRestart.message}`);
        } else {
          console.log(`Container ${nomeContainer} reiniciado com sucesso`);
        }

        // Executar o comando "stop" na VM usando child_process
        exec(comandoStopContainer, (errorStop, stdoutStop, stderrStop) => {
          if (errorStop) {
            console.error(`Erro ao parar o container ${nomeContainer}: ${errorStop.message}`);
          } else {
            console.log(`Container ${nomeContainer} parado com sucesso`);
          }
        });
      });
    });

    res.json({ message: 'Operações em containers concluídas' });
  });
});


// Endpoint para excluir um container com base no radical do nome
app.post('/deletecontainer', (req, res) => {
  const { radicalDoNomeContainer } = req.body;

  if (!radicalDoNomeContainer) {
    return res.status(400).json({ error: 'Radical do nome do container não informado' });
  }

  // Listar os containers usando a CLI do Docker
  exec('docker ps -a --format "{{.Names}}"', (error, stdout, stderr) => {
    if (error) {
      console.error(`Erro ao listar os containers: ${error.message}`);
      return res.status(500).json({ error: 'Erro ao listar os containers' });
    }

    const containers = stdout.split('\n').filter((container) => container.includes(radicalDoNomeContainer));

    if (containers.length === 0) {
      return res.status(404).json({ error: 'Nenhum container encontrado com base no radical do nome' });
    }

    containers.forEach((nomeContainer) => {
      const comandoDeleteContainer = `docker rm ${nomeContainer}`;

      // Executar o comando "delete" na VM usando child_process
      exec(comandoDeleteContainer, (errorDelete, stdoutDelete, stderrDelete) => {
        if (errorDelete) {
          console.error(`Erro ao excluir o container ${nomeContainer}: ${errorDelete.message}`);
        } else {
          console.log(`Container ${nomeContainer} excluído com sucesso`);
        }
      });
    });

    res.json({ message: 'Operações em containers concluídas' });
  });
});


// Iniciar o servidor
app.listen(porta, ip, () => {
  console.log(`Servidor rodando em http://${ip}:${porta}`);
});

