---
title: Estudo dos Gases
---

# Estudo dos Gases

---

## Teoria Cinética dos Gases

A teoria cinética descreve gases como coleções de partículas puntiformes com movimento aleatório:

1. Moléculas em movimento constante, aleatório e contínuo
2. Colisões **elásticas** (energia cinética total conservada)
3. Volume das moléculas ≪ volume do recipiente
4. Sem forças intermoleculares (exceto nas colisões)
5. Energia cinética média proporcional à temperatura absoluta:

$$\langle E_k \rangle = \frac{3}{2}k_BT$$

### Velocidade Quadrática Média
$$v_{rms} = \sqrt{\frac{3RT}{M}} = \sqrt{\frac{3k_BT}{m}}$$

### Distribuição de Maxwell-Boltzmann
$$f(v) = 4\pi n\left(\frac{M}{2\pi RT}\right)^{3/2} v^2 e^{-Mv^2/2RT}$$

Velocidades características:
- Mais provável: $v_p = \sqrt{2RT/M}$
- Média: $\bar{v} = \sqrt{8RT/\pi M}$
- Quadrática média: $v_{rms} = \sqrt{3RT/M}$

Ordem: $v_p < \bar{v} < v_{rms}$

---

## Variáveis de Estado de um Gás

| Variável | Símbolo | Unidades SI | Conversões úteis |
|---------|---------|-------------|-----------------|
| Pressão | p | Pa (N/m²) | 1 atm = 101325 Pa = 760 mmHg = 760 torr |
| Volume | V | m³ | 1 L = 10⁻³ m³ |
| Temperatura | T | K | T(K) = T(°C) + 273,15 |
| Quantidade | n | mol | — |

---

## Transformações Gasosas (Gás Ideal)

| Transformação | Constante | Lei | Expressão |
|--------------|----------|-----|-----------|
| **Isotérmica** | T | Boyle | $p_1V_1 = p_2V_2$ |
| **Isobárica** | p | Charles | $V_1/T_1 = V_2/T_2$ |
| **Isocórica** | V | Gay-Lussac | $p_1/T_1 = p_2/T_2$ |
| **Geral** | n | Gás Combinadas | $p_1V_1/T_1 = p_2V_2/T_2$ |

> [!important]
> Temperatura **deve estar em Kelvin** em todos os cálculos com gases. Usar °C é o erro mais comum e produz resultados absurdos.

---

## Equação Geral dos Gases Ideais

$$\boxed{pV = nRT}$$

$$R = 8{,}314 \text{ J mol}^{-1}\text{K}^{-1} = 0{,}08206 \text{ L·atm mol}^{-1}\text{K}^{-1}$$

Use $R = 0{,}082$ quando p em atm e V em litros; use $R = 8{,}314$ quando p em Pa e V em m³.

---

## Equação de Estado do Gás Ideal — Equação de Clapeyron

Mesma equação ($pV = nRT$), mas frequentemente apresentada com densidade:

$$pM = dRT \implies d = \frac{pM}{RT}$$

onde d = densidade do gás (g/L ou kg/m³) e M = massa molar (g/mol ou kg/mol).

**Determinação de massa molar por densidade:**
$$M = \frac{dRT}{p}$$

---

## Densidade dos Gases

A densidade de um gás ideal varia com T e p. A densidades relativas entre dois gases (mesma T e p):

$$\frac{d_1}{d_2} = \frac{M_1}{M_2}$$

Lei de Graham (difusão e efusão):
$$\frac{v_1}{v_2} = \sqrt{\frac{M_2}{M_1}}$$

Gases mais leves difundem e efundem mais rapidamente.

---

## Difusão e Efusão Gasosa

- **Difusão**: espalhamento de um gás através de outro
- **Efusão**: passagem de gás por um pequeno orifício para o vácuo

**Lei de Graham:**
$$\frac{\text{taxa}_1}{\text{taxa}_2} = \frac{v_{rms,1}}{v_{rms,2}} = \sqrt{\frac{M_2}{M_1}}$$

Aplicações: separação isotópica de UF₆ (U-235 de U-238 no enriquecimento de urânio).

---

## Misturas Gasosas

### Lei dos Gases Parciais — Dalton
A pressão total de uma mistura de gases ideais é a soma das pressões parciais de cada componente:

$$p_{total} = p_1 + p_2 + \cdots + p_n = \sum_i p_i$$

Pressão parcial de cada componente:
$$p_i = x_i \cdot p_{total}$$

onde $x_i = n_i / n_{total}$ é a fração molar.

### Volumes Parciais — Lei de Amagat
O volume parcial de um componente é o volume que ele ocuparia sozinho, nas mesmas condições T e p:

$$V_i = x_i \cdot V_{total}$$

Isso implica: a fração molar = fração de pressão = fração de volume (gases ideais).

---

## Gases Coletados sobre Água

Quando um gás é coletado por deslocamento de água, o gás coletado está **saturado de vapor d'água**:

$$p_{total} = p_{gás} + p_{vapor d'água}(T)$$

$$p_{gás} = p_{total} - p_{vapor}(T)$$

A pressão de vapor da água a 25°C ≈ 23,8 mmHg (3,17 kPa). O valor exato depende da temperatura (curva de Clarke).

---

## Umidade Relativa do Ar

$$\text{UR} (\%) = \frac{p_{vapor \text{ atual}}}{p_{vapor}^*(T)} \times 100$$

onde $p_{vapor}^*(T)$ é a pressão de vapor de saturação da água à temperatura T.

- **Ponto de orvalho**: temperatura na qual o ar esfriado atinge UR = 100% (condensação começa)
- UR > 100% → supersaturação → nuvens, névoa, chuva

---

## Gases Reais — Afastamento do Comportamento Ideal

Gases ideais assumem: sem volume molecular e sem forças intermoleculares.

### Fator de Compressibilidade (Z)
$$Z = \frac{pV}{nRT}$$

- Gás ideal: Z = 1 (sempre)
- Z > 1: predominam forças repulsivas (repulsão de núcleos/volume das moléculas)
- Z < 1: predominam forças atrativas (coesão intermolecular)

### Equação de van der Waals
$$\left(p + \frac{an^2}{V^2}\right)(V - nb) = nRT$$

- **a**: constante que corrige para forças atrativas (diminui a pressão efetiva)
- **b**: constante que corrige para o volume excluído (volume das moléculas)

### Condições de Idealidade
Um gás se comporta como ideal quando:
- Temperatura alta (energia cinética >> energia de interação)
- Pressão baixa (volume disponível >> volume das moléculas)

> [!tip]
> H₂ e He têm Z > 1 mesmo a pressões moderadas (moléculas pequenas, forças atrativas fracas — volume das moléculas domina). CO₂ e NH₃ têm Z < 1 a pressões médias (forças atrativas significativas). Isso é frequentemente explorado em questões de interpretação de gráficos Z vs. p.
