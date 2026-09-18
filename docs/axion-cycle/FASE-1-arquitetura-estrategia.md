# FASE 1 — Arquitetura, Estratégia e Estrutura do Novo Site AXION CYCLE

> **Fase de ARQUITETURA — não é design nem desenvolvimento.**
> Nada de cores definitivas, estética detalhada ou código. O objetivo é uma **arquitetura de informação sólida, comercial e escalável**, orientada à conversão, para um e-commerce **premium** de rodas de carbono.
>
> **Regra de dados:** nenhuma informação técnica/comercial foi inventada. Onde algo não pôde ser confirmado, está marcado **[CONFIRMAR]**.

---

## Nota de método (transparência)

O domínio `axioncycle.com` está **bloqueado pelo proxy de rede** desta sessão — não foi possível rastrear o site ao vivo, página a página. O diagnóstico do site atual foi reconstruído a partir de **páginas indexadas em buscadores, listagens de marketplace (Mercado Livre / loja do PDR) e conteúdo público**. Por isso, vários pontos do diagnóstico carregam **[CONFIRMAR]** — precisam de validação direta com a Axion (ver Entregável 17).

**Dados de marca já fornecidos e tratados como confirmados:** INMETRO Registro nº **008991/2025**; **2 anos** de garantia; **+700 rodas entregues**; **12x sem juros**; **5% OFF no PIX**; suporte no Brasil.

---

# ENTREGÁVEL 1 — Diagnóstico da arquitetura atual

### 1.1 O que foi identificado (marca e produto)

| Item | Dado coletado |
|---|---|
| Categoria | Rodas de carbono para ciclismo (Rim Brake e Disc Brake) |
| Origem | Fundada em Brasília/DF pela PDR Bike Shop [CONFIRMAR exibição pública] |
| Construção | Carbono **Toray T700**, rolamentos **cerâmicos híbridos**, cubo **Ratchet 36T** [CONFIRMAR por modelo] |
| Perfis coletados | 50mm, 60mm, 60/88mm, 88mm, fechada/lenticular, 3-spoke; MTB 29" perfil 22mm [CONFIRMAR quais estão à venda hoje] |
| Pneu | Clincher e Tubeless Ready [CONFIRMAR] |
| Peso do par | ~1500g a 1680g conforme perfil [CONFIRMAR por modelo] |
| Peso suportado | Até 125kg (ciclista + equipamento) [CONFIRMAR se vale para todos] |

### 1.2 Páginas/estruturas existentes identificadas
- Home institucional + vitrine de produtos.
- Páginas de produto com **URLs genéricas** (ex.: `produto-para-descricao-personalizada-1`).
- Blog com artigos reais ("Inércia Rotacional no Ciclismo", "Rim Brake vs Disc Brake em Carbono", guia MTB/estrada/gravel).
- Venda paralela no **Mercado Livre**.

### 1.3 Problemas encontrados

**Navegação / conversão**
- Ausência de **caminho guiado** para o indeciso (não há guia interativo, comparador ou checagem de compatibilidade aparentes).
- Falta de padronização entre "escolher por freio" e "escolher por uso" — o cliente que pensa por modalidade não é atendido.

**Informação duplicada / conflitante**
- ⚠️ **Preços divergentes** entre fontes/canais (ver Entregável 15) sem deixar claro qual preço é de qual modelo.
- Possível **fragmentação de plataforma**: coexistência de URLs de *site builder* e de loja *OpenCart* (`index.php?route=...`), sugerindo institucional e loja em sistemas separados. [CONFIRMAR]

**Páginas importantes ausentes/fracas**
- Página de **Garantia** dedicada e clara; página de **Compatibilidade**; **Guia de compra**; **Comparador**; página de **Sobre** com autoridade (INMETRO, tecnologia).

**Insegurança (ticket alto de carbono)**
- Pouca prova social visível, selos de confiança dispersos, política de garantia/envio não acessível a 1 clique.

**Mobile**
- [CONFIRMAR] estado atual — mas URLs genéricas e vitrine sem filtros indicam experiência não mobile-first.

