<script setup>
defineProps({
  formSent: Boolean,
  form: Object,
})

defineEmits(['send'])
</script>

<template>
  <section id="contact" class="section" style="background:var(--bg);position:relative;overflow:hidden;">
    <div class="blob" style="width:600px;height:600px;background:rgba(56,189,248,.07);bottom:-200px;left:-100px;"></div>
    <div style="max-width:1200px;margin:0 auto;padding:0 24px;position:relative;z-index:1;">
      <div class="contact-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:start;">

        <!-- Left: Info -->
        <div class="reveal">
          <h2 style="font-size:clamp(28px,4vw,48px);font-weight:800;margin-bottom:16px;">
            Let's <span class="text-gradient">Connect</span>
          </h2>
          <p style="font-size:17px;color:var(--muted);line-height:1.8;margin-bottom:40px;">
            Based in Dubai, open to discussing new opportunities, high-traffic system architecture, or full-stack innovations.
          </p>

          <div style="display:flex;flex-direction:column;gap:24px;margin-bottom:40px;">
            <!-- Email -->
            <a href="mailto:younes.keraressi@gmail.com" style="display:flex;align-items:center;gap:16px;text-decoration:none;color:inherit;">
              <div class="contact-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"/>
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                </svg>
              </div>
              <div>
                <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">Email</div>
                <div style="font-size:15px;font-weight:500;">younes.keraressi@gmail.com</div>
              </div>
            </a>

            <!-- Phone -->
            <a href="tel:+971585233966" style="display:flex;align-items:center;gap:16px;text-decoration:none;color:inherit;">
              <div class="contact-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"/>
                </svg>
              </div>
              <div>
                <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">Phone</div>
                <div style="font-size:15px;font-weight:500;">+971 585 233 966</div>
              </div>
            </a>

            <!-- Location -->
            <div style="display:flex;align-items:center;gap:16px;">
              <div class="contact-icon">
                <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                  <path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <div>
                <div style="font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:3px;">Location</div>
                <div style="font-size:15px;font-weight:500;">Dubai, UAE</div>
              </div>
            </div>
          </div>

          <!-- Social links -->
          <div style="display:flex;gap:12px;">
            <a
              href="https://www.linkedin.com/in/younes.keraressi"
              target="_blank"
              class="social-btn"
              style="padding:14px;border-radius:12px;background:var(--surface);border:1px solid var(--border);color:var(--text);transition:all .2s;display:flex;"
              @mouseover="e => { e.currentTarget.style.borderColor='var(--primary)'; e.currentTarget.style.color='var(--primary)' }"
              @mouseout="e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text)' }"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/>
                <rect width="4" height="12" x="2" y="9"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
            <a
              href="https://bit.ly/369ysk"
              target="_blank"
              class="social-btn"
              style="padding:14px;border-radius:12px;background:var(--surface);border:1px solid var(--border);color:var(--text);transition:all .2s;display:flex;"
              @mouseover="e => { e.currentTarget.style.borderColor='var(--primary)'; e.currentTarget.style.color='var(--primary)' }"
              @mouseout="e => { e.currentTarget.style.borderColor='var(--border)'; e.currentTarget.style.color='var(--text)' }"
            >
              <svg width="22" height="22" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M15 3h6v6"/>
                <path d="M10 14 21 3"/>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Right: Form -->
        <!-- <div class="reveal delay-2" style="background:var(--surface);border:1px solid var(--border);border-radius:24px;padding:40px;">
          <h3 style="font-size:22px;font-weight:700;margin-bottom:28px;">Send a Message</h3>
          <div style="display:flex;flex-direction:column;gap:20px;">
            <div>
              <label style="display:block;font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;">Name</label>
              <input v-model="form.name" class="form-input" type="text" placeholder="Your full name" />
            </div>
            <div>
              <label style="display:block;font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;">Email</label>
              <input v-model="form.email" class="form-input" type="email" placeholder="name@example.com" />
            </div>
            <div>
              <label style="display:block;font-size:11px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;">Message</label>
              <textarea v-model="form.message" class="form-input" rows="5" placeholder="Tell me about your project..." style="resize:none;"></textarea>
            </div>
            <button class="btn-primary" style="width:100%;justify-content:center;" @click="$emit('send')">
              <span v-if="!formSent">Send Message</span>
              <span v-else>✓ Message Sent!</span>
              <svg v-if="!formSent" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"/>
                <path d="m21.854 2.147-10.94 10.939"/>
              </svg>
            </button>
          </div>
        </div> -->

      </div>
    </div>
  </section>
</template>
