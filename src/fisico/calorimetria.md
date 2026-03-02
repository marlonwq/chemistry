---
title: Calorimetria
---

# Calorimetria

---

## Calor Sensível e Calor Latente

### Calor Sensível
Calor que provoca variação de temperatura sem mudança de fase:

$$q = mc\Delta T = nC\Delta T$$

| Grandeza | Símbolo | Unidade |
|----------|---------|---------|
| Massa | m | g |
| Calor específico | c | J g⁻¹ K⁻¹ |
| Variação de temperatura | ΔT | K ou °C |
| Moles | n | mol |
| Capacidade calorífica molar | C | J mol⁻¹ K⁻¹ |

**Calor específico da água**: $c = 4{,}184$ J g⁻¹ K⁻¹ (memorize!)

### Calor Latente
Calor absorvido/liberado em mudança de fase a temperatura constante:

$$q = m \cdot L$$

| Transição | Nome | Sinal de q |
|-----------|------|-----------|
| Sólido → Líquido | Fusão | + (absorve) |
| Líquido → Sólido | Solidificação | − (libera) |
| Líquido → Vapor | Vaporização | + (absorve) |
| Vapor → Líquido | Condensação | − (libera) |
| Sólido → Vapor | Sublimação | + (absorve) |

---

## Princípio de Lavoisier-Laplace (Conservação de Energia)

$$q_{\text{cedido}} + q_{\text{absorvido}} = 0$$

Sistema isolado: a soma algébrica de todos os calores é zero. Aplicação direta em mistura de substâncias a temperaturas diferentes.

**Exemplo**: mistura de m₁ g de água a T₁ com m₂ g de água a T₂:

$$m_1 c (T_f - T_1) + m_2 c (T_f - T_2) = 0$$

Resolvendo:
$$T_f = \frac{m_1 T_1 + m_2 T_2}{m_1 + m_2}$$

---

## Calorímetro

Aparelho para medir calor de reações. Dois tipos principais:

### Calorímetro a Pressão Constante (copo de café)
- Simples, aberto (ou a pressão ambiente)
- Mede $q_p = \Delta H$
- $q_{rxn} = -q_{sol} = -(mc\Delta T)_{sol}$

### Calorímetro a Volume Constante (bomba calorimétrica)
- Recipiente rígido e selado
- Mede $q_v = \Delta U$ (sem trabalho de expansão)
- Usado para calor de combustão preciso
- Relação: $\Delta H = \Delta U + \Delta n_g RT$

### Capacidade Calorífica do Calorímetro (C_cal)
O próprio calorímetro absorve calor — deve ser contabilizado:

$$q_{rxn} + q_{sol} + q_{cal} = 0$$
$$q_{cal} = C_{cal} \cdot \Delta T$$

A $C_{cal}$ é determinada por **calibração** com substância de $\Delta H$ conhecido (ex: ácido benzoico).

---

## Diagrama de Aquecimento/Resfriamento

```
T │         ─────── vapor superaquecido (Cp vapor)
  │        /
  │  ─────  ← vaporização (T = cte, q = m·L_vap)
  │ /
  │─────── ← fusão (T = cte, q = m·L_fus)
  │/
  │ sólido
  └─────────────────────► q (calor adicionado)
```

> [!important]
> Nos diagramas de aquecimento, nas regiões de plateau (mudança de fase), a temperatura não varia e o calor vai inteiramente para quebrar interações intermoleculares. Nas regiões inclinadas, temperatura varia com $q = mc\Delta T$.

> [!tip]
> Água tem calor específico **anomalamente alto** por causa da extensa rede de pontes de hidrogênio. Isso é explorado frequentemente em questões que envolvem comparação com outros líquidos.
