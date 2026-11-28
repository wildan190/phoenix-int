<script setup lang="ts">
import { useContent } from '~/composables/useContent'

const { content } = useContent()
</script>

<template>
  <section id="portofolio" class="s portfolio">
    <div class="wrap">
      <div class="head">
        <span class="tag">{{ content.portfolio.tag }}</span>
        <h2>{{ content.portfolio.heading }}</h2>
        <p>{{ content.portfolio.description }}</p>
      </div>

      <div class="projects">
        <article
          v-for="project in content.portfolio.items"
          :key="project.id"
          class="project"
          :class="`project-${project.id}`"
        >
          <div
            class="preview"
            role="img"
            :aria-label="content.portfolio.previewAriaLabel(project.name)"
          >
            <div class="screen">
              <div class="status">
                <span>10:01</span>
                <span class="network">
                  <span>4G+</span>
                  <i aria-hidden="true"></i>
                  <b>13</b>
                </span>
              </div>

              <template v-if="project.id === 'bacco-kanvas'">
                <div class="bacco-content">
                  <div class="bacco-brand">
                    <img :src="project.image" :alt="project.imageAlt" />
                    <strong>BACCO KANVAS</strong>
                    <span>Sistem Distribusi &amp; Penjualan<br />Kanvas Rokok</span>
                  </div>

                  <div class="login-panel">
                    <h3>Masuk Akun</h3>
                    <div class="input-line">
                      <span class="field-icon">@</span>
                      <span>Email</span>
                    </div>
                    <div class="input-line">
                      <span class="field-icon lock" aria-hidden="true"></span>
                      <span>Password</span>
                    </div>
                    <div class="login-button">MASUK</div>
                  </div>
                </div>
              </template>

              <template v-else>
                <div class="udayana-content">
                  <img class="udayana-logo" :src="project.image" :alt="project.imageAlt" />
                  <h3>Belanja harian,<br />lebih sederhana.</h3>
                  <p>Masuk ke Udayana Market untuk kebutuhan sehari-hari.</p>
                  <div class="input-line">
                    <span class="field-icon">@</span>
                    <span>Email</span>
                  </div>
                  <div class="input-line">
                    <span class="field-icon lock" aria-hidden="true"></span>
                    <span>Kata sandi</span>
                  </div>
                  <div class="remember"><i></i>Ingat saya</div>
                  <div class="login-button">Masuk</div>
                  <div class="register">Belum punya akun? Daftar pembeli</div>
                </div>
              </template>

              <div class="home-indicator" aria-hidden="true"></div>
            </div>
          </div>

          <div class="project-info">
            <div class="project-title">
              <span class="project-type">{{ project.category }}</span>
              <h3>{{ project.name }}</h3>
              <p>{{ project.description }}</p>
            </div>
            <span class="project-index" aria-hidden="true">
              {{ project.id === 'bacco-kanvas' ? '01' : '02' }}
            </span>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<style scoped>
.portfolio {
  overflow: hidden;
}

.projects {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: clamp(1rem, 2.5vw, 1.8rem);
}

.project {
  min-width: 0;
  overflow: hidden;
  border: 1px solid var(--line);
  border-radius: 18px;
  background: var(--surface);
  transition: border-color 0.25s ease, transform 0.25s ease, box-shadow 0.25s ease;
}

.project:hover {
  transform: translateY(-4px);
  border-color: color-mix(in srgb, var(--accent) 50%, var(--line));
  box-shadow: 0 22px 48px -34px var(--glow);
}

.preview {
  display: grid;
  place-items: center;
  min-height: 440px;
  padding: 1.5rem;
  overflow: hidden;
  background:
    radial-gradient(ellipse at 50% 94%, var(--glow), transparent 52%),
    var(--surface-2);
}

.project-udayana-store .preview {
  background:
    radial-gradient(ellipse at 50% 94%, rgba(39, 128, 239, 0.15), transparent 52%),
    #f3f7fb;
}

.screen {
  position: relative;
  width: min(100%, 270px);
  min-height: 405px;
  overflow: hidden;
  border: 1px solid rgba(42, 26, 15, 0.1);
  border-radius: 18px;
  background: #fff;
  color: #281c18;
  box-shadow: 0 18px 42px rgba(34, 22, 16, 0.14);
  font-family: var(--font-body);
}

.status {
  display: flex;
  justify-content: space-between;
  padding: 0.7rem 0.9rem 0;
  color: #555;
  font-size: 0.58rem;
  font-weight: 700;
}

.network {
  display: flex;
  align-items: center;
  gap: 0.3rem;
}

