# FASE 2 — Direção de Arte + Design System · AXION CYCLE

> **Base:** arquitetura da Fase 1.
> **Escopo:** identidade visual, direção de arte e Design System reutilizável — **não** a construção das páginas (isso é a Fase 3).
> **Implementação viva:** `docs/axion-cycle/fase-2-design-system.html` (style guide renderizável com todos os componentes e estados).
> **Dados:** nomes/preços/specs no style guide são **ilustrativos** e marcados **[CONFIRMAR]**. Nada técnico foi inventado como verdade.
> **Meta:** qualquer página futura deve parecer inequivocamente **Axion**.

---

## 1. Direção de arte & 2. Conceito visual

Marca **premium de performance** — território de engenharia de carbono, ciclismo profissional, aerodinâmica, automobilismo e equipamento esportivo premium. Identidade **própria**, sem copiar concorrentes.

Sensação-alvo: *"Essa é uma marca especializada em equipamento de alta performance."*
Atributos: **performance · tecnologia · precisão · segurança · confiança · leveza · aerodinâmica · qualidade · exclusividade.**

Três pilares de execução:
1. **Carbono como matéria** — fundo escuro (grafite), alto contraste, textura sutil.
2. **Azul como energia** — o Azul Axion é a corrente elétrica da marca (CTA, dado-chave, estado ativo); **nunca banha a tela**.
3. **Produto protagonista** — a roda é sempre a estrela; muito espaço negativo.

**Evitar:** cara de marketplace, excesso de banners/cores/informação, gradientes exagerados, efeitos desnecessários, estética genérica de e-commerce, aparência barata, ornamento sem função.

---

## 3. Paleta de cores (HEX)

Neutros escolhidos com **viés levemente azulado** (carbono frio) — não cinza puro.

| Papel | Token | Light | Dark (carbono) |
|---|---|---|---|
| **Primary** (ação) | `--accent` | `#1466E0` | `#2D86FF` |
| **Accent bright** (hover/glow) | `--accent-bright` | `#2F86FF` | `#5AA4FF` |
| **Accent deep** (active) | `--accent-deep` | `#0B47A6` | `#1560C4` |
| **Secondary** (neutro de apoio) | `--secondary` | `#525C6B` | `#A2AAB8` |
| **Background** | `--bg` | `#FFFFFF` | `#0A0C11` |
| **Background sunken** | `--bg-sunken` | `#EEF1F6` | `#06080D` |
| **Surface** | `--surface` | `#FFFFFF` | `#12151C` |
| **Surface elevated** | `--surface-2` | `#F5F7FB` | `#171B23` |
| **Panel (card)** | `--panel` | `#FFFFFF` | `#14171F` |
| **Text primary** | `--text` | `#0A0D14` | `#F4F7FB` |
| **Text secondary** | `--text-muted` | `#525C6B` | `#A2AAB8` |
| **Text faint** | `--text-faint` | `#8791A1` | `#6E7686` |
| **Border** | `--line` | `#E1E6EF` | `#262C38` |
| **Border strong** | `--line-strong` | `#C8D0DC` | `#333B49` |
| **Carbon (fixo)** | `--carbon` | `#0A0C11` | `#0A0C11` |
| **Success** | `--success` | `#118A4E` | `#31C77F` |
| **Warning** | `--warning` | `#B4791A` | `#E7A93C` |
| **Error** | `--danger` | `#CE2534` | `#FF5A66` |

**Regras de uso do azul (evitar excesso):**
- Proporção-alvo: **~85% neutros · ~10% Azul Axion · ~5% semânticas.**
- Azul só em: CTA primário, links ativos, dado/estatística de destaque, estado ativo/foco, hairline de destaque.
- **Não** usar azul como fundo de seções inteiras, nem em textos longos, nem competindo com o produto.
- Cores **semânticas** (success/warning/error) são separadas do acento e não contam como "o azul".

**Dois temas** implementados (claro e escuro) via tokens; toggle no header do style guide.

---

## 4–5. Tipografia & hierarquia

Três famílias (evitar mais que isso), todas Google Fonts:

