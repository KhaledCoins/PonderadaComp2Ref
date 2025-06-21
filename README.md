# TheBoard - Gerenciador de Tarefas

Uma aplicação completa de gerenciamento de tarefas seguindo o padrão MVC (Model-View-Controller) com Node.js, Express, PostgreSQL e interface web com EJS, voltada para estudantes e jovens profissionais.

## 🚀 Funcionalidades

- **CRUD Completo de Tarefas**: API REST para gerenciamento completo de tarefas com título, descrição, status, datas e progresso
- **Sistema de Categorização**: Organize tarefas por categorias com níveis de prioridade personalizáveis
- **Controle de Origens**: Classifique tarefas por origem com sistema de relevância
- **Agenda Inteligente**: Sistema de agendamento com horários de início/fim e anotações detalhadas
- **Gestão de Usuários**: Sistema completo de usuários com validação de dados
- **Interface Web Responsiva**: Frontend com EJS para visualização e interação com os dados
- **Padrão MVC**: Arquitetura bem estruturada e organizada com separação de responsabilidades
- **Validação de Dados**: Validação robusta usando Joi em todas as entradas
- **Testes Automatizados**: Cobertura completa com Jest e SuperTest
- **Dashboard de Produtividade**: Painel visual para acompanhamento (em construção)
- **PostgreSQL**: Banco de dados robusto com UUID como chave primária
- **Sistema de Mini Metas**: Organização de rotinas e acompanhamento de progresso

## 📋 Requisitos

- Node.js (versão 14 ou superior)
- Docker e Docker Compose (recomendado)
- **OU** PostgreSQL (versão 12 ou superior) instalado localmente
- Supabase, DBeaver ou PostgreSQL local

## 🛠️ Instalação

1. **Clone o repositório:**
```bash
git clone https://github.com/KhaledCoins/PonderadaComp2Ref.git
cd PonderadaComp2Ref
```

2. **Instale as dependências:**
```bash
npm install
```

3. **Configure as variáveis de ambiente:**
O projeto já inclui configuração para diferentes ambientes. Crie um arquivo `.env`:
```env
# PostgreSQL Database Configuration
DB_USER=postgres.userexemplo
DB_HOST=hostexemplo.supabase.com
DB_DATABASE=postgres
DB_PASSWORD=yourpassword
DB_PORT=5432
DB_SSL=false
PORT=3000

# Para uso local (alternativa)
DB_NAME=theboard_database
DB_DATABASE=theboard_database
DB_USER=theboard_user
DB_PASSWORD=theboard_password
DB_HOST=localhost
DB_PORT=5432
```

4. **Inicie o banco de dados:**
```bash
# Com Docker (recomendado)
npm run docker:up

# Execute a migração/inicialização
npm run init-db

# OU para configuração manual do PostgreSQL local
# Ajuste as variáveis no .env e execute a migração
```

**Alternativa sem Docker:**
Se preferir usar PostgreSQL local ou Supabase, ajuste as variáveis no `.env` e execute o script de inicialização.

## 🎯 Como Usar

### Iniciar o servidor
```bash
# Desenvolvimento (com auto-reload)
npm run dev

# Produção
npm start
```

### Executar testes
```bash
# Todos os testes (usando mocks - não precisa de banco)
npm test

# Com cobertura de código
npm run test:coverage
```

Os testes são executados de forma **independente** e **rápida**, sem necessidade de configuração de banco de dados, tornando o desenvolvimento mais acessível para iniciantes.

### 📚 Vantagens dos Testes com Mocks

- **Facilidade de Aprendizado**: Ideal para estudantes iniciantes
- **Execução Rápida**: Testes executam em segundos 
- **Sem Dependências**: Não precisa de Docker, PostgreSQL ou configurações complexas
- **Foco no Código**: Aprenda lógica de negócio sem se preocupar com infraestrutura
- **Ambiente Controlado**: Dados previsíveis e cenários de teste claros

## 🌐 Endpoints da API

### Usuários
- `GET /api/users` - Lista todos os usuários
- `GET /api/users/:id` - Busca usuário por ID
- `POST /api/users` - Cria novo usuário
- `PUT /api/users/:id` - Atualiza usuário
- `DELETE /api/users/:id` - Remove usuário

### Tarefas
- `GET /api/tarefas` - Lista todas as tarefas
- `GET /api/tarefas/:id` - Busca tarefa por ID
- `POST /api/tarefas` - Cria nova tarefa
- `PUT /api/tarefas/:id` - Atualiza tarefa
- `DELETE /api/tarefas/:id` - Remove tarefa

### Categorias
- `GET /api/categorias` - Lista todas as categorias
- `POST /api/categorias` - Cria nova categoria
- `PUT /api/categorias/:id` - Atualiza categoria
- `DELETE /api/categorias/:id` - Remove categoria

### Origens
- `GET /api/origens` - Lista todas as origens
- `POST /api/origens` - Cria nova origem
- `PUT /api/origens/:id` - Atualiza origem
- `DELETE /api/origens/:id` - Remove origem

