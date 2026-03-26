<script setup>
defineProps({
  skillCategories: Array,
  marquee: Array,
})
</script>

<template>
  <!-- ─── SKILLS ─── -->
  <section id="skills" class="section" style="background:var(--bg);">
    <div style="max-width:1200px;margin:0 auto;padding:0 24px;">
      <div style="text-align:center;margin-bottom:64px;" class="reveal">
        <h2 style="font-size:clamp(28px,4vw,48px);font-weight:800;margin-bottom:12px;">
          Core Technical <span class="text-gradient">Skills</span>
        </h2>
        <p style="color:var(--muted);max-width:500px;margin:0 auto;">A comprehensive stack built over a decade of professional software engineering.</p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;">
        <div
          v-for="(cat, i) in skillCategories"
          :key="cat.name"
          :class="['reveal', `delay-${i}`]"
          style="background:var(--surface);border:1px solid var(--border);border-radius:20px;padding:28px;transition:border-color .3s;"
          @mouseover="e => e.currentTarget.style.borderColor = 'var(--primary)'"
          @mouseout="e => e.currentTarget.style.borderColor = 'var(--border)'"
        >
          <h3 style="font-size:17px;font-weight:700;margin-bottom:20px;display:flex;align-items:center;gap:10px;">
            <span style="width:32px;height:32px;border-radius:8px;background:var(--primary-dim);color:var(--primary);display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:800;">{{ cat.letter }}</span>
            {{ cat.name }}
          </h3>
          <div style="display:flex;flex-wrap:wrap;gap:10px;">
            <div v-for="skill in cat.skills" :key="skill.name" class="skill-badge">
              <span v-html="skill.svg"></span>
              {{ skill.name }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- ─── MARQUEE ─── -->
  <div style="overflow:hidden;border-top:1px solid var(--border);border-bottom:1px solid var(--border);padding:20px 0;background:var(--surface);">
    <div style="display:flex;white-space:nowrap;">
      <div class="animate-marquee" style="display:flex;gap:60px;padding-right:60px;">
        <span
          v-for="(t, idx) in [...marquee, ...marquee]"
          :key="idx"
          style="display:inline-flex;align-items:center;gap:10px;font-family:'Visby CF','DM Sans',sans-serif;font-weight:700;font-size:15px;letter-spacing:.05em;text-transform:uppercase;color:var(--muted);"
        >
          <svg width="16" height="16" fill="none" stroke="var(--primary)" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          {{ t }}
        </span>
      </div>
    </div>
  </div>
</template>
