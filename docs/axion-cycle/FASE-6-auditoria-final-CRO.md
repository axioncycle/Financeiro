# FASE 6 — Auditoria Final · CRO + Analytics + Consistência

> Auditoria + correção + validação. **Sem redesign** — identidade, arquitetura, estratégia e preços das Fases 1–5 preservados. Nenhum dado de produto foi inventado (`[CONFIRMAR]` / `[CONFLITO — CONFIRMAR]`).
> Validação: **smoke test headless (Chromium 390px)** em cada correção.

---

## 1. Auditoria do funil (VISITAR → ENTENDER → CONFIAR → ESCOLHER → COMPRAR)

| Etapa | Sabe onde está? | Sabe o que fazer? | Fricção encontrada | Ação |
|---|---|---|---|---|
| **Home** | ✅ (hero + trustbar) | ✅ (2 CTAs claros) | — | OK |
| **Categoria** | ⚠️ | ⚠️ | Página de categoria dedicada ainda não existe (Fase de páginas internas) | PENDENTE |
| **Produto (PDP)** | ✅ (breadcrumb) | ✅ (Comprar / Especialista) | Preço `[CONFLITO]`; WhatsApp era genérico | **CORRIGIDO** (WhatsApp contextual) |
| **Configuração** | ✅ | ⚠️ | Seletor de variação é visual; sem carrinho real | PENDENTE (checkout) |
| **Carrinho/Checkout/Pagamento** | — | — | Não existem (integração) | PENDENTE / `[IMPLEMENTAR]` |
| **Caminho Guia→Produto** | ✅ | ✅ | Quiz **estava quebrado** (bug Fase 5) | **CORRIGIDO** (guarda em buildWheel) |
| **Caminho Comparador→Produto** | ✅ | ✅ | — | OK |
| **Caminho Compatibilidade→WhatsApp** | ✅ | ✅ | WhatsApp não abria/contexto | **CORRIGIDO** |
| **Produto→WhatsApp** | ✅ | ✅ | idem | **CORRIGIDO** |

## 2. Home — as 7 perguntas
1. O que é a Axion? ✅ 2. O que vende? ✅ 3. Para quem? ✅ (usos) 4. Por que confiar? ✅ (INMETRO/garantia/+700/suporte) 5. Quanto custa? ⚠️ `[CONFLITO]` (preço) 6. Como escolher? ✅ (guia/comparador) 7. Como comprar? ✅ (CTA + WhatsApp). → **Único gap real = preço** (bloqueio de dados).

## 3. Categorias
Páginas de categoria dedicadas **ainda não construídas** (próxima fase de páginas internas). A Home cobre a função com cards por freio/uso e o comparador permite comparar sem abrir várias páginas. **PENDENTE**.

## 4–5. Produto & consistência dos 11 modelos
- Cada modelo é um **objeto de dados independente** (sem mistura). Freio vem do nome (D/R); perfil vem do nome (Wave/AeroX = `[CONFIRMAR]`).
- Peso, largura interna, **largura externa (independente)**, cubo, eixo, freehub, Center Lock, tubeless, pneus, conteúdo da caixa, compatibilidade, modalidade = **`[CONFIRMAR]`**.
- **`[CONFLITO — CONFIRMAR]`**: preço/parcelas (divergência da Fase 1); **perfil dianteiro/traseiro de D55/80 e R60/88**.
- Nenhuma informação foi escolhida por suposição.

## 6. Objeções de compra (R$ 5.000+) — onde o site responde
| Objeção | Resposta no site |
|---|---|
| É segura/original? | INMETRO 008991/2025 (hero, trustbar, PDP) ✅ |
| Vai durar / e se der problema? | Garantia 2 anos + suporte Brasil ✅ |
| Serve na minha bike / pneu? | Seção compatibilidade + WhatsApp especialista ✅ |
| Vale o preço? | Posicionamento + PIX/12x; **preço `[CONFLITO]`** ⚠️ |
| Quem me atende depois? | Suporte no Brasil / WhatsApp ✅ |
| Como é a garantia? | Seção garantia (cobertura detalhada `[CONFIRMAR]`) ✅/⚠️ |
| Quando recebo? | Prazo/frete `[CONFIRMAR]` ⚠️ |
| Posso parcelar? | 12x sem juros + 5% PIX ✅ |
| Qual perfil escolher? | Guia + comparador ✅ |