- **Display — Saira** (600/700/800): títulos, números, labels caixa-alta. Feel técnico/automotivo.
- **Corpo — IBM Plex Sans** (400/500/600): texto, descrições. Engenharia + legibilidade mobile.
- **Dados — IBM Plex Mono**: specs, medidas, preços, tabelas (`tabular-nums`).

| Estilo | Fonte / peso | Tamanho (mobile → desktop) | Line-height | Letter-spacing | Caso |
|---|---|---|---|---|---|
| **H1** | Saira 800 | 34 → 66px (`clamp`) | 1.05 | −1.5% | UPPER |
| **H2** | Saira 700 | 26 → 40px | 1.06 | −1% | UPPER |
| **H3** | Saira 600 | 19 → 22px | 1.1 | 0 | — |
| **H4** | Saira 600 | 16px | 1.15 | +2% | UPPER (labels) |
| **Body** | Plex Sans 400 | 15 → 16px | 1.6 | 0 | — |
| **Small** | Plex Sans 400 | 13.5px | 1.5 | 0 | — |
| **Caption** | Plex Sans 400 | 12px | 1.4 | +2% | — (muted) |
| **Eyebrow** | Saira 700 | 12px | 1.2 | +18% | UPPER (azul) |
| **Preço** | Saira 800 | 24 → 26px | 1.1 | 0 | `tabular-nums` |
| **Botão** | Saira 700 | 13–14px | 1 | +6% | UPPER |
| **Spec/dado** | Plex Mono 400/500 | 12–21px | 1.1 | 0 | `tabular-nums` |

**Hierarquia da página de produto (ordem de leitura garantida):** título → benefício → produto (imagem grande) → **preço + CTA sempre visíveis** → specs → confiança. Preço e CTA nunca escondidos (bloco de compra sticky no desktop, barra fixa no mobile).

---

## 6. Sistema de botões / CTAs

| Tipo | Uso | Visual |
|---|---|---|
| **Primary** | Ação principal (Comprar / avançar) | Fundo azul, texto claro, sombra suave |
| **Secondary** | Alternativa (Ver detalhes / Comparar) | Contorno, texto neutro |
| **Ghost** | Ação discreta (Adicionar ao comparador) | Sem fundo/borda |
| **WhatsApp** | Suporte/conversão | Verde WhatsApp |

**Estados:** Normal · Hover (sobe 2px + glow) · Active (translateY 0) · Focus (anel azul, Tab) · Loading (spinner, sem clique) · Disabled (42%).
**Rótulos objetivos:** *Comprar agora · Encontrar minha roda · Comparar modelos · Falar com um especialista · Ver especificações.* Evitar "Saiba mais" quando há ação concreta.

---

## 7. Header

- **Altura:** ~64px (desktop) / ~56px (mobile), + trustbar fina (~30px) acima.
- **Conteúdo:** logo · nav (Rodas ▾ / Encontre sua roda ▾ / Sobre / Garantia / Blog / Contato) · busca · tema · carrinho · CTA "Ver rodas". Mobile: logo + hambúrguer + carrinho.
- **Estados:** *Normal* (sólido), *Sticky* (fundo translúcido + blur + hairline), *Sobre o Hero* (transparente com texto claro, vira sólido ao rolar).
- **Comportamento:** sticky com blur; some a trustbar ao rolar (opcional). **Não compete com o produto** — enxuto, sem ruído.

## 8. Navegação

- **Megamenu** de "Rodas" em 3 colunas (por freio / por uso / destaque) — enxuto, sem menus gigantes.
- **Mobile:** hambúrguer com acordeão; WhatsApp em destaque; foco em velocidade de decisão.
- **Breadcrumbs** em páginas internas; **filtros** em painel lateral (desktop) / bottom sheet (mobile).

## 9. Cards de produto

Comunicam rápido: imagem grande · nome · categoria/freio · característica principal · perfil · **preço + 12x + PIX** · badge · CTA (Comprar) + Comparar(+). Hover: roda gira sutilmente, card sobe.
**Badges permitidos:** Novo · Destaque · Pré-venda · Últimas unidades · Esgotado.
**Regra anti-escassez:** "Últimas unidades"/"Esgotado" **só quando verdadeiros** (estoque real). Nunca escassez artificial.

## 10. Fotografia & produto

