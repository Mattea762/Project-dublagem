# Project Dublagens

Site de relatórios e acesso antecipado para projetos de dublagem.

## GitHub Pages
Envie `index.html`, `style.css` e `script.js` para a raiz do repositório. Depois abra:
**Settings → Pages → Deploy from a branch → main → / (root) → Save**

## Imagem de Sally Face
A página usa a imagem de capa de Sally Face hospedada pela infraestrutura de imagens da Steam. A página do jogo na Steam identifica o jogo como **Sally Face - Episode One** e o copyright da obra pertence à Portable Moose LLC.
Página oficial na Steam:
https://store.steampowered.com/app/541570/Sally_Face/

## Download da dublagem
No `script.js`, troque:
`const DOWNLOAD_URL="#";`
pelo link do seu GitHub Release/arquivo de acesso antecipado.

## Feedback
O formulário salva os dados somente no navegador usando `localStorage`. Para receber todos os feedbacks em um único banco, será necessário conectar um serviço de formulário/backend.
