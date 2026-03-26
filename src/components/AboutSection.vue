<script setup>
defineProps({
  aboutFeatures: Array,
})
</script>

<template>
  <section
    id="about"
    class="section reveal"
    style="background:var(--surface);border-top:1px solid var(--border);border-bottom:1px solid var(--border);"
  >
    <div style="max-width:1200px;margin:0 auto;padding:0 24px;">
      <div class="about-grid" style="display:grid;grid-template-columns:1fr 1fr;gap:80px;align-items:center;">

        <div class="reveal">
          <h2 style="font-size:clamp(28px,4vw,48px);font-weight:800;margin-bottom:20px;">
            Professional <span class="text-gradient">Philosophy</span>
          </h2>
          <p style="font-size:17px;line-height:1.8;color:var(--muted);margin-bottom:32px;">
            Senior Full-Stack Developer with over 10 years of experience architecting high-traffic platforms for government and enterprise sectors. Focused on performance, security, and exceptional user experiences.
          </p>

          <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;margin-bottom:32px;">
            <div
              v-for="feat in aboutFeatures"
              :key="feat.title"
              class="reveal"
              style="display:flex;gap:14px;padding:16px;border-radius:14px;background:rgba(255,255,255,.03);border:1px solid var(--border);"
            >
              <div
                style="width:40px;height:40px;border-radius:10px;background:var(--primary-dim);display:flex;align-items:center;justify-content:center;flex-shrink:0;"
                v-html="feat.icon"
              ></div>
              <div>
                <div style="font-weight:600;font-size:14px;margin-bottom:4px;">{{ feat.title }}</div>
                <div style="font-size:13px;color:var(--muted);">{{ feat.desc }}</div>
              </div>
            </div>
          </div>

          <div style="display:flex;gap:16px;">
            <div class="stat-card reveal" style="flex:1;">
              <div style="font-size:40px;font-weight:800;font-family:'Visby CF','DM Sans',sans-serif;" class="text-gradient">10+</div>
              <div style="font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-top:4px;">Years Exp</div>
            </div>
            <div class="stat-card reveal delay-1" style="flex:1;">
              <div style="font-size:40px;font-weight:800;font-family:'Visby CF','DM Sans',sans-serif;" class="text-gradient">20+</div>
              <div style="font-size:12px;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-top:4px;">Projects</div>
            </div>
          </div>
        </div>

        <!-- Award card -->
        <div class="reveal delay-2" style="position:relative;">
          <div style="position:absolute;inset:-20px;background:radial-gradient(circle,rgba(56,189,248,.12) 0%,transparent 70%);border-radius:50%;pointer-events:none;"></div>
          <div style="position:relative;background:var(--surface2);border:1px solid rgba(56,189,248,.2);border-radius:28px;padding:56px 40px;text-align:center;">
            <div class="award-glow"></div>
            <div class="animate-float" style="font-size:72px;margin-bottom:20px;">🏆</div>
            <h3 style="font-size:28px;font-weight:800;margin-bottom:10px;">Algerian Web Award</h3>
            <div style="display:inline-block;padding:6px 20px;border-radius:100px;background:var(--primary-dim);color:var(--primary);font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;margin-bottom:16px;">Winner 2018</div>
            <p style="color:var(--muted);font-size:15px;line-height:1.7;">Recognized for excellence in User Experience and Accessibility at a national level.</p>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
