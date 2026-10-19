# Cahier de recette

## Fonctionnalité : Authentification

### TC-AUTH-001 — Connexion valide

Préconditions :

- L'utilisateur possède un compte valide.

Données :

- Email : <marc@test.fr>
- Mot de passe : Password123!

Étapes :

1. Ouvrir la page de connexion.
2. Saisir l'email.
3. Saisir le mot de passe.
4. Cliquer sur "Se connecter".

Résultat attendu :

- L'utilisateur est redirigé vers `/dashboard`.
- Le texte "Bonjour Marc" est affiché.

---

### TC-AUTH-002 — Identifiants incorrects

Étapes :

1. Ouvrir la page de connexion.
2. Saisir `marc@test.fr`.
3. Saisir un mot de passe incorrect.
4. Cliquer sur "Se connecter".

Résultat attendu :

- L'utilisateur reste sur `/login`.
- Le message "Identifiants incorrects" est affiché.

---

### TC-AUTH-003 — Accès non authentifié

Étapes :

1. Ne pas être authentifié.
2. Accéder directement à `/dashboard`.

Résultat attendu :

- L'utilisateur est redirigé vers `/login`.

Étapes :

1. Ne pas être authentifié.
2. Accéder directement à `/dashboard`.

Résultat attendu :

- L'utilisateur est redirigé vers `/login`.

## Fonctionnalité : Déclaration de sinistre

### TC-CLAIM-001 — Déclaration valide

Préconditions :
- L'utilisateur est authentifié.

Données :
- Type : Dégât des eaux
- Date : 2026-10-01
- Description : Fuite d'eau dans la cuisine
- Montant estimé : 450

Résultat attendu :
- La déclaration est enregistrée.
- Le message "Votre sinistre a bien été déclaré" est affiché.

---

### TC-CLAIM-002 — Type obligatoire

Préconditions :
- L'utilisateur est authentifié.

Données :
- Type : vide
- Date : 2026-10-01
- Description : Fuite d'eau dans la cuisine
- Montant : 450

Résultat attendu :
- La déclaration est refusée.
- Le message "Le type de sinistre est obligatoire" est affiché.

---

### TC-CLAIM-003 — Date obligatoire

Résultat attendu :
- La déclaration est refusée.
- Le message "La date du sinistre est obligatoire" est affiché.

---

### TC-CLAIM-004 — Description trop courte

Données :
- Description : "Fuite"

Résultat attendu :
- La déclaration est refusée.
- Le message "La description doit contenir au moins 10 caractères" est affiché.

---

### TC-CLAIM-005 — Montant négatif

Données :
- Montant : -100

Résultat attendu :
- La déclaration est refusée.
- Le message "Le montant estimé doit être supérieur ou égal à 0" est affiché.