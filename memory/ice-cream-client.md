---
name: ice-cream-client
description: I.C.E Ice Cream (Tijuana) landing — Mexican Spanish, editorial promos (no catalog), not the AGENTS voseo default
metadata:
  type: project
---

Current client build is **I.C.E Ice Cream**, an ice cream shop in **Tijuana, México**. The landing is **purely promotional**.

**Promo sections (key decision):** the owner rejected the catalog/cards approach for this client ("la sección de promociones no tiene sentido… no vendas ahí"). So the `offerings` catalog is NOT rendered: `offerings.items` is `[]`, the `/oferta/[slug]` detail route was **deleted**, and promotions are two editorial sections that flow into each other:
- `SummerPromo` ("Promo de Verano") — light/neutral section, teaser with a "Próximamente" sticker + Instagram follow link (engagement, not sale).
- `BreakfastPromo` ("Tiempo del Desayuno") — navy block with schedule + bulleted menu (café, hot cakes, waffles, chilaquiles…).
- Section order: `["hero", "summer", "breakfast", "about", "contact"]`. `offerings` stays in `SectionId`/registry (template type requires it) but unused.

**Why Mexican Spanish:** AGENTS.md defaults `es` to Argentine voseo, but this client is Mexican and its own flyers use tuteo ("Ven y visítanos"). Keep all `es` copy in **Mexican Spanish (tuteo)** — do NOT "correct" to voseo.

**Palette:** amarillo 60 / azul marino 30 / rosa 10 (white neutral), from the yellow logo; fonts Baloo 2 + Nunito. Seam devices alternate stacked/wave.

**Still placeholders (pending real values):** WhatsApp/phone, exact address+mapUrl, email, Instagram handle, hours, site URL.

Complements [[landing-standing-corrections]] and [[footer-cards-slugs-standing]] (this client is the documented exception to the catalog/`/oferta` standing rule).
