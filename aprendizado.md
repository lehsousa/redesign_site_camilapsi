# Aprendizados — Camila Conceição Redesign

---

## 📅 2026-03-01 — SEO, Performance e CDN

### WebP vs JPG: conversão com sharp
- `sharp` (Node.js) converte JPGs de 6MB para WebPs de 48KB (-99%) sem perda de qualidade perceptível
- Usar `quality: 82` para fotos, `quality: 90` para logos/gráficos
- Roda como script ESM com `node scripts/convert-images.mjs`

### fetchpriority="high" para LCP
- A imagem do Hero é o LCP (Largest Contentful Paint) — adicionar `fetchpriority="high"` instrui o browser a baixá-la antes de outros recursos
- Combinado com WebP, o LCP caiu de 5.3s para 3.1s

### loading="lazy" não serve para Hero
- `loading="lazy"` deve ser usado APENAS em imagens abaixo do fold (seções que não aparecem na tela inicial)
- Nunca usar `loading="lazy"` na imagem principal do Hero — isso atrasa propositalmente o LCP

### width e height em `<img>` evitam CLS
- Sem `width` e `height` explícitos, o browser não sabe o tamanho da imagem antes de carregá-la → gera Cumulative Layout Shift (CLS)
- Basta colocar as dimensões reais da imagem original — CSS controla o tamanho visual

### Migração DNS para Cloudflare com email preservado
- MX, SPF, DKIM, DMARC → sempre **DNS only** (nuvem cinza) no Cloudflare
- Autoconfig e autodiscover → **DNS only** também
- A e AAAA do site → **Proxied** (nuvem laranja)
- Cloudflare importa automaticamente os registros mas **pode deixar DKIM como Proxied** — verificar sempre

### Domínio .com.br via Hostinger (HSTDOMAINS)
- Se o domínio .com.br foi registrado pela Hostinger, o Registro.br mostra "Provedor: HSTDOMAINS" e não permite editar DNS diretamente
- Nameservers devem ser trocados no painel da **Hostinger** → Domínios → Nameservers
- Subdomínios específicos (ex: `clarezaeequilibrio`) podem não ser importados automaticamente pelo Cloudflare — verificar e adicionar manualmente

### Google Search Console — sitemap.xml
- O sitemap precisa ser um arquivo físico acessível via URL — não pode ser só uma referência no HTML
- Deve estar em `/sitemap.xml` na raiz do servidor
- Para single-page app, incluir URLs com âncoras (`/#about`) junto com a raiz

---

## 🔴 Anti-padrões Identificados e Corrigidos

### 1. ID de seção divergente do link de navegação
**Problema:** `MentoriaPremium.jsx` tinha `id="exclusive"` mas o menu apontava `href="#mentoria"`.
**Causa:** Componente criado com ID diferente do planejado no Header, sem validação cruzada.
**Solução:** Corrigido para `id="mentoria"`.
**Prevenção futura:** Ao criar um novo componente-seção, sempre verificar imediatamente se o `id` da `<section>` corresponde ao `href` no Header e no Footer.

### 2. Link do Instagram sem underscore
**Problema:** Footer tinha `camilaconceicaopsi/` (sem `_`), Header tinha correto com `_`.
**Causa:** Handle copiado em momentos diferentes, inconsistência entre componentes.
**Prevenção futura:** Centralizar URLs e dados de contato em um arquivo de configuração global (ex: `src/constants/social.js`) e importar nos componentes.

### 3. Tag extra quebrando JSX
**Problema:** Ao adicionar blocos JSX condicionais dentro de um `div.space-y-8`, um `</div>` extra foi inserido gerando erros de lint em cadeia.
**Causa:** Edição parcial de bloco grande com replace, sem ver o contexto completo de fechamento.
**Solução:** Verificar sempre as linhas de fechamento (`</div>`, `</>`) antes e depois da inserção.
**Prevenção futura:** Usar `view_file` na região de edição antes de fazer replace em blocos JSX grandes.

---

## ✅ Boas Práticas Consolidadas

### Formspree com Fallback WhatsApp
"Para projetos sem backend, Formspree é ideal para envio de email. Sempre implementar um fallback para WhatsApp — o lead nunca deve ser perdido por falha de serviço externo."

### Section Transform > Modal para Confirmação de Form
"Em sites High Ticket com estética editorial, modals rompem a experiência. Substituir o conteúdo da seção (section transform) com fade-in é mais elegante e mantém a coerência visual."

### Campos Condicionais para UX Premium
"Em vez de pedir email E telefone, perguntar a preferência e mostrar apenas o campo relevante. Reduz fricção e demonstra atenção ao detalhe — alinhado ao posicionamento de alto valor."

### .gitignore e Hospedagem Estática
"Para hospedagem estática manual (sem CI/CD), remover `dist` do `.gitignore` e versionar o build é a abordagem mais simples. Para hospedagens com CI/CD (Vercel, Netlify), manter `dist` ignorado e deixar o pipeline fazer o build."

---

## 💡 Observações de Design (Quiet Luxury)

- Botões de seleção (`E-mail` / `WhatsApp`) devem usar a cor `primary` ao selecionado, `border-gray-200` ao idle — consistente com o padrão do site
- Confirmações e feedback devem usar `font-serif italic` para transmitir elegância e personalidade da Camila
- Manter `tracking-widest` e `uppercase` em labels — é parte da assinatura visual do projeto
- Ornamentos tipográficos (`✦`, linhas `h-px`) criam separação elegante sem usar elementos pesados
