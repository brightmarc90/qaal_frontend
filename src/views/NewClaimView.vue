<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()

const type = ref('')
const date = ref('')
const description = ref('')
const amount = ref<number | null>(null)

const errorMessage = ref('')
const successMessage = ref('')

const submitClaim = () => {
  errorMessage.value = ''
  successMessage.value = ''

  if (!type.value) {
    errorMessage.value = 'Le type de sinistre est obligatoire'
    return
  }

  if (!date.value) {
    errorMessage.value = 'La date du sinistre est obligatoire'
    return
  }

  if (!description.value.trim()) {
    errorMessage.value = 'La description est obligatoire'
    return
  }

  if (description.value.trim().length < 10) {
    errorMessage.value = 'La description doit contenir au moins 10 caractères'
    return
  }

  if (amount.value === null || amount.value < 0) {
    errorMessage.value = 'Le montant estimé doit être supérieur ou égal à 0'
    return
  }

  const claims = JSON.parse(localStorage.getItem('claims') ?? '[]')

  claims.push({
    id: Date.now(),
    type: type.value,
    date: date.value,
    description: description.value,
    amount: amount.value,
    status: 'DECLARE',
  })

  localStorage.setItem('claims', JSON.stringify(claims))

  successMessage.value = 'Votre sinistre a bien été déclaré'
}
</script>

<template>
  <main class="new-claim-page">
    <button class="back-button" type="button" @click="router.push('/dashboard')">
      <span aria-hidden="true">←</span> Retour
    </button>

    <header class="page-heading">
      <p class="eyebrow">Mon espace assuré</p>
      <h1>Déclarer un sinistre</h1>
      <p>Décrivez ce qui s’est passé pour enregistrer votre déclaration.</p>
    </header>

    <form class="claim-form" @submit.prevent="submitClaim">
      <header class="form-heading">
        <h2>Les informations du sinistre</h2>
        <p>Tous les champs sont obligatoires.</p>
      </header>

      <div class="form-fields">
        <div class="field">
          <label for="claim-type">Type de sinistre</label>
          <select id="claim-type" v-model="type">
            <option value="">Sélectionner</option>
            <option value="water">Dégât des eaux</option>
            <option value="glass">Bris de glace</option>
            <option value="theft">Vol</option>
          </select>
        </div>

        <div class="field">
          <label for="claim-date">Date du sinistre</label>
          <input id="claim-date" v-model="date" type="date" />
        </div>

        <div class="field full-width">
          <label for="description">Description</label>
          <textarea
            id="description"
            v-model="description"
            rows="5"
            placeholder="Ex. : une fuite sous l’évier a endommagé le meuble de la cuisine."
            aria-describedby="description-help"
          />
          <p id="description-help" class="field-help">
            Précisez les circonstances et les dommages constatés (10 caractères minimum).
          </p>
        </div>

        <div class="field">
          <label for="amount">Montant estimé</label>
          <div class="amount-input">
            <input
              id="amount"
              v-model.number="amount"
              type="number"
              placeholder="0"
              aria-describedby="amount-help"
            />
            <span aria-hidden="true">€</span>
          </div>
          <p id="amount-help" class="field-help">
            Montant des dommages en euros, supérieur ou égal à 0.
          </p>
        </div>
      </div>

      <div class="form-footer">
        <p v-if="errorMessage" class="message error-message" role="alert">
          {{ errorMessage }}
        </p>
        <p v-if="successMessage" class="message success-message" role="status">
          {{ successMessage }}
        </p>
        <div class="form-actions">
          <button class="submit-button" type="submit">
            Déclarer le sinistre <span aria-hidden="true">→</span>
          </button>
        </div>
      </div>
    </form>
    <p class="page-footer">Espace Assuré · Votre suivi au quotidien</p>
  </main>
</template>

<style scoped>
.new-claim-page {
  max-width: 860px;
  margin: auto;
  padding: 32px 32px 24px;
}

.back-button {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  min-height: 44px;
  margin-bottom: 28px;
  padding: 10px 16px;
  border: 1px solid #cbd7cf;
  border-radius: 8px;
  color: #345b4b;
  background: #fff;
  font-size: 13px;
  font-weight: 600;
}

.back-button:hover {
  background: #edf3ed;
}

.eyebrow {
  margin: 0 0 12px;
  color: #587262;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 1.8px;
  text-transform: uppercase;
}

h1 {
  margin: 0;
  font-size: clamp(28px, 4vw, 40px);
  letter-spacing: -1.4px;
}

.page-heading > p:last-child {
  margin: 12px 0 32px;
  color: #617067;
  line-height: 1.6;
}

.claim-form {
  border: 1px solid #dce5dd;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 8px 24px #203c3405;
}

.form-heading {
  padding: 28px;
  border-bottom: 1px solid #edf0eb;
}

h2 {
  margin: 0;
  font-size: 20px;
}

.form-heading p {
  margin: 8px 0 0;
  color: #617067;
  font-size: 13px;
  line-height: 1.5;
}

.form-fields {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;
  padding: 28px;
}

.field {
  display: flex;
  flex-direction: column;
  gap: 8px;
  min-width: 0;
}

.full-width {
  grid-column: 1 / -1;
}

label {
  font-size: 13px;
  font-weight: 600;
}

input,
select,
textarea {
  width: 100%;
  min-width: 0;
  min-height: 48px;
  padding: 12px 14px;
  border: 1px solid #cbd7cf;
  border-radius: 8px;
  color: #203c34;
  background: #fcfdfb;
  font: inherit;
}

input::placeholder,
textarea::placeholder {
  color: #727e76;
}

select:focus-visible,
textarea:focus-visible {
  outline: 3px solid #458675;
  outline-offset: 4px;
}

textarea {
  resize: vertical;
  min-height: 130px;
  line-height: 1.6;
}

.amount-input {
  position: relative;
}

.amount-input input {
  padding-right: 48px;
}

.amount-input span {
  position: absolute;
  top: 50%;
  right: 28px;
  transform: translateY(-50%);
  color: #617067;
  pointer-events: none;
}

.field-help {
  margin: 0;
  color: #617067;
  font-size: 12px;
  line-height: 1.6;
}

.form-footer {
  padding: 24px 28px;
  border-top: 1px solid #edf0eb;
}

.form-actions {
  display: flex;
  justify-content: flex-end;
}

.submit-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 24px;
  min-height: 48px;
  padding: 12px 20px;
  border: 0;
  border-radius: 8px;
  background: #204c3e;
  color: #fff;
  font-weight: 600;
}

.submit-button:hover {
  background: #153a2e;
  box-shadow: 0 4px 12px #204c3420;
}

.message {
  margin: 0 0 20px;
  padding: 14px 16px;
  border: 1px solid;
  border-radius: 8px;
  font-size: 14px;
  line-height: 1.6;
}

.error-message {
  border-color: #efc8c3;
  background: #fff3f1;
  color: #9a332b;
}

.success-message {
  border-color: #c8ddc7;
  background: #eaf2e7;
  color: #356a46;
}

.page-footer {
  margin: 28px 0 0;
  text-align: center;
  color: #617067;
  font-size: 12px;
}

@media (max-width: 600px) {
  .new-claim-page {
    padding: 24px 16px;
  }

  .form-fields {
    grid-template-columns: minmax(0, 1fr);
    padding: 20px;
  }

  .form-heading,
  .form-footer {
    padding: 20px;
  }

  .submit-button {
    width: 100%;
  }
}
</style>
