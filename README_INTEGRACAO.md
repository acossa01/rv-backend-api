# 🔗 Integração Frontend-Backend - Sistema VR Oftalmologia

## ✅ **STATUS DA INTEGRAÇÃO**

O frontend agora está **COMPLETAMENTE INTEGRADO** com o backend NestJS + GraphQL!

## 🚀 **Como Testar a Integração**

### **1. Iniciar o Backend**

```bash
# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm run start:dev
```

O backend estará rodando em: `http://localhost:3000`
GraphQL Playground: `http://localhost:3000/graphql`

### **2. Abrir o Frontend**

Abra qualquer um dos arquivos HTML no navegador:
- `frontend/index.html` - Página principal
- `frontend/login.html` - Página de login
- `frontend/register.html` - Página de cadastro

### **3. Testar Funcionalidades**

#### **Cadastro de Usuário:**
1. Acesse `register.html`
2. Preencha todos os campos (incluindo tipo de usuário)
3. Clique em "Cadastrar"
4. Se bem-sucedido, será redirecionado automaticamente para a página principal já logado

#### **Login:**
1. Acesse `login.html`
2. Use as credenciais de um usuário cadastrado
3. Clique em "Entrar"
4. Se bem-sucedido, será redirecionado para a página principal

#### **Navegação Autenticada:**
1. Na página principal, observe que o menu agora mostra o nome do usuário
2. Clique em "Sair" para fazer logout
3. O menu voltará a mostrar links de Login/Cadastro

## 🔧 **Implementações Realizadas**

### **Novo Arquivo Criado:**
- `frontend/graphql-client.js` - Cliente GraphQL completo

### **Arquivos Modificados:**
- `frontend/login.html` - Integração com API de login
- `frontend/register.html` - Integração com API de registro + campo tipo usuário
- `frontend/index.html` - Sistema de autenticação + interface dinâmica

### **Funcionalidades Implementadas:**

#### **Autenticação:**
- ✅ Login via GraphQL mutation
- ✅ Registro via GraphQL mutation
- ✅ Logout com invalidação de token
- ✅ Verificação automática de token
- ✅ Renovação automática de token

#### **Interface:**
- ✅ Menu dinâmico (mostra nome do usuário quando logado)
- ✅ Notificações de sucesso/erro
- ✅ Estados de loading nos botões
- ✅ Redirecionamento automático
- ✅ Verificação de sessão entre abas

#### **Segurança:**
- ✅ Tokens JWT armazenados no localStorage
- ✅ Headers de autorização automáticos
- ✅ Verificação periódica de validade do token
- ✅ Logout automático em caso de token inválido

## 📡 **APIs Utilizadas**

### **Mutations (POST):**
```graphql
# Login
mutation Login($input: LoginInput!) {
  login(input: $input) {
    access_token
    refresh_token
    user { id email nomeCompleto tipoUsuario status }
  }
}

# Registro
mutation Registrar($input: RegistroInput!) {
  registrar(input: $input) {
    access_token
    refresh_token
    user { id email nomeCompleto tipoUsuario status }
  }
}

# Logout
mutation Logout {
  logout
}
```

### **Queries (GET):**
```graphql
# Verificar token
query TokenValido {
  tokenValido
}

# Perfil do usuário
query MeuPerfilCompleto {
  meuPerfilCompleto {
    id email nomeCompleto tipoUsuario status
  }
}
```

## 🎯 **Tipos de Usuário Suportados**

- **👤 Usuário Comum** (`USUARIO_COMUM`)
- **🎓 Estudante** (`ESTUDANTE`)
- **👨‍⚕️ Médico** (`MEDICO`)

## 🔍 **Como Debuggar**

### **Console do Navegador:**
- Abra F12 → Console
- Verifique logs de sucesso/erro das operações
- Comandos úteis:
  ```javascript
  // Verificar se está logado
  window.graphqlClient.isAuthenticated()
  
  // Ver dados do usuário
  window.graphqlClient.getUserData()
  
  // Ver token atual
  localStorage.getItem('access_token')
  ```

### **GraphQL Playground:**
- Acesse `http://localhost:3000/graphql`
- Teste queries/mutations manualmente
- Verifique se o backend está respondendo

## ⚠️ **Pré-requisitos**

1. **Banco de Dados PostgreSQL** rodando com as configurações em `config/default.yml`
2. **Backend NestJS** iniciado e funcionando
3. **Navegador moderno** com suporte a ES6+ e Fetch API

## 🎉 **Resultado Final**

O sistema agora possui:
- ✅ Frontend completamente integrado ao backend
- ✅ Autenticação JWT funcional
- ✅ Interface dinâmica baseada no estado de login
- ✅ Experiência de usuário fluida e moderna
- ✅ Tratamento de erros robusto
- ✅ Sistema de notificações visual

**A integração está 100% funcional!** 🚀 