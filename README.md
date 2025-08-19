<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg" alt="Donate us"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow" alt="Follow us on Twitter"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

# 🥽 Sistema VR de Oftalmologia - Backend

Aplicação de realidade virtual focada no ensino e aprendizagem de medicina, especificamente na área de oftalmologia. Sistema robusto de autenticação e gerenciamento de usuários com diferentes níveis de acesso.

## 🎯 **Visão Geral**

Sistema completo de apoio à educação médica que inclui uma API para fornecer conteúdos personalizados (explicações gerais, aprendizado clínico, cirurgias etc.) a diferentes tipos de usuários (usuário comum, estudante, médico). O sistema se integra a um aplicativo de Realidade Virtual.

## 🛠️ **Stack Tecnológico**

- **Framework**: NestJS
- **Linguagem**: TypeScript  
- **API**: GraphQL (Apollo Server)
- **Banco de dados**: PostgreSQL
- **ORM**: TypeORM
- **Autenticação**: JWT (JSON Web Tokens) com refresh tokens
- **Criptografia**: bcrypt para senhas

## ✨ **Funcionalidades Implementadas**

### **1. Sistema de Autenticação e Autorização**
- Sistema de autenticação JWT unificado com refresh tokens
- Controle de acesso baseado em roles (RBAC)
- Recuperação de senha via email
- Três tipos de usuários: **USUARIO_COMUM**, **MEDICO**, **ESTUDANTE**

### **2. Tipos de Usuários**

#### 🏥 **USUARIO_COMUM**
- Perfil com informações pessoais e histórico médico básico
- Acesso apenas a conteúdos **GERAIS**
- Agendamento de consultas virtuais
- Acesso a material educativo básico sobre condições oftalmológicas

#### 🎓 **ESTUDANTE**  
- Perfil acadêmico completo
- Acesso a conteúdos **GERAIS** e **APRENDIZADO_CLINICO**
- Acompanhamento do progresso de aprendizado
- Acesso a casos clínicos para estudo
- Participação em simulações de procedimentos oftalmológicos
- Orientação por médicos

#### 👨‍⚕️ **MÉDICO**
- **Acesso completo** a todos os tipos de conteúdo
- GERAL + APRENDIZADO_CLINICO + CIRURGIA
- Pode criar, editar e gerenciar conteúdos educacionais
- Orientação de estudantes
- Acesso a todos os módulos de simulação e ensino

### **3. Sistema de Conteúdo Educacional**
O sistema trabalha com três tipos específicos de conteúdo:

- **GERAL**: Explicações gerais sobre oftalmologia
- **APRENDIZADO_CLINICO**: Conteúdo técnico e casos clínicos
- **CIRURGIA**: Conteúdo sobre procedimentos cirúrgicos

**Restrições de Acesso Automáticas:**
- Usuários comuns: apenas GERAL
- Estudantes: GERAL + APRENDIZADO_CLINICO  
- Médicos: GERAL + APRENDIZADO_CLINICO + CIRURGIA

### **4. Sistema de Salas VR**
Três tipos de salas de realidade virtual:

#### **🏠 Sala Comum (Não Técnica)**
- **Participantes**: Usuário Comum, Estudante, Médico
- **Características**: Interface simples, sem conteúdo técnico
- **Funcionalidade**: Comunicação básica entre usuários

#### **🎓 Sala Técnica (Multiusuário)**
- **Participantes**: Estudante e Médico
- **Características**: Ambiente educacional
- **Funcionalidade**: Discussões técnicas, ensino
- **Modo**: Funciona de forma independente

#### **⚕️ Sala de Cirurgia (Multiusuário)**
- **Participantes**: Médicos
- **Características**: Ambiente cirúrgico especializado
- **Funcionalidade**: Colaboração médica em procedimentos
- **Modo**: Funciona de forma independente

**Funcionalidades Especiais:**
- **Instrução Individual**: Médico pode instruir um estudante específico
- **Autonomia**: Salas Técnica e de Cirurgia funcionam sem necessidade de multiusuários
- **Controle de Sessões**: Criação, participação e finalização de sessões

