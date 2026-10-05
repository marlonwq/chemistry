# Bizuário de Química

Um site com notas de química - Orgânica, Geral e Físico-Química, para revisões rápidas quando não se está com o caderno por perto, como em estado de locomoção.

---

## Contribuindo

Sugestões, correções e novos conteúdos são bem-vindos! Abra uma issue, faça um pull request ou entre em contato caso identifique algum erro ou tenha sugestões de adição.

### Rodando localmente

Use Node.js 22.18.0 e pnpm 10.28.0 (a versão declarada no `package.json`).

```bash
git clone https://github.com/marlonwq/chemistry.git
cd chemistry
pnpm install --frozen-lockfile
pnpm dev
```

Para verificar o site antes de publicar:

```bash
pnpm build
pnpm preview
```

### Atualizando o Carbon

O tema é uma dependência do site. Salve suas alterações e faça a atualização em
uma branch própria:

```bash
git switch -c chore/atualizar-carbon
pnpm update vitepress-carbon
pnpm build
pnpm preview
```

Esse comando atualiza o pacote dentro da faixa declarada no `package.json` e não
substitui suas notas em `src/`. Confira o visual e revise o diff antes de commitar
as alterações em `package.json` e `pnpm-lock.yaml`. Mudanças no repositório do
Carbon chegam por esse fluxo depois de uma nova versão ser publicada no npm.

### Publicação

O CI instala as dependências pelo lockfile e compila o site nas versões de Node
20.19.0, 22.18.0 e 24. O workflow `static.yml` publica o resultado de
`.vitepress/dist` no GitHub Pages quando há um push em `main`.

O deploy do Pages define `GITHUB_PAGES=true` para usar a base `/chemistry/`.
Os comandos locais e a Vercel usam a base `/`. Na Vercel, os comandos de
instalação e build também usam pnpm.

### Estrutura de arquivos

```
src/
├── organica/       # Química Orgânica
├── geral/          # Química Geral e Inorgânica
└── fisico/         # Físico-Química
```

Cada tópico é um arquivo `.md` dentro da pasta correspondente. Basta criar o arquivo e adicionar a entrada no `sidebar` do `.vitepress/config.mts`.

### Convenções de escrita

- Use **negrito** para termos e conceitos-chave
- Equações com LaTeX inline: `$...$` ou em bloco `$$...$$`
- Prefira exemplos resolvidos passo a passo
- Nível de rigor: vestibular de alto nível (ITA, IME, FUVEST)

---

## Licença

MIT