.network i {
  width: 11px;
  height: 9px;
  background: repeating-linear-gradient(90deg, #555 0 2px, transparent 2px 4px);
}

.network b {
  font-size: inherit;
}

.bacco-content {
  padding: 1rem 1rem 1.35rem;
  background: #f8f7f2;
  min-height: 380px;
}

.bacco-brand {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.55rem 0 1.05rem;
  text-align: center;
}

.bacco-brand img {
  width: 62px;
  height: 62px;
  margin-bottom: 0.55rem;
  border-radius: 16px;
  object-fit: cover;
  box-shadow: 0 8px 18px rgba(54, 26, 14, 0.18);
}

.bacco-brand strong {
  color: #472c24;
  font-size: 1.04rem;
  letter-spacing: 0.045em;
}

.bacco-brand span {
  margin-top: 0.3rem;
  color: #857b76;
  font-size: 0.68rem;
  line-height: 1.45;
}

.login-panel {
  display: flex;
  flex-direction: column;
  gap: 0.7rem;
  padding: 1rem;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0 5px 15px rgba(40, 28, 24, 0.1);
}

.login-panel h3 {
  margin-bottom: 0.1rem;
  font-family: var(--font-body);
  font-size: 1.08rem;
  letter-spacing: 0;
}

.input-line {
  display: flex;
  align-items: center;
  gap: 0.65rem;
  min-height: 39px;
  padding: 0 0.7rem;
  border: 1px solid #e4e4e4;
  border-radius: 9px;
  color: #777;
  font-size: 0.72rem;
}

.field-icon {
  color: #858585;
  font-size: 1rem;
  font-weight: 700;
}

.field-icon.lock {
  position: relative;
  width: 11px;
  height: 10px;
  margin-inline: 2px;
  border: 1.5px solid currentColor;
  border-radius: 2px;
  font-size: 0;
}

.field-icon.lock::before {
  position: absolute;
  top: -7px;
  left: 1px;
  width: 5px;
  height: 6px;
  border: 1.5px solid currentColor;
  border-bottom: 0;
  border-radius: 5px 5px 0 0;
  content: "";
}

.login-button {
  display: grid;
  place-items: center;
  min-height: 39px;
  margin-top: 0.2rem;
  border-radius: 9px;
  background: #56372f;
  color: #fff;
  font-size: 0.78rem;
  font-weight: 700;
}

.udayana-content {
  padding: 1.05rem 1rem 1.35rem;
  background: #fff;
}

.udayana-logo {
  width: 49px;
  height: 49px;
  margin: 0.6rem 0 1rem;
  object-fit: contain;
}

.udayana-content h3 {
  color: #242424;
  font-family: var(--font-body);
  font-size: 1.3rem;
  letter-spacing: -0.04em;
}

.udayana-content > p {
  margin: 0.45rem 0 0.95rem;
  color: #777;
  font-size: 0.73rem;
  line-height: 1.45;
}

.udayana-content .input-line {
  min-height: 37px;
  margin-top: 0.5rem;
  border-radius: 8px;
}

.remember {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  margin: 0.65rem 0;
  color: #777;
  font-size: 0.62rem;
}

.remember i {
  width: 13px;
  height: 13px;
  border-radius: 4px;
  background: #2780ef;
}

.udayana-content .login-button {
  background: #2780ef;
  text-transform: none;
}

.register {
  margin-top: 0.7rem;
  color: #2780ef;
  text-align: center;
  font-size: 0.62rem;
  font-weight: 700;
}

.home-indicator {
  position: absolute;
  bottom: 6px;
  left: 50%;
  width: 54px;
  height: 3px;
  border-radius: 99px;
  background: rgba(0, 0, 0, 0.22);
  transform: translateX(-50%);
}

.project-info {
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  padding: 1.25rem 1.35rem 1.4rem;
}

.project-title {
  min-width: 0;
}

.project-type {
  display: inline-block;
  margin-bottom: 0.45rem;
  color: var(--accent-ink);
  font-family: var(--font-mono);
  font-size: 0.67rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.project-title h3 {
  font-size: clamp(1.05rem, 2vw, 1.3rem);
}

.project-title p {
  margin-top: 0.4rem;
  color: var(--muted);
  font-size: 0.92rem;
}

.project-index {
  flex: none;
  padding-top: 0.25rem;
  color: var(--muted);
  font-family: var(--font-mono);
  font-size: 0.72rem;
}

@media (max-width: 700px) {
  .projects {
    grid-template-columns: 1fr;
  }

  .preview {
    min-height: 405px;
    padding: 1rem;
  }

  .screen {
    width: min(100%, 270px);
    min-height: 375px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .project {
    transition: none;
  }
}
</style>