**SEO estrutural**
- URLs genéricas (péssimas para busca e percepção premium), provável ausência de estrutura de categoria por freio/uso/perfil e de dados estruturados de produto.

**Marca vs execução**
- A distribuição atual (marketplace + URLs genéricas) comunica **"loja genérica"** — exatamente o oposto do posicionamento premium desejado.

---

# ENTREGÁVEL 2 — Nova arquitetura recomendada

A estrutura sugerida no briefing é boa. Proponho **um ajuste de conceito** que a torna mais forte e escalável:

**Princípio central: catálogo único ("RODAS") acessado por duas lógicas de escolha cruzadas.**
O cliente escolhe de um de dois jeitos — **por sistema de freio** (quem já sabe a peça) ou **por uso/modalidade** (quem pensa no esporte). Os itens de menu não duplicam catálogo: são **atalhos pré-filtrados** do mesmo hub. Isso evita catálogos paralelos que se contradizem e escala sem reconstrução.

Ajustes recomendados sobre a proposta do briefing:
- Manter **RODAS** como hub com filtros; DISC/RIM/GRAVEL/MTB como atalhos.
- **"OUTRAS RODAS"** → renomear conceitualmente para **atalho de uso "Triathlon / Contra-relógio (TT)"** + abrigar perfis especiais (fechada/3-spoke). "Outras rodas" é vago e antipremium. [CONFIRMAR nome comercial]
- **"ENCONTRE SUA RODA"** como grupo (Guia + Comparador + Compatibilidade) — excelente, mantido.

---

# ENTREGÁVEL 3 — Sitemap completo

```
/                                   HOME
│
├── /rodas                          RODAS (hub — filtros: freio, uso, perfil mm, preço)
│   ├── /rodas/disc-brake           DISC BRAKE   (atalho pré-filtrado)
│   ├── /rodas/rim-brake            RIM BRAKE    (atalho pré-filtrado)
│   ├── /rodas/gravel               GRAVEL       (atalho por uso)
│   ├── /rodas/mtb                  MTB          (atalho por uso)
│   ├── /rodas/triathlon-tt         TRIATHLON / CONTRA-RELÓGIO (uso; perfis altos/fechada/3-spoke)
│   └── /rodas/{modelo}             PÁGINA DE PRODUTO (1 por modelo)
│
├── /encontre-sua-roda              ENCONTRE SUA RODA (hub de decisão)
│   ├── /encontre-sua-roda/guia     GUIA DE COMPRA (quiz)
│   ├── /comparador                 COMPARADOR (até 3 modelos)
│   └── /compatibilidade            COMPATIBILIDADE (+ CTA WhatsApp)
│
├── /sobre                          SOBRE A AXION (história, INMETRO, tecnologia)
├── /garantia                       GARANTIA (2 anos, cobertura, como acionar)
├── /blog                           CONTEÚDO / BLOG
│   └── /blog/{artigo}              Artigos
├── /contato                        CONTATO (WhatsApp, suporte Brasil)
│
└── Institucional/legal
    ├── /pagamento-e-frete          Formas de pagamento, PIX 5%, 12x, frete/prazo
    ├── /trocas-e-devolucoes        Política de troca/devolução
    └── /politica-privacidade       Privacidade / termos
```

---

# ENTREGÁVEL 4 — Estrutura do menu

**Princípio:** menu enxuto, foco em compra, produto a ≤ 2 cliques.

### Desktop (header sticky)
```
[LOGO]   RODAS ▾   ENCONTRE SUA RODA ▾   SOBRE   GARANTIA   BLOG   CONTATO     [🔍]  [WhatsApp]  [Carrinho]
```
Faixa fina de confiança acima do menu: `INMETRO 008991/2025 · 2 anos garantia · +700 rodas · 12x sem juros · 5% PIX`.

**Megamenu RODAS ▾**
| Por freio | Por uso | Destaque |
|---|---|---|
| Disc Brake | Estrada / Speed | Card do mais vendido [CONFIRMAR qual] |
| Rim Brake | Triathlon / TT | "Não sabe qual? → Guia de compra" |
|  | Gravel | "Dúvida de compatibilidade? → WhatsApp" |
|  | MTB |  |

