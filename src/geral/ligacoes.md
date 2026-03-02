---
title: Ligações Químicas
---

# Ligações Químicas — Teoria dos Orbitais Moleculares

---

## Além da Teoria de Lewis — OM vs. VSEPR

A teoria de Lewis e o modelo VSEPR descrevem geometria e ligação, mas **falham** para:
- Propriedades magnéticas (O₂ paramagnético — Lewis prevê diamagnético)
- Energias de ligação em moléculas poliatômicas
- Compostos com número ímpar de elétrons (NO, NO₂)

A **Teoria dos Orbitais Moleculares (TOM)** combina funções de onda atômicas (LCAO) para gerar orbitais moleculares ligantes e antiligantes.

---

## Teoria dos Orbitais Moleculares (TOM)

### Orbitais Ligantes e Antiligantes
- **Ligante (σ, π)**: adição das funções de onda → reforço entre núcleos → energia menor que AOs
- **Antiligante (σ*, π*)**: subtração → nó entre núcleos → energia maior que AOs

### Ordem de Ligação
$$\text{Ordem de Ligação} = \frac{N_L - N_{AL}}{2}$$

onde $N_L$ = elétrons em OM ligantes, $N_{AL}$ = elétrons em OM antiligantes.

### Diagrama de OM para Moléculas Diatômicas (Z ≤ 7)

```
      σ*2p
      π*2p  π*2p
      ─────────────── (antiligantes)
      π2p   π2p
      σ2p
      ─────────────── (ligantes)
      σ*2s
      σ2s
```

| Molécula | Config. OM | Ordem | Magnético |
|----------|-----------|-------|-----------|
| H₂ | (σ1s)² | 1 | Diamagnético |
| He₂ | (σ1s)²(σ*1s)² | 0 | Não existe |
| O₂ | ...(π*2p)¹(π*2p)¹ | 2 | **Paramagnético** |
| N₂ | ...(σ2p)² | 3 | Diamagnético |
| NO | ...(π*2p)¹ | 2,5 | Paramagnético |

> [!important]
> O₂ ter dois elétrons desemparelhados nos π* é previsto pela TOM — explicação que a estrutura de Lewis não consegue dar. É uma das maiores vitórias experimentais da TOM.

---

## Teoria da Ligação de Valência (TLV) — Hibridização

A TLV complementa com a visão localizada de ligações como sobreposição de AOs.

### Geometria × Hibridização × Ângulo

| Hibridização | Geometria eletrônica | Ângulo | Exemplo |
|-------------|---------------------|--------|---------|
| sp | Linear | 180° | BeCl₂, CO₂, HC≡CH |
| sp² | Trigonal plana | 120° | BF₃, C₂H₄, SO₃ |
| sp³ | Tetraédrica | 109,5° | CH₄, NH₃*, H₂O* |
| sp³d | Bipiramidal | 90°/120° | PCl₅ |
| sp³d² | Octaédrica | 90° | SF₆ |

*NH₃ e H₂O: geometria molecular diferente por pares livres (pirâmide e angular)

### Influência dos Pares Livres (VSEPR)
Pares livres ocupam mais espaço angular que ligações:
- 4 pares em CH₄: 109,5°
- 3 ligações + 1 par em NH₃: **107°**
- 2 ligações + 2 pares em H₂O: **104,5°**

---

## Ligação Iônica — Energia de Rede

### Ciclo de Born–Haber
Permite calcular a energia de rede (U) indiretamente via Lei de Hess:

$$\Delta H_f^\circ(\text{NaCl}) = \Delta H_{sub}(\text{Na}) + \frac{1}{2}D(\text{Cl}_2) + IE_1(\text{Na}) + EA(\text{Cl}) + U(\text{NaCl})$$

### Equação de Born–Landé
$$U = -\frac{N_A \cdot M \cdot z^+ z^- \cdot e^2}{4\pi\varepsilon_0 r_0}\left(1 - \frac{1}{n}\right)$$

- **M**: constante de Madelung (depende da geometria do cristal)
- **n**: expoente de Born (dureza dos íons)
- U aumenta com cargas maiores e raios menores → maior dureza do cristal

---

## Forças Intermoleculares

| Força | Origem | Energia (kJ/mol) |
|-------|--------|-----------------|
| Íon-dipolo | Carga × μ | 40–600 |
| Dipolo-dipolo (Keesom) | μ × μ | 5–25 |
| Dipolo-induzido (Debye) | μ × polarizabilidade | 2–10 |
| London (dispersão) | Flutuação quântica | 0,05–40 |
| Ponte de H | X–H···Y (X,Y = N,O,F) | 10–40 |

> [!tip]
> As forças de London crescem com **tamanho e polarizabilidade** da molécula, não com polaridade. Por isso I₂ (apolar, grande) é sólido a temperatura ambiente, enquanto F₂ (apolar, pequeno) é gás.

---

## Ácido-Base de Lewis

Mais geral que Brønsted-Lowry:
- **Ácido de Lewis**: aceita par de elétrons (BF₃, AlCl₃, Fe³⁺, carbocátion)
- **Base de Lewis**: doa par de elétrons (NH₃, H₂O, haletos, alcenos)

### Teoria HSAB (Pearson)
Ácidos e bases se classificam como **duros** (carga alta, baixa polarizabilidade) ou **moles** (carga baixa, alta polarizabilidade):

- **Duro–Duro**: estabilizado por interação eletrostática (ex: F⁻ + Fe³⁺)
- **Mole–Mole**: estabilizado por sobreposição de orbitais (ex: RS⁻ + Ag⁺)

> [!important]
> HSAB é fundamental para prever regioseletividade em reações de ambidentate (ex: enolato atacando como C [mole] ou O [duro] dependendo do eletrófilo).
