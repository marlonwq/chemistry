import { defineConfigWithTheme } from 'vitepress'
import type { ThemeConfig } from 'vitepress-carbon'
import baseConfig from 'vitepress-carbon/config'
import mathjax3 from 'markdown-it-mathjax3'

// https://vitepress.dev/reference/site-config
export default defineConfigWithTheme<ThemeConfig>({
  extends: baseConfig,
  title: "Marlon C",
  description: "Bizuário de Química",
  srcDir: 'src',
  base: '/',
  markdown: {
    config: (md) => { md.use(mathjax3) }
  },

  themeConfig: {
    logo: '/atom.svg',
    nav: [
      { text: 'Início', link: '/' },
      { text: 'Química Orgânica', link: '/organica/intro' },
      { text: 'Química Geral e Inorgânica', link: '/geral/atomos' },
      { text: 'Físico-Química', link: '/fisico/termoquimica' },
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: '🧪 Química Orgânica',
        items: [
          { text: 'Estrutura das Moléculas', link: '/organica/estrutura' },
          { text: 'Nomenclatura Orgânica', link: '/organica/nomenclatura' },
          { text: 'Hidrocarbonetos & Álcoois', link: '/organica/intro' },
          { text: 'Funções Orgânicas', link: '/organica/funcoes' },
          { text: 'Reações Orgânicas', link: '/organica/reacoes' },
          { text: 'Isomeria', link: '/organica/isomeria' },
        ]
      },
      {
        text: '⚗️ Química Geral e Inorgânica',
        items: [
          { text: 'Substâncias e Misturas', link: '/geral/substancias-misturas' },
          { text: 'Leis das Reações Químicas', link: '/geral/leis-reacoes' },
          { text: 'Grandezas Químicas', link: '/geral/grandezas' },
          { text: 'Cálculo de Fórmulas', link: '/geral/calc-formulas' },
          { text: 'Cálculo Estequiométrico', link: '/geral/estequiometria' },
          { text: 'Estudo dos Gases', link: '/geral/gases' },
          { text: 'Átomos e Estrutura Atômica', link: '/geral/atomos' },
          { text: 'Tabela Periódica', link: '/geral/tabela-periodica' },
          { text: 'Ligações Químicas', link: '/geral/ligacoes' },
        ]
      },
      {
        text: '🔬 Físico-Química',
        items: [
          { text: 'Termodinâmica – 1ª Lei', link: '/fisico/termodinamica-1lei' },
          { text: 'Calorimetria', link: '/fisico/calorimetria' },
          { text: 'Termoquímica', link: '/fisico/termoquimica' },
          { text: 'Termodinâmica – 2ª e 3ª Leis', link: '/fisico/termodinamica-2-3leis' },
          { text: 'Cinética Química', link: '/fisico/cinetica' },
          { text: 'Equilíbrio Químico', link: '/fisico/equilibrio' },
          { text: 'Coloides e Dispersões', link: '/fisico/coloides' },
          { text: 'Soluções', link: '/fisico/solucoes' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/marlonwq/chemistry' }
    ]
  }
})