Sem pressão artificial, sem escassez falsa, sem números/avaliações inventados.

## 7. Trust — presença e ordem
Confiança aparece **antes** do preço: trustbar (topo) → hero → prova (Home) → blocos na PDP. Faltam **avaliações/fotos reais de clientes** (estrutura pronta, `[CONFIRMAR]`) e **política de troca/devolução** (link placeholder). Instagram/redes = link `[CONFIRMAR]`.

## 8. WhatsApp — **CORRIGIDO**
- Antes: CTAs de WhatsApp só mostravam um toast e não abriam o app.
- Agora: **abrem `wa.me` com mensagem contextual**:
  - PDP especialista → "Olá! Tenho uma dúvida sobre a **Roda de Carbono Axion D55**."
  - PDP compatibilidade → "…verificar a compatibilidade da **{modelo}**…"
  - PDP comprar → "…Quero comprar a **{modelo}**…" (canal de conversão interino, já que o checkout é fase de integração)
  - Home → "escolher minha roda"; comparador → "comparar modelos"; compatibilidade → mensagem de compatibilidade.
- **Número oficial ainda não configurado**: constante `WA=''` marcada `[CONFIRMAR]` — ao preencher, todos os links passam a apontar direto para o número. Enquanto isso, o link abre o WhatsApp com o texto pronto.

## 9–10. Checkout / cupons
Checkout, carrinho, cupom, frete, PIX/cartão **não existem** (integração de plataforma/gateway) → **`[IMPLEMENTAR]`**. Não foram criados descontos/promoções (respeitado). "Comprar agora" não é botão morto: dispara eventos e abre o WhatsApp de compra.

## 11. Analytics — eventos e parâmetros
| Evento | Dispara | Duplica? | Parâmetros |
|---|---|---|---|
| page_view | load (Home/PDP) | não | page |
| view_item | render PDP | não (1x/modelo) | item_id, item_name |
| select_item | clique relacionado | não | item_id |
| add_to_cart / begin_checkout | Comprar | não | item_id, item_name, category, currency:BRL, quantity, page_type |
| whatsapp_click | qualquer CTA WhatsApp | não (guarda `__wa`) | ctx / page_type |
| compatibility_click | verificar compat | não | item_id |
| guide_start / guide_complete | 1ª resposta / fim do quiz | não (trava `__gs`) | respostas |
| compare_product | seleção no comparador | não | count |
| gallery_interaction | thumb/nav/fullscreen | não | item_id, view |
| faq_open | abrir FAQ | não | item_id |
| **purchase / coupon_use / pix_selection / installment_selection** | — | — | **`[IMPLEMENTAR]`** (dependem do checkout) |

Nomes consistentes (GA4). Sem disparo duplicado (guardas adicionadas).

## 12. GA4 / Ads / Meta Pixel
**Nenhuma tag/integração instalada** (sem GA4 ID, sem Pixel). Há apenas o `dataLayer` preparado. → **`[IMPLEMENTAR]`** ao ter os IDs. Não foram criadas integrações fictícias.

## 13. CRO — CTAs
Hierarquia clara e repetida no ponto certo: hero, após specs, após FAQ, CTA final, **sticky mobile**, WhatsApp flutuante. "O usuário sabe o próximo passo?" → **sim** em cada seção. Contraste/tamanho adequados (azul Axion no primário).

## 14–15. Mobile / Desktop
- **Mobile (375/390/414/768):** sem overflow horizontal (verificado 390px); header compacto; **menu hambúrguer agora também na PDP (CORRIGIDO)**; galeria com swipe/fullscreen; specs/FAQ em acordeão; sticky CTA; WhatsApp flutuante.
- **Desktop (1280/1440/1920):** container máx. 1140–1180px evita conteúdo espalhado; grids e hierarquia consistentes.

