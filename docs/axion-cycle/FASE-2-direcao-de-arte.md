# FASE 2 — Direção de Arte e Design System · AXION CYCLE

> **Base:** arquitetura aprovada na Fase 1.
> **Escopo desta fase:** direção visual + design system (tokens e componentes). Não é o design visual "final" pixel a pixel — é o **sistema** que garante consistência quando o site for construído.
> **Implementação viva (renderizável):** `docs/axion-cycle/fase-2-design-system.html` — style guide com todos os componentes e estados.
> **Regra de dados:** nomes/preços/specs no style guide são **ilustrativos** e marcados **[CONFIRMAR]** (dependem da Fase 1). Nada técnico foi inventado como verdade.

---

## 1. Conceito visual

**A Axion parece uma marca premium de performance** — território de ciclismo profissional, carbono, engenharia, aerodinâmica e automóveis premium, **sem copiar nenhuma marca**. Identidade própria construída sobre três pilares:

1. **Carbono como matéria** — fundo escuro (grafite), texturas sutis, alto contraste.
2. **Azul como energia** — o Azul Axion é a "corrente elétrica" da marca: aparece em CTAs, dados-chave e estados ativos. **Nunca banha a tela.**
3. **Produto como protagonista** — a roda é sempre a estrela: grande, nítida, com espaço negativo ao redor.

Adjetivos-guia: **premium · minimalista · esportivo · tecnológico · agressivo · sofisticado · clean.**

---

## 2. Cor

Neutros escolhidos (não cinza puro): **viés levemente azulado** = "carbono frio".

| Token | Hex | Papel |
|---|---|---|
| `--carbon` | `#0A0C11` | Ground escuro / hero / rodapé |
| `--panel` (dark) | `#14171F` | Superfície / cards no tema escuro |
| `--bg` (light) | `#FFFFFF` | Ground claro / vitrine de produto |
| `--text-muted` | `#A2AAB8` (dark) / `#525C6B` (light) | Névoa fria — texto secundário |
| `--accent` **Azul Axion** | `#1466E0` (light) / `#2D86FF` (dark) | Acento / CTA / dado-chave |
| `--accent-bright` | `#2F86FF` / `#5AA4FF` | Hover / brilho |
| `--success` | `#118A4E` / `#31C77F` | PIX / confirmação (separado do acento) |
| `--danger` | `#CE2534` / `#FF5A66` | Erro / validação |

**Proporção de uso:** Neutros **~85%** · Azul Axion **~10%** · Semânticas **~5%**.
**Dois temas** implementados: claro (branco/carbono — ótimo para páginas de produto) e escuro (carbono — hero/marca). Toggle no header do style guide para pré-visualizar ambos.

---

## 3. Tipografia

Fuga deliberada do par genérico (Inter/Space Grotesk). Três papéis, todas do Google Fonts:

| Papel | Fonte | Uso |
|---|---|---|
| **Display** | **Saira** (600–800) | Títulos, números grandes, labels em caixa-alta (feel automotivo/técnico) |
| **Corpo** | **IBM Plex Sans** (400–600) | Texto corrido, descrições (engenharia, legível) |
| **Dados** | **IBM Plex Mono** | Specs, medidas, preços, tabelas (tabular-nums) |

**Escala:** H1 `clamp(38–66px)/800/UPPER` · H2 `~30px/700/UPPER` · H3 `20px/600` · corpo `15–16px/1.6` · eyebrow `12px/700/+18% tracking/UPPER`. Títulos com `text-wrap:balance`.

---

## 4. Componentes (definidos no style guide)