### Agenda
- `GET /api/agenda` - Lista todos os agendamentos
- `POST /api/agenda` - Cria novo agendamento
- `PUT /api/agenda/:id` - Atualiza agendamento
- `DELETE /api/agenda/:id` - Remove agendamento

### Interface Web
- `GET /` - Página inicial com gestão de usuários
- `GET /tasks` - Página de gerenciamento de tarefas
- `GET /categories` - Página de categorias
- `GET /origins` - Página de origens
- `GET /agenda` - Página de agenda/calendário
- `GET /about` - Página sobre (redireciona para tarefas)

### Adminer (Interface do Banco) - Se usando Docker
- `http://localhost:8080` - Interface web para gerenciar PostgreSQL
  - **Sistema**: PostgreSQL
  - **Servidor**: postgres
  - **Usuário**: theboard_user
  - **Senha**: theboard_password
  - **Base de dados**: theboard_database

## 📁 Estrutura do Projeto

```
TheBoard/
├── config/
│   └── database.js           # Configurações do banco de dados
├── controllers/
│   ├── userController.js     # Controlador de usuários
│   ├── TarefaController.js   # Controlador principal de tarefas
│   ├── taskController.js     # Controlador adicional de tarefas
│   ├── CategoriaController.js # Controlador de categorias
│   ├── OrigemController.js   # Controlador de origens
│   └── AgendaController.js   # Controlador de agenda
├── models/
│   ├── userModel.js         # Modelo de dados do usuário
│   ├── tarefaModel.js       # Modelo principal de tarefas
│   ├── Task.js              # Modelo adicional de tarefas
│   ├── categoriaModel.js    # Modelo de categorias
│   ├── origemModel.js       # Modelo de origens
│   └── agendaModel.js       # Modelo de agenda
├── routes/
│   ├── userRoutes.js        # Rotas da API de usuários
│   ├── tarefaRoutes.js      # Rotas principais de tarefas
│   ├── taskRoutes.js        # Rotas adicionais de tarefas
│   ├── categoriaRoutes.js   # Rotas de categorias
│   ├── origemRoutes.js      # Rotas de origens
│   ├── agendaRoutes.js      # Rotas de agenda
│   └── frontRoutes.js       # Rotas do frontend
├── services/
│   └── userService.js       # Lógica de negócio de usuários
├── middlewares/
│   └── validate.js          # Middleware de validação
├── validators/
│   ├── userValidator.js     # Validação de usuários
│   ├── tarefaValidator.js   # Validação de tarefas
│   ├── categoriaValidator.js # Validação de categorias
│   ├── origemValidator.js   # Validação de origens
│   └── agendaValidator.js   # Validação de agenda
├── views/
│   ├── layout/
│   │   └── main.ejs         # Layout principal
│   ├── pages/
│   │   ├── users.ejs        # Página de usuários
│   │   ├── tasks.ejs        # Página de tarefas
│   │   ├── categories.ejs   # Página de categorias
│   │   ├── origins.ejs      # Página de origens
│   │   └── agenda.ejs       # Página de agenda
│   └── components/          # Componentes reutilizáveis
├── documentos/              # Documentação do projeto
├── scripts/
│   └── runSQLScript.js      # Executor de scripts SQL
├── tests/
│   ├── fixtures/            # Dados de teste
│   ├── helpers/             # Utilitários de teste
│   └── *.test.js           # Arquivos de teste
├── .env                     # Variáveis de ambiente
├── package.json             # Dependências e scripts
└── server.js               # Servidor principal
```

## 🧪 Testes

O projeto inclui testes completos usando **mocks** para facilitar o aprendizado:

- **Testes de Unidade**: Controllers, Services, Models com mocks
- **Testes de Integração**: Endpoints da API usando SuperTest e mocks
- **Testes de Validação**: Validadores Joi para todas as entidades
- **Sem Dependências Externas**: Não requer configuração de banco de dados para testes
- **Cobertura**: Relatório detalhado de cobertura de código
- **Padrão AAA**: Arrange-Act-Assert para testes claros e organizados

## 🔧 Tecnologias Utilizadas

- **Backend**: Node.js, Express.js
- **Banco de Dados**: PostgreSQL (compatível com Supabase)
- **Containerização**: Docker, Docker Compose (opcional)
- **Interface DB**: Adminer (quando usando Docker)
- **Template Engine**: EJS
- **Validação**: Joi
- **Testes**: Jest, SuperTest
- **Desenvolvimento**: Nodemon
- **UUID**: Para chaves primárias
- **Arquitetura**: MVC (Model-View-Controller)

## 📊 Scripts Disponíveis

### Aplicação
- `npm start` - Inicia o servidor em produção
- `npm run dev` - Inicia o servidor em desenvolvimento com auto-reload

### Testes
- `npm test` - Executa todos os testes
- `npm run test:coverage` - Executa testes com relatório de cobertura

