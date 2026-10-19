<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const logout = () => {
  localStorage.removeItem('authenticated')
  router.push('/login')
}
</script>

<template>
  <div class="dashboard-page">
    <header class="topbar">
      <div class="topbar-content">
        <div class="brand"><span class="brand-mark" aria-hidden="true">a.</span> Espace Assuré</div>
        <button class="logout-button" @click="logout">Se déconnecter</button>
      </div>
    </header>

    <main class="dashboard-content">
      <header class="page-heading">
        <p class="eyebrow">Mon tableau de bord</p>
        <h1>Bonjour Marc</h1>
        <p>Retrouvez ici vos sinistres et leur état d’avancement.</p>
      </header>

      <div class="summary" aria-label="Résumé des sinistres">
        <div class="summary-card">
          <span class="summary-icon pending-icon" aria-hidden="true">◷</span>
          <div>
            <p>En traitement</p>
            <strong>01</strong>
          </div>
        </div>
        <div class="summary-card">
          <span class="summary-icon closed-icon" aria-hidden="true">✓</span>
          <div>
            <p>Sinistre clos</p>
            <strong>01</strong>
          </div>
        </div>
      </div>

      <section class="claims-panel" aria-labelledby="claims-title">
        <header class="section-heading">
          <div>
            <h2 id="claims-title">Mes sinistres</h2>
            <p>Le suivi de vos déclarations, en un coup d’œil.</p>
          </div>
          <span class="count">2 dossiers</span>
        </header>

        <ul class="claims-list">
          <li class="claim-row">
            <span class="claim-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                <path d="M12 3s-6 7-6 11a6 6 0 0 0 12 0c0-4-6-11-6-11Z" />
                <path d="M9 14a3 3 0 0 0 3 3" stroke-linecap="round" />
              </svg>
            </span>
            <div class="claim-details">
              <span class="claim-id">#1023</span>
              <h3>Dégât des eaux</h3>
            </div>
            <span class="status pending"><span aria-hidden="true">●</span> EN TRAITEMENT</span>
          </li>
          <li class="claim-row">
            <span class="claim-icon" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6">
                <rect x="5" y="3" width="14" height="18" rx="2" />
                <path d="m13 3-3 7 5 3-4 8M5 12h5m5 1 4-3" stroke-linejoin="round" />
              </svg>
            </span>
            <div class="claim-details">
              <span class="claim-id">#1024</span>
              <h3>Bris de glace</h3>
            </div>
            <span class="status closed"><span aria-hidden="true">✓</span> CLOS</span>
          </li>
        </ul>
      </section>
      <footer class="page-footer">Espace Assuré · Votre suivi au quotidien</footer>
    </main>
  </div>
</template>

<style scoped>
.dashboard-page {
  min-height: 100vh;
  min-height: 100dvh;
}

.topbar {
  background: #fff;
  border-bottom: 1px solid #dce5dd;
}

.topbar-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  max-width: 1120px;
  margin: auto;
  padding: 20px 32px;
}

.brand {
  display: flex;
  align-items: center;
  gap: 12px;
  font-weight: 650;
}

.brand-mark {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: 12px;
  color: #fff;
  background: #204c3e;
  font-size: 26px;
}

.logout-button {
  min-height: 44px;
  padding: 10px 16px;
  border: 1px solid #cbd7cf;
  border-radius: 8px;
  color: #345b4b;
  background: #fff;
  font-size: 13px;
  font-weight: 600;
}

.logout-button:hover {
  background: #edf3ed;
}

.dashboard-content {
  max-width: 1120px;
  margin: auto;
  padding: 54px 32px 24px;
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
  font-size: clamp(30px, 4vw, 40px);
  letter-spacing: -1.4px;
}

.page-heading > p:last-child {
  margin: 12px 0 32px;
  color: #617067;
  line-height: 1.6;
}

.summary {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  margin-bottom: 32px;
}

.summary-card {
  display: flex;
  align-items: center;
  gap: 20px;
  padding: 24px;
  background: #fff;
  border: 1px solid #dce5dd;
  border-radius: 14px;
}

.summary-icon {
  display: grid;
  place-items: center;
  width: 52px;
  height: 52px;
  flex-shrink: 0;
  border-radius: 50%;
  font-size: 26px;
}

.pending-icon {
  background: #fff4db;
  color: #856016;
}

.closed-icon {
  background: #eaf2e7;
  color: #356a46;
}

.summary-card p {
  margin: 0 0 4px;
  color: #617067;
  font-size: 13px;
}

.summary-card strong {
  font-size: 30px;
  font-weight: 600;
  font-variant-numeric: tabular-nums;
}

.claims-panel {
  overflow: hidden;
  border: 1px solid #dce5dd;
  border-radius: 14px;
  background: #fff;
  box-shadow: 0 8px 24px #203c3405;
}

.section-heading {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 28px;
}

h2 {
  margin: 0;
  font-size: 20px;
}

.section-heading p {
  margin: 8px 0 0;
  color: #617067;
  font-size: 13px;
  line-height: 1.5;
}

.count {
  flex-shrink: 0;
  padding: 6px 10px;
  border-radius: 6px;
  background: #f0f4ee;
  color: #52674f;
  font-size: 12px;
}

.claims-list {
  margin: 0;
  padding: 0;
  list-style: none;
}

.claim-row {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 24px 28px;
  border-top: 1px solid #edf0eb;
}

.claim-icon {
  display: grid;
  place-items: center;
  width: 46px;
  height: 46px;
  flex-shrink: 0;
  border-radius: 12px;
  background: #f1f5f1;
  color: #507260;
}

.claim-icon svg {
  width: 24px;
  height: 24px;
}

.claim-details {
  flex: 1;
}

.claim-id {
  color: #617067;
  font-size: 12px;
}

h3 {
  margin: 5px 0 0;
  font-size: 15px;
  font-weight: 600;
}

.status {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 7px 10px;
  border-radius: 6px;
  font-size: 10px;
  font-weight: 700;
  letter-spacing: 0.4px;
}

.pending {
  color: #805b10;
  background: #fff4db;
}

.closed {
  color: #356a46;
  background: #eaf2e7;
}

.page-footer {
  padding-top: 32px;
  text-align: center;
  color: #617067;
  font-size: 12px;
}

@media (max-width: 600px) {
  .topbar-content {
    padding: 16px;
    gap: 12px;
  }

  .brand {
    gap: 8px;
    font-size: 13px;
  }

  .brand-mark {
    width: 32px;
    height: 32px;
  }

  .logout-button {
    padding: 8px;
    font-size: 12px;
  }

  .dashboard-content {
    padding: 32px 16px 24px;
  }

  .summary {
    gap: 12px;
  }

  .summary-card {
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
    padding: 16px;
  }

  .section-heading {
    align-items: flex-start;
    flex-direction: column;
    padding: 20px;
  }

  .claim-row {
    display: grid;
    grid-template-columns: 46px 1fr;
    gap: 12px;
    padding: 20px;
  }

  .status {
    grid-column: 2;
    justify-self: start;
  }
}
</style>
