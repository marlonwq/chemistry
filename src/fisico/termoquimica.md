---
title: Termoquímica
---

# Termoquímica — Termodinâmica Química

---

## Primeira Lei da Termodinâmica

$$\Delta U = q + w$$

- $q > 0$: sistema **absorve** calor; $q < 0$: **libera**
- $w = -p_{ext}\Delta V$ (trabalho de expansão/compressão)
- Para processos a pressão constante (típico em laboratório): $q_p = \Delta H$

### Entalpia

$$H = U + pV \implies \Delta H = \Delta U + \Delta(pV) = \Delta U + p\Delta V \text{ (pressão cte)}$$

- ΔH < 0 → **exotérmico** (produtos têm menor entalpia)
- ΔH > 0 → **endotérmico**
- Propriedade de **estado** — independe do caminho

---

## Lei de Hess

A variação de entalpia de uma reação é soma algébrica das entalpias de qualquer conjunto de etapas que leve dos reagentes aos produtos.

**Exemplo — formação do CO:**

| Reação | ΔH (kJ/mol) |
|--------|-------------|
| C(s) + O₂(g) → CO₂(g) | −393,5 |
| CO(g) + ½O₂(g) → CO₂(g) | −283,0 |
| **C(s) + ½O₂(g) → CO(g)** | **−110,5** |

Inverte a 2ª equação e soma com a 1ª.

---

## Entalpia de Formação Padrão (ΔH°f)

Entalpia da formação de **1 mol** do composto a partir dos elementos nas formas mais estáveis a 298 K e 1 bar.

- Elementos no estado padrão: **ΔH°f = 0** por definição
- Aplicação (Lei de Hess generalizada):

$$\Delta H^\circ_{rxn} = \sum \nu_p \Delta H^\circ_f(\text{produtos}) - \sum \nu_r \Delta H^\circ_f(\text{reagentes})$$

---

## Energia de Ligação

Entalpia de dissociação (média) de ligações covalentes em fase gasosa:

| Ligação | D (kJ/mol) |
|---------|-----------|
| C–C | 347 |
| C=C | 614 |
| C≡C | 839 |
| C–H | 413 |
| O–H | 463 |
| H–H | 436 |

$$\Delta H_{rxn} \approx \sum D(\text{ligações quebradas}) - \sum D(\text{ligações formadas})$$

> [!important]
> Energia de ligação dá ΔH **aproximado** (usa médias). Para cálculos precisos, use ΔH°f.

---

## Segunda Lei e Espontaneidade

A 1ª lei não prevê espontaneidade. A 2ª lei introduz a **entropia** (S):

$$\Delta S_{univ} = \Delta S_{sis} + \Delta S_{viz} \geq 0 \quad \text{(irreversível > 0, reversível = 0)}$$

### Energia de Gibbs (G)

$$\Delta G = \Delta H - T\Delta S$$

| ΔH | ΔS | ΔG | Espontaneidade |
|----|----|----|---------------|
| − | + | sempre − | Sempre espontâneo |
| + | − | sempre + | Nunca espontâneo |
| − | − | depende de T | Espontâneo a **baixa** T |
| + | + | depende de T | Espontâneo a **alta** T |

$$\Delta G^\circ = -RT\ln K$$

Relaciona termodinâmica (ΔG°) com equilíbrio (K) diretamente.

---

## Equação de Kirchhoff

Como ΔH varia com a temperatura:

$$\Delta H(T_2) = \Delta H(T_1) + \int_{T_1}^{T_2} \Delta C_p \, dT$$

onde $\Delta C_p = \sum \nu_p C_p(\text{prod}) - \sum \nu_r C_p(\text{reag})$.

Para ΔCp constante: $\Delta H(T_2) = \Delta H(T_1) + \Delta C_p (T_2 - T_1)$

> [!tip]
> O ITA frequentemente pede para calcular ΔH em temperatura diferente de 298 K. Use Kirchhoff com os Cp fornecidos na questão.
