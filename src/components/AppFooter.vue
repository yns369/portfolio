<script setup>
const footerLinks = ['About', 'Projects', 'Contact']
</script>

<template>
  <footer style="padding:40px 24px;border-top:1px solid var(--border);background:var(--surface);">
    <div style="max-width:1200px;margin:0 auto;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px;">
      <div class="text-gradient" style="font-family:'Visby CF','DM Sans',sans-serif;font-size:22px;font-weight:800;">YK</div>
      <p style="font-size:13px;color:var(--muted);">© 2026 Younes Keraressi · All rights reserved.</p>
      <div style="display:flex;gap:24px;">
        <a
          v-for="item in footerLinks"
          :key="item"
          :href="'#' + item.toLowerCase()"
          style="font-size:13px;color:var(--muted);text-decoration:none;transition:color .2s;"
          @mouseover="e => e.target.style.color = 'var(--primary)'"
          @mouseout="e => e.target.style.color = 'var(--muted)'"
        >
          {{ item }}
        </a>
      </div>
    </div>
  </footer>
</template>