**Megamenu ENCONTRE SUA RODA ▾:** Guia de Compra · Comparador · Compatibilidade.

### Tablet
Mesma estrutura; megamenu vira coluna única com acordeão; faixa de confiança em carrossel curto.

### Mobile (hambúrguer)
```
☰  →  RODAS (Disc / Rim / Estrada / TT / Gravel / MTB)
      ENCONTRE SUA RODA (Guia / Comparador / Compatibilidade)
      Sobre · Garantia · Blog · Contato
      [Falar no WhatsApp]  (destaque)
```
+ **botão flutuante WhatsApp** fixo + **carrinho** no topo.

### Menu secundário
Rodapé em 4 colunas: **Rodas** (por freio/uso) · **Encontre sua roda** (Guia/Comparador/Compatibilidade/Garantia) · **Institucional** (Sobre/Blog/INMETRO) · **Confiança & contato** (WhatsApp/pagamento/selos).

### Breadcrumbs
Em todas as páginas internas: `Home > Rodas > Disc Brake > {Modelo}`.

---

# ENTREGÁVEL 5 — Estrutura da Home

| # | Seção | Objetivo | Info principal | CTA principal | CTA secundário | Liga para |
|---|---|---|---|---|---|---|
| 1 | **Header** | Navegar/converter | Menu + selos + WhatsApp | Comprar/Rodas | WhatsApp | Todas |
| 2 | **Hero** | Posicionar + iniciar 2 caminhos | "Rodas de carbono de alta performance — certificadas e garantidas" | **Ver rodas** | **Descobrir minha roda** | Rodas / Guia |
| 3 | **Prova de confiança** | Quebrar objeção de ticket alto | INMETRO 008991/2025 · 2 anos · +700 rodas · suporte BR | — | — | Garantia/Sobre |
| 4 | **Produtos em destaque** | Venda direta (caminho 1) | 3–4 modelos + preço + 12x + 5% PIX | Comprar | Ver detalhes | Produto |
| 5 | **Encontre sua roda** | Capturar o indeciso (caminho 2) | "Responda 5 perguntas" | Iniciar guia | Comparar modelos | Guia/Comparador |
| 6 | **Por que Axion** | Autoridade/tecnologia | Toray T700, cerâmica híbrida, Ratchet 36T, INMETRO | Conheça a Axion | — | Sobre |
| 7 | **Comparador** | Facilitar decisão | "Compare até 3 rodas" | Comparar | — | Comparador |
| 8 | **Prova social** | Confiança emocional | Depoimentos/fotos reais [CONFIRMAR] | — | Ver mais | — |
| 9 | **Compatibilidade** | Remover medo (caminho 3) | "Serve na minha bike?" | Verificar compatibilidade | Falar com especialista (WhatsApp) | Compatibilidade |
| 10 | **Conteúdo/Blog** | SEO + autoridade | 3 posts recentes | Ler no blog | — | Blog |
| 11 | **FAQ** | Tirar dúvidas de fundo | Pagamento, garantia, entrega, tubeless | Ver todas | WhatsApp | Garantia/Contato |
| 12 | **CTA final** | Última conversão | "Pronto para andar mais forte?" | Ver rodas | Falar no WhatsApp | Rodas |
| 13 | **Footer** | Navegação/confiança | Selos, pagamento, links | — | — | Todas |

A Home é **página de venda**, não folder institucional: CTA de compra e WhatsApp sempre visíveis (header sticky + botão flutuante).

---

# ENTREGÁVEL 6 — Estrutura das páginas de categoria

Aplica-se a `/rodas` e aos atalhos (disc, rim, gravel, mtb, tt):

