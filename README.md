# TDW 1st Mini-Project - Gabriel Teixeira

## Status do Projeto

[![CI/CD Pipeline](https://github.com/GabrielTeixei/tdw-mp1-Gabriel-Teixeira/actions/workflows/ci-cd.yml/badge.svg)](https://github.com/GabrielTeixei/tdw-mp1-Gabriel-Teixeira/actions/workflows/ci-cd.yml)  
[![Netlify Status](https://api.netlify.com/api/v1/badges/e39a2055-a018-4963-a4ba-d4402eb1fd7e/deploy-status)](https://tdw-mp1-gabriel-teixeira.tdw-mctw.pt/)

**Deploy:** [https://tdw-mp1-gabriel-teixeira.tdw-mctw.pt/](https://tdw-mp1-gabriel-teixeira.tdw-mctw.pt/)

![Status do Build](https://github.com/GabrielTeixei/tdw-mp1-Gabriel-Teixeira/actions/workflows/test.yml/badge.svg?branch=main)

---

## Sobre o Projeto

Este projeto é um blog estático desenvolvido com **Next.js** e **Contentful CMS**, com foco em:

- Geração estática de páginas
- Integração com Contentful para gerenciamento de conteúdo
- CI/CD automático com GitHub Actions
- Deploy contínuo no Netlify
- Boas práticas de desenvolvimento

![Blog Screenshot](readme_assets/Blog.png)

---

## Estrutura do Projeto

```bash
.
├── app/                 # Componentes e páginas do Next.js
├── __tests__/           # Testes unitários, de integração e snapshots
├── lib/                 # Conexão e API com Contentful
├── .github/workflows/   # CI/CD GitHub Actions
├── .husky/              # Hooks de git
├── package.json
├── README.md
└── tsconfig.json
