# FASE 1 — Estratégia e Arquitetura do Novo Site AXION CYCLE

> **Documento de estratégia — NÃO é desenvolvimento.**
> Entrega da Fase 1: análise do site atual + arquitetura estratégica do novo site.
> Objetivo: estruturar um site que **venda mais rodas** e posicione a Axion como **marca premium de rodas de carbono para ciclismo**.

---

## 0. Como este documento foi produzido (transparência)

O domínio `axioncycle.com` está **bloqueado pelo proxy de rede** desta sessão, então **não foi possível rastrear o site página a página ao vivo**. O retrato do site atual foi reconstruído a partir de:

- Páginas indexadas em buscadores (títulos, descrições e trechos).
- Listagens de marketplace (Mercado Livre / loja do PDR).
- Conteúdo público de blog e institucional da marca.

Consequência prática: **nenhuma informação técnica foi inventada**. Dados numéricos (preços, parcelas, pesos) aparecem exatamente como coletados e, quando **divergem entre fontes**, estão marcados com ⚠️ **CONFLITO** ou 🔴 **CONFIRMAR** na Seção 9. Antes de desenvolver, a lista da Seção 9 precisa ser validada pela Axion.

---

## 1. Análise do site atual

### 1.1 O que a marca é (dados coletados)

| Item | Dado coletado | Status |
|---|---|---|
| Marca | Axion Cycle — rodas de carbono para ciclismo | ✅ |
| Origem | Fundada em Brasília/DF, pela PDR Bike Shop | 🔴 confirmar exibição pública |
| Posicionamento de origem | Reação ao mercado dominado por importados caros, sem suporte e sem certificação no Brasil | ✅ (narrativa institucional) |
| Certificação | INMETRO — Registro nº **008991/2025** | ✅ (fornecido) |
| Garantia | **2 anos** contra defeitos de fabricação | ✅ |
| Volume | **+700 rodas entregues** | ✅ (fornecido) |
| Pagamento | **12x sem juros** + **5% OFF no PIX** | ✅ (fornecido) |
| Suporte | Suporte no Brasil | ✅ |

### 1.2 Linha de produtos (dados coletados)

- **Sistemas de freio:** linha **Rim Brake** e linha **Disc Brake** — ambas certificadas INMETRO.
- **Perfis de aro coletados:** 50mm, 60mm, 60/88mm, 88mm, **fechada (disco/lenticular)**, **3-spoke (3 raios)**; e **MTB 29" com perfil de 22mm**.
- **Construção:** carbono **Toray T700**, rolamentos **cerâmicos híbridos**, cubo **Ratchet 36T**.
- **Compatibilidade de pneu:** **Clincher e Tubeless Ready**.
- **Peso do par:** aproximadamente **1500g a 1680g** (varia por perfil).
- **Peso suportado:** ciclista + equipamento até **125kg**.

### 1.3 Conteúdo editorial existente (blog)

Já existem artigos publicados, que são um ativo de SEO e de topo de funil:
- "Inércia Rotacional no Ciclismo: O Que Sua Roda Faz por Você"
- "Rim Brake vs Disc Brake em Carbono: o que realmente mudou"
- Guia comparando MTB / estrada / gravel

### 1.4 Canais de venda observados

- Site próprio `axioncycle.com`.
- **Mercado Livre** (loja do PDR / anúncios "Axion Cycle").

### 1.5 Problemas estruturais observados no site atual

1. **Fragmentação de plataforma.** Foram observadas URLs de dois padrões diferentes coexistindo:
   - páginas tipo *site builder* (ex.: `/produto-para-descricao-personalizada-1`, `/inercia-rotacional-ciclismo-rodas`);
   - páginas tipo *loja OpenCart* (ex.: `/index.php?route=post/post_type`).
   Isso sugere **site institucional e loja em sistemas separados**, o que fragmenta a jornada, o SEO e a análise de conversão. ⚠️ **CONFIRMAR** na Seção 9.
