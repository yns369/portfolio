<script setup>
defineProps({
  heroPills: Array,
})
</script>

<template>
  <section
    id="hero"
    style="position:relative;min-height:100vh;display:flex;align-items:center;justify-content:center;overflow:hidden;padding-top:64px;"
  >
    <!-- Grid background -->
    <div class="bg-grid" style="position:absolute;inset:0;opacity:.15;pointer-events:none;"></div>

    <!-- Blobs -->
    <div class="blob animate-pulse-slow" style="width:700px;height:700px;background:rgba(56,189,248,.12);top:50%;left:50%;transform:translate(-50%,-50%);"></div>
    <div class="blob" style="width:400px;height:400px;background:rgba(129,140,248,.1);top:20%;left:15%;animation:pulse-slow 5s 1s ease-in-out infinite;"></div>
    <div class="blob" style="width:300px;height:300px;background:rgba(56,189,248,.08);bottom:10%;right:10%;animation:pulse-slow 4s 2s ease-in-out infinite;"></div>

    <div style="max-width:960px;margin:0 auto;padding:0 24px;text-align:center;position:relative;z-index:2;">
      <div class="animate-slide-up">
        <div class="hero-badge">
          <span class="dot"></span>
          Available for Opportunities · Dubai, UAE
        </div>
      </div>

      <div class="animate-slide-up delay-100">
        <h1 style="font-size:clamp(52px,9vw,96px);font-weight:800;line-height:.92;letter-spacing:-.04em;margin-bottom:28px;">
          Younes<br><span class="text-gradient">Keraressi</span>
        </h1>
      </div>

      <p class="animate-slide-up delay-200" style="font-size:clamp(16px,2vw,20px);color:var(--muted);max-width:600px;margin:0 auto 40px;line-height:1.7;">
        Senior Full-Stack Developer · 10+ years architecting high-traffic platforms for government &amp; enterprise.
        Specialized in scalable microservices &amp; high-performance frontend.
      </p>

      <div class="animate-slide-up delay-300" style="display:flex;gap:16px;justify-content:center;flex-wrap:wrap;">
        <a href="#projects" class="btn-primary">
          Explore Projects
          <svg width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </a>
        <a href="#contact" class="btn-ghost">Contact Me</a>
      </div>

      <!-- Mini pills -->
      <div class="animate-fade-in delay-500" style="display:flex;gap:12px;justify-content:center;flex-wrap:wrap;margin-top:64px;opacity:.45;">
        <span
          v-for="pill in heroPills"
          :key="pill"
          style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:500;color:var(--muted);"
        >
          <svg width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
          </svg>
          {{ pill }}
        </span>
      </div>
    </div>
  </section>
</template>
