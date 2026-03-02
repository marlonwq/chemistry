---
title: Equilíbrio Químico
---

# Equilíbrio Químico — Termodinâmica e Le Chatelier

---

## Constante de Equilíbrio — Fundamentação Termodinâmica

O equilíbrio é atingido quando $\Delta G_{rxn} = 0$, ou seja, quando a energia livre de Gibbs é mínima.

$$\Delta G = \Delta G^\circ + RT\ln Q$$

No equilíbrio, $\Delta G = 0$ e $Q = K$:

$$\boxed{\Delta G^\circ = -RT\ln K}$$

Isso conecta diretamente a termodinâmica (ΔG°) ao equilíbrio (K).

---

## Expressões de K

Para `aA + bB ⇌ cC + dD`:

### Kc (concentrações molares)
$$K_c = \frac{[C]^c[D]^d}{[A]^a[B]^b}$$

### Kp (pressões parciais)
$$K_p = \frac{p_C^c \cdot p_D^d}{p_A^a \cdot p_B^b}$$

### Relação entre Kp e Kc
$$K_p = K_c(RT)^{\Delta n_g}$$

onde $\Delta n_g$ = mols de gás (produtos) − mols de gás (reagentes).

> [!important]
> Sólidos e líquidos puros têm atividade = 1 e **não entram na expressão de K**. Isso é consequência da termodinâmica (atividade de espécies puras = 1 no estado padrão).

---

## Quociente de Reação (Q) vs. K

| Situação | Conclusão |
|----------|-----------|
| Q < K | Reação prossegue **para produtos** (→) |
| Q = K | Sistema em **equilíbrio** |
| Q > K | Reação prossegue **para reagentes** (←) |

---

## Princípio de Le Chatelier

Perturbações deslocam o equilíbrio para minimizar o efeito. Análise via Q:

### Variação de Concentração
- Adicionar reagente: Q < K → desloca para produtos
- Remover produto: Q < K → desloca para produtos

### Variação de Pressão (sistemas gasosos)
- Aumentar pressão (reduzir volume): desloca para o lado com **menor** Δn_g
- Se Δn_g = 0: pressão não desloca o equilíbrio

### Variação de Temperatura
$$\frac{d\ln K}{dT} = \frac{\Delta H^\circ}{RT^2} \quad \text{(Equação de van't Hoff)}$$

- ΔH° < 0 (exotérmica): K **diminui** com T (equilíbrio recua)
- ΔH° > 0 (endotérmica): K **aumenta** com T

$$\ln\frac{K_2}{K_1} = -\frac{\Delta H^\circ}{R}\left(\frac{1}{T_2} - \frac{1}{T_1}\right)$$

### Catalisador
Não altera K. Reduz o tempo para atingir o equilíbrio — acelera igualmente reação direta e inversa.

---

## Equilíbrios em Solução Aquosa

### Ácidos e Bases (Brønsted–Lowry)

$$K_a = \frac{[\text{H}^+][\text{A}^-]}{[\text{HA}]} \qquad \text{pH} = -\log[\text{H}^+]$$

$$K_a \cdot K_b = K_w = 10^{-14} \text{ (a 25°C)} \implies \text{pK}_a + \text{pK}_b = 14$$

### Solução Tampão — Equação de Henderson–Hasselbalch

$$\text{pH} = \text{pK}_a + \log\frac{[\text{A}^-]}{[\text{HA}]}$$

- Capacidade tampão máxima: pH ≈ pKa (proporção 1:1)
- Limitada: se adicionar excesso de ácido/base, pH muda bruscamente

### Produto de Solubilidade (Ksp)

$$\text{A}_m\text{B}_n(s) \rightleftharpoons m\text{A}^+(aq) + n\text{B}^-(aq) \qquad K_{sp} = [\text{A}^+]^m[\text{B}^-]^n$$

**Efeito do íon comum**: adicionar íon em comum **diminui a solubilidade** (Q > Ksp → precipitação).

**Efeito do pH**: se o ânion é base conjugada de ácido fraco, a solubilidade **aumenta em meio ácido** (Le Chatelier: H⁺ consome B⁻, deslocando dissolução).

> [!tip]
> Em questões de ITA com equilíbrio e temperatura, sempre cheque se pede K a temperatura diferente — use van't Hoff integrada. Frequentemente pedem para combinar Kc, Kp e ΔG° na mesma questão.
