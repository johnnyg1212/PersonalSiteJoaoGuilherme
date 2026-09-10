# Site pessoal — João Guilherme Fernandes Frota

Site estático, bilíngue (PT / EN), sem dependências de build.

## Arquivos

| Arquivo | Função |
|---|---|
| `index.html` | Estrutura e conteúdo (textos em português por padrão) |
| `styles.css` | Estilo — tema escuro, paleta azul/roxo, layout responsivo |
| `script.js` | Troca de idioma, animações de entrada, ano do rodapé |

## Como funciona a troca de idioma

- O conteúdo em **português** fica no próprio `index.html`.
- As traduções para **inglês** ficam no objeto `EN` em `script.js`.
- O botão `PT / EN` no topo alterna entre os dois; a escolha é salva no
  navegador (`localStorage`) e, na primeira visita, o idioma é detectado
  pelo navegador do visitante.
- Para ajustar um texto: edite o português no HTML **e** a chave
  correspondente (`data-i18n="..."`) no objeto `EN`.
  
## Personalizar cores

As cores estão centralizadas no topo do `styles.css`, em `:root`
(`--accent`, `--accent-2`, `--accent-3`, `--gradient`).