## 16. SEO final
Title/description/H1 únicos; H2/H3 organizados; **canonical** e **Open Graph** (Home e PDP, PDP dinâmico por modelo); **JSON-LD**: Organization (Home) + **Product & BreadcrumbList** (PDP, por modelo); **sitemap.xml** + **robots.txt**; alt text descritivo. **Offer/AggregateRating/Review NÃO criados** (sem preço/avaliação reais — proibido). FAQPage: possível quando o FAQ tiver respostas confirmadas.

## 17. Performance final
Imagens −59% (data URI recomprimidas; produção → `.webp/.avif` + `srcset`); fontes `preconnect+swap` (10 pesos); hero/galeria com `fetchpriority=high`; lazy/decoding + `width/height` no resto; 0 bibliotecas JS; animações só `transform/opacity` + `prefers-reduced-motion`. LCP/CLS/INP tratados (medição numérica depende de produção).

## 18. Acessibilidade final
Foco visível, navegação por teclado, alvos ≥44px, contraste AA, hierarquia semântica, `aria-label` em ícones, `aria-expanded` nos dois menus mobile, FAQ nativo `<details>`, alt em imagens. Charset UTF-8 explícito adicionado (corrige acentuação em `file://`).

## 19. Links e funções
- **Funcionais:** logo, navegação âncora, tema, quiz, comparador, galeria, WhatsApp (todos), Comprar (evento + WhatsApp), menus mobile.
- **Placeholder `#` (esperado — páginas internas na próxima fase):** categorias, guia dedicado, blog, políticas, Instagram, carrinho/checkout. Nenhum botão é "morto": os placeholders são de navegação para páginas ainda não construídas.

## 20. Copy
Direta, técnica, premium. **Sem** "melhor do mundo/imbatível/nº 1/mais rápida/mais leve" sem prova. Claims de performance são posicionamento (perfil/uso), não medições — o que exige número (peso, largura) fica `[CONFIRMAR]`. Sem urgência falsa.

## 21. Consistência global
Mesmo modelo → mesmo nome/estrutura em card, PDP e comparador (fonte única de dados). Preço divergente entre canais externos → `[CONFLITO — CONFIRMAR]` (não resolvido por suposição).

## 22. Cenários de cliente
1. **Estrada** → hero/vitrine/guia → PDP disc ✅ 2. **R$5.000, qual roda?** → guia + comparador ✅ (preço final `[CONFLITO]`) 3. **Triatleta aero** → guia (TT) → D55/80/D60 ✅ 4. **Compatibilidade** → seção + WhatsApp contextual ✅ 5. **Comparar 2 modelos** → comparador ✅ 6. **Comprar no celular** → mobile-first + sticky CTA; **checkout pendente** ⚠️ 7. **Dúvida via WhatsApp** → WhatsApp contextual ✅.

## 23. Compra mobile
Home → PDP → (escolha) → **WhatsApp de compra** funcionando como canal interino. **Carrinho/checkout reais = `[IMPLEMENTAR]`** (maior lacuna de conversão, além do preço).

## 24. Velocidade percebida
Proposta clara em ~5s (hero + trustbar); produtos e preço visíveis cedo; confiança antes do preço; CTA sempre à mão. Payload reduzido reforça a sensação de rápido.

---

## 25. Hipóteses de A/B (sem afirmar vencedor)
| # | Variável | A × B | Métrica | Motivo |
|---|---|---|---|---|
| 1 | Headline hero | "Seu upgrade começa aqui" × "Rodas de carbono certificadas INMETRO" | CTR hero | Emoção vs. prova |
| 2 | CTA primário | "Escolher minha roda" × "Ver rodas" | clique/scroll | Consultivo vs. direto |
| 3 | Preço na PDP | valor + "12x" em destaque × valor + PIX em destaque | add_to_cart | Ancoragem de pagamento |
| 4 | Posição da garantia | abaixo do preço × junto ao CTA | conversão | Reduzir objeção no clique |
| 5 | Prova social | acima do fold × antes do CTA final | scroll/CTA | Confiança cedo vs. no fechamento |
| 6 | WhatsApp | flutuante sempre × só em compat/produto | whatsapp_click/venda | Ruído vs. acesso |
| 7 | Card de produto | com perfil visível × com "para quem é" | select_item | Técnico vs. uso |