- **Product shots** — fundo limpo (carbono/neutro), fibra visível, foco em cubo/perfil/acabamento, luz controlada, ângulos consistentes, sem fundos poluídos.
- **Lifestyle / performance** — roda instalada, uso real (estrada/gravel/pista), movimento, luz cinematográfica, ambiente escuro.
- **Equilíbrio:** product shots nas PDPs/grid; lifestyle no Hero e feature sections. Imagens otimizadas (WebP/AVIF, lazy-load), `alt` descritivo.
- ⚠️ As ilustrações SVG do style guide são **placeholders** — o site final exige **fotografia oficial de alto padrão** [CONFIRMAR].

## 11. Hero

- **Composição:** 2 colunas (desktop) — texto à esquerda, produto à direita sobre carbono; empilhado no mobile (produto primeiro).
- **Transmite imediatamente:** Axion Cycle · rodas de carbono · performance.
- **Elementos:** roda em destaque, ambiente escuro, halo azul sutil, luz cinematográfica, movimento.
- **Espaço para texto:** headline curta + subheadline + 2 CTAs (Ver rodas / Descobrir minha roda) + micro-specs. **Não** virar banner cheio de informação. Produto é o protagonista; alto contraste.

## 12. Catálogo de seções

Sistema visual único para: Hero · Trust bar · Product grid · Category cards · Comparison · Feature/Technical · Testimonials · FAQ · Blog · CTA banner · Footer. Todas montadas com os mesmos tokens/componentes → coerência de marca.

## 13. Ícones

Minimalistas, traço consistente 1.6–1.8px, aparência técnica, boa leitura no mobile, sem ícones decorativos sem função. Set base: INMETRO · Garantia · Envio · Suporte · Tubeless · Ratchet 36T · Peso · Aerodinâmica · Compatibilidade · Comparar · WhatsApp · Roda/perfil.

## 14. Especificações técnicas

Dois formatos: **blocos rótulo/valor** (estilo engenharia — `PERFIL / 55 MM`, valor em mono) e **tabela completa**. Parece engenharia, não tabela de marketplace. Ótima leitura em desktop e mobile.

## 15. Comparador

Até 3 modelos; atributos curados (nome · preço · perfil · peso · largura interna/externa · cubo · compatibilidade · modalidade · diferenças). Melhor valor por linha em azul; coluna recomendada realçada; CTA por coluna. **Mobile:** scroll horizontal / acordeão — sem tabelas gigantes.

## 16. Confiança & prova social

Padrão visual sóbrio para: INMETRO 008991/2025 · garantia 2 anos · +700 rodas · avaliações · fotos de clientes · suporte · políticas. Transmite confiança **sem propaganda exagerada**. Números grandes em Saira/azul; selos em badges. ⚠️ Avaliações/fotos reais [CONFIRMAR].

## 17. WhatsApp

Canal de suporte e conversão, coerente com a marca — **não domina a interface**. Aparece em dúvida de compatibilidade, escolha de modelo, compra e suporte. Botão flutuante no mobile; links contextuais com mensagem pré-preenchida.

## 18. Formulários

`input · select · checkbox · radio · textarea`, com estados **erro** (vermelho + mensagem que orienta), **sucesso** (verde), **loading** (spinner) e validação. Foco azul (anel). Simples e premium; `accent-color` nos controles nativos.

## 19. Estados da interface

Gramática única em todo o site: Normal · Hover · Active · Focus · Disabled · Loading · Success · Error · **Empty** · **Sold out**. Empty = ilustração + orientação + CTA (ex.: Guia). Sold out = mídia em cinza + badge Esgotado + botão desativado + "Avise-me".

## 20. Espaçamento & grid

- **Escala (base 4px):** 4 · 8 · 12 · 16 · 24 · 32 · 48 · 64 · 96 (`--sp-1…9`).
- **Container:** máx **1140px**; gutter lateral **≥16px** (20px desktop).
- **Grid:** 12 colunas; gap padrão **20–24px**.
- **Seções:** 64px (mobile) → 96px (desktop). **Card padding:** 18–22px. O layout respira — evitar elementos amontoados.

## 21. Responsividade (breakpoints)

