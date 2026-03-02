---
title: Termodinâmica – 2ª e 3ª Leis
---

# Termodinâmica — 2ª e 3ª Leis

---

## 2ª Lei da Termodinâmica

Processos espontâneos ocorrem em direção ao **aumento da entropia do universo**:

$$\Delta S_{univ} = \Delta S_{sis} + \Delta S_{viz} \geq 0$$

- $= 0$: processo **reversível** (equilíbrio)
- $> 0$: processo **irreversível** (espontâneo)
- $< 0$: **impossível**

---

## Entropia (S)

### Definição Termodinâmica (Clausius)

Para um processo reversível:

$$dS = \frac{\delta q_{rev}}{T} \implies \Delta S = \int \frac{\delta q_{rev}}{T}$$

Para processo isotérmico reversível:
$$\Delta S = \frac{q_{rev}}{T}$$

### Definição Estatística (Boltzmann)

$$S = k_B \ln \Omega$$

onde $\Omega$ = número de microestados compatíveis com o macroestado.

- Maior desordem → maior $\Omega$ → maior S
- Explica por que gases têm S maior que líquidos, que têm S maior que sólidos

### Variação de Entropia em Processos Relevantes

**Mudança de fase:**
$$\Delta S_{fus} = \frac{\Delta H_{fus}}{T_{fus}} \qquad \Delta S_{vap} = \frac{\Delta H_{vap}}{T_{vap}}$$

Regra de Trouton: $\Delta S_{vap} \approx 88$ J mol⁻¹ K⁻¹ para líquidos "normais"

**Expansão de gás ideal:**
$$\Delta S = nR\ln\frac{V_2}{V_1} = nR\ln\frac{p_1}{p_2}$$

**Aquecimento a pressão constante:**
$$\Delta S = nC_p\ln\frac{T_2}{T_1}$$

**Aquecimento a volume constante:**
$$\Delta S = nC_v\ln\frac{T_2}{T_1}$$

---

## Entropia Padrão e 3ª Lei

### 3ª Lei da Termodinâmica

> *A entropia de um cristal perfeito de qualquer substância pura é zero no zero absoluto (0 K).*

$$S(0\text{ K}) = 0 \quad \text{(cristal perfeito)}$$

Isso permite calcular **entropias absolutas** (diferente de ΔH, que só existe em variações relativas).

$$S^\circ(298\text{ K}) = \int_0^{298} \frac{C_p}{T}\,dT + \sum \frac{\Delta H_{trans}}{T_{trans}}$$

### Variação de Entropia de Reação

$$\Delta S^\circ_{rxn} = \sum \nu_p S^\circ(\text{produtos}) - \sum \nu_r S^\circ(\text{reagentes})$$

**Tendências qualitativas de ΔS:**
- Reação que aumenta $\Delta n_g$ → ΔS > 0
- Dissolução de sólido em líquido → ΔS > 0 (geralmente)
- Reação que complexa moléculas → ΔS < 0

---

## Energia Livre de Gibbs (G)

$$G = H - TS \implies \Delta G = \Delta H - T\Delta S$$

Definida para unificar entalpia e entropia num único critério de espontaneidade **a T e p constantes**:

| $\Delta G$ | Processo |
|-----------|---------|
| $< 0$ | Espontâneo |
| $= 0$ | Equilíbrio |
| $> 0$ | Não espontâneo |

### Relação com o Equilíbrio

$$\Delta G^\circ = -RT\ln K$$

$$\Delta G = \Delta G^\circ + RT\ln Q$$

No equilíbrio: $Q = K \implies \Delta G = 0$

### Equação de Gibbs-Helmholtz
$$\left(\frac{\partial(\Delta G/T)}{\partial T}\right)_p = -\frac{\Delta H}{T^2}$$

---

## Análise de Espontaneidade por Temperatura

| ΔH | ΔS | Espontâneo quando |
|----|----|-------------------|
| − | + | **Sempre** |
| + | − | **Nunca** |
| − | − | $T < \Delta H/\Delta S$ (baixa T) |
| + | + | $T > \Delta H/\Delta S$ (alta T) |

**Temperatura de cruzamento** (onde $\Delta G = 0$):
$$T^* = \frac{\Delta H}{\Delta S}$$

> [!important]
> Para reações do tipo ΔH < 0 e ΔS < 0 (muito comuns — exotérmicas com redução de desordem), a reação é espontânea apenas abaixo de $T^* = \Delta H/\Delta S$. Calcular $T^*$ é passo essencial nessas questões.

> [!tip]
> Lembre: $\Delta G^\circ = -RT\ln K$ liga termodinâmica ao equilíbrio. Se $K > 1$ → $\Delta G^\circ < 0$ → equilíbrio favorece produtos. Essas relações aparecem muito combinadas com cinética nas provas do ITA.
