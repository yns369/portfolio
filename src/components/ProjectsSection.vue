<script setup>
defineProps({
  projects: Array,
})

import linkImg from '../assets/link.png'

</script>

<template>
  <section id="projects" class="section" style="background:var(--surface);border-top:1px solid var(--border);">
    <div style="max-width:1200px;margin:0 auto;padding:0 24px;">
      <div style="text-align:center;margin-bottom:64px;" class="reveal">
        <h2 style="font-size:clamp(28px,4vw,48px);font-weight:800;margin-bottom:12px;">
          Featured <span class="text-gradient">Projects</span>
        </h2>
        <p style="color:var(--muted);max-width:500px;margin:0 auto;">A selection of 20+ delivered projects spanning multi-sector industries.</p>
      </div>

      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:28px;">
        <div
          class="shadow-[0_0_6px_1px_#2d6cfc9c]"
          v-for="(proj, i) in projects"
          :key="proj.title"
          :class="['project-card reveal', `delay-${i}`]"
        >
          <!-- Card header -->
          <div  :style="`background: url(${linkImg}); no-repeat; background-size: cover; background-position: 0 -11px;height:160px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;`">
          <!-- <div class="bg-red-300" style="height:160px;background:var(--surface2);display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;"> -->
            <!-- <div class="bg-grid" style="position:absolute;inset:0;opacity:.15;"></div> -->
            <!-- <div style="position:relative;z-index:1;" v-html="proj.icon"></div> -->
          </div>

          <div style="padding:28px;flex:1;display:flex;flex-direction:column;">
            <h3 style="font-size:20px;font-weight:700;margin-bottom:10px;">{{ proj.title }}</h3>
            <p style="font-size:14px;color:var(--muted);line-height:1.7;margin-bottom:20px;flex:1;">{{ proj.desc }}</p>
            <div style="display:flex;flex-wrap:wrap;gap:8px;">
              <span v-for="tag in proj.tags" :key="tag" class="tag">{{ tag }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>

   <div class="mt-24 flex items-center justify-center">
     <div class="cursor-pointer inline-block px-3 py-1 rounded-full bg-[var(--primary-dim)] text-[var(--primary)] text-[13px] font-semibold tracking-[0.03em] border-2 border-transparent hover:border-[var(--primary)]">
      LOAD MORE
</div>
   </div>
  </section>
</template>
