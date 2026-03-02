---
title: Soluções
---

# Soluções — Definições e Propriedades

---

## Definições

### Solução
Mistura homogênea de duas ou mais substâncias. A substância em menor quantidade (geralmente) é o **soluto**; a em maior quantidade é o **solvente**.

### Classificação quanto à量 de Soluto

| Tipo | Definição |
|------|-----------|
| **Insaturada** | Abaixo do limite de solubilidade |
| **Saturada** | No limite de solubilidade (equilíbrio dinâmico) |
| **Supersaturada** | Acima do limite (metaestável — precipita com perturbação) |

---

## Concentração e Coeficiente de Solubilidade

### Principais Expressões de Concentração

| Grandeza | Símbolo | Fórmula | Unidade |
|---------|---------|---------|---------|
| Concentração molar (molaridade) | M ou c | $n_{soluto}/V_{solução}$ | mol L⁻¹ |
| Molalidade | m | $n_{soluto}/m_{solvente}$ | mol kg⁻¹ |
| Fração molar | $x_i$ | $n_i/\sum n_j$ | adimensional |
| % massa/massa | % (m/m) | $m_{solu}/m_{sol} \times 100$ | % |
| % massa/volume | % (m/v) | $m_{solu}/V_{sol} \times 100$ | g/100mL |

> [!important]
> **Molaridade vs. Molalidade**: molaridade depende de T (volume varia com T); molalidade é independente de T. Para propriedades coligativas, **sempre use molalidade**.

### Coeficiente de Solubilidade
Quantidade máxima de soluto que se dissolve em 100 g de solvente a dada T e p.

**Fatores que afetam a solubilidade:**

| Fator | Efeito em sólidos | Efeito em gases |
|-------|------------------|----------------|
| Temperatura ↑ | Geralmente ↑ (endotérmica) | ↓ (sempre — dissolução de gás é exotérmica) |
| Pressão ↑ | Negligível | ↑ (Lei de Henry) |

---

## Curvas de Solubilidade

Representação gráfica da solubilidade em função da temperatura.

- A maioria dos sólidos: solubilidade **aumenta** com T
- Exceções: Ce₂(SO₄)₃, CaSO₄ — solubilidade **diminui** com T
- Todos os gases: solubilidade **diminui** com T

**Leitura das curvas:**
- Ponto sobre a curva → solução **saturada**
- Ponto abaixo da curva → solução **insaturada**
- Ponto acima da curva → solução **supersaturada** (instável)

---

## Solubilidade de Gases em Líquidos — Lei de Henry

A solubilidade de um gás em um líquido é diretamente proporcional à pressão parcial do gás sobre a solução:

$$c_{gás} = k_H \cdot p_{gás}$$

onde $k_H$ é a constante de Henry (dependente do gás e da T).

**Aplicações:**
- Garrafa de refrigerante: CO₂ dissolvido sob alta pressão → borbulha ao abrir (p cai)
- Mergulho: nitrogênio se dissolve no sangue sob alta pressão → "bends" se ascensão for rápida (descompressão)

---

## Propriedades Coligativas

Dependem apenas da **quantidade de partículas** de soluto, não da natureza química.

Para soluto **não volátil e não eletrólito**:

### 1. Pressão de Vapor (Lei de Raoult)
$$p_A = x_A \cdot p_A^* \implies \Delta p = x_B \cdot p_A^*$$

onde $x_B$ = fração molar do soluto, $p_A^*$ = pressão de vapor do solvente puro.

### 2. Elevação do Ponto de Ebulição
$$\Delta T_{eb} = K_{eb} \cdot m$$

### 3. Abaixamento do Ponto de Fusão (Crioscopia)
$$\Delta T_{fus} = K_f \cdot m$$

### 4. Pressão Osmótica
$$\pi = MRT = \frac{n}{V}RT$$

**Constantes criosc./ebulioscópicas da água:**
- $K_f = 1{,}86$ K·kg·mol⁻¹
- $K_{eb} = 0{,}512$ K·kg·mol⁻¹

### Para Eletrólitos — Fator de van't Hoff (i)

$$\Delta T_{eb} = i \cdot K_{eb} \cdot m \qquad i = 1 + \alpha(n-1)$$

- $\alpha$: grau de dissociação
- $n$: número de íons que o eletrólito produz

| Eletrólito | i (diluído) |
|-----------|------------|
| NaCl → Na⁺ + Cl⁻ | 2 |
| CaCl₂ → Ca²⁺ + 2Cl⁻ | 3 |
| Glicose (não eletrólito) | 1 |

> [!tip]
> Osmose reversa (aplicar $\pi > \pi_{osm}$) é usada para dessalinizar água do mar. A pressão osmótica da água do mar ≈ 27 atm — você precisa aplicar mais que isso para forçar a água a passar da solução concentrada para a diluída.
