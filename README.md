# Open Finance Register

Projeto de gerenciamento de parceiros e empresas externas utilizando React + Vite + Typescript em uma arquitetura de micro frontends.

## Etapas
### Estrutura do Projeto
```sh
@host-app
  |---Company Manager Remote (MFE)
  |---Partner Manager Remote (MFE)
```
>MFE: Micro Frontend

#### Configurações iniciais
- [x] Configuração do Vite junto com o pacote [Federation](https://github.com/originjs/vite-plugin-federation)
- [x] Configuração dos temas, estilizações e componentes usando [Tailwind CSS](https://tailwindcss.com/docs/installation) e [shadcn/ui](https://ui.shadcn.com/)
- [x] Estrutura de rotas da aplicação usando [react-router-dom](https://reactrouter.com/en/main)
- [x]  Desenvolvimento dos layouts padrão
- [x] Páginas do Host
- [x] Componentes do MFE de Parceiros
- [x] Componentes do MFE de Empresas
- [x] Configurações do ambiente de testes unitários
- [x] Criação dos testes unitários
- [x] Configuração do ambiente para teste `e2e`
- [x] Crianção dos testes `e2e`
- [x] Colocar o projeto em containers

### Executando o Projeto
#### Docker(Recomendado)
1. O `docker` e `docker compose` precisam estar instalados na máquinas -> (Docker)[https://www.docker.com/] 
2. Crie um arquivo `.env.local` para cada projeto `@host-app`, `partner-manage-remote` e `company-manage-remote` então copie as as variáveis que estão no `.env.example`
  - No `@host-app` a variável `VITE_PASSWORD_SECRET_KEY` é uma chave para criptografar a senha, então fica a seu critério qual chave usar.
2. Na raiz do projeto onde tem o arquivo docker-compose, basta rodar o seguinte comando `docker compose -up --build`

#### Rodando Localmente
1. Crie um arquivo `.env.local` para cada projeto `@host-app`, `partner-manage-remote` e `company-manage-remote` então copie as as variáveis que estão no `.env.example`
  - No `@host-app` a variável `VITE_PASSWORD_SECRET_KEY` é uma chave para criptografar a senha, então fica a seu critério qual chave usar.
2. Entrar em cada pasta `@host-app`, `partner-manage-remote` e `company-manage-remote` e rodar `pnpm i`(Eu estou usando `pnpm`, mas qualquer gerenciador de pacotes funciona)
3. Entrar na pasta do projeto `partner-manage-remote` e rodar `pnpm build` e depois `pnpm preview`
4. Entrar na pasta do projeto `company-manage-remote` e rodar `pnpm build` e depois `pnpm preview`
5. Entrar na pasta do projeto `@host-app` e rodar `pnpm build` e depois `pnpm preview` ou simplesmente `pnpm dev`
