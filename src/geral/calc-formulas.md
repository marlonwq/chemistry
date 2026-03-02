---
title: Cálculo de Fórmulas
---

# Cálculo de Fórmulas

---

## Fórmula Centesimal (Percentual em Massa)

Indica a composição percentual em massa de cada elemento na substância.

$$\% X = \frac{n_X \cdot M_X}{M_{\text{composto}}} \times 100$$

**Exemplo — glicose (C₆H₁₂O₆):**

$$M = 6(12) + 12(1) + 6(16) = 72 + 12 + 96 = 180 \text{ g/mol}$$

| Elemento | Cálculo | % |
|---------|---------|---|
| C | $72/180 \times 100$ | 40,0% |
| H | $12/180 \times 100$ | 6,7% |
| O | $96/180 \times 100$ | 53,3% |

---

## Fórmula Mínima (Empírica)

Menor razão inteira entre os átomos dos elementos da substância. Representa a composição qualitativa mínima.

### Procedimento: Fórmula % → Empírica

1. Assuma 100 g de amostra → % vira grama
2. Divida cada massa pela respectiva massa molar → obtém moles de cada elemento
3. Divida todos os valores pelo menor → razões relativas
4. Se não forem inteiros, multiplique pelo mínimo necessário (×2, ×3...)

**Exemplo:**
- Composto: 40,0% C, 6,7% H, 53,3% O
- Moles: C = 40,0/12 = 3,333 | H = 6,7/1 = 6,7 | O = 53,3/16 = 3,333
- Razão (÷ 3,333): C = 1 | H = 2,01 ≈ 2 | O = 1
- Fórmula empírica: **CH₂O**

> [!tip]
> Se a razão deu algo como 1,5 ou 2,5, multiplique tudo por 2. Se deu 1,33 (≈ 4/3), multiplique por 3. Se deu 1,25 (≈ 5/4), multiplique por 4.

---

## Fórmula Molecular

A fórmula molecular é um múltiplo inteiro da fórmula empírica:

$$\text{Fórmula molecular} = n \times \text{Fórmula empírica}$$

$$n = \frac{M_{\text{molecular}}}{M_{\text{empírica}}}$$

A massa molecular é determinada experimentalmente por:
- Espectrometria de massas (método mais direto)
- Crioscopia ou osmometria (propriedades coligativas)
- Difração de raios X

**Exemplo (continuação):**
- Fórmula empírica: CH₂O → $M_{emp} = 30$ g/mol
- Massa molecular real (glicose): 180 g/mol
- $n = 180/30 = 6$
- Fórmula molecular: **(CH₂O)₆ = C₆H₁₂O₆** ✅

---

## Graus de Insaturação (GI) — Revisão

Para uma fórmula molecular $C_n H_m N_p O_q X_r$ (X = halogênio):

$$GI = \frac{2n + 2 + p - m - r}{2}$$

| GI | Estrutura sugerida |
|----|-------------------|
| 0 | Saturado, cadeia aberta |
| 1 | 1 anel ou 1 C=C ou 1 C=O |
| 2 | 2 anéis, 1 C≡C, anel + dupla |
| 4 | Anel benzênico (arquétipo) |

**Regras de contagem:**
- O não afeta GI
- N: adiciona 1 (como CH)
- X: subtrai 1 (como H)
- Si, S: como C

> [!important]
> GI ≥ 4 com UV forte → altíssima probabilidade de anel aromático. GI fracionário → erro na fórmula (verifique se não é sal ou espécie carregada).

---

## Determinação por Combustão

Métodos clássicos para compostos orgânicos CₙHₘOₚ:

Queima completa em excesso de O₂:
$$C_nH_mO_p + \text{O}_2 \rightarrow n\text{CO}_2 + \frac{m}{2}\text{H}_2\text{O}$$

Mede-se:
- Massa de CO₂ → moles de C
- Massa de H₂O → moles de H (cada mol H₂O = 2 mol H)
- Massa de O = massa total − massa C − massa H

> [!tip]
> Em questões de combustão, se o enunciado dá volumes de CO₂ e H₂O (gás), lembre que são proporcionais a moles (mesma T e p). Não precisa converter para massa — trabalhe direto em moles/volumes.
