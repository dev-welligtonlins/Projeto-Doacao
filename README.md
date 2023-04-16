# Sobre o repositório hands-on-t2-fusion
Repositório do time Fusion (turma 2) para o projeto do Hands On do Web Academy

# Sobre o Projeto

Site de Doações - Projeto com o intuito de facilitar e acompanhar o processo de doações para as instituições e seus potenciais doadores

# Contexto

Varias instituições trabalham todos os dias para ajudar ao próximo, recebendo doações e levando esperança para muitas pessoas, e cada vez mais precisam ampliar o alcance da arrecadação social para ajudar mais pessoas.

Existem varias pessoas que gostariam de ajudar por meio de doações mas não sabem de que forma podem ajudar e acompanhar os resultados.

Nossa plataforma visa ampliar a comunicação entre os doadores e instituições, pois não existe nenhum sistema com essa proposta no estado do Acre.

# Anbiente dos Protótipos

Os protótipos foram desenvolvidos utilizando o Figma.

https://www.figma.com/file/BAwehcEbgJEjjoOUDWJN1V/Untitled?node-id=0%3A1&t=Y1koOLEjmh0Fh0tS-3

# Como inciar a aplicação

Estes são os passos para iniciar a aplicação.

## Back-end

Para iniciar a aplicação back-end utilize o seguinte comando:

```
cd back-end
mvn spring-boot:run
```

Observe que a aplicação vai iniciar no endereço http://localhost:9000, com acesso local a base de dados MySQL, por meio da porta padrão 3306, além de usuário e senha "root".

## Front-end

Para iniciar a aplicação front-end utilize o seguinte comando:

```
cd front-end
npm install
ng serve
```

A aplicação vai iniciar no endereço https://localhost:4200.

# Ferramentas

