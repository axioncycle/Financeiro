# FASE 4 — Páginas de Produto (PDP) · Entrega e Auditoria

> **Arquivo:** `docs/axion-cycle/fase-4-produto.html` — template definitivo de produto, aplicando o Design System (Fase 2).
> **Modelo de dados:** cada produto é um **objeto independente** (`P[id]`). O template renderiza os dados **daquele** produto — impossível "misturar" specs entre modelos (§2/§32).
> **Regra de dados:** nada inventado. Campo desconhecido = **[CONFIRMAR]**. Preço = **[CONFLITO — CONFIRMAR]** (conflito de preço detectado na Fase 1). Configuração diant./tras. de D55/80 e R60/88 = **[CONFLITO — CONFIRMAR]**.

---

## 1. Template criado (§33.1) e aplicado a todos os produtos (§33.2)

Um **seletor de modelo** no topo aplica o mesmo template a cada produto, provando a consistência. Modelos incluídos exatamente como no briefing (§3/§28):
**Disc:** D50 · D55 · D60 · D55/80 · Wave Disc · AeroX Disc
**Rim:** R50 · R60 · R60/88 · Wave Rim · AeroX Rim

Cada produto tem **descrição própria** (necessidade/solução/benefícios/para quem/diferencial), benefit headline própria, "para quem é / não é a melhor escolha se", e FAQ próprio — sem texto genérico repetido (§12/§27).

## 2. Estrutura da página (ordem)

Acima da dobra (§4): breadcrumb · galeria · categoria · **H1** · benefit · **preço (à vista/PIX/parcelas)** · **Comprar agora** + **Falar com um especialista** · disponibilidade · selos (INMETRO/garantia/suporte/12x/PIX) · 3–5 benefícios.
Abaixo: Descrição · Para quem é · **Especificações** · Cubo & freehub · **Compatibilidade** · O que vem na caixa · Garantia · Avaliações (estrutura) · **FAQ do produto** · Relacionados · Comparar · CTA final · Footer.

## 3. Componentes funcionais

- **Galeria:** thumbnails (7 vistas), setas prev/next, **swipe** no mobile, **fullscreen** (lightbox). Imagens = placeholders SVG marcados "Foto real [CONFIRMAR]".
- **Preço/CTA:** bloco destacado + **CTA sticky no mobile** (§8/§25).
- **Specs:** grid rótulo/valor; largura interna e externa **independentes** (§11).
- **Compatibilidade:** freio (seguro) + demais campos [CONFIRMAR] + "Não encontrou sua configuração? Fale com o especialista".
- **Relacionados:** só do **mesmo freio** (nunca incompatíveis, §22) e clicáveis (troca o produto).
- **FAQ:** específico por modelo, respostas só com dado confirmado.
- **Tema** claro/escuro.

## 4. Dados exibidos por modelo (o que é seguro vs [CONFIRMAR])

| Campo | Origem |
|---|---|
| Tipo de freio | ✅ do nome (D=Disc / R=Rim) |
| Perfil | ✅ do nome (D50=50mm…); **Wave/AeroX = [CONFIRMAR]** |
| Material / Cubo (Ratchet 36T) / Tubeless | nível de marca → **[CONFIRMAR]** por modelo |
| Peso · larguras · freehub · eixos · raios · cassete · Center Lock · velocidades · modalidade | **[CONFIRMAR]** |
| **Preço / PIX / parcela** | **[CONFLITO — CONFIRMAR]** |
| Config. diant./tras. (D55/80, R60/88) | **[CONFLITO — CONFIRMAR]** |
| Itens na caixa | **[CONFIRMAR]** |

Nenhum valor foi escolhido arbitrariamente; nenhum spec foi copiado de outro modelo.

## 5. SEO (§26)