2. **URLs de produto genéricas** ("produto-para-descricao-personalizada-1") — ruins para SEO e para percepção premium.
3. **Preço não padronizado entre canais** (ver Seção 10 / inconsistências).
4. **Dependência de marketplace** para conversão, o que dilui a marca (a Axion "aparece como anúncio", não como marca especializada).
5. **Ausência aparente de ferramentas de decisão** (guia de compra interativo, comparador, checagem de compatibilidade) — hoje o cliente indeciso não tem caminho guiado.

---

## 2. Arquitetura completa do novo site

### 2.1 Mapa do site (sitemap)

```
HOME
│
├── RODAS  (hub de produtos — landing de categoria)
│   ├── DISC BRAKE           → lista de modelos disc
│   ├── RIM BRAKE            → lista de modelos rim
│   ├── GRAVEL               → seleção por uso
│   ├── MTB                  → seleção por uso
│   └── [PÁGINA DE PRODUTO]  → 1 por modelo/perfil
│
├── GUIA DE COMPRA           → quiz/assistente "qual roda é pra mim?"
│
├── COMPARADOR               → comparar 2–3 modelos lado a lado
│
├── SOBRE                    → história, INMETRO, tecnologia, prova social
│
├── GARANTIA                 → 2 anos, cobertura, como acionar, INMETRO
│
├── BLOG                     → conteúdo/SEO/topo de funil
│
└── CONTATO                  → WhatsApp, suporte no Brasil, compatibilidade
```

### 2.2 Hierarquia e lógica de categorias

O erro comum é organizar só por **produto**. A Axion deve organizar por **duas dimensões cruzadas**, porque o cliente pensa em uma das duas:

- **Por sistema de freio** (quem já sabe o que quer): DISC BRAKE / RIM BRAKE.
- **Por uso/modalidade** (quem pensa no esporte, não na peça): ESTRADA/SPEED, TRIATHLON & CONTRA-RELÓGIO (TT), GRAVEL, MTB.

Recomendação: **RODAS** é o hub. Dentro dele, filtros por *freio*, *uso*, *perfil (mm)* e *faixa de preço*. As entradas de menu DISC BRAKE, RIM BRAKE, GRAVEL e MTB são **atalhos pré-filtrados** para o mesmo hub — atendem os dois modelos mentais sem duplicar catálogo.

> Observação de escopo: o briefing lista Triathlon e Contra-relógio como públicos, mas o menu pedido não tem item "TT". Recomendo tratar TT como **atalho de uso** dentro de RODAS (perfis 88mm / fechada / 3-spoke), sem criar item de menu novo. 🔴 confirmar na Seção 9.

### 2.3 Menu (navegação principal — desktop)

Barra fixa (sticky), fundo escuro premium, logo à esquerda:

```
[LOGO]   RODAS ▾   GUIA DE COMPRA   COMPARADOR   SOBRE   GARANTIA   BLOG   CONTATO      [🔍]  [WhatsApp]  [Carrinho]
```

**Megamenu de "RODAS ▾"** (abre ao hover/clique):

| Coluna 1 — Por freio | Coluna 2 — Por uso | Coluna 3 — Destaque |
|---|---|---|
| Disc Brake | Estrada / Speed | Card do modelo mais vendido |
| Rim Brake | Triathlon / Contra-relógio (TT) | "Não sabe qual? → Guia de compra" |
| | Gravel | "Dúvida de compatibilidade? → WhatsApp" |
| | MTB | |

Barra utilitária fina acima do menu (faixa de confiança): `INMETRO 008991/2025 · 2 anos de garantia · +700 rodas entregues · 12x sem juros · 5% OFF no PIX`.

### 2.4 Navegação secundária

- **Rodapé** com 4 colunas: Rodas (por freio/uso), Ajuda (Guia, Comparador, Compatibilidade, Garantia, Contato), Institucional (Sobre, Blog, INMETRO), Confiança/contato (WhatsApp, selos, formas de pagamento).
- **Breadcrumbs** em todas as páginas internas (`Home > Rodas > Disc Brake > [Modelo]`).
- **Busca** com sugestões por perfil (mm) e por uso.