- **MySQL**
  - Verificar se o MySQL está funcionando:
    - Tutorial para resetar a senha de root, caso necessário: https://dev.mysql.com/doc/mysql-windows-excerpt/8.0/en/resetting-permissions-windows.html
    - Tentar acessar com senha em branco ou senha igual ao nome de usuário (root).
    - Para tentar conectar no MySQL, no prompt de comandos digite:
      - ```mysql -u root -p```
  - Se necessário, realizar a instalação:
    - Link para download: https://dev.mysql.com/downloads/file/?id=512698
    - [Tutorial de instalação](https://github.com/webacademyufac/frameworks-back-end/blob/main/tutoriais/mysql/mysql.md)
  - Criar o banco de dados ```donation```:
    - No prompt de comandos digite:
      - ```mysql -u root -p```
    - Ao conectar no MySQL, execute a seguinte instrução SQL:
      - ```CREATE DATABASE donation;```
  - Importar dados: 
    - No prompt de comandos digite:
      - ```mysql -u root -p donation < sql\donation.sql```
- **Visual Studio Code**
  - https://code.visualstudio.com/Download
  - **Extension Pack for Java (Extensão do VS Code)**
    - https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack
  - **Spring Boot Extension Pack (Extensão do VS Code)**
    - https://marketplace.visualstudio.com/items?itemName=pivotal.vscode-boot-dev-pack
  - **Thunder Client (Extensão do VS Code)**
    - https://marketplace.visualstudio.com/items?itemName=rangav.vscode-thunder-client
  - **XML (Extensão do VS Code)**
    - https://marketplace.visualstudio.com/items?itemName=redhat.vscode-xml
  - **Angular Language Service (Extensão do VS Code)**
    - https://marketplace.visualstudio.com/items?itemName=vscjava.vscode-java-pack
- **Git**
  - https://git-scm.com/downloads
- **JDK 11**
  - Para verificar se o JDK está corretamente instalado e configurado, digite no prompt de comandos:
    - ```javac -version```
  - Se necessário, realizar a instalação e configuração:
    - Link para download: https://www.oracle.com/br/java/technologies/javase/jdk11-archive-downloads.html
    - Criar a variável de ambiente JAVA_HOME configurada para o diretório de instalação do JDK. Exemplo: “C:\Program Files\Java\jdk-11.0.13”.
    - Adicionar “%JAVA_HOME% bin” na variável de ambiente PATH.
    - Tutorial de configuração: https://mkyong.com/java/how-to-set-java_home-on-windows-10/
- **Maven**
  - Para verificar se o Maven está corretamente instalado e configurado, digite no prompt de comandos:
    - ```mvn -version```
  - Se necessário, realizar a instalação e configuração:
    - Link para download: https://dlcdn.apache.org/maven/maven-3/3.8.6/binaries/apache-maven-3.8.6-bin.zip
    - Adicionar o diretório de instalação do Maven na variável de ambiente PATH. Exemplo: “C:\apache-maven\bin”.
    - Tutorial de instalação: https://mkyong.com/maven/how-to-install-maven-in-windows/
- **Node.js (e npm)**
  - Versão 14.15 ou superior.
  - Para verificar a versão do Node.js, no prompt de comandos digite:
    - ```node --version```
  - Link para download (escolha a versão LTS): https://nodejs.org/en/download/
- **Angular CLI:**
  - Versão 14.0 ou superior.
  - Para verificar a versão do Angular CLI, no prompt de comandos digite:
    - ```ng --version``` ou ```ng version```
  - Tutorial de instalação: https://angular.io/guide/setup-local
  - Para instalar o Angular CLI, no prompt de comandos digite:
    - ```npm install -g @angular/cli```

# Comandos Úteis

## Visual Studio Code

Utilize o comando a seguir para indentar o código fonte.

```SHIFT + ALT + F```

## Spring Boot

  - Baixar/atualizar todas as dependências da aplicação:
  - ```mvn package```

- Executar aplicação spring boot no ambiente de desenvolvimento:
  - ```mvn spring-boot:run```

## Angular

- Instalar dependências da aplicação:
  - ```npm install```

- Executar aplicação angular em ambiente de desenvolvimento:
  - ```ng serve```

- Criar um componente:
  - ```ng genereate component components/{component_name}```

- Angular remover um componente:
  - ```Remova a referência de linha de importação do arquivo app.module.ts e em seguida exclua manualmente a pasta do componente.```

## MySQL

- Executar comandos diretamente no SGBD (a senha padrão é: root):
  - ```mysql -u root -p```

## MySQL (instalado manualmente pelo ZIP)

- Gerar bases de dados padrão do MySQL (na primeira inicialização):
  - ```mysqld --initialize-insecure --console```

- Iniciar MySQL:
  - ```mysqld --console```

- Executar comandos diretamente no SGBD (a senha padrão é em branco):
  - ```mysql -u root -p```

- Alterar senha do usuário root para root:
  - ```mysql -u root -p```
  - ```ALTER USER 'root'@'localhost' IDENTIFIED BY 'root';```
  - ```FLUSH PRIVILEGES;```

## Git

- Excluir uma branch:
  - ```git branch --delete {branch_name}```

- Excluir uma branch:
  - ```git branch --delete {branch_name}```

- Voltar a um commit específico (muito cuidado ao utilizar):
  - ```git reset --hard {hash}```
  - ```git reset --soft "HEAD@{1}"```
  - ```git commit -m "Revert to {hash}"```

Multiplas linhas na mensagem do commit:

```
git commit -m "this is
> a line
> with new lines
> maybe"
```

# Convenção de Commits

É recomendado utilizar a convenção **Conventional Commits** na mensagem de commits.

A especificação **Conventional Commits** é uma convenção leve sobre as mensagens de confirmação. Ela fornece um conjunto fácil de regras para criar um histórico de confirmação explícito; o que facilita a escrita de ferramentas automatizadas.

https://www.conventionalcommits.org

A mensagem de confirmação deve ser estruturada da seguinte forma:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

Tipos recomendados:
```build:, chore:, ci:, docs:, feat:, fix:, perf:, refactor:, revert:, style:, test:```

Descrição dos Tipos:

- **build**: alterações que afetam o sistema de compilação ou dependências externas
- **ci**: alterações em nossos arquivos e scripts de configuração de CI
- **docs**: alteração na documentação
- **feat**: um novo recurso
- **fix**: uma correção de bug
- **perf**: uma mudança de código que melhora o desempenho
- **refactor**: uma alteração de código que não corrige um bug nem adiciona um recurso
- **style**: alterações que não afetam o significado do código (espaço em branco, formatação, falta de ponto-e-vírgula etc.)
- **test**: adicionando testes ausentes ou corrige testes existentes

## Exemplos de Commits

Mensagem de commit sem corpo
```docs: correct spelling of CHANGELOG```

Mensagem de commit com multiplos parágrafos no copor e rodapé
```
fix: prevent racing of requests

Introduce a request id and a reference to latest request. Dismiss
incoming responses other than from latest request.

Remove timeouts which were used to mitigate the racing issue but are
obsolete now.

Reviewed-by: Z
Refs: #123
```
