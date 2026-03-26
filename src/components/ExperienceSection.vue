<script setup>
defineProps({
  experience: Array,
})
</script>

<template>
  <section id="experience" class="section" style="background:var(--bg);position:relative;overflow:hidden;">
    <div class="blob" style="width:500px;height:500px;background:rgba(129,140,248,.07);top:-100px;right:-100px;"></div>
    <div style="max-width:1200px;margin:0 auto;padding:0 24px;position:relative;z-index:1;">
      <div style="text-align:center;margin-bottom:64px;" class="reveal">
        <h2 style="font-size:clamp(28px,4vw,48px);font-weight:800;margin-bottom:12px;">
          Professional <span class="text-gradient">Experience</span>
        </h2>
        <p style="color:var(--muted);max-width:500px;margin:0 auto;">A proven track record delivering high-traffic enterprise and government-grade platforms.</p>
      </div>

      <div style="display:flex;flex-direction:column;gap:48px;">
        <div
          v-for="(job, i) in experience"
          :key="i"
          :class="['reveal', i > 0 ? 'delay-2' : '']"
          style="position:relative;padding-left:40px;border-left:1px solid var(--border);"
        >
          <div class="timeline-dot"></div>

          <div style="display:flex;flex-wrap:wrap;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:24px;">
            <div>
              <h3 style="font-size:22px;font-weight:700;margin-bottom:6px;display:flex;align-items:center;gap:10px;">
                <svg width="20" height="20" fill="none" stroke="var(--primary)" stroke-width="2" viewBox="0 0 24 24">
                  <rect x="2" y="7" width="20" height="14" rx="2"/>
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/>
                </svg>
                {{ job.title }}
              </h3>
              <div style="font-size:16px;color:var(--muted);">{{ job.company }}</div>
            </div>
            <div style="display:inline-flex;align-items:center;gap:8px;padding:8px 18px;border-radius:100px;background:var(--primary-dim);border:1px solid rgba(56,189,248,.2);font-size:13px;font-weight:600;color:var(--primary);">
              <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
                <rect x="3" y="4" width="18" height="18" rx="2"/>
                <path d="M8 2v4M16 2v4M3 10h18"/>
              </svg>
              {{ job.period }}
            </div>
          </div>

          <ul style="display:flex;flex-direction:column;gap:12px;list-style:none;padding:0;">
            <li
              v-for="resp in job.responsibilities"
              :key="resp"
              style="display:flex;align-items:flex-start;gap:12px;color:var(--muted);font-size:15px;line-height:1.7;"
            >
              <svg style="flex-shrink:0;margin-top:2px;" width="18" height="18" fill="none" stroke="var(--primary)" stroke-width="2" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="10"/>
                <path d="m9 12 2 2 4-4"/>
              </svg>
              {{ resp }}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </section>
</template>
