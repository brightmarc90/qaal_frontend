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
