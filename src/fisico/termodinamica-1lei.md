---
title: Termodinâmica – 1ª Lei
---

# Termodinâmica — 1ª Lei

---

## Sistemas e Vizinhanças

| Conceito | Definição |
|----------|-----------|
| **Sistema** | Parte do universo em estudo |
| **Vizinhança** | Tudo fora do sistema |
| **Universo** | Sistema + Vizinhança |

### Tipos de Sistema

| Tipo | Troca massa? | Troca energia? | Exemplo |
|------|-------------|----------------|---------|
| **Aberto** | ✅ | ✅ | Panela sem tampa |
| **Fechado** | ❌ | ✅ | Panela com tampa |
| **Isolado** | ❌ | ❌ | Garrafa térmica ideal |

---

## Trabalho, Calor e Energia

### Energia Interna (U)
Soma de toda energia cinética e potencial das partículas do sistema. É função de estado — depende apenas do estado inicial e final.

### Calor (q)
- Transferência de energia por diferença de temperatura
- $q > 0$: sistema **absorve** calor (endotérmico)
- $q < 0$: sistema **libera** calor (exotérmico)

### Trabalho (w)
- Trabalho de expansão (PV): $w = -p_{ext}\Delta V$
- $w > 0$: trabalho feito **sobre** o sistema (compressão)
- $w < 0$: trabalho feito **pelo** sistema (expansão)

> [!important]
> Convenção IUPAC: $w = -p_{ext}\Delta V$. Em processos irreversíveis, usa-se $p_{ext}$; em processos reversíveis, $p_{int} = p_{ext}$ a todo instante.

---

## 1ª Lei da Termodinâmica

$$\boxed{\Delta U = q + w}$$

### Processos Especiais

| Processo | Condição | Simplificação |
|---------|---------|---------------|
| **Isotérmico** | $\Delta T = 0$ | $\Delta U = 0$ (gás ideal) → $q = -w$ |
| **Isobárico** | $\Delta p = 0$ | $w = -p\Delta V$; $q_p = \Delta H$ |
| **Isocórico** | $\Delta V = 0$ | $w = 0$; $\Delta U = q_v$ |
| **Adiabático** | $q = 0$ | $\Delta U = w$ |

### Entalpia (H)
Definida para simplificar processos isobáricos (mais comuns em laboratório):

$$H = U + pV \implies \Delta H = \Delta U + \Delta(pV) = \Delta U + p\Delta V + V\Delta p$$

A pressão constante ($\Delta p = 0$):

$$\Delta H = \Delta U + p\Delta V = q_p$$

Para reações com gases, relacionando $\Delta H$ e $\Delta U$:

$$\Delta H = \Delta U + \Delta n_g RT$$

onde $\Delta n_g$ = mols de gás dos produtos − mols de gás dos reagentes.

---

## Capacidade Calorífica

$$C = \frac{q}{\Delta T}$$

- **Cp** (pressão constante): $q_p = nC_p\Delta T$
- **Cv** (volume constante): $q_v = nC_v\Delta T$
- Para gás ideal monoatômico: $C_v = \frac{3}{2}R$, $C_p = \frac{5}{2}R$
- Relação de Mayer: $C_p - C_v = R$ (gás ideal)

> [!tip]
> Quando a questão não especifica o processo e envolve gás ideal com variação de temperatura, identifique se é Cp (pressão cte, recipiente aberto) ou Cv (volume cte, recipiente rígido) antes de calcular q.
