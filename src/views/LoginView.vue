<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const email = ref('')
const password = ref('')
const errorMessage = ref('')

const login = () => {
  errorMessage.value = ''

  if (!email.value || !password.value) {
    errorMessage.value = 'Email et mot de passe obligatoires'
    return
  }

  if (email.value === 'marc@test.fr' && password.value === 'Password123!') {
    localStorage.setItem('authenticated', 'true')
    router.push('/dashboard')
    return
  }

  errorMessage.value = 'Identifiants incorrects'
}
</script>

<template>
  <main class="login-page">
    <div class="login-card">
      <section class="welcome-panel" aria-label="Bienvenue">
        <div class="brand"><span class="brand-mark" aria-hidden="true">a.</span> espace assuré</div>
        <div class="welcome-copy">
          <p class="eyebrow">À vos côtés, au quotidien</p>
          <h2>Votre assurance.<br />En toute simplicité.</h2>
          <p>Retrouvez vos sinistres et suivez leur traitement depuis votre espace personnel.</p>
        </div>
        <p class="welcome-footer">
          <span aria-hidden="true">✓</span> Un seul espace pour garder le fil.
        </p>
      </section>

      <form class="login-form" @submit.prevent="login">
        <header>
          <p class="eyebrow">Heureux de vous retrouver</p>
          <h1>Espace Assuré</h1>
          <p class="form-description">Connectez-vous pour accéder à votre tableau de bord.</p>
        </header>

        <div class="field">
          <label for="email">Email</label>
          <input
            id="email"
            v-model="email"
            type="email"
            name="email"
            autocomplete="username"
            placeholder="vous@exemple.fr"
          />
        </div>

        <div class="field">
          <label for="password">Mot de passe</label>
          <input
            id="password"
            v-model="password"
            type="password"
            name="password"
            autocomplete="current-password"
            placeholder="Votre mot de passe"
          />
        </div>

        <p v-if="errorMessage" class="error-message" role="alert">
          {{ errorMessage }}
        </p>

        <button type="submit">Se connecter <span aria-hidden="true">→</span></button>
        <p class="form-footer">Votre espace personnel, à portée de main.</p>
      </form>
    </div>
  </main>
</template>

<style scoped>
.login-page {
  min-height: 100vh;
  min-height: 100dvh;
  display: grid;
  place-items: center;
  padding: 40px 24px;
  background: radial-gradient(ellipse at top left, #e4eee5, transparent 60%), #f5f7f3;
}

.login-card {
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: min(100%, 1000px);
  overflow: hidden;
  border: 1px solid #dce5dd;
  border-radius: 24px;
  background: #fff;
  box-shadow: 0 20px 70px #203c3410;
}

.welcome-panel {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 64px;
  padding: 44px;
  color: #fff;
  background: #204c3e;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 600;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border: 1px solid #a5c6b5;
  border-radius: 12px;
  font-size: 26px;
}

.eyebrow {
  margin: 0 0 14px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
}

.welcome-copy .eyebrow {
  color: #c8dfbd;
}

.welcome-copy h2 {
  margin: 0 0 22px;
  font-size: clamp(28px, 3.5vw, 40px);
  font-weight: 500;
  line-height: 1.2;
  letter-spacing: -1.3px;
}

.welcome-copy > p:last-child,
.welcome-footer {
  color: #d4e3db;
  font-size: 14px;
  line-height: 1.8;
}

.welcome-footer {
  margin: 0;
  font-size: 12px;
}

.welcome-footer span {
  margin-right: 8px;
}

.login-form {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 24px;
  min-width: 0;
  padding: 60px 48px;
}

.login-form .eyebrow {
  color: #587262;
}

h1 {
  margin: 0;
  font-size: 32px;
  letter-spacing: -1px;
}

.form-description {
  margin: 12px 0 8px;
  color: #617067;
  font-size: 14px;
  line-height: 1.6;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

label {
  font-size: 13px;
  font-weight: 600;
}

input {
  width: 100%;
  min-height: 48px;
  padding: 12px 14px;
  border: 1px solid #cbd7cf;
  border-radius: 8px;
  color: #203c34;
  background: #fcfdfb;
}

input::placeholder {
  color: #727e76;
}

button {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: 48px;
  padding: 12px 18px;
  border: 0;
  border-radius: 8px;
  background: #204c3e;
  color: #fff;
  font-weight: 600;
}

button:hover {
  background: #153a2e;
  box-shadow: 0 4px 12px #204c3420;
}

.error-message {
  margin: 0;
  padding: 12px;
  border: 1px solid #efc8c3;
  border-radius: 8px;
  background: #fff3f1;
  color: #9a332b;
  font-size: 14px;
}

.form-footer {
  margin: 0;
  text-align: center;
  color: #617067;
  font-size: 12px;
}

@media (max-width: 700px) {
  .login-page {
    padding: 20px 16px;
  }

  .login-card {
    grid-template-columns: 1fr;
    max-width: 460px;
  }

  .welcome-panel {
    padding: 28px;
    gap: 28px;
  }

  .welcome-footer {
    display: none;
  }

  .welcome-copy > p:last-child {
    margin-bottom: 0;
  }

  .login-form {
    padding: 32px 28px;
  }
}
</style>