---

## 3. Jornada do usuário (3 caminhos principais)

Os três caminhos pedidos, mapeados como fluxos reais de navegação:

### Caminho 1 — Cliente que JÁ SABE o que quer
```
Home / Menu RODAS  →  Filtro (freio + perfil)  →  Página de Produto  →  Comprar
```
- Prioridade: **atrito zero**. Menu → produto em ≤ 2 cliques.
- CTA dominante: **"Comprar agora"** + selo 12x/PIX visível.

### Caminho 2 — Cliente que NÃO SABE qual roda escolher
```
Home ("Não sabe qual?")  →  GUIA DE COMPRA (quiz)  →  COMPARADOR  →  Página de Produto  →  Comprar
```
- O **Guia** faz 4–6 perguntas (modalidade, freio da bike, peso, orçamento, prioridade aero×leveza) e recomenda 1–3 modelos.
- O resultado do guia **já joga os modelos no Comparador**.
- CTA: "Ver minha recomendação" → "Comparar" → "Comprar".

### Caminho 3 — Cliente com DÚVIDA de COMPATIBILIDADE
```
Página de Produto / Home  →  Bloco/Página COMPATIBILIDADE  →  WhatsApp (humano)
```
- Bloco "Serve na minha bike?" com checagem rápida (freio disc/rim, padrão de eixo, cassete, tipo de pneu).
- Se a dúvida persistir → **botão WhatsApp** com mensagem pré-preenchida ("Olá! Tenho dúvida de compatibilidade do modelo X com a minha bike ...").
- Este caminho **reduz devolução** e transforma dúvida técnica em atendimento consultivo (posicionamento "especialista", não "marketplace").

### Jornada macro (todas as personas)

```
DESCOBERTA        → Blog / Anúncio / Busca / Indicação
CONSIDERAÇÃO      → Guia de Compra · Comparador · páginas de uso (Gravel/MTB/TT)
CONFIANÇA         → INMETRO · Garantia · Sobre · +700 entregues · avaliações
DECISÃO           → Página de produto · PIX 5% · 12x · frete/prazo
CONVERSÃO         → Checkout / WhatsApp
PÓS-COMPRA        → Garantia · suporte Brasil · conteúdo de uso · recompra
```

---

## 4. Funil de conversão

| Etapa | Objetivo | Onde acontece | CTA principal | Métrica |
|---|---|---|---|---|
| **TOPO** — atrair | Gerar tráfego qualificado | Blog, SEO, anúncios, redes | "Ver rodas" / "Descobrir minha roda" | Sessões, origem |
| **MEIO** — educar/qualificar | Reduzir indecisão | Guia de compra, Comparador, páginas de uso | "Comparar modelos" / "Falar no WhatsApp" | Conclusão do guia, uso do comparador |
| **FUNDO** — converter | Tirar objeções e vender | Página de produto | **"Comprar agora"** (PIX/12x) | Add-to-cart, checkout |
| **RETENÇÃO** — fidelizar | Recompra e indicação | Pós-venda, garantia, e-mail | "Indique e ganhe" / conteúdo | Recompra, NPS |

**Gatilhos de confiança em cada etapa** (contra a objeção "carbono é arriscado / é genérico?"): INMETRO 008991/2025, 2 anos de garantia, +700 rodas entregues, suporte no Brasil, Toray T700, prova social (fotos reais/depoimentos). 🔴 depoimentos e avaliações precisam ser confirmados (Seção 9).

**Redutores de atrito no fundo:** PIX 5% OFF, 12x sem juros, prazo/frete claros, botão WhatsApp sempre visível, política de garantia acessível a 1 clique.

---

## 5. Estrutura recomendada da HOME

Ordem das seções (top → bottom), pensada para os 3 caminhos ao mesmo tempo:

1. **Hero premium** — imagem/vídeo de roda em movimento, headline de posicionamento (ex.: *"Rodas de carbono de alta performance — certificadas, garantidas, feitas para andar forte."*). Dois CTAs:
   - primário **"Ver rodas"** (caminho 1);
   - secundário **"Descobrir minha roda"** → Guia (caminho 2).
2. **Faixa de confiança** — INMETRO 008991/2025 · 2 anos garantia · +700 entregues · 12x sem juros · 5% PIX (ícones).
3. **Escolha por uso** — 4 cards grandes: Estrada/Speed · Triathlon/TT · Gravel · MTB (cada um leva ao hub filtrado).
4. **Escolha por freio** — 2 blocos: Disc Brake · Rim Brake.
5. **Destaques / mais vendidos** — 3–4 produtos com preço, "12x", "5% PIX", "Comprar".
6. **"Não sabe qual escolher?"** — bloco do **Guia de Compra** (caminho 2).
7. **Tecnologia** — Toray T700, cerâmica híbrida, cubo Ratchet 36T, INMETRO (por que importa; linguagem de performance + segurança).
8. **Prova social** — depoimentos, fotos reais de clientes, "+700 rodas". 🔴 confirmar.
9. **Compatibilidade / suporte** — "Serve na minha bike? Fale com um especialista" → WhatsApp (caminho 3).
10. **Garantia & INMETRO** — reforço de segurança/confiança + link para página Garantia.
11. **Blog em destaque** — 3 posts recentes (autoridade/SEO).
12. **Rodapé** completo (Seção 2.4).

Regra de ouro: **CTA de compra e WhatsApp sempre acessíveis** (header sticky + botão flutuante de WhatsApp).

---

## 6. Estrutura recomendada das PÁGINAS DE PRODUTO

Layout de página de produto (PDP) orientado a conversão premium:

1. **Galeria** — fotos reais de alta qualidade + vídeo curto (roda girando/aro). Zoom.
2. **Bloco de compra (coluna direita, sticky):**
   - Nome do modelo + perfil (mm) + sistema de freio.
   - **Preço** + **"em até 12x sem juros"** + **"5% OFF no PIX (R$ ...)"**.
   - Seletor de variação (freio, perfil, padrão de eixo/cassete se aplicável).
   - CTA primário **"Comprar agora"** + secundário **"Tirar dúvida no WhatsApp"**.
   - Selos: INMETRO 008991/2025 · 2 anos garantia · prazo de entrega · frete.
3. **"Serve na minha bike?"** — checagem de compatibilidade rápida (caminho 3) + link WhatsApp.
4. **Especificações técnicas (tabela):** material (Toray T700), perfil/altura do aro, largura interna/externa, peso do par, cubo (Ratchet 36T), rolamentos (cerâmicos híbridos), sistema de freio, padrão de raiação, tipo de pneu (Clincher/Tubeless Ready), peso máximo suportado (até 125kg), padrão de cassete/eixo. 🔴 largura, raiação, padrão de eixo/cassete por modelo precisam ser confirmados (Seção 9).
5. **Por que esta roda / para quem** — tradução da spec em benefício (aero vs leveza vs conforto), por modalidade.
6. **Comparar** — botão "Adicionar ao comparador" + "Ver modelos parecidos".
7. **Confiança** — garantia, INMETRO, suporte Brasil, depoimentos do modelo.
8. **FAQ do produto** — dúvidas frequentes (compatibilidade, manutenção, tubeless, peso).
9. **Cross-sell** — acessórios/serviço/outros perfis.

Princípio: a PDP precisa responder **"serve pra mim?"**, **"é seguro/confiável?"** e **"como pago?"** sem o usuário rolar procurando.

---

## 7. Estratégia mobile

Mobile é provavelmente a **maioria do tráfego** (marca de e-commerce/ciclismo BR). Prioridades:

