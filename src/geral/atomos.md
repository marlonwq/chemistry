---
title: Átomos e Estrutura Atômica
---

# Átomos e Estrutura Atômica — Modelo Quântico

---

## Limitações do Modelo de Bohr

O modelo de Bohr acerta a Figura do hidrogênio, mas falha para:
- Átomos polieletrônicos (interação e⁻–e⁻ ignorada)
- Intensidades de linhas espectrais
- Efeito Zeeman (divisão de linhas em campo magnético)
- Estrutura fina espectral

A mecânica quântica (Schrödinger, 1926) resolve isso substituindo órbitas definidas por **orbitais** — funções de onda Ψ.

---

## Equação de Schrödinger e Orbitais

$$\hat{H}\Psi = E\Psi$$

- $\hat{H}$: operador Hamiltoniano (energia cinética + potencial)
- $\Psi$: função de onda
- $E$: autovalor de energia
- $|\Psi|^2$: **densidade de probabilidade** de encontrar o elétron

### Números Quânticos

| Número | Símbolo | Domínio | Significado |
|--------|---------|---------|-------------|
| Principal | n | 1, 2, 3, ... | Nível de energia / tamanho do orbital |
| Azimutal | ℓ | 0 a n–1 | Forma do orbital (s, p, d, f) |
| Magnético | mℓ | –ℓ a +ℓ | Orientação espacial |
| Spin | ms | ±½ | Spin do elétron |

### Formas dos Orbitais
- **s** (ℓ=0): esférico, 1 orientação
- **p** (ℓ=1): halteres, 3 orientações (px, py, pz) — nó angular planar
- **d** (ℓ=2): 5 orientações, formas variadas — crucial em metais de transição
- **f** (ℓ=3): 7 orientações — lantanídeos e actinídeos

---

## Princípios de Preenchimento

### Princípio de Aufbau
Preenche orbitais de menor energia primeiro. Ordem ditada pela **soma (n + ℓ)**:

$$1s < 2s < 2p < 3s < 3p < 4s < 3d < 4p < 5s < 4d < 5p \ldots$$

Quando n + ℓ são iguais, o de menor n é preenchido primeiro.

### Princípio de Exclusão de Pauli
Em um dado átomo, dois elétrons **não podem ter os 4 números quânticos iguais**. Logo, um orbital acomoda no máximo **2 elétrons com spins opostos**.

### Regra de Hund
Entre orbitais de mesma energia (degenerados), os elétrons ocupam orbitais diferentes com spins paralelos antes de emparelhar.

**Razão:** Elétrons paralelos (mesmo spin) respeitam a **correlação de Fermi** — tendem a se afastar, reduzindo a repulsão coulombiana.

---

## Exceções Notáveis na Configuração Eletrônica

Orbitais semi-preenchidos e completamente preenchidos têm estabilidade extra:

| Elemento | Esperado | Real |
|----------|----------|------|
| Cr (Z=24) | [Ar] 4s² 3d⁴ | **[Ar] 4s¹ 3d⁵** |
| Cu (Z=29) | [Ar] 4s² 3d⁹ | **[Ar] 4s¹ 3d¹⁰** |
| Mo (Z=42) | [Kr] 5s² 4d⁴ | **[Kr] 5s¹ 4d⁵** |

---

## Energia de Ionização e Descontinuidades

$$\text{IE}_n: \text{X}^{(n-1)+}_{(g)} \rightarrow \text{X}^{n+}_{(g)} + e^-$$

- Aumenta ao longo do período (Z efetivo cresce)
- Diminui descendo no grupo (elétrons mais distantes, blindados)

**Descontinuidades importantes:**
- IE₁(O) < IE₁(N): em O, o 4° elétron 2p emparelha em orbital já ocupado → repulsão extra → mais fácil remover
- IE₁(B) < IE₁(Be): elétron 2p de B é mais fácil de remover que 2s de Be

---

## Carga Nuclear Efetiva (Zeff)

Elétrons internos blindam elétrons externos do campo nuclear total.

$$Z_{eff} = Z - \sigma$$

onde σ é a constante de blindagem de Slater (ou calculada por regras de Slater).

- Explica por que raio atômico **cresce** descendo no grupo (mais camadas, maior blindagem)
- Explica por que raio atômico **decresce** ao longo do período (Z cresce, Zeff aumenta, atrai e⁻ mais forte)

> [!tip]
> No ITA aparecem questões pedindo para comparar energia de ionização ou raio atômico usando apenas a estrutura eletrônica. Sempre justifique via Zeff + blindagem, não apenas memorizando tendências.