- **Header** — trustbar (INMETRO/garantia/+700/12x/PIX) + logo + nav caixa-alta com sweep azul no hover + busca/tema/carrinho + CTA "Ver rodas". Sticky com blur.
- **Footer** — carbono, 4 colunas (Rodas / Ajuda / Axion + institucional), selos.
- **Botões** — Primário (azul, sobe 2px + glow no hover) · Secundário (contorno) · WhatsApp (verde) · Ghost. Estados: hover, focus (anel azul), disabled (42%).
- **Badges** — INMETRO (carbono), garantia (sucesso), Toray T700 / Tubeless (acento), PIX (sucesso), 12x (neutro). Comunicam prova sem "cara de promoção".
- **Ícones** — minimalistas em linha (stroke 1.6–1.8), família consistente (roda, escudo/garantia, comparar, WhatsApp, busca, carrinho, +, check, alerta).
- **Card de produto** — mídia grande (produto protagonista, gira sutilmente no hover), nome, atributos (chips mono), preço + 12x + PIX, ações Comprar / Comparar(+).
- **Tabela técnica** — labels Saira, valores mono, hover de linha, `[CONFIRMAR]` onde o dado depende do modelo.
- **Comparador** — até 3 colunas, melhor valor por linha em azul, coluna recomendada realçada, rodapé com CTA por coluna, scroll horizontal no mobile.
- **FAQ** — acordeão (`<details>`), ícone "+" que gira ao abrir.
- **Formulários** — campos com foco azul; estados **erro** (vermelho + mensagem que orienta) e **sucesso** (verde). Selects para o Guia.
- **CTAs / estados** — hierarquia: principal (Comprar), secundário (WhatsApp/Comparar); estados hover/focus/erro/sucesso demonstrados.
- **Microanimações** — lift no hover, sweep azul, giro leve da roda, transições suaves; tudo respeita `prefers-reduced-motion`.

---

## 5. Direção Desktop / Tablet / Mobile

| | Desktop (≥1024) | Tablet (~768) | Mobile (~390, first) |
|---|---|---|---|
| Navegação | Megamenu | Megamenu em acordeão | Hambúrguer + WhatsApp em destaque |
| Grid | 3–4 colunas | 2 colunas | 1 coluna |
| Hero | 2 colunas, produto grande | 2 colunas compactas | Empilhado, produto primeiro |
| Comparador | Tabela completa | Tabela com scroll | Scroll horizontal / acordeão |
| Compra | CTA no bloco sticky | idem | **CTA fixo no rodapé** da página de produto |
| Suporte | WhatsApp no header | idem | **WhatsApp flutuante** persistente |
| Specs/FAQ | Aberto | Aberto | Acordeão |

Imagens otimizadas + lazy-load (performance = percepção premium + SEO + conversão).

---

## 6. Regras do sistema

- **Função antes de estética.** Todo elemento serve a: vender · gerar confiança · orientar · reduzir objeção · facilitar navegação. Se não serve, sai.
- **Produto protagonista** — grande e nítido; nunca competir com ornamento.
- **Evitar:** cara de marketplace, excesso de banners/promoções/cores, gradientes exagerados, animações pesadas, pop-ups.
- **Placeholder honesto** — as ilustrações de roda (SVG) são placeholders; o site final precisa de **fotografia real de alto padrão** dos produtos.

---

## 7. Pendências para avançar (produção)

1. [CONFIRMAR] **Fotografia oficial** dos produtos (o item de maior impacto visual).
2. [CONFIRMAR] **Logotipo/marca** oficial em vetor (o style guide usa uma marca-símbolo provisória).
3. [CONFIRMAR] Dados de produto da Fase 1 (nomes, preços, specs) para substituir os ilustrativos.
4. Definir biblioteca de ícones final e set de fotografia/estilo de imagem.
5. Tokens exportáveis (CSS vars já prontos) → base para o tema do e-commerce na fase de desenvolvimento.

---

*Fase 2 entregue: sistema visual apresentado (documento) e implementado (style guide HTML renderizável). Próximo passo, mediante aprovação: aplicação do sistema às telas reais (Home, Categoria, PDP, Guia, Comparador) e/ou início do desenvolvimento.*