- **Header enxuto:** logo + menu hambúrguer + carrinho. Faixa de confiança vira **carrossel curto** de selos.
- **Menu hambúrguer** com a mesma hierarquia (Rodas ▸ Disc/Rim/Gravel/MTB, Guia, Comparador, Sobre, Garantia, Blog, Contato).
- **Botão flutuante de WhatsApp** fixo (canto inferior) — central para os caminhos 2 e 3.
- **Barra de ação fixa na PDP** (rodapé): preço + "Comprar" sempre visível ao rolar.
- **Guia de compra** desenhado *mobile-first* (uma pergunta por tela, botões grandes).
- **Comparador** em mobile: modo *scroll horizontal* ou "empilhado" (specs em acordeão) — nunca tabela larga espremida.
- **Imagens otimizadas** (peso/lazy-load) — performance é percepção de "premium" e afeta conversão/SEO.
- **PIX/12x** destacados como *chips* logo abaixo do preço.
- **Toque mínimo:** 1 clique para WhatsApp, 2 cliques para comprar.

---

## 8. Lista de funcionalidades necessárias

**Essenciais (MVP do novo site):**
- [ ] Catálogo com filtros (freio, uso, perfil mm, faixa de preço).
- [ ] Página de produto (PDP) com variações, specs e bloco de compra sticky.
- [ ] Carrinho + checkout com **PIX (5% OFF)** e **cartão 12x sem juros**.
- [ ] Cálculo de **frete e prazo** por CEP.
- [ ] **Botão WhatsApp** flutuante + links contextuais (com mensagem pré-preenchida).
- [ ] Página **Garantia** (2 anos) + como acionar.
- [ ] Página **Sobre** (história, INMETRO 008991/2025, tecnologia).
- [ ] **Blog** (migrar/importar posts existentes).
- [ ] Selos de confiança reutilizáveis (INMETRO, garantia, +700, pagamento).
- [ ] SEO técnico: URLs limpas por modelo, títulos/descrições, schema de produto, sitemap.
- [ ] Responsividade mobile-first + performance.

**Diferenciadores (fase 2 / alto valor de conversão):**
- [ ] **Guia de compra interativo** (quiz que recomenda modelos).
- [ ] **Comparador** de 2–3 modelos lado a lado.
- [ ] **Checagem de compatibilidade** ("serve na minha bike?").
- [ ] Avaliações/depoimentos com foto.
- [ ] Rastreio de pedido / área do cliente.
- [ ] Recuperação de carrinho + captura de e-mail/WhatsApp.
- [ ] Pixel/Analytics + eventos de funil (guia concluído, comparador usado, add-to-cart).

**Integrações a definir:** plataforma de e-commerce, gateway/PIX, ERP/estoque, WhatsApp (API ou link), e-mail marketing, analytics. 🔴 Seção 9.

---

## 9. Informações que precisam ser confirmadas (antes de desenvolver)

Nada aqui foi inventado; estes pontos precisam da Axion:

