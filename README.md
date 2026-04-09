# Bizuário de Química

Um site com notas de química - Orgânica, Geral e Físico-Química, para revisões rápidas quando não se está com o caderno por perto, como em estado de locomoção.

---

## Contribuindo

Sugestões, correções e novos conteúdos são bem-vindos! Abra uma issue, faça um pull request ou entre em contato caso identifique algum erro ou tenha sugestões de adição.

### Rodando localmente

```bash
git clone https://github.com/marlonwq/chemistry.git
cd chemistry
npm install
npm run docs:dev
```

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

