# 🎮 Jokenpô

Um jogo clássico de **Pedra, Papel e Tesoura** desenvolvido com HTML, CSS e JavaScript vanilla. Interface moderna com animações, sistema de placar e design responsivo.

![Jokenpô](https://img.shields.io/badge/Status-Concluído-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)

## 🎯 Sobre o Projeto

Este é um jogo de Jokenpô (Pedra, Papel e Tesoura) totalmente funcional. O projeto conta com uma interface moderna, animações suaves e um sistema de pontuação completo.

### ✨ Funcionalidades

- 🎮 **Jogo Interativo**: Clique no botão ou pressione ESPAÇO para jogar
- 📊 **Sistema de Placar**: Contabiliza vitórias de cada player e empates
- 🎨 **Design Moderno**: Interface com cores vibrantes e animações CSS
- 📱 **Totalmente Responsivo**: Funciona perfeitamente em desktop e mobile
- ⚡ **Animações Suaves**: Efeitos visuais que tornam a experiência mais dinâmica
- 🎯 **Feedback Visual**: Mostra claramente qual jogada venceu e por quê

## 🚀 Demo

🔗 **[Jogar Agora](https://l00p4.github.io/jokenpo/)**

### Desktop

```
🎮 Interface principal com botão JOGAR animado
📊 Sistema de placar em tempo real
🎨 Animações e efeitos visuais modernos
```

### Mobile

```
📱 Layout adaptado para dispositivos móveis
👆 Interface touch-friendly
🔄 Orientação responsiva
```

## 🛠️ Tecnologias Utilizadas

- **HTML5**: Estrutura semântica e acessível
- **CSS3**: Animações, gradientes e design responsivo
- **JavaScript ES6+**: Lógica do jogo e interações
- **Google Fonts**: Tipografia moderna (Fredoka, Nunito)

## ⚡ Ferramentas de Desenvolvimento

### Recomendadas

- **Visual Studio Code** - Editor principal
- **Live Server Extension** - Para desenvolvimento em tempo real
- **Chrome DevTools** - Para debug e testes

### Extensões VS Code Úteis

```
Live Server          - Servidor local com auto-reload
Prettier             - Formatação automática de código
Auto Rename Tag      - Renomeia tags HTML automaticamente
Bracket Pair Colorizer - Coloriza parênteses e chaves
```

## 🎮 Como Jogar

1. **Objetivo**: Vença o oponente escolhendo a opção correta
2. **Regras**:
   - 🪨 **Pedra** vence ✂️ **Tesoura**
   - ✂️ **Tesoura** vence 📄 **Papel**
   - 📄 **Papel** vence 🪨 **Pedra**
3. **Controles**:
   - Clique no botão **"JOGAR"**
   - Ou pressione a tecla **ESPAÇO**
4. **Placar**: Acompanhe suas vitórias no sistema de pontuação

## 💻 Como Executar Localmente

### Pré-requisitos

- Navegador web moderno
- **Visual Studio Code** (recomendado para melhor experiência)

### Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/L00p4/jokenpo.git
   ```

2. **Navegue até o diretório**

   ```bash
   cd jokenpo
   ```

3. **Execute o projeto**

   #### 🚀 **Método Recomendado: Live Server (VS Code)**

   **Instalação da Extensão:**

   1. Abra o **Visual Studio Code**
   2. Vá para **Extensions** (`Ctrl+Shift+X`)
   3. Pesquise por **"Live Server"** (por Ritwick Dey)
   4. Clique em **Install**

   **Como usar:**

   1. Abra a pasta do projeto no VS Code
   2. Clique com o botão direito no arquivo `index.html`
   3. Selecione **"Open with Live Server"**
   4. O navegador abrirá automaticamente em `http://127.0.0.1:5500`

   **✨ Vantagens do Live Server:**

   - 🔄 **Auto-reload**: Atualiza automaticamente quando você salva alterações
   - 📱 **Cross-device**: Acesse de outros dispositivos na mesma rede
   - ⚡ **Rápido**: Servidor local otimizado para desenvolvimento
   - 🛠️ **Debug-friendly**: Funciona perfeitamente com DevTools

   #### 🔧 **Métodos Alternativos:**

   **Opção 1 - Abrir diretamente (funcional, mas limitado):**

   ```bash
   # Simplesmente abra o index.html no navegador
   open index.html  # macOS
   start index.html # Windows
   xdg-open index.html # Linux
   ```

   **Opção 2 - Outros servidores locais:**

   ```bash
   # Com Python
   python -m http.server 8000

   # Com Node.js
   npx serve .

   # Com PHP
   php -S localhost:8000
   ```

4. **Pronto!** 🎉 O jogo estará rodando localmente

## 📁 Estrutura do Projeto

```
jokenpo/
├── index.html          # Interface principal
├── index.js            # Lógica do jogo
├── styles.css          # Estilos e animações
├── README.md           # Documentação
├── LICENSE             # Licença MIT
```

## 🎨 Customização

### Cores do Tema

```css
:root {
  --bg-primary: #180027;      /* Fundo principal */
  --primary-color: #c147e9;   /* Cor primária */
  --secondary-color: #e5b8f4; /* Cor secundária */
  --accent-pink: #ff44cc;     /* Rosa de destaque */
  --accent-cyan: #4ffbdf;     /* Ciano de destaque */
  --accent-red: #ff6b6b;      /* Vermelho de destaque */
}
```

### Adicionando Novos Efeitos

- Modifique as animações CSS em `@keyframes`
- Adicione novos efeitos sonoros via Web Audio API
- Implemente novos modos de jogo (melhor de 3, etc.)

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Para contribuir:

1. **Fork** o projeto
2. Crie uma **branch** para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. Abra um **Pull Request**

### 💡 Ideias para Contribuição

- [ ] Adicionar efeitos sonoros
- [ ] Implementar modo multiplayer online
- [ ] Criar diferentes temas visuais
- [ ] Adicionar estatísticas detalhadas
- [ ] Implementar sistema de conquistas
- [ ] Adicionar animações 3D com CSS
- [ ] Criar modo torneio (melhor de 3, 5, etc.)
- [ ] Adicionar dificuldade com IA

## 🧪 Desenvolvimento e Testes

### Testando Localmente

1. Use o **Live Server** para desenvolvimento
2. Teste em diferentes navegadores (Chrome, Firefox, Safari, Edge)
3. Verifique responsividade em dispositivos móveis
4. Use as **DevTools** para debug

### Estrutura de Testes Sugerida

```javascript
// Testes que você pode implementar:
- Verificar lógica do jogo (pedra vs papel vs tesoura)
- Testar sistema de pontuação
- Validar responsividade
- Testar acessibilidade
```

## 📝 Changelog

### v1.0.0 (2025-08-05)

- ✨ Lançamento inicial
- 🎮 Jogo funcional completo
- 📊 Sistema de placar
- 🎨 Interface moderna
- 📱 Design responsivo

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 👨‍💻 Autor

**Seu Nome**

- GitHub: [@L00p4](https://github.com/L00p4)
- LinkedIn: [Guilherme Marucchi](https://www.linkedin.com/in/guilherme-marucchi/)

## 🌟 Mostre seu Apoio

Se este projeto te ajudou, considere dar uma ⭐️!

---

<div align="center">
  <p>Feito com ❤️ e muito ☕</p>
  <p>
    <a href="#top">Voltar ao Topo ⬆️</a>
  </p>
</div>
