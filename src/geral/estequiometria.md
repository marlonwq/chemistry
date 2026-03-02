---
title: Cálculo Estequiométrico
---

# Cálculo Estequiométrico

---

## Fundamentos

A equação química balanceada fornece a **relação molar** entre reagentes e produtos. Os coeficientes estequiométricos representam:
- Razão em **moles** (sempre)
- Razão em **moléculas/fórmulas unitárias**
- Razão em **volumes** (somente para gases, mesma T e p)
- **Não** representam razão em massas diretamente

---

## Balanceamento de Equações

### Método da Inspeção (tentativa)
Preservar átomos de cada elemento. Convenções:
1. Nunca altere fórmulas químicas (só coeficientes)
2. Comece pelos elementos que aparecem em menos substâncias
3. Deixe H e O por último (mais flexíveis)

### Método do Íon-Elétron (Balanceamento de Redox)
Para equações de oxirredução em solução:
1. Separe as **semi-reações** (oxidação e redução)
2. Balanceie átomos de cada elemento oxidado/reduzido
3. Balanceie O com H₂O, H com H⁺ (meio ácido) ou OH⁻ (meio básico)
4. Balanceie cargas com elétrons (e⁻)
5. Iguale os elétrons cedidos e recebidos
6. Some as semi-reações

**Exemplo — MnO₄⁻ oxidando Fe²⁺ em meio ácido:**

Semi-reação de redução:
$$\text{MnO}_4^- + 8\text{H}^+ + 5e^- \rightarrow \text{Mn}^{2+} + 4\text{H}_2\text{O}$$

Semi-reação de oxidação:
$$\text{Fe}^{2+} \rightarrow \text{Fe}^{3+} + e^- \quad (\times 5)$$

Equação completa:
$$\text{MnO}_4^- + 5\text{Fe}^{2+} + 8\text{H}^+ \rightarrow \text{Mn}^{2+} + 5\text{Fe}^{3+} + 4\text{H}_2\text{O}$$

---

## Cálculo Estequiométrico — Procedimento Geral

$$\text{dado (massa/volume/partículas)} \xrightarrow{\div M \text{ ou } V_m} n_{\text{conhecido}} \xrightarrow{\times \frac{\nu_{\text{desejado}}}{\nu_{\text{conhecido}}}} n_{\text{desejado}} \xrightarrow{\times M \text{ ou } V_m} \text{resposta}$$

---

## Reagente Limitante

Quando quantidades reais de dois ou mais reagentes são fornecidas, o **reagente limitante** é o que se consome primeiro e determina o rendimento máximo.

**Identificação:**
1. Calcule os moles de cada reagente
2. Divida pela razão estequiométrica correspondente
3. O **menor** resultado corresponde ao reagente limitante

**Exemplo:** 10 g de H₂ + 80 g de O₂ → H₂O

$$n_{H_2} = \frac{10}{2} = 5 \text{ mol} \qquad n_{O_2} = \frac{80}{32} = 2{,}5 \text{ mol}$$

Reação: 2H₂ + O₂ → 2H₂O

$$\frac{n_{H_2}}{\nu_{H_2}} = \frac{5}{2} = 2{,}5 \qquad \frac{n_{O_2}}{\nu_{O_2}} = \frac{2{,}5}{1} = 2{,}5$$

Iguais → **ambos se consomem exatamente** (proporção estequiométrica)

---

## Rendimento de Reação

Na prática, o produto obtido é menor que o teórico por:
- Reações reversíveis (equilíbrio)
- Reações paralelas (subprodutos)
- Perdas mecânicas

$$\text{Rendimento} (\%) = \frac{m_{\text{real}}}{m_{\text{teórico}}} \times 100$$

$$m_{\text{teórico}} = \text{calculado pela estequiometria com reagente limitante}$$

> [!important]
> Em sequências de reações, o rendimento **total** é o produto dos rendimentos individuais:
> $$\eta_{total} = \eta_1 \times \eta_2 \times \eta_3 \times \cdots$$
> Com 3 etapas de 80% cada: $\eta = 0{,}8^3 = 0{,}512 = 51{,}2\%$

---

## Estequiometria com Soluções

Para reagentes em solução, moles = $c \times V$:

$$n = c \text{ (mol/L)} \times V \text{ (L)}$$

**Diluição** (concentração muda, moles de soluto conservados):
$$c_1 V_1 = c_2 V_2$$

---

## Estequiometria com Gases

Usando o volume molar (mesma T, p):
$$n = \frac{V}{V_m}$$

Ou via equação dos gases ideais:
$$n = \frac{pV}{RT}$$

> [!tip]
> Quando o problema mistura quantidades de gases em condições diferentes (ex: temperatura diferente para cada reagente), não use o volume molar diretamente. Converta cada gás para moles via $pV = nRT$ antes de iniciar a estequiometria.
