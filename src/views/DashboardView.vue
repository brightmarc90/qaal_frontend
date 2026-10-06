<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('authenticated')
  router.push('/login')
}
</script>

<template>
  <main>
    <h1>Bonjour Marc</h1>

    <h2>Mes sinistres</h2>

    <ul>
      <li>#1023 — Dégât des eaux — EN TRAITEMENT</li>

      <li>#1024 — Bris de glace — CLOS</li>
    </ul>

    <button @click="logout">Se déconnecter</button>
  </main>
</template>
