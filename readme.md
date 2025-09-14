# 📦 Instalação

### Clone o repositório

```bash
git clone https://github.com/guilhermematos13/todo-shopping-native.git
```

### Acesse o diretório do projeto

```bash
cd todo-shopping-native
```

### Instale as dependências

```bash
npm install
```

# 🛒 Shopping To-Do:

Aplicativo desenvolvido em React Native com Expo, que funciona como uma lista de compras simples e intuitiva.
O usuário pode adicionar produtos, gerenciar o status (pendente ou comprado) e visualizar a lista filtrada.

---

# 📱 Funcionalidades

- Adicionar um produto por vez à lista de compras.
- Todo item adicionado vem com status inicial de pendente.
- Alterar o status do item para comprado apenas clicando nele.
- Filtrar a lista por:
  - Pendentes
  - Comprados
  - Todos
- Persistência dos dados utilizando AsyncStorage, garantindo que a lista não seja perdida ao fechar o app.

---

# 📂 Estrutura do Projeto

```bash
src/
 ├── assets/       # Imagens do projeto
 ├── components/   # Componentes reutilizáveis
 ├── screens/      # Telas principais do app
 └── storage/      # Gerenciamento do AsyncStorage
```
