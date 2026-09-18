# FASE 5 — Otimização Técnica (Mobile · SEO · Performance · Acessibilidade)

> Otimização técnica **sobre o que já existe** — sem reconstruir, sem mexer no Design System, na arquitetura ou na estratégia. Nenhum dado de produto foi alterado (specs/preços seguem `[CONFIRMAR]`/`[CONFLITO]`).
> Arquivos: `fase-3-home.html`, `fase-4-produto.html`, + `sitemap.xml`, `robots.txt`.

---

## 1. Principais problemas encontrados

1. 🔴 **BUG crítico (Home quebrada):** ao trocar a roda-SVG do hero por foto, a chamada `buildWheel(heroWheel)` passou a receber `null` e lançava erro **antes** de inicializar MODELS/vitrine/quiz/comparador — ou seja, **a Home estava com quiz e comparador mortos**.
2. **Payload pesado:** imagens embutidas como data URI a 1500px/q82 (~230 KB cada) inflavam o HTML (Home 3.4 MB, PDP 2.5 MB) → LCP ruim.
3. **Fontes render-blocking:** `@import` dentro do CSS (requisição encadeada) + 11 pesos tipográficos.
4. **SEO técnico ausente:** sem canonical, Open Graph, JSON-LD Product/Breadcrumb, sitemap, robots.
5. **CLS/perf de imagem:** sem `width/height`, sem `loading`/`decoding`, sem prioridade no LCP.
6. **Analytics incompleto na Home** (sem `page_view`, `guide_start/complete`, `compare_product`, `whatsapp_click`).

## 2. Problemas corrigidos

- ✅ **Bug da Home corrigido** — `buildWheel` agora tem guarda `if(!svg)return;` e a chamada morta foi removida. **Smoke test headless confirma:** vitrine (4 cards), galeria (6 fotos), comparador (10 linhas) e quiz voltaram a funcionar.
- ✅ Fontes, imagens, SEO e analytics (abaixo).

## 3. Otimizações aplicadas

**Performance**
- 🖼️ **Imagens recomprimidas** (1000px, q72, JPEG progressivo) → **Home 3.4 MB → 1.4 MB (−59%)**, **PDP 2.5 MB → 1.0 MB (−59%)**.
- ⚡ **Fontes:** `@import` → `preconnect` + `<link ... display=swap>`; pesos reduzidos de **11 → 10** (Saira 600/700/800; Plex Sans 400/500/600/700; Plex Mono 400/500/600).
- 🥇 **LCP:** imagem do hero (Home) e imagem principal da galeria (PDP) com `fetchpriority="high"` + `decoding="async"` + `width/height` (sem lazy).
- 💤 **Lazy loading** (`loading="lazy" decoding="async"`) em todas as imagens abaixo da dobra (galeria "vida real", cards, thumbnails, relacionados).
- 📐 **CLS:** `width/height` no hero, logos e contêineres com `aspect-ratio` já fixos.

**JavaScript / CSS**
- Sem bibliotecas/frameworks (0 dependências); JS inline e enxuto; SVG vetorial. Removida a chamada morta de `buildWheel`.
- CSS por design tokens centralizados; `prefers-reduced-motion` respeitado; animações só em `transform/opacity`.

**SEO técnico**
- **Home:** `canonical`, `robots`, Open Graph (type/site_name/title/description/url/image/locale) + Twitter card; JSON-LD **Organization** (+ base para WebSite).
- **PDP:** `canonical` e `<title>` **dinâmicos por modelo**; Open Graph; **JSON-LD por produto** (`Product` + `BreadcrumbList`) atualizado ao trocar o modelo — **sem `Offer`/`AggregateRating`** porque preço e avaliações são `[CONFIRMAR]` (nada falso).
- **`sitemap.xml`** (Home, categorias, 11 produtos, guia/comparador/compatibilidade, institucional) e **`robots.txt`** (libera CSS/JS/imagens; bloqueia carrinho/checkout/conta; aponta o sitemap).
- **URLs** conforme Fase 1: `/rodas/disc/d55`, `/rodas/disc/d55-80`, `/rodas/rim/r60`… (domínio final `[CONFIRMAR]`).
- **Alt text** descritivo em todas as imagens (ex.: "Ciclista Axion Cycle em prova com roda de carbono").

**Acessibilidade**
- Foco visível global (`:focus-visible`), navegação por teclado, alvos ≥44px, contraste AA, hierarquia semântica (h1 único → h2/h3), `aria-label` nos botões de ícone, `aria-expanded` no menu mobile, FAQ com `<details>/<summary>` nativos.

