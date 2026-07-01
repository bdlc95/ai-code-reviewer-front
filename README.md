Backend: https://github.com/bdlc95/ai-code-reviewer
# AI Code Reviewer - Frontend

![React](https://img.shields.io/badge/React-19-blue)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Vite](https://img.shields.io/badge/Vite-6-purple)
![Axios](https://img.shields.io/badge/Axios-HTTP-lightgrey)
![Status](https://img.shields.io/badge/Status-Concluído-brightgreen)

Front-end do projeto **AI Code Reviewer**, desenvolvido para permitir análise inteligente de código por meio de Inteligência Artificial.

A aplicação permite colar trechos de código e receber feedback automatizado baseado em princípios de engenharia de software.

---

## Sobre o Projeto

Este projeto foi desenvolvido com React + TypeScript consumindo a API do back-end em Spring Boot.

O objetivo é fornecer uma interface moderna, intuitiva e funcional para análise de código em tempo real.

---

## Tecnologias Utilizadas

- React
- TypeScript
- Vite
- Axios
- CSS

---

## Funcionalidades

- Input para colar código
- Envio de código para API
- Exibição da análise gerada pela IA
- Interface responsiva
- Integração completa com API REST

---

## Estrutura do Projeto

```text
src/
 ├── assets/
 ├── App.tsx
 ├── main.tsx
 └── styles/
```

---

## Fluxo da Aplicação

```text
Usuário insere código
        ↓
Front envia para API
        ↓
Back-end processa com OpenAI
        ↓
Front renderiza análise
```

---

## Como Executar

### Clonar repositório

```bash
git clone https://github.com/bdlc95/ai-code-reviewer-front.git
```

### Entrar no projeto

```bash
cd ai-code-reviewer-front
```

### Instalar dependências

```bash
npm install
```

### Rodar projeto

```bash
npm run dev
```

Aplicação disponível em:

```text
http://localhost:5173
```

---

## Autor

**Bruno de Lima**
