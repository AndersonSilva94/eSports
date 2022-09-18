![Wallpaper - 2560x1080](https://user-images.githubusercontent.com/52717632/189574623-ec52494c-023e-4d05-97c9-b5ddfa0b101b.jpg)
# Projeto eSports - Trilha ReactJs/ React Native Ignite :rocket:

## O que será desenvolvido?
* Criação de uma aplicação que apresenta os principais games que podem ser competidos em duo (LoL, Fortnite, etc), dessa forma o usuário pode publicar e ver anúncios procurando jogadores em comum e possibilitando o contato através de preenchimento de formulário
* O figma do projeto se encontra no link: https://www.figma.com/community/file/1150897317533332617

## Dia 1 - Base building :rocket:
- [x] Criação do servidor da aplicação
- [x] Criação dos arquivos da aplicação para versão web e instalação de dependências (React)
- [x] Criação dos arquivos da aplicação para versão mobile e instalação de dependências (React Native)

## Dia 2 - High speed :rocket:
### - Web
- [x] Instalação de dependências (tailwindcss, postcss)
- [x] Inserção de logo e background
- [x] Construção dos cards de anúncios (estático)
- [x] Construção do footer

### - Mobile
- [x] Instalação de dependências (expo-google-fonts/inter, react-native-safe-area-context, expo-linear-gradient)
- [x] Criação de componente de Background
- [x] Criação de componente de Heading
- [x] Criação de componente de Loading
- [x] Criação de componente de GameCard
- [x] Criação da Home

## Dia 3 - To be continued :rocket:
- [x] Instalação de dependências (prisma, cors)
- [x] Modelagem de banco de dados usando sqlite
- [x] Construção de rota para listar games
- [x] Construção de rota para listar anúncios por game
- [x] Construção de rota para retornar o discord pelo ID do anúncio
- [x] Construção de rota para criar um novo anúncio
- [x] Criação de funções de conversão de horas em string para minutos numéricos (vice-versa)

## Dia 4 - Power Up :rocket:
### - Web
- [x] Instalação de biblioteca para modal (radix-ui/react-dialog)
- [x] Criando componente GameBanner
- [x] Criando componente CreateAdBanner
- [x] Chamar a api para buscar dados de games
- [x] Criar o modal com formulário
- [x] Criar formulário

### - Mobile
- [x] Instalação de dependências (react-navigation/native, react-navigation/native-stack, react-native-screens, phosphor-react-native, react-native-svg)
- [x] Chamar a api de listar games e buscar os anúncios de um game através de parâmetros de rota
- [x] Criação de rotas para Home e para página de Game
- [x] Criação de componentes para renderizar o cabeçalho da página de Game
- [x] Criação de componentes para o card de anúncios

## Dia 5 - Final round :rocket:
### - Web
- [x] Instalação de dependências (radix-ui/react-checkbox, radix-ui/react-toggle-group, axios)
- [x] Criação de componente de formulário
- [x] Criação de select e renderizando options com base nos dados
- [x] Criação de toggle para selecionar dias da semana
- [x] Criação de função para postar um novo anúncio e integrando com o endpoint

### - Mobile
- [x] Instalação de dependências (expo-clipboard, expo-modules-core, expo-notifications)
- [x] Criação do componente de modal do discord
- [x] Criação de lógica para copiar o nome de usuário do discord para área de transferência
- [x] BÔNUS: criando serviço de notificação de novos anúncios
---
:keyboard: com :purple_heart: por [Anderson Silva (Andy)](https://www.linkedin.com/in/andssilva/) 😊