**Produto / técnico**
1. 🔴 **Lista fechada de modelos/SKUs** com nome comercial de cada um (hoje as URLs são genéricas).
2. 🔴 **Preço oficial por modelo** e política de preço única entre site e marketplace (ver Seção 10).
3. 🔴 **Specs completas por modelo:** largura interna/externa do aro, padrão de raiação, nº de raios, padrão de eixo (QR/12mm/15mm), padrão de cassete (Shimano HG/Sram XDR/Campagnolo), peso exato do par.
4. 🔴 Confirmar perfis realmente à venda hoje (50/60/60-88/88/fechada/3-spoke/MTB 29" 22mm) e quais são disc vs rim.
5. 🔴 Peso máximo suportado por modelo (125kg é geral?).
6. 🔴 Tubeless: acompanha fita/válvula? É "ready" ou "tubeless" de fábrica?

**Comercial / confiança**
7. 🔴 Texto oficial da **garantia de 2 anos** (o que cobre, o que não cobre, como acionar).
8. 🔴 Detalhes do **INMETRO 008991/2025** (escopo da certificação, se cobre todos os modelos).
9. 🔴 Existem **depoimentos/avaliações reais** utilizáveis? Fotos de clientes?
10. 🔴 **Prazo de entrega e política de frete** (grátis? por região?).
11. 🔴 **5% OFF no PIX** e **12x sem juros** valem para todos os produtos/valores? Há valor mínimo?
12. 🔴 Política de **troca/devolução**.

**Operacional / técnico do site**
13. 🔴 Plataforma atual e destino (a Seção 1.5 aponta possível uso de dois sistemas — confirmar).
14. 🔴 Número de **WhatsApp** oficial e horário de atendimento.
15. 🔴 Manter venda no **Mercado Livre** em paralelo? (afeta preço e mensagem).
16. 🔴 Domínio, e-mails, ERP/estoque, gateway de pagamento.
17. 🔴 Públicos "Triathlon/Contra-relógio": vira atalho de uso ou item de menu próprio?

---

## 10. Inconsistências encontradas (site atual)

> ⚠️ Sinalizadas, não corrigidas. Dados conforme coletados de fontes públicas/indexadas.

1. ⚠️ **CONFLITO DE PREÇO.** Foram encontrados valores muito diferentes para "roda de carbono Axion":
   - ~ **R$ 4.349** (parcelamento citado como **12x R$ 362,42**);
   - referência a **12x de R$ 458,25** (produto diferente/maior);
   - **R$ 9.499** para a "Roda Fechada Rim Brake (ferradura) carbono Aero TT" no Mercado Livre.
   → Provavelmente são **modelos diferentes**, mas a comunicação atual não deixa claro **qual preço é de qual roda**. Precisa de **tabela de preço por modelo** e mensagem consistente entre canais.
2. ⚠️ **Parcelas inconsistentes** entre fontes (362,42 vs 458,25) sem indicar o produto correspondente — reforça a necessidade da tabela oficial.
3. ⚠️ **Plataforma fragmentada** — coexistência de URLs de *site builder* e de *loja OpenCart* (Seção 1.5), sugerindo institucional e loja separados.
4. ⚠️ **URLs genéricas de produto** ("produto-para-descricao-personalizada-1") — ruins para SEO e percepção premium.
5. ⚠️ **Presença forte em marketplace (Mercado Livre)** competindo com o site próprio — pode canibalizar a marca e o preço; decisão estratégica pendente.
6. ⚠️ **Sem ferramentas de decisão** (guia/comparador/compatibilidade) aparentes hoje — lacuna direta frente ao objetivo de "vender mais" para o cliente indeciso.
7. ⚠️ **Posicionamento vs execução:** a narrativa é "marca especializada premium", mas a distribuição atual (marketplace + URLs genéricas) comunica "loja genérica" — exatamente o que o briefing pede para evitar.

---

## 11. Recomendação de posicionamento (resumo executivo)

Para o site parecer **marca especializada** e não marketplace:

- **Tom:** técnico + confiável + esportivo. Menos "promoção", mais "engenharia e performance".
- **Ativos de confiança sempre à vista:** INMETRO 008991/2025, 2 anos, +700 rodas, suporte Brasil.
- **Preço justo, comunicado com clareza:** PIX 5% e 12x como facilitadores, não como "queima de estoque".
- **Consultoria como diferencial:** Guia + Comparador + WhatsApp especialista = a Axion "entende de roda", o marketplace não.
- **Consistência total** de preço, catálogo e mensagem entre todos os canais.

---

## 12. Próximos passos sugeridos (após validação)

1. Axion responde a Seção 9 (principalmente modelos, preços e specs).
2. Fechar plataforma/stack e decisão sobre marketplace.
3. **Fase 2:** wireframes (Home, Hub RODAS, PDP, Guia, Comparador) — desktop e mobile.
4. **Fase 3:** design visual (identidade premium) + conteúdo.
5. **Fase 4:** desenvolvimento e integrações.
6. **Fase 5:** SEO, analytics de funil, testes e go-live.

---

*Fase 1 — entrega de estratégia e arquitetura. Nenhum desenvolvimento foi iniciado, conforme solicitado.*