- `<title>`/meta description exclusivos por produto (montados do nome do modelo).
- **H1 único** = nome do produto; H2 por seção; breadcrumb.
- **Alt text** nas ilustrações; placeholders marcados.
- **Pendente na produção real:** URL amigável por produto, canonical, **Product/Offer Schema** (só com preço/estoque reais), **Review Schema** (só com avaliações reais), FAQ Schema, Open Graph com foto oficial. `[CONFIRMAR]`

## 6. Analytics (§30)

Eventos preparados via `dataLayer` (padrão GA4, sem backend): `view_item`, `select_item`, `add_to_cart`, `begin_checkout`, `whatsapp_click`, `compatibility_click`, `gallery_interaction`, `faq_open`. Ficam prontos `purchase`, `compare_product`, `coupon_use`, `pix_selection`, `installment_selection` para quando o checkout existir.

## 7. Checkout (§29) — estado real

Não há gateway/carrinho nesta fase (é integração da próxima etapa). O botão **Comprar agora não é decorativo**: dispara `add_to_cart`/`begin_checkout` e mostra aviso honesto de que a integração de checkout/PIX/cartão/cupom/frete é a próxima fase. **[CONFIRMAR]** plataforma e gateway.

## 8. QA final (§31) — os 6 perfis

| Verificação | Resultado |
|---|---|
| Nome/imagem/categoria corretos | ✅ (imagem = placeholder [CONFIRMAR]) |
| Especificações corretas | ✅ estrutura correta; valores [CONFIRMAR] (não inventados) |
| Compatibilidade | ✅ estrutura + rota ao especialista |
| Preço correto | ❌ [CONFLITO — CONFIRMAR] — bloqueio de dados |
| CTA / WhatsApp funcionando | ✅ com eventos + feedback |
| Checkout | ⚠️ integração na próxima fase |
| Mobile / desktop | ✅ mobile-first, sticky CTA, galeria swipe, specs/FAQ legíveis |
| SEO | ✅ base; schema/canonical na produção |
| Acessibilidade | ✅ foco visível, teclado, alvos ≥44px, contraste AA, `prefers-reduced-motion` |
| Velocidade | ✅ sem libs, SVG vetorial, 3 fontes, JS enxuto |

**Auditoria CRO:** preço/compra acima da dobra, prova de confiança imediata, especialista sempre a 1 toque, FAQ que remove objeções. Maior bloqueio de conversão = **preço/specs reais ausentes**.

## 9. Lista [CONFIRMAR] (§33.13)

Preço por modelo · peso · largura interna · largura externa · cubo (por modelo) · freehub · eixo diant./tras. · nº e tipo de raios · Center Lock · nº de velocidades · tipo/tamanho de pneu · modalidade · itens na caixa · perfil de Wave/AeroX (Disc e Rim) · texto de garantia · frete/prazo · WhatsApp/e-mail/horário/CNPJ · fotografia oficial · logo em vetor · avaliações reais · plataforma/checkout/gateway.

## 10. Lista [CONFLITO — CONFIRMAR] (§33.14)

- **Preço/parcelas** — valores divergentes entre fontes na Fase 1 (ex.: R$ 4.349 vs 12x R$ 458,25 vs R$ 9.499), sem vínculo claro a modelo.
- **D55/80** — atribuição de qual perfil é dianteiro e qual é traseiro.
- **R60/88** — idem.

## 11. Melhorias realizadas

- Template único data-driven → consistência total e **zero mistura** de dados entre produtos.
- Descrições e FAQ **individualizados** por modelo.
- Galeria com swipe/fullscreen; sticky CTA mobile; eventos de analytics.
- Copy premium **sem exagero** ("revolucionário/o melhor" evitados).

## 12. Problemas ainda existentes

- **Preço/specs/fotos ausentes** (dependem de [CONFIRMAR]/[CONFLITO]).
- **Checkout** não integrado (próxima fase).
- Recomendações técnicas (pneu, vento lateral, peso) deliberadamente **não afirmadas** até confirmação — hoje aparecem como [CONFIRMAR].

---

*Fase 4 concluída. Fase 5 NÃO iniciada. Aguardando aprovação.*
