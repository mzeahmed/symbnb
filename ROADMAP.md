# ROADMAP Symbnb

## Objectif

Passer d'un prototype fonctionnel a une plateforme stable, coherente et deployable (auth, annonces, reservations, avis, paiement, admin).

## Etat actuel (2026-04)

- Parcours de base present: annonces, reservation, avis, auth, pages front Tailwind.
- Dette de coherence elevee (routes legacy vs nouvelles routes, naming heterogene).
- Paiement non integre (service present, pas de controller/webhook Stripe finalise).
- Couverture tests quasi nulle (`tests/` vide hors bootstrap).
- Documentation/outillage partiellement desynchronises (README/Makefile vs stack reelle).

---

## Phase P0 - Stabilisation critique (1-2 semaines)

### 1) Unifier l'auth et les routes (bloquant)

- [ ] Supprimer/retirer le flux legacy `AccountController` (deprecie) ou le migrer completement.
- [ ] Standardiser sur une seule famille de routes: `app_login`, `app_logout`, `app_register`.
- [ ] Corriger les liens Twig encore en `account_*` dans:
    - [ ] `templates/partials/_header.html.twig`
    - [ ] `templates/security/login.html.twig`
    - [ ] `templates/security/register.html.twig`
- [ ] Harmoniser la home route (`app_home` vs usages `homepage`).

### 2) Corriger les incoherences modeles/services

- [ ] Mettre a jour `src/User/Service/UserService.php` (utilise encore `getHash/setHash`, obsolete).
- [ ] Corriger les redirections typo de routes (ex: `ad_show` vs `ads_show` dans booking).
- [ ] Verifier tous les templates avec anciennes proprietes (`picture/introduction` -> `avatar/bio`).

### 3) Stabiliser la base de donnees

- [ ] Appliquer et verifier les migrations recentes (suppression `Role`, nettoyage schema).
- [ ] Verifier unicite des slugs (User/Ad/Category/Amenity) avec tests de collision.

### Critere de sortie P0

- [ ] `doctrine:schema:validate` OK.
- [ ] Plus aucune route inexistante appelee par les templates.
- [ ] Parcours inscription -> login -> booking -> avis sans erreur runtime.

---

## Phase P1 - Fiabilite fonctionnelle (2-4 semaines)

### 1) Booking & review

- [ ] Finaliser le workflow booking:
    - [ ] etats (pending/confirmed/completed/cancelled), transitions strictes.
    - [ ] affichage coherent du statut dans les pages compte et detail booking.
- [ ] Aligner `templates/account/bookings.html.twig` avec le nouveau modele `Booking.review`.
- [ ] Ajouter validation metier complementaire (dates, overlap, capacite max).

### 2) Home & catalogue

- [ ] Remplacer les placeholders restants (`ad.rating ?? '4.9'`) par une vraie metrique (AVG commentaires).
- [ ] Filtrage categories/ville/prix via query params + pagination propre.
- [ ] Rechercher/filtrer depuis la barre hero (actuellement UI only).

### 3) Back-office minimum

- [ ] Verrouiller acces admin (`access_control` dans `security.yaml`).
- [ ] Dashboard admin minimal: KPIs + moderation annonces/avis/utilisateurs.

### Critere de sortie P1

- [ ] UX principale exploitable sans fallback fake data.
- [ ] Tous les statuts booking lisibles et coherents dans l'UI.

---

## Phase P2 - Paiement & monetaire (3-5 semaines)

### 1) Stripe end-to-end

- [ ] Integrer Stripe dans `PaymentService` (PaymentIntent + client secret).
- [ ] Ajouter controllers:
    - [ ] endpoint d'initiation paiement
    - [ ] webhook Stripe (success/failure) idempotent
- [ ] Traiter remboursement/expiration via commandes ou scheduler.

### 2) Securite des flux paiement

- [ ] Signature webhook Stripe verifiee.
- [ ] Journalisation des events critiques (payment/refund/fail).
- [ ] Reconciliation simple booking <-> payment.

### Critere de sortie P2

- [ ] Paiement reel de reservation fonctionnel en environnement sandbox.
- [ ] Webhooks resilients aux retries.

---

## Phase P3 - Produit & croissance (continu)

### 1) Devenir hote

- [ ] Implementer `host_request` (formulaire, validation, statut de demande).
- [ ] Workflow d'approbation admin + notification utilisateur.

### 2) Qualite front

- [ ] Accessibilite: labels associes, focus states, contraste.
- [ ] Responsive polish (sections home, cards, formulaires auth).
- [ ] Uniformiser styles Tailwind + tokens (eviter config inline)

### 3) SEO / contenu

- [ ] Metas dynamiques, OpenGraph, sitemap, robots coherent.
- [ ] Pages categories indexables.

---

## Qualite transversale (a lancer des maintenant)

### Tests

- [ ] Ajouter une base de tests:
    - [ ] unitaires services (`ReviewService`, `PricingService`, `PaymentService`).
    - [ ] fonctionnels routes critiques (auth, booking, review).
- [ ] Cible minimale: smoke tests des parcours critiques + CI verte.

### Observabilite

- [ ] Logs structures pour erreurs metier (booking conflit, paiement fail, slug collision).
- [ ] Alerting basique sur exceptions critiques.

### Documentation & DX

- [ ] Aligner `README.md` et `makefile` avec la stack actuelle (MySQL/phpMyAdmin, routes actives).
- [ ] Ajouter un `CONTRIBUTING.md` court (lint, tests, migrations, fixtures).

---

## Priorisation

1. **P0**: coherence routes + services + schema (bloquant prod).
2. **P1**: robustesse booking/review + home data reelle.
3. **P2**: paiement Stripe bout-en-bout.
4. **P3**: host request, SEO, polish UX.

## Definition of Done (globale)

- Aucun warning/erreur runtime sur parcours user principal.
- Tests critiques automatises en CI.
- Documentation a jour et executable en local en moins de 15 min.