---

## 26. Relatório por severidade

**CRÍTICO**
- Problema: Home quebrada — `buildWheel(heroWheel)` nulo travava quiz/comparador. Impacto: perda de descoberta e conversão. Local: Home. Correção: guarda `if(!svg)return` + remoção da chamada morta. **Status: CORRIGIDO** (smoke test ok).

**ALTO**
- WhatsApp não abria / sem contexto. Impacto: perda do principal canal de conversão/atendimento. Local: Home + PDP. Correção: `wa.me` com mensagem contextual por modelo/contexto + eventos. **Status: CORRIGIDO** (número `[CONFIRMAR]`).
- "Comprar agora" sem destino. Impacto: clique sem próximo passo. Local: PDP. Correção: dispara eventos e abre WhatsApp de compra. **Status: CORRIGIDO** (checkout real `[IMPLEMENTAR]`).
- PDP sem menu no mobile. Impacto: navegação travada no celular. Local: PDP. Correção: hambúrguer + mobile nav. **Status: CORRIGIDO**.
- Preço ausente/conflitante. Impacto: bloqueia decisão. Local: todas. Correção: exige tabela oficial. **Status: `[CONFLITO — CONFIRMAR]`**.

**MÉDIO**
- Acentuação em `file://` (sem charset). Correção: `<meta charset="utf-8">`. **Status: CORRIGIDO**.
- Sem GA4/Pixel e sem checkout/cupom. **Status: `[IMPLEMENTAR]`**.
- Páginas de categoria/guia dedicado/blog/políticas inexistentes. **Status: PENDENTE (próxima fase)**.

**BAIXO**
- Fotos são de atleta/lifestyle, não product shot por SKU. Correção: fotografia oficial por modelo. **Status: `[CONFIRMAR]`**.
- Imagens como data URI (restrição do preview). Produção: arquivos `.webp/.avif` + `srcset`. **Status: recomendação**.

---

## 27. Checklist final
- [OK] Home · [OK] WhatsApp · [OK] Mobile · [OK] Desktop · [OK] SEO · [OK] Schema (sem rating falso) · [OK] Analytics (eventos/ params) · [OK] Performance · [OK] Acessibilidade · [OK] Copy · [OK] Links (nenhum botão morto)
- [CORRIGIDO] Produtos (PDP funcional/consistente) · [CORRIGIDO] Conversão (CTAs/WhatsApp)
- [PENDENTE] Categorias · [PENDENTE] Guia dedicado/Blog/Políticas
- [IMPLEMENTAR] Carrinho · Checkout · Cupom · GA4/Pixel · eventos purchase/pix/installment/coupon
- [CONFLITO — CONFIRMAR] Preços · Especificações por modelo · perfil diant./tras. de D55/80 e R60/88
- [CONFIRMAR] Garantia (texto) · Prazo/frete · Fotografia por modelo · Avaliações reais · WhatsApp/e-mail/CNPJ · Instagram

---

## Entregáveis
1. **Problemas encontrados** — §1–24 e §26.
2. **Correções realizadas** — bug crítico da Home; WhatsApp contextual; "Comprar" → WhatsApp; menu mobile na PDP; charset UTF-8; parâmetros de analytics; anti-duplicação de eventos.
3. **Pendências** — categorias/guia/blog/políticas; checkout/cupom; GA4/Pixel; fotografia por modelo.
4. **Conflitos** — preços; specs por modelo; perfil diant./tras. de D55/80 e R60/88 → `[CONFLITO — CONFIRMAR]`.
5. **Checklist** — §27.
6. **A/B** — §25.
7. **Status geral** — Home e PDP **rápidas, mobile-first, premium, SEO-ready, acessíveis e sem botões mortos**, validadas por smoke test. Os dois bloqueios que impedem "site 100% vendável" são **dados oficiais (preço/specs)** e **integração de checkout/analytics** — nenhum deles é problema de design, e nada foi declarado "perfeito" sem evidência.

---

*Fase 6 concluída. Nenhuma Fase 7 iniciada.*