1. **H1 + intro curta** contextual (ex.: "Rodas de carbono Disc Brake") — 1–2 parágrafos com valor de SEO, sem keyword stuffing.
2. **Barra de filtros** (topo/lateral): freio · uso · perfil (mm) · faixa de preço · peso · tubeless.
3. **Ordenação:** relevância, preço, perfil, mais vendidos.
4. **Grid de cards de produto**, cada card com: foto, nome, perfil/freio, **preço + 12x + 5% PIX**, selo INMETRO, botões **Comprar** / **Comparar (+)**.
5. **Bloco "Não sabe qual escolher?"** → Guia (caminho 2).
6. **Bloco de confiança** (garantia, INMETRO, suporte).
7. **Texto de apoio/SEO** ao final (quando fizer sentido para a categoria).
8. **Links internos** para categorias relacionadas e blog.

**CTA da categoria:** principal = abrir Produto/Comprar; secundário = Guia/Comparador.

---

# ENTREGÁVEL 7 — Estrutura das páginas de produto (PDP)

Ordem pensada para responder rápido "serve pra mim? / é confiável? / como pago?":

1. **Galeria** — fotos reais em alta + vídeo curto (roda girando) + zoom.
2. **Bloco de compra (sticky, direita):**
   - Nome + perfil (mm) + sistema de freio.
   - **Preço** · **12x sem juros** · **5% OFF no PIX (R$ …)**.
   - Seletor de variação (freio, perfil, freehub/eixo se aplicável).
   - CTA **COMPRAR AGORA** + secundário **TIRAR DÚVIDAS NO WHATSAPP**.
   - Selos: INMETRO 008991/2025 · 2 anos · prazo/frete.
3. **"Serve na minha bike?"** — mini-checagem de compatibilidade + link WhatsApp (caminho 3).
4. **O que é / Para quem é / Principal benefício** — spec traduzida em benefício por modalidade.
5. **Ficha técnica (tabela)** respondendo cada item pedido:
   - Perfil/altura do aro · largura interna · largura externa · peso do par · material (Toray T700) · cubo (Ratchet 36T) · rolamentos (cerâmicos híbridos) · **padrão de eixo** · **padrão de freehub** (Shimano HG / SRAM XDR / Campagnolo) · tipo de freio · Center Lock/6-furos · tubeless (ready/de fábrica) · pneu indicado · peso máximo suportado · o que acompanha (fita/válvula/etc.).
   - **Todos os valores por modelo → [CONFIRMAR].**
6. **Compatibilidade detalhada** (link para /compatibilidade).
7. **O que acompanha** + **Garantia** (2 anos) + **Como funciona o suporte** (Brasil, WhatsApp).
8. **Comparar** ("Adicionar ao comparador") + relacionados.
9. **Prova social do modelo** [CONFIRMAR].
10. **FAQ do produto** (tubeless, manutenção, compatibilidade, peso).

---

# ENTREGÁVEL 8 — Guia "Encontre sua roda"

Quiz curto, mobile-first, **uma pergunta por tela**. O guia **filtra o catálogo** — não gera recomendações técnicas inventadas; apenas cruza respostas com atributos reais dos modelos [CONFIRMAR mapeamento com a Axion].

1. **Modalidade:** Road · Triathlon · Contra-relógio · Gravel · MTB
2. **Sistema de freio:** Disc Brake · Rim Brake
3. **Objetivo:** Treino · Performance · Competição · Aerodinâmica · Equilíbrio peso×aero
4. **Preferência de perfil:** Baixo · Médio · Alto · Muito alto · Fechada
5. **Faixa de investimento:** (faixas conforme tabela oficial de preços) [CONFIRMAR]

**Resultado:** 1–3 modelos compatíveis, cada um com CTA **Ver produto** e **Adicionar ao comparador** (emenda no caminho 2). Se nenhum resultado claro → **Falar com especialista (WhatsApp)**.

**CTA:** principal = Ver recomendação → Produto; secundário = Comparar; escape = WhatsApp.

---

# ENTREGÁVEL 9 — Comparador