### Docker & Banco de Dados
- `npm run docker:up` - Sobe PostgreSQL e Adminer (se configurado)
- `npm run docker:down` - Para os containers (se configurado)
- `npm run init-db` - Executa script de inicialização do banco de dados

## 💡 Funcionalidades Especiais do TheBoard

### Sistema de Tarefas Avançado
- **Múltiplas Datas**: Data desejada e deadline para planejamento flexível
- **Níveis de Importância**: Sistema de priorização personalizado
- **Controle de Progresso**: Acompanhamento percentual do progresso
- **Status Dinâmico**: Estados configuráveis para cada tarefa

### Categorização Inteligente
- **Prioridades por Categoria**: Cada categoria possui seu nível de prioridade
- **Organização Visual**: Interface clara para identificação rápida
- **Flexibilidade Total**: Categorias personalizáveis conforme necessidade

### Sistema de Origens
- **Relevância Configurável**: Sistema de classificação por relevância
- **Rastreabilidade**: Identifique de onde surgem suas tarefas
- **Analytics**: Acompanhe padrões de origem das tarefas

### Agenda Integrada
- **Horários Precisos**: Defina início e fim para cada tarefa
- **Anotações Detalhadas**: Campo de observações para cada agendamento
- **Vinculação Direta**: Integração completa com sistema de tarefas
- **Visão Calendário**: Interface de agenda para visualização temporal

## 🎯 Casos de Uso Práticos

### Para Estudantes
- **Organização Acadêmica**: Organize trabalhos por matéria usando categorias
- **Controle de Prazos**: Sistema de deadlines com datas desejadas
- **Planejamento de Estudos**: Use a agenda para sessões de estudo
- **Acompanhamento**: Monitore progresso em projetos de longo prazo
- **Origens Educacionais**: Classifique tarefas por professor, disciplina ou tipo

### Para Jovens Profissionais
- **Gestão de Projetos**: Organize tarefas por cliente ou projeto usando origens
- **Priorização Eficiente**: Sistema de importância e categorias por prioridade
- **Produtividade**: Dashboard para acompanhamento de performance
- **Rotinas de Trabalho**: Agenda integrada para organização temporal
- **Métricas**: Acompanhe padrões e melhore sua organização

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-feature`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/nova-feature`)
5. Abra um Pull Request

## 📈 Roadmap

### Versão Atual (v1.0)
- ✅ CRUD completo de tarefas com validação
- ✅ Sistema de categorias com prioridades
- ✅ Sistema de origens com relevância
- ✅ Agenda integrada com horários
- ✅ Interface web responsiva com EJS
- ✅ Gestão completa de usuários
- ✅ Testes automatizados com mocks

### Próximas Versões (v2.0)
- 🔄 Dashboard com gráficos de produtividade avançados
- 🔄 Sistema de notificações e lembretes
- ⏳ Integração com calendários externos (Google Calendar, Outlook)
- ⏳ API mobile para aplicativo nativo
- ⏳ Sistema de colaboração em equipe
- ⏳ Relatórios detalhados de produtividade
- ⏳ Modo offline com sincronização
- ⏳ Integração com ferramentas externas (Trello, Notion)

## 🏗️ Arquitetura e Padrões

### Padrão MVC Implementado
- **Models**: Camada de dados com PostgreSQL e validação
- **Views**: Interface EJS responsiva e componentizada
- **Controllers**: Lógica de negócio organizada por funcionalidade
- **Services**: Camada de serviços para lógica complexa
- **Middlewares**: Validação e processamento de requisições

### Boas Práticas
- **Separação de Responsabilidades**: Cada camada tem sua função específica
- **Validação Robusta**: Joi em todas as entradas de dados
- **Tratamento de Erros**: Sistema consistente de error handling
- **Código Limpo**: Padrões de nomenclatura e organização
- **Testes Abrangentes**: Cobertura de código e casos de teste

## 🔒 Segurança e Validação

- **Validação de Entrada**: Joi schemas para todas as APIs
- **Tratamento de Erros**: Respostas padronizadas e seguras
- **Sanitização**: Limpeza de dados antes do processamento
- **UUID**: Chaves primárias seguras e não previsíveis

## 📚 Documentação Adicional

- **Pasta `documentos/`**: Documentação técnica detalhada do projeto
- **Comentários no Código**: Explicações inline para facilitar manutenção
- **Exemplos de Uso**: Casos práticos em cada endpoint
- **Guias de Setup**: Instruções passo-a-passo para diferentes ambientes

## 👥 Autor

**Eduardo Khaled Chmouri Guardiano**
- Projeto acadêmico desenvolvido no INTELI - Instituto de Tecnologia e Liderança
- Ano: 2025
- Curso: Ciência da Computação

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

---

**TheBoard** - Transformando organização pessoal em produtividade real para estudantes e jovens profissionais. 🚀

*Desenvolvido com ❤️ no INTELI por Eduardo Khaled Chmouri Guardiano*
