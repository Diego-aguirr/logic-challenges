# Monetization Specification

## Purpose

Integrate Google AdSense ads non-intrusively while preserving UX quality and layout stability.

## Requirements

### Requirement: Ad Placement

The system SHALL render Google AdSense ads in two designated slots: (1) sidebar on desktop, (2) between exercise sections on mobile. Ads MUST use `next/script` with `strategy="lazyOnload"`.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Desktop ad | Screen >= 1024px, sidebar | Page renders | Ad banner in sidebar, doesn't compress content |
| Mobile ad | Screen < 768px | Exercise view | Ad between description and editor sections |
| Ad blocked | User has AdBlock | Page renders | Ad placeholder div remains, no layout shift |

### Requirement: Layout Stability

Ad containers MUST have fixed minimum dimensions before ad loads. No CLS (Cumulative Layout Shift) from ad loading. Ad failure MUST NOT break page layout.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Ad loads | Ad container has min-height | Ad renders | Content below ad doesn't jump |
| Ad fails | AdSense returns empty | Page renders | Placeholder shows "Publicidad" text, no layout change |
| Slow ad | Ad taking > 3s to load | Page renders | Placeholder visible, content stable |

### Requirement: Premium Experience

The system MAY provide an ad-free option for logged-in users. This is a future premium feature — implement as a conditional render flag, not full premium system.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Logged-in user | User authenticated | Page renders | Ads hidden if `adFree` flag is true (default: false) |
| Guest user | Not authenticated | Page renders | Ads always shown |

### Requirement: Ad Content Policy

Ad containers MUST NOT overlap interactive elements. Ads MUST be clearly labeled as "Publicidad". Ad scripts MUST load asynchronously to avoid blocking page render.

| Scenario | Given | When | Then |
|----------|-------|------|------|
| Label visible | Ad renders | Screen reader | "Publicidad" label announced |
| No overlap | Ad renders on mobile | Layout | Ad doesn't cover editor or buttons |