- Compara **até 3 modelos** lado a lado (colunas).
- Adição a partir de cards de categoria, PDP e resultado do Guia.
- **Atributos comparados (curados, sem excesso):** preço · peso do par · perfil (mm) · largura interna · largura externa · material · cubo · sistema de freio · eixo · freehub · tubeless · modalidade indicada · garantia. [valores por modelo = CONFIRMAR]
- **UX:** destacar diferenças (ex.: menor peso, maior perfil); esconder linhas idênticas opcionalmente; cada coluna termina com **Comprar** + **WhatsApp**.
- **Mobile:** scroll horizontal das colunas OU specs empilhadas em acordeão — nunca tabela larga espremida.

**CTA:** principal = Comprar o escolhido; secundário = WhatsApp.

---

# ENTREGÁVEL 10 — Compatibilidade

Página + módulo reutilizável na PDP. O cliente verifica passo a passo:

- **Sistema de freio:** Disc ou Rim Brake
- **Tamanho da roda** (700c / 650b / 29" …) [CONFIRMAR opções]
- **Eixo dianteiro** (QR 9mm / passante 12x100 / 15x100 …) [CONFIRMAR]
- **Eixo traseiro** (QR 10mm / passante 12x142 …) [CONFIRMAR]
- **Freehub:** Shimano HG · SRAM XDR · Campagnolo (se aplicável) [CONFIRMAR]
- **Nº de velocidades** (compatibilidade cassete) [CONFIRMAR]
- **Center Lock** ou 6 furos (disco) [CONFIRMAR]
- **Compatibilidade com pneus** (largura/tubeless) [CONFIRMAR]

**Saída:** "Compatível ✔ / Verificar com especialista".
**CTA obrigatório:** **"FALAR COM UM ESPECIALISTA"** → WhatsApp (mensagem pré-preenchida com o modelo e a dúvida). Fecha o caminho 3.

---

# ENTREGÁVEL 11 — Fluxos dos 3 tipos de cliente

**Caminho 1 — Já sabe o que quer** (atrito mínimo, ≤ 2 cliques até o produto)
```
HOME → RODAS → DISC BRAKE → PRODUTO → COMPRAR
```

**Caminho 2 — Não sabe qual escolher** (consultivo)
```
HOME → ENCONTRE SUA RODA → GUIA DE COMPRA → RECOMENDAÇÃO → PRODUTO → COMPRAR
                                          ↘ COMPARADOR ↗
```

**Caminho 3 — Dúvida de compatibilidade** (segurança → conversão)
```
PRODUTO → COMPATIBILIDADE → CONFIRMAÇÃO → COMPRAR
                                       ↘ WHATSAPP (especialista)
```

---

# ENTREGÁVEL 12 — Estratégia mobile (mobile-first)

- **Menu** hambúrguer com a mesma hierarquia + WhatsApp em destaque.
- **Navegação** por polegar: alvos grandes, 1 clique para WhatsApp, 2 para comprar.
- **Cards** de produto compactos com preço + 12x + 5% PIX + "Comparar".
- **Filtros** em painel deslizante (bottom sheet), não em barra lateral.
- **Comparador** empilhado/scroll horizontal (nunca tabela espremida).
- **CTA de compra fixo** no rodapé da PDP ao rolar (preço + Comprar).
- **WhatsApp flutuante** persistente.
- **Checkout** curto, PIX/cartão em destaque, poucos campos.
- **Imagens** otimizadas + lazy-load (performance = percepção premium + SEO + conversão).
- **Descrição/specs/FAQ** em **acordeões** para não gerar rolagem infinita.

---

# ENTREGÁVEL 13 — Estratégia SEO estrutural

**URLs limpas e semânticas** (fim das URLs genéricas):
```
/rodas
/rodas/disc-brake
/rodas/rim-brake
/rodas/gravel
/rodas/mtb
/rodas/triathlon-tt
/rodas/{modelo-perfil-freio}      ex.: /rodas/axion-50mm-disc [CONFIRMAR nomes]
/blog/{artigo}
```

**Hierarquia de títulos por tipo de página** (padrão, sem keyword stuffing):
- **Categoria** — H1: "Rodas de Carbono Disc Brake"; H2: por uso, por perfil, "como escolher".
- **Produto** — H1: nome do modelo ("Roda de Carbono Axion 50mm Disc"); H2: benefícios, ficha técnica, compatibilidade, garantia, FAQ.
- **Home** — H1: proposta de valor da marca; H2: seções (destaques, encontre sua roda, por que Axion…).

**Termos-alvo mapeados para páginas** (intenção, não repetição): roda(s) de carbono → hub `/rodas`; speed/road, disc brake, rim brake, triathlon → atalhos de categoria; 50/55/60/80mm → filtros de perfil + PDPs; gravel, MTB → categorias de uso.

**Estrutural:** breadcrumbs com dados estruturados (BreadcrumbList), **schema.org/Product** (preço, disponibilidade, avaliações quando confirmadas), sitemap.xml, canonical entre atalho/hub para evitar conteúdo duplicado, **links internos** categoria↔produto↔blog↔guia, meta titles/descriptions por página.

**Blog:** manter/migrar os artigos existentes (ativo de topo de funil), com links para categorias e produtos relacionados.

---

# ENTREGÁVEL 14 — Hierarquia de CTAs (por página)

| Página | Objetivo | CTA principal | CTA secundário | Próxima etapa |
|---|---|---|---|---|
| **Home** | Iniciar caminho de compra | Ver rodas | Descobrir minha roda / WhatsApp | Categoria ou Guia |
| **Categoria** | Levar ao produto certo | Ver produto / Comprar | Guia / Comparar | Produto |
| **Produto** | Converter em comprador | **COMPRAR AGORA** | **TIRAR DÚVIDAS NO WHATSAPP** | Checkout |
| **Guia de compra** | Recomendar modelo | Ver recomendação | Comparar | Produto |
| **Comparador** | Decidir entre finalistas | Comprar o escolhido | WhatsApp | Checkout |
| **Compatibilidade** | Remover medo técnico | Comprar | **Falar com especialista (WhatsApp)** | Checkout / atendimento |
| **Sobre** | Gerar confiança/autoridade | Ver rodas | Falar no WhatsApp | Categoria |
| **Garantia** | Reforçar segurança | Ver rodas | Falar no WhatsApp | Categoria/Produto |
| **Contato** | Resolver dúvida | Falar no WhatsApp | Enviar mensagem/e-mail | Atendimento |

---

# ENTREGÁVEL 15 — Principais problemas encontrados

1. ⚠️ **Preços conflitantes** entre fontes/canais, sem indicar o modelo: valores coletados incluem **~R$ 4.349 (12x R$ 362,42)**, referência a **12x de R$ 458,25**, e **R$ 9.499** (Roda Fechada Rim Brake Aero TT no Mercado Livre). Provavelmente modelos diferentes, mas a comunicação não deixa claro. → Precisa de **tabela oficial de preço por modelo**. [CONFIRMAR]
2. ⚠️ **Parcelas inconsistentes** (362,42 vs 458,25) sem produto associado.
3. ⚠️ **Plataforma possivelmente fragmentada** (site builder + OpenCart). [CONFIRMAR]
4. ⚠️ **URLs de produto genéricas** — ruins para SEO e percepção premium.
5. ⚠️ **Dependência de marketplace** (Mercado Livre) competindo com o site próprio e diluindo a marca.
6. ⚠️ **Ausência de ferramentas de decisão** (guia/comparador/compatibilidade).
7. ⚠️ **Sinais de confiança dispersos** para um produto de ticket alto.
8. ⚠️ **Descompasso posicionamento × execução**: quer ser premium, mas a estrutura atual comunica "genérico".

---

# ENTREGÁVEL 16 — Principais oportunidades

1. **Ser "a marca com INMETRO"** — diferencial raro no mercado nacional de carbono; usar como âncora de confiança em toda a jornada.
2. **Consultoria como vantagem** — Guia + Comparador + WhatsApp especialista fazem a Axion "entender de roda"; marketplace não faz isso.
3. **Preço justo comunicado com clareza** — PIX 5% e 12x como facilitadores premium (não "queima de estoque").
4. **SEO de cauda longa** — perfis (50/55/60/80mm), freio e modalidade geram páginas de alta intenção de compra.
5. **Conteúdo já existente** — blog é base pronta de autoridade/topo de funil.
6. **Redução de devoluções** — checagem de compatibilidade converte dúvida em atendimento e evita compra errada.
7. **Base +700 clientes** — recompra, indicação e prova social (quando autorizada).

---

# ENTREGÁVEL 17 — Informações a confirmar antes da Fase 2

**Produto/técnico**
1. [CONFIRMAR] Lista fechada de **modelos/SKUs** e nomes comerciais.
2. [CONFIRMAR] **Preço oficial por modelo** + política única entre site e marketplace.
3. [CONFIRMAR] **Specs por modelo:** largura interna/externa, peso do par, padrão de eixo (dianteiro/traseiro), freehub (HG/XDR/Campagnolo), nº de raios/raiação, Center Lock/6-furos.
4. [CONFIRMAR] Perfis realmente à venda e quais são Disc vs Rim.
5. [CONFIRMAR] Peso máximo suportado por modelo (125kg é geral?).
6. [CONFIRMAR] Tubeless: "ready" ou de fábrica? Acompanha fita/válvula?

**Comercial/confiança**
7. [CONFIRMAR] Texto oficial da **garantia de 2 anos** (cobre / não cobre / como acionar).
8. [CONFIRMAR] Escopo do **INMETRO 008991/2025** (todos os modelos?).
9. [CONFIRMAR] Existem **avaliações/depoimentos/fotos reais** de clientes utilizáveis?
10. [CONFIRMAR] **Prazo e política de frete** (grátis? por região?).
11. [CONFIRMAR] **5% PIX** e **12x** valem para tudo? Valor mínimo?
12. [CONFIRMAR] Política de **troca/devolução**.

**Operacional/site**
13. [CONFIRMAR] Plataforma atual e destino (dois sistemas?).
14. [CONFIRMAR] **WhatsApp** oficial + horário de atendimento.
15. [CONFIRMAR] Manter **Mercado Livre** em paralelo? (afeta preço/mensagem).
16. [CONFIRMAR] Domínio, e-mails, ERP/estoque, gateway de pagamento/PIX.
17. [CONFIRMAR] Mapeamento **respostas do Guia → modelos** (para o quiz recomendar corretamente).

---

# ENTREGÁVEL 18 — Recomendações para a Fase 2

1. **Fechar os dados** do Entregável 17 (bloqueia wireframe e conteúdo real).
2. **Definir a plataforma/stack** e a decisão sobre marketplace (impacta preço, catálogo e SEO).
3. **Wireframes** (baixa fidelidade, mobile-first) de: Home, Hub RODAS, Categoria, PDP, Guia, Comparador, Compatibilidade.
4. **Direção de arte & Design System** (Fase 2 nomeada pelo cliente): paleta premium, tipografia, componentes (cards, selos, tabelas de spec, botões), tom técnico-esportivo.
5. **Definir taxonomia de atributos** dos produtos (para filtros, guia e comparador funcionarem com os mesmos campos).
6. **Plano de conteúdo/SEO** (títulos, metas, mapa de links internos, migração do blog).
7. **Plano de analytics de funil** (eventos: guia concluído, comparador usado, add-to-cart, clique WhatsApp).

---

## Resumo executivo de posicionamento

Para parecer **marca especializada premium** (e não marketplace): tom técnico + confiável + esportivo; **INMETRO 008991/2025, 2 anos, +700 rodas e suporte Brasil sempre à vista**; preço justo comunicado com clareza (PIX 5% / 12x como facilitadores); **consultoria** (Guia + Comparador + WhatsApp) como diferencial; e **consistência total** de preço, catálogo e mensagem entre todos os canais.

---

*Fase 1 concluída — arquitetura clara, lógica, escalável e orientada à conversão. Nenhum design ou desenvolvimento foi iniciado. Aguardando aprovação para a **Fase 2 — Direção de Arte e Design System**.*