### **5. API GraphQL**
Endpoints específicos que respeitam as restrições de acesso:

```graphql
# Autenticação
mutation Login($input: LoginInput!) {
  login(input: $input) {
    access_token
    refresh_token
    user {
      id
      nomeCompleto
      tipoUsuario
    }
  }
}

# Conteúdo (com restrições automáticas)
query MeuConteudoEducacional {
  meuConteudoEducacional {
    id
    titulo
    tipoConteudo
    descricao
    nivelDificuldade
  }
}

# Salas VR
query SalasVRDisponiveis {
  salasVRDisponiveis {
    id
    nome
    tipoSala
    capacidadeMaxima
    statusSala
  }
}
```

## 🏗️ **Arquitetura do Projeto**

```
src/
├── app.module.ts              # Módulo principal
├── main.ts                    # Entry point
├── configs/                   # Configurações
│   ├── graphql.config.ts     # Configuração GraphQL
│   └── orm.config.ts         # Configuração TypeORM
├── decorators/               # Decorators customizados
│   ├── auth.decorator.ts     # @Auth para controle de acesso
│   └── currentUser.decorator.ts # @CurrentUser para dados do usuário
├── enums/                    # Enumerações
│   ├── role.enum.ts         # Tipos de usuários
│   ├── status.entities.ts   # Status das entidades
│   ├── conteudo-educacional.enum.ts # Tipos de conteúdo
│   └── tipo-sala.enum.ts    # Tipos e status das salas VR
├── guards/                   # Guards de proteção
│   ├── jwt.guard.ts         # Validação JWT
│   └── role.guard.ts        # Controle de roles
└── modules/                  # Módulos de funcionalidades
    ├── auth/                 # 🔐 Autenticação
    │   ├── strategies/       # Estratégias Passport
    │   ├── auth.service.ts   # Lógica de autenticação
    │   ├── auth.resolver.ts  # GraphQL resolvers
    │   ├── auth.type.ts      # Tipos GraphQL
    │   └── auth.module.ts    # Configuração do módulo
    ├── usuarios/             # 👥 Gerenciamento de usuários
    │   ├── entities/         # User, UsuarioComum, Medico, Estudante
    │   ├── usuarios.service.ts # Lógica de negócio
    │   ├── usuarios.resolver.ts # GraphQL resolvers
    │   └── usuarios.module.ts # Configuração do módulo
    ├── conteudo-educacional/ # 📚 Conteúdo educacional
    │   ├── entities/         # ConteudoEducacional
    │   ├── conteudo-educacional.service.ts # Lógica com restrições de acesso
    │   ├── conteudo-educacional.resolver.ts # GraphQL resolvers
    │   └── conteudo-educacional.module.ts # Configuração do módulo
    └── salas-vr/            # 🥽 Salas de realidade virtual
        ├── entities/         # SalaVR, SessaoVR
        ├── salas-vr.service.ts # Lógica de gerenciamento
        ├── salas-vr.resolver.ts # GraphQL resolvers
        └── salas-vr.module.ts # Configuração do módulo
```

## 🚀 **Como Executar**

### **Pré-requisitos**
- Node.js >= 14.17.0
- PostgreSQL
- npm ou yarn

### **1. Clone o repositório**
```bash
git clone <repository-url>
cd version_ofta
```

### **2. Instale as dependências**
```bash
npm install
```

### **3. Configure o banco de dados**
```bash
# Usando Docker (recomendado)
docker run --name postgres-vr-oftalmologia \
  -e POSTGRES_PASSWORD=adm123 \
  -e POSTGRES_DB=apioftalm \
  -e POSTGRES_USER=postgres \
  -p 5432:5432 \
  -d postgres:13

# Ou crie um banco PostgreSQL local
createdb apioftalm
```

### **4. Configure as variáveis de ambiente**
Atualize os arquivos em `config/` conforme necessário:
- `config/default.yml` - Desenvolvimento
- `config/production.yml` - Produção

