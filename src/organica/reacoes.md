---
title: Reações Orgânicas
---

# Reações Orgânicas — Mecanismos e Estereoquímica

---

## Substituição Nucleofílica (SN)

### SN2 — Bimolecular, um único passo
- Nucleófilo ataca pelo **lado oposto** ao grupo de saída (ataque posterior)
- **Inversão de Walden**: configuração absoluta invertida no carbono de reação
- Cinética: $v = k[\text{Nu}][\text{substrato}]$ (2ª ordem)

**Fatores que favorecem SN2:**
- Substrato pouco impedido (1° >> 2°, 3° inviável)
- Nucleófilo forte e pouco volumoso (I⁻, CN⁻, RS⁻)
- Solvente aprótico polar (DMF, DMSO, acetona) — não solvatam o nucleófilo
- Bom grupo de saída (I⁻ > Br⁻ > Cl⁻ >> F⁻; TsO⁻, MsO⁻ excelentes)

### SN1 — Unimolecular, dois passos
1. Ionização: $R\text{–}X \rightarrow R^+ + X^-$ (etapa lenta, determinante)
2. Ataque do nucleófilo ao carbocátion plano (sp²)
- **Racemização**: carbocátion plano → ataque pelos dois lados → mistura racêmica (ou parcialmente racêmica se houver pares de íons)
- Cinética: $v = k[\text{substrato}]$ (1ª ordem)

**Fatores que favorecem SN1:**
- Substrato que gera carbocátion estável: 3° > 2° >> 1° (alílico/benzílico também ótimos)
- Solvente prótico polar (água, etanol) — estabiliza íons por solvatação
- Nucleófilo fraco

> [!important]
> **Rearranjos** são diagnóstico de SN1: migração de H ou grupo alquila para estabilizar o carbocátion intermediário (rearranjo de Wagner–Meerwein, expansão/contração de anel).

---

## Eliminação (E)

### E2 — Bimolecular, concertado
- Base remove H β enquanto grupo de saída sai do C α — **anti-periplanar** obrigatório
- Cinética de 2ª ordem: $v = k[\text{base}][\text{substrato}]$
- **Regra de Zaitsev**: dá preferencialmente o alceno mais substituído (mais estável)
- Base volumosa (t-BuO⁻) → **regra de Hofmann** → alceno menos substituído

### E1 — Unimolecular, dois passos
1. Formação do carbocátion (igual ao SN1)
2. Base remove H β do carbocátion → alceno

**SN1 vs. E1**: competem entre si (mesmo intermediário); temperatura alta favorece eliminação.

### Estereoquímica em E2
- Anti-periplanar exige H e grupo de saída em posição **anti** (diedral 180°)
- Em ciclohexano: ambos devem estar em posição **axial** (trans-diaxial)

---

## Substituição Eletrofílica Aromática (SEA)

Mecanismo geral (para benzeno):
1. Eletrófilo (E⁺) atacado pelo π do anel → formação de cátion σ (**arenônio/Wheland**)
2. Perda de próton → restaura aromaticidade

**O custo energético** é alto (perde aromaticidade), por isso o benzeno prefere SEA (restaura anel) sobre adição eletrofílica.

### Efeito de Substituintes no Anel
| Tipo | Exemplos | Direção | Velocidade |
|------|----------|---------|------------|
| Ativadores o/p | –OH, –OR, –NH₂, –R | orto/para | > benzeno |
| Desativadores m | –NO₂, –CN, –CHO, –COOH | meta | < benzeno |
| Ativadores fracos o/p | –F, –Cl, –Br, –I | orto/para | < benzeno |

> [!tip]
> Halogênios são **desativadores** (–I indutivo) mas **diretores orto/para** (+M ressonância). O efeito –I domina a velocidade, mas +M domina a regioseletividade porque estabiliza cátion σ em posição orto/para.

---

## Adição Eletrofílica a Alcenos

### Halogenação (X₂)
- Mecanismo: formação de **íon halogênio (brônio ou clônio)** — triangular, simétrico
- Nucleófilo abre o íon pelo **lado oposto** à ponte
- Produto: **trans** (adição anti) — diastereosseletiva

### Hidrohalogenação (HX) — Regra de Markovnikov
- O próton adiciona ao carbono com **mais H** (gera carbocátion mais estável)
- Mecanismo: H⁺ (passo 1) → carbocátion intermediário → X⁻ (passo 2)
- Anti-Markovnikov: radical livre com ROOR/hν (BR adiciona ao C menos substituído)

### Adição de H₂O (Hidratação)
- H₂SO₄ cat.: segue Markovnikov (via carbocátion)
- **Hidratação oxymercuration–redução**: Markovnikov, sem rearranjo
- **Hidroboração–oxidação**: anti-Markovnikov, syn, sem rearranjo

---

## Oxidação e Redução

| Transformação | Reagente | Condição |
|---------------|----------|----------|
| Alceno → diol (syn) | OsO₄ | catalítico |
| Alceno → epóxido | mCPBA | — |
| Alceno → clivagem | O₃ / Zn,H₂O (ozonólise) | redu­tiva |
| Aldeído → ácido | KMnO₄ aq. | — |
| Álcool 1° → aldeído | PCC ou Swern | suave |
| Cetona → álcool | NaBH₄ | reduce C=O |
| Éster / ácido → álcool | LiAlH₄ | forte |

> [!important]
> OsO₄ dá adição **syn** (diol cis). mCPBA dá epóxido que ao abrir em base também dá **trans**-diol (anti). As duas rotas são complementares estereoquimicamente.
