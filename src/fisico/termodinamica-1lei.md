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

> [!tip] Importante
> A "Chave Mestra" do $\Delta U$:
> Para gases ideais, a relação $\Delta U = nC_v\Delta T$ é válida para **QUALQUER** processo (isobárico, adiabático, etc.), não apenas para o isocórico. 
> 
> **Por que?** Porque a energia interna de um gás ideal depende exclusivamente da temperatura. Se você sabe o $\Delta T$, você sabe o $\Delta U$, não importa o caminho que o gás fez.

### Calor (q)
- Transferência de energia por diferença de temperatura
- $q > 0$: sistema **absorve** calor (endotérmico)
- $q < 0$: sistema **libera** calor (exotérmico)

### Trabalho (w)
- Trabalho de expansão (PV): $w = -p_{ext}\Delta V$
- $w > 0$: trabalho feito **sobre** o sistema (compressão)
- $w < 0$: trabalho feito **pelo** sistema (expansão)

---

## Convenção de Sinais (IUPAC)

Antes de aplicar a fórmula, é preciso definir o fluxo de energia. Imagine o sistema como um "banco":

| Grandeza | Recebe (+) | Perde (-) |
| :--- | :--- | :--- |
| **Calor ($q$)** | Sistema aquece (Endo) | Sistema resfria (Exo) |
| **Trabalho ($w$)** | Vizinho empurra o sistema (Compressão) | Sistema empurra o vizinho (Expansão) |



> [!warning] Cuidado: Química vs. Física
> No exame intelectual do **ITA**, a prova de **Química** usa a convenção IUPAC ($\Delta U = q + w$). Já a prova de **Física** costuma usar a convenção clássica ($\Delta U = q - w$), onde o trabalho é definido como o que o sistema "entrega" para fora. 
> 
> **Não esquecer:** Sempre verificar se o trabalho de expansão na questão é dado como positivo ou negativo.

---

## 1ª Lei da Termodinâmica

A conservação de energia expressa pelo balanço entre calor e trabalho:

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

---

## Casos

### Trabalho Reversível (Isotérmico)
Para processos lentos em equilíbrio:
$$w = -nRT \ln\left(\frac{V_2}{V_1}\right)$$

### Processo Adiabático (Leis de Poisson)
Ocorre sem troca de calor ($q=0$), comum em expansões rápidas:
- $P V^\gamma = \text{cte}$
- $T V^{\gamma-1} = \text{cte}$
- $\gamma = \frac{C_p}{C_v}$ (Razão Adiabática)
- **Trabalho Adiabático:** $w = \Delta U = \frac{P_2V_2 - P_1V_1}{\gamma - 1}$

### Graus de Liberdade
| Tipo de Gás | $C_v$ | $C_p$ | $\gamma$ |
| :--- | :---: | :---: | :---: |
| **Monoatômico** | $\frac{3}{2}R$ | $\frac{5}{2}R$ | $1,67$ |
| **Diatômico (Ar)** | $\frac{5}{2}R$ | $\frac{7}{2}R$ | $1,40$ |