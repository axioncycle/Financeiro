# FASE 3 — Home de Alta Conversão · Entrega e Auditoria

> **Arquivo:** `docs/axion-cycle/fase-3-home.html` (Home completa, aplicando o Design System da Fase 2).
> **Regra cumprida:** nenhum spec/preço/depoimento inventado. Tudo não confirmado está marcado **[CONFIRMAR]**.

---

## 1. Seções construídas (na ordem do funil)

1. **Trustbar + Header** sticky (INMETRO · garantia · +700 · suporte · 12x/PIX) + CTA "Escolher minha roda".
2. **Hero** — headline "SEU UPGRADE COMEÇA AQUI." + sub + 2 CTAs + selos + roda protagonista (SVG placeholder).
3. **Trust bar** (4 provas com ícones).
4. **Produtos em destaque** — vitrine "Encontre sua próxima roda" (cards D50 · D60 · R50 · Wave Disc) + CTA "Ver todas as rodas" + category cards (por freio / por uso).
5. **Quiz "Qual roda é para você?"** — 4 etapas interativas (modalidade → freio → objetivo → faixa) → seleção sugerida por freio + CTA especialista.
6. **Por que Axion?** — 6 blocos de confiança.
7. **Engenharia** — bloco técnico escuro (T700, Ratchet, perfil…) com specs marcadas por modelo.
8. **Comparador** — seleção interativa de até 3 modelos, tabela responsiva.
9. **Prova social** — estrutura pronta para avaliações/fotos reais (sem depoimentos fictícios).
10. **Axion na vida real** — galeria placeholder (sem fotos genéricas passando por clientes).
11. **Compatibilidade** — banner "Essa roda serve na minha bike?" + Verificar + Especialista.
12. **Conteúdo** — 3 posts placeholder (temas reais sugeridos, não publicados como existentes).
13. **FAQ** — 11 perguntas; respostas só com dados confirmados, resto [CONFIRMAR].
14. **CTA final** — "SUA PRÓXIMA RODA COMEÇA AQUI." premium.
15. **Footer** completo (Rodas · Ajuda · Axion · Atendimento · legal).
16. **WhatsApp flutuante** + **CTA sticky mobile**.

---

## 2. Hierarquia de CTAs (§15 — sem excesso)

| Função | CTA | Onde |
|---|---|---|
| Principal | **Escolher minha roda** | Header, Hero, CTA final, sticky mobile |
| Descoberta | **Encontrar a roda ideal** | Hero → Quiz |
| Produto | **Ver produto** | Cards |
| Suporte | **Falar com um especialista** | Quiz, comparador, compatibilidade, CTA final |
| Comparação | **Comparar modelos** | Comparador |
| Compatibilidade | **Verificar compatibilidade** | Banner |

---

## 3. Consistência de produtos (§21)

Modelos usados exatamente como fornecidos, **sem misturar dados**:
`D50 · D55 · D60 · D55/80 · Wave Disc · AeroX` (Disc) · `R50 · R60 · R60/88 · Wave Rim · AeroX Rim` (Rim).

- **Único dado exibido por modelo:** freio (derivado do nome D/R) e perfil (número no próprio nome; Wave/AeroX = [CONFIRMAR]).
- **Todos os demais** (preço, peso, largura int/ext, cubo por modelo, compatibilidade, modalidade) = **[CONFIRMAR]** — nenhum valor foi escolhido arbitrariamente.
- Nenhum **[CONFLITO]** foi resolvido "no chute": o conflito de preço da Fase 1 permanece sinalizado e os preços aparecem como `R$ — [CONFIRMAR]`.

---

## 4. SEO estrutural (§18)

Implementado / recomendado:
- **`<title>`** "Axion Cycle" · **meta description** com termos naturais.
- **H1** único ("Seu upgrade começa aqui.") · **H2** por seção.
- **JSON-LD Organization** incluído (base para Product/FAQ quando os dados forem confirmados).
- **Alt text** nas ilustrações; placeholders de imagem marcados.
- **Links internos** âncora (produtos, quiz, comparador, FAQ, contato).
- Termos trabalhados naturalmente: *roda de carbono, disc/rim brake, triathlon, gravel, MTB, speed, perfis (50/55/60mm)* — sem keyword stuffing.
- **Pendente na produção:** canonical real, Open Graph com imagem oficial, schema Product/Offer/AggregateRating (só com dados reais), sitemap. `[CONFIRMAR]`

---

## 5. Auditoria QA (§19) — visão dos 5 perfis

| Pergunta | Veredito |
|---|---|
| Entendo a Axion em 5s? | ✅ Hero + trustbar comunicam "rodas de carbono premium, certificadas". |
| Entendo o produto? | ✅ Vitrine + engenharia; ⚠️ specs [CONFIRMAR]. |
| Confio na marca? | ✅ INMETRO, garantia, +700, suporte repetidos com sobriedade. |
| Encontro minha roda? | ✅ Quiz + comparador + categorias. |
| Entendo as diferenças? | ⚠️ Parcial — comparador pronto, mas valores [CONFIRMAR]. |
| Verifico compatibilidade? | ✅ Fluxo dedicado → WhatsApp. |
| Sei o preço? | ❌ **Não** — preços pendentes [CONFIRMAR] (bloqueio real, não de design). |
| Compro rápido? | ⚠️ Caminho claro; checkout é Fase 4. |
| Falo com alguém? | ✅ WhatsApp flutuante + CTAs de especialista. |
| Parece premium? | ✅ Carbono + azul + Saira/Plex, muito respiro. |
| Parece rápido? | ✅ HTML/CSS enxuto, SVG vetorial, JS mínimo, sem libs. |
| Mobile excelente? | ✅ Mobile-first, hambúrguer, sticky CTA, comparador em scroll, FAQ acordeão. |

**Auditoria CRO:** funil topo→fundo coerente; prova de confiança antes do preço; múltiplos pontos de captura (quiz, comparador, WhatsApp). Maior alavanca de conversão bloqueada hoje = **ausência de preço/specs reais**.

**Auditoria UX:** navegação ≤2 cliques ao produto; estados de foco/hover; contraste AA; alvos ≥44px; acessível por teclado; `prefers-reduced-motion` respeitado.

**Auditoria de conteúdo:** copy objetiva, sem promessa não comprovável, sem urgência/escassez falsa; placeholders honestos onde faltam dados.

---

## 6. Lista [CONFIRMAR] (bloqueios para a Fase 4)

1. **Preço oficial por modelo** (+ resolver conflito de preço da Fase 1).
2. **Specs por modelo:** peso, largura interna/externa, perfil de Wave/AeroX, cubo por modelo.
3. **Freehub** por modelo (Shimano HG / SRAM XDR / Campagnolo) e **nº de velocidades**.
4. **Freio/rotor:** Center Lock vs 6 furos.
5. **Tubeless:** ready ou de fábrica; o que acompanha (fita/válvula).
6. **Compatibilidade:** eixos (dianteiro/traseiro), tamanhos de roda.
7. **Garantia:** texto de cobertura e acionamento.
8. **Frete/prazo** e política de trocas/devolução.
9. **Condições de 12x e 5% PIX** (valor mínimo?).
10. **Fotografia oficial** dos produtos + **lifestyle** real.
11. **Logotipo oficial** em vetor (usada marca-símbolo provisória).
12. **Avaliações/fotos reais** de clientes para a prova social.
13. **WhatsApp, e-mail, horário, CNPJ** e páginas legais.
14. **Mapeamento quiz → modelos** por perfil/objetivo (hoje só filtra por freio).

---

## 7. Melhorias realizadas

- Aplicação integral do Design System (tokens, tipografia, componentes, estados) — 100% consistente com a Fase 2.
- Quiz e comparador **funcionais** (JS puro, sem bibliotecas).
- Estruturas honestas de prova social e galeria (prontas para dados reais).
- Mobile-first real: hambúrguer, WhatsApp flutuante, CTA sticky, comparador com scroll.
- Performance: sem frameworks, SVG vetorial (roda), 3 fontes com `display=swap`, JS mínimo.

## 8. Problemas ainda existentes

- **Preço/specs ausentes** (dependem de [CONFIRMAR]) — impacta conversão e o comparador.
- **Imagens são placeholders** (SVG/blocos) — o site final precisa de fotografia profissional.
- **Recomendação do quiz** é conservadora (só por freio) até haver mapeamento oficial de specs.
- SEO avançado (OG image, schema Product/Offer, canonical, sitemap) depende de dados/infra reais.

---

*Fase 3 concluída. Nenhuma etapa da Fase 4 foi iniciada. Aguardando aprovação.*
