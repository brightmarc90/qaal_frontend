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
    <form class="login-form" @submit.prevent="login">
      <h1>Espace Assuré</h1>

      <div>
        <label for="email">Email</label>

        <input id="email" v-model="email" type="email" name="email" />
      </div>

      <div>
        <label for="password">Mot de passe</label>

        <input id="password" v-model="password" type="password" name="password" />
      </div>

      <p v-if="errorMessage" role="alert">
        {{ errorMessage }}
      </p>

      <button type="submit">Se connecter</button>
    </form>
  </main>
</template>

<style scoped>
.login-page {
  display: flex;
  justify-content: center;
  padding-top: 100px;
}

.login-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 320px;
}

.login-form div {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

input {
  padding: 8px;
}

button {
  padding: 10px;
}
</style>