### **5. Execute a aplicação**
```bash
# Desenvolvimento
npm run start:dev

# Produção
npm run build
npm run start:prod
```

A aplicação estará disponível em:
- **GraphQL Playground**: `http://localhost:3000/graphql`
- **API**: `http://localhost:3000/`

## 🔒 **Segurança**

### **Autenticação JWT**
- Tokens de acesso com expiração curta (1h)
- Refresh tokens para renovação segura (7d)
- Senhas hasheadas com bcrypt (salt rounds: 10)

### **Autorização RBAC**
- Guards customizados verificam roles em cada endpoint
- Middleware de verificação automática de permissões
- Restrições de conteúdo baseadas em tipo de usuário

### **Validação de Dados**
- DTOs com class-validator
- Sanitização de inputs
- Validações de negócio personalizadas

## 📊 **Exemplos de Uso**

### **Registro de Usuário**
```graphql
mutation RegistrarUsuario {
  registrar(input: {
    nomeCompleto: "Dr. João Silva"
    email: "joao.silva@email.com"
    senha: "senha123"
    tipoUsuario: MEDICO
    crm: "12345"
    ufCrm: "SP"
    especialidades: ["Oftalmologia", "Retina"]
    instituicao: "Hospital das Clínicas"
  }) {
    access_token
    user {
      id
      nomeCompleto
      tipoUsuario
    }
  }
}
```

### **Login**
```graphql
mutation Login {
  login(input: {
    email: "joao.silva@email.com"
    senha: "senha123"
  }) {
    access_token
    refresh_token
    user {
      nomeCompleto
      tipoUsuario
    }
  }
}
```

### **Obter Conteúdo (com restrições automáticas)**
```graphql
query MeuConteudo {
  meuConteudoEducacional {
    id
    titulo
    tipoConteudo
    nivelDificuldade
    avaliacaoMedia
  }
}
```

### **Criar Sessão VR**
```graphql
mutation CriarSessao {
  criarSessaoVR(dados: {
    titulo: "Cirurgia de Catarata - Treinamento"
    salaId: "uuid-da-sala"
    dataInicio: "2024-01-15T14:00:00Z"
    maxParticipantes: 5
  }) {
    id
    titulo
    status
    sala {
      nome
      tipoSala
    }
  }
}
```

## 🔧 **Scripts Disponíveis**

```bash
# Desenvolvimento
npm run start:dev

# Build da aplicação
npm run build

# Produção
npm run start:prod

# Testes
npm run test
npm run test:e2e
npm run test:cov

# Linting e formatação
npm run lint
npm run format

# TypeORM migrations
npm run typeorm migration:generate
npm run typeorm migration:run
```

## 📝 **Estrutura de Dados**

### **Usuários (Herança de Tabela)**
- **UserEntity**: Tabela base com campos comuns
- **UsuarioComumEntity**: Extends User - dados específicos para usuários comuns
- **MedicoEntity**: Extends User - CRM, especialidades, orientandos
- **EstudanteEntity**: Extends User - matrícula, instituição, orientador

### **Conteúdo Educacional**
- Metadados para VR (modelos 3D, texturas)
- Sistema de versionamento
- Avaliações e estatísticas de uso
- Controle de acesso por tipo de usuário

### **Salas VR**
- Configurações específicas por tipo
- Controle de capacidade e permissões
- Histórico de sessões e estatísticas

## 🤝 **Contribuindo**

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/nova-funcionalidade`)
3. Commit suas mudanças (`git commit -am 'Adiciona nova funcionalidade'`)
4. Push para a branch (`git push origin feature/nova-funcionalidade`)
5. Abra um Pull Request

## 📄 **Licença**

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🆘 **Suporte**

Para dúvidas ou problemas:
- 📧 Email: suporte@vr-oftalmologia.com
- 🐛 Issues: [GitHub Issues](https://github.com/seu-usuario/version_ofta/issues)
- 📖 Documentação: [Wiki do Projeto](https://github.com/seu-usuario/version_ofta/wiki)