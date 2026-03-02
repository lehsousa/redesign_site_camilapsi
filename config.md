# Config — Camila Conceição Redesign

## Informações do Projeto

| Campo | Valor |
|-------|-------|
| **Stack** | Vite + React + Tailwind CSS |
| **Node** | >= 18 |
| **Repositório** | https://github.com/lehsousa/redesign_site_camilapsi.git |
| **Branch principal** | `master` |
| **Hospedagem** | Estática Manual (upload da pasta `dist/`) |
| **Dev server** | `npm run dev` → `http://localhost:5173` |
| **Build** | `npm run build` → pasta `dist/` |

## Credenciais e Serviços

| Serviço | Detalhe |
|---------|---------|
| **Formspree** | `https://formspree.io/f/xeeldwgz` → envia para `contato@camilaconceicaopsi.com.br` |
| **WhatsApp (fallback)** | `5511958131645` |
| **Instagram** | `https://www.instagram.com/camilaconceicaopsi_/` |
| **LinkedIn** | `https://www.linkedin.com/in/camila-conceição-costa/` |
| **Clareza & Equilíbrio** | `https://clarezaeequilibrio.camilaconceicaopsi.com.br/` |

## Design Tokens (tailwind.config.js)

```
primary:    #A2CEEF  (Azul Brand)
accent:     #DAEEFA  (Azul Claro)
secondary:  #1A1A1A  (Texto Principal)
background: #FFFFFF
surface:    #F9FAFB
muted:      #6B7280
font-sans:  Inter
font-serif: Playfair Display
```

## Estrutura de Componentes

```
src/
├── App.jsx                    ← Orquestrador principal (ordem das seções)
├── components/
│   ├── Header.jsx             ← Nav fixa com links #âncora e menu mobile
│   ├── Hero.jsx               ← id="home"
│   ├── About.jsx              ← id="about"
│   ├── ClinicalServices.jsx   ← id="clinical"
│   ├── MentoriaPremium.jsx    ← id="mentoria" ⚠️ (era "exclusive" — corrigido 2026-02-28)
│   ├── CorporateSection.jsx   ← id="corporate"
│   ├── FAQ.tsx                ← id="faq"
│   ├── ApplicationForm.jsx    ← id="application"
│   ├── SocialProofItem.jsx    ← Componente reutilizável (sem id próprio)
│   ├── Footer.jsx
│   ├── Container.jsx
│   ├── Section.jsx
│   ├── Button.jsx
│   └── Services.jsx
```

## Ponto de Retomada — 2026-03-01

**Última sessão concluída:** SEO completo + Performance + CDN Cloudflare

**Estado atual:**
- ✅ SEO premium: Title, Description, OG Tags, Twitter/X Cards, canonical, robots
- ✅ Favicon gerado da logo da Camila (.ico + 512px)
- ✅ OG image (versão clara 1200×630) publicada
- ✅ sitemap.xml criado e processado pelo Google Search Console (6 páginas)
- ✅ Todas as imagens convertidas para WebP (economia de até 99%)
- ✅ PageSpeed mobile: **89** | SEO: **100** | Melhores Práticas: **100**
- ✅ Cloudflare configurado — nameservers `jill.ns.cloudflare.com` / `rex.ns.cloudflare.com`
- ⏳ Propagação DNS do Cloudflare em andamento (1–24h) — score deve subir para 90+ após propagar

**Próxima prioridade:** Ver backlog.md — verificar score após CDN propagar + P2 restantes

## Notas de Segurança

- Não há credenciais hardcoded críticas no código
- O endpoint do Formspree é público por design (padrão da ferramenta)
- Número do WhatsApp está no código-fonte (aceitável para site público)
