# Backlog — Camila Conceição Redesign

> Última atualização: 2026-03-01

---

## ✅ Concluídas

- [x] **Setup inicial** — Vite + React + Tailwind + estrutura de componentes
- [x] **Hero.jsx** — Copy de autoridade, estética Quiet Luxury
- [x] **About.jsx** — Trajetória com imagem e hover effect
- [x] **ClinicalServices.jsx** — 3 cards de serviço (incluindo Jornada Arquitetura da Identidade)
- [x] **MentoriaPremium.jsx** — Mentoria Premium + Clareza & Equilíbrio
- [x] **CorporateSection.jsx** — Interface B2B, dark mode
- [x] **FAQ.tsx** — Acordeão com framer-motion
- [x] **ApplicationForm.jsx** — Formspree + WhatsApp fallback + confirmação + preferência de retorno
- [x] **SocialProofItem.jsx** — Depoimentos estratégicos entre seções
- [x] **Header.jsx** — Nav fixa, menu mobile, links âncora corrigidos
- [x] **Footer.jsx** — Link Instagram corrigido
- [x] **SEO básico** — meta tags no index.html
- [x] **SEO avançado** — Title ACT, OG tags, Twitter/X Card, canonical, robots
- [x] **Favicon** — gerado da logo real da Camila (.ico + 512px Apple Touch Icon)
- [x] **OG Image** — imagem 1200×630 clara gerada e publicada
- [x] **Sitemap.xml** — criado e submetido no Google Search Console (6 páginas)
- [x] **Build e deploy** — dist/ versionado no GitHub para hospedagem estática
- [x] **Formspree** — Endpoint `xeeldwgz` configurado
- [x] **Otimização de imagens** — Todas convertidas para WebP (reduções de até 99%)
- [x] **Performance PageSpeed** — Score 67 → 89 (mobile) | SEO: 100 | Práticas: 100
- [x] **CDN Cloudflare** — Nameservers configurados, propagação em andamento

---

## 🔴 P1 — Alta Prioridade

- [x] **Validar deploy na hospedagem** — Site online e funcional em produção ✅ (2026-02-28)
- [x] **Testar formulário em produção** — Formspree funcionando, email chegando em `contato@camilaconceicaopsi.com.br` ✅ (2026-02-28)
- [ ] **Responsividade mobile** — Revisão detalhada em smartphones reais (iOS e Android)

---

## 🟡 P2 — Média Prioridade

- [ ] **Política de Privacidade** — Página dedicada ou modal com conteúdo legal
- [ ] **Termos de Uso** — Idem
- [ ] **Google Analytics / Meta Pixel** — Rastreamento de conversões para o form de aplicação
- [ ] **Otimização de imagens** — Converter imagens JPG/JPEG para WebP para melhor performance
- [ ] **Scroll suave (smooth scroll)** — Adicionar `scroll-behavior: smooth` globalmente

---

## 🟢 P3 — Baixa Prioridade

- [ ] **Animações de entrada** — Fade-in suave nas seções ao fazer scroll (intersection observer)
- [x] **Sitemap.xml e robots.txt** — Para indexação no Google ✅ (2026-03-01)
- [x] **Open Graph tags** — Prévia bonita ao compartilhar o link nas redes sociais ✅ (2026-03-01)
- [ ] **Loading state nas imagens** — Lazy loading com placeholder blur
- [ ] **Verificar score PageSpeed após Cloudflare propagar** — Meta: 90+ mobile
- [ ] **Adicionar preload da hero image no index.html** — Pode reduzir LCP para < 2.5s