| Nome | Largura | Muda estrutura |
|---|---|---|
| xs (mobile pequeno) | < 380px | 1 col, CTA compacto |
| sm (mobile) | 380–639px | 1 col, hambúrguer, WhatsApp flutuante |
| md (tablet) | 640–1023px | 2 col, megamenu acordeão, filtros colapsáveis |
| lg (desktop) | 1024–1439px | 3–4 col, megamenu |
| xl (desktop grande) | ≥ 1440px | container centrado, mais respiro |

Componentes que **mudam de estrutura** (não só encolhem): Header, Hero, Cards, Comparador, Especificações, FAQ, CTA, Footer.

## 22. Microinterações

Hover, entrada suave, troca de imagem, abrir FAQ, comparação, filtros, scroll. Transmitem **precisão + velocidade + tecnologia**. Discretas; nunca sacrificam performance; respeitam `prefers-reduced-motion`.

## 23. Design Tokens

Implementados como CSS variables (ver `:root` do arquivo). Grupos: Cores · Tipografia · Espaçamento (`--sp-*`) · Bordas (`--line*`) · Raio (`--r-sm/md/lg/pill` = 6/10/16/999) · Sombras (`--shadow-sm/md/lift`) · Botões · Inputs · Cards · Grid (`--maxw`) · Breakpoints · Animações (`--ease`, `spin`). Trocar um token propaga para todo o site.

## 24. Acessibilidade

Contraste AA (texto/UI), texto mínimo 14px, **foco visível** (anel azul), navegação por teclado, áreas clicáveis ≥44px, hierarquia semântica (h1→h4 na ordem), `alt` em imagens, `prefers-reduced-motion` respeitado.

## 25. Performance visual

Sem vídeos pesados desnecessários; imagens otimizadas (WebP/AVIF, lazy-load, dimensões corretas); poucas fontes (3 famílias, `display=swap`); CSS enxuto sem frameworks pesados; animações leves via `transform/opacity`. Premium sem ficar lento.

## 26. Componentes reutilizáveis & exemplos

Biblioteca demonstrada no style guide HTML: Header/Trustbar · Footer · Botões (todos os estados) · Badges de confiança e de produto · Ícones · Card de produto (+ sold out) · Tabela de specs + blocos de engenharia · Comparador · FAQ acordeão · Formulários completos · Blocos de confiança · Estados da interface · Catálogo de seções · Escala de espaçamento · Tokens. Cada exemplo é conceitual e pronto para virar componente na Fase 3.

---

## Bloco de tokens (referência CSS)

```css
:root{
  /* cor (light) */
  --bg:#FFFFFF; --bg-sunken:#EEF1F6; --surface:#FFFFFF; --surface-2:#F5F7FB; --panel:#FFFFFF;
  --line:#E1E6EF; --line-strong:#C8D0DC;
  --text:#0A0D14; --text-muted:#525C6B; --text-faint:#8791A1; --secondary:#525C6B;
  --accent:#1466E0; --accent-bright:#2F86FF; --accent-deep:#0B47A6; --on-accent:#FFFFFF;
  --success:#118A4E; --warning:#B4791A; --danger:#CE2534; --carbon:#0A0C11;
  /* raio / sombra / espaçamento */
  --r-sm:6px; --r-md:10px; --r-lg:16px; --r-pill:999px;
  --sp-1:4px; --sp-2:8px; --sp-3:12px; --sp-4:16px; --sp-5:24px; --sp-6:32px; --sp-7:48px; --sp-8:64px; --sp-9:96px;
  --maxw:1140px; --ease:cubic-bezier(.22,.61,.36,1);
}
/* dark: --bg:#0A0C11; --surface:#12151C; --panel:#14171F; --line:#262C38;
   --text:#F4F7FB; --text-muted:#A2AAB8; --accent:#2D86FF; --success:#31C77F; --danger:#FF5A66; ... */
```

---

## Pendências para a Fase 3

1. [CONFIRMAR] **Fotografia oficial** dos produtos (maior impacto visual).
2. [CONFIRMAR] **Logotipo/marca** oficial em vetor (o style guide usa marca-símbolo provisória).
3. [CONFIRMAR] Dados de produto da Fase 1 (nomes, preços, specs).

---

*Fase 2 concluída: Design System definido, documentado e implementado (style guide renderizável), pronto para ser aplicado. Aguardando aprovação para a **Fase 3 — Construção da Home Page de alta conversão**.*