**Analytics (dataLayer / GA4-style, sem disparo duplicado)**
- **Home:** `page_view`, `guide_start` (1ª resposta, com trava anti-duplicação), `guide_complete`, `compare_product`, `whatsapp_click`.
- **PDP:** `page_view`, `view_item`, `select_item`, `add_to_cart`, `begin_checkout`, `whatsapp_click`, `compatibility_click`, `gallery_interaction`, `faq_open`.
- Pendentes de UI real: `purchase`, `coupon_use`, `pix_selection`, `installment_selection` (dependem do checkout — Fase de integração).

## 4. Impacto esperado

- **LCP:** melhora forte (payload −59%, hero priorizado, fontes não bloqueantes).
- **CLS:** próximo de 0 (dimensões + aspect-ratio).
- **INP:** já baixo (JS mínimo, sem libs).
- **SEO:** páginas indexáveis, com dados estruturados corretos e sitemap/robots prontos.

## 5–8. Imagens / Scripts / CSS / JS

- Imagens: 15 fotos reais otimizadas (disc/rim) + logos; embutidas como data URI (restrição do preview em artifact) — **em produção**: servir como arquivos `.webp/.avif` com `<picture>` + `srcset/sizes` e CDN/cache.
- Scripts: nenhuma lib; 1 chamada morta removida; funções de tracking com guarda try/catch.
- CSS: tokens centralizados; sem duplicação relevante; animações contidas.
- JS: validado com `node --check` nas duas páginas após cada alteração.

## 9. Core Web Vitals — ANTES / PROBLEMA / CORREÇÃO / RESULTADO

| Métrica | ANTES | PROBLEMA | CORREÇÃO | RESULTADO ESPERADO |
|---|---|---|---|---|
| **LCP** | Ruim | HTML 2.5–3.4 MB, hero sem prioridade, `@import` bloqueante | Imagens −59%, `fetchpriority=high` no hero, fontes via `preconnect+link swap` | LCP bom (<2.5s em 4G) |
| **CLS** | Risco | imgs sem dimensão | `width/height` + `aspect-ratio` | ~0 |
| **INP** | Ok | — | JS mínimo, sem libs, listeners leves | Bom |

*(Medição numérica em Lighthouse depende do ambiente de produção/servidor — o preview em artifact usa data URI e proxy de fontes.)*

## 10–12. SEO / Acessibilidade / Mobile — ver seção 3.

## 13. Links quebrados / confiabilidade

- Sem imagens quebradas (todas embutidas e validadas). Sem scroll horizontal em 390px (verificado headless).
- CTAs com função: **Comprar agora** dispara `add_to_cart/begin_checkout` + aviso honesto ("checkout na próxima fase"); **WhatsApp** dispara evento + aviso (número `[CONFIRMAR]`).
- Muitos links de navegação/rodapé ainda são âncora `#`/placeholder — **esperado** (páginas internas são a próxima fase). Listados abaixo.

## 14. Problemas ainda existentes

1. **PDP no mobile não tem menu** (a nav some em ≤960px sem hambúrguer) — navegação por breadcrumb/rodapé apenas. *Recomendado adicionar hambúrguer à PDP.*
2. **Imagens como data URI** (restrição do artifact) — produção deve usar arquivos `.webp/.avif` + `srcset/sizes` + cache.
3. **Links internos placeholder** (`href="#"`) até as páginas internas existirem (categorias, guia, blog, políticas).
4. **Checkout/gateway não integrados** (fase de integração).
5. **`Offer`/`Review`/`AggregateRating` ausentes** de propósito — dependem de preço e avaliações reais `[CONFIRMAR]`.
6. **`<title>`/`<html lang>` no artifact:** o wrapper do artifact controla `<html>`; em produção usar `<html lang="pt-BR">` e `<title>` SEO completo ("Axion Cycle — Rodas de Carbono…").
7. **Fontes bloqueadas no preview** por cert do proxy do sandbox (carregam normalmente em produção; há fallback).

## 15. Auditoria de consistência de produtos (§31)

Reconferido: cada modelo continua sendo um **objeto independente**; nada foi misturado. Freio vem do nome (D/R); perfil vem do nome (Wave/AeroX = `[CONFIRMAR]`); peso, larguras (interna e externa **independentes**), cubo, eixo, freehub, compatibilidade = `[CONFIRMAR]`; **preço** e **config. diant./tras. de D55/80 e R60/88** = `[CONFLITO — CONFIRMAR]`. Nenhum dado foi inventado nesta fase.

---

*Fase 5 concluída. Fase 6 NÃO iniciada. Aguardando aprovação.*
