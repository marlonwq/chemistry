---
title: Cinética Química
---

# Cinética Química — Mecanismos e Teoria de Colisões

---

## Lei de Velocidade e Ordem de Reação

Para uma reação `aA + bB → produtos`:

$$v = k[A]^m[B]^n$$

- **m, n**: ordens parciais — determinadas **experimentalmente**, não pelos coeficientes estequiométricos
- **m + n**: ordem global
- **k**: constante de velocidade (unidade depende da ordem)

### Unidades de k por Ordem

| Ordem | Unidade de k |
|-------|-------------|
| 0 | mol L⁻¹ s⁻¹ |
| 1 | s⁻¹ |
| 2 | L mol⁻¹ s⁻¹ |
| n | L^(n−1) mol^(1−n) s⁻¹ |

---

## Cinética Integrada

### Ordem Zero
$$[A] = [A]_0 - kt \qquad t_{1/2} = \frac{[A]_0}{2k}$$

### Primeira Ordem
$$[A] = [A]_0 e^{-kt} \qquad t_{1/2} = \frac{\ln 2}{k} \approx \frac{0{,}693}{k}$$

O $t_{1/2}$ é independente da concentração inicial — característica diagnóstico de 1ª ordem.

### Segunda Ordem (em A)
$$\frac{1}{[A]} = \frac{1}{[A]_0} + kt \qquad t_{1/2} = \frac{1}{k[A]_0}$$

> [!tip]
> Para identificar a ordem experimentalmente: plot **[A] vs t** (reta → ordem 0), **ln[A] vs t** (reta → ordem 1), **1/[A] vs t** (reta → ordem 2).

---

## Equação de Arrhenius

$$k = A \cdot e^{-E_a/RT}$$

- $A$: fator pré-exponencial (frequência de colisões com orientação correta)
- $E_a$: energia de ativação
- Forma linearizada: $\ln k = \ln A - \frac{E_a}{R}\cdot\frac{1}{T}$

### Comparação em duas temperaturas:
$$\ln\frac{k_2}{k_1} = \frac{E_a}{R}\left(\frac{1}{T_1} - \frac{1}{T_2}\right)$$

**Regra de van't Hoff**: a cada 10°C, velocidade ≈ dobra (equivale a Ea ≈ 50 kJ/mol a 300 K).

---

## Teoria do Estado de Transição (Eyring)

Mais rigorosa que a teoria de colisões:

$$k = \frac{k_BT}{h} e^{-\Delta G^\ddagger/RT} = \frac{k_BT}{h} e^{\Delta S^\ddagger/R} e^{-\Delta H^\ddagger/RT}$$

- $\Delta G^\ddagger = \Delta H^\ddagger - T\Delta S^\ddagger$: energia livre de ativação
- O complexo ativado (estado de transição) está no **máximo de energia** da coordenada de reação — não é um intermediário detectável

### Diagrama de Coordenada de Reação

```
E
│       ‡
│      /‡\     ← estado de transição
│     /   \
│    /     \──── intermediário (se houver)
│   /             \
│──/               \────
│ reagentes        produtos
└────────────────────────────► coordenada de reação
```

---

## Mecanismos de Reação

### Etapa Determinante da Velocidade
O mecanismo mais lento determina a lei de velocidade observada.

**Exemplo:** reação de SN1
1. $\text{RX} \xrightarrow{k_1, \text{lenta}} \text{R}^+ + \text{X}^-$ ← etapa lenta
2. $\text{R}^+ + \text{Nu} \xrightarrow{k_2, \text{rápida}} \text{RNu}$

Lei de velocidade: $v = k_1[\text{RX}]$ — 1ª ordem, Nu não aparece.

### Aproximação do Estado Estacionário (SSA)
Para intermediários de vida curta, $\frac{d[\text{I}]}{dt} \approx 0$:

$$[\text{I}] \approx \frac{k_\text{formação}[\text{reagentes}]}{k_\text{consumo}}$$

Usado para derivar leis de velocidade de mecanismos complexos (enzimas — Michaelis-Menten).

---

## Catálise

$$E_a(\text{catalisado}) < E_a(\text{não catalisado})$$

O catalisador oferece um caminho alternativo de menor $\Delta G^\ddagger$. **Não altera** ΔG da reação (não muda equilíbrio).

- **Homogênea**: mesma fase que os reagentes (ácido H⁺ em solução)
- **Heterogênea**: fase diferente (Ni sólido para hidrogenação)
- **Enzimática**: proteína quiral → reações estereosseletivas

> [!important]
> Catalisador acelera tanto a reação direta quanto a inversa pelo mesmo fator. Por isso, **não desloca o equilíbrio** — só reduz o tempo para atingi-lo.
