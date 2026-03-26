<script setup>
import { ref } from 'vue'

defineProps({
  navItems: Array,
})

const mobileOpen = ref(false)
</script>

<template>
  <!-- ─── NAV ─── -->
  <nav class="fixed top-0 left-0 right-0 z-[100]"
       style="background:rgba(7,11,20,.8);backdrop-filter:blur(20px);border-bottom:1px solid var(--border);">
    <div class="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
      <a href="#" class="text-gradient no-underline"
         style="font-family:'Visby CF','DM Sans',sans-serif;font-size:22px;font-weight:800;">YK</a>

      <!-- Desktop -->
      <div class="hidden md:flex items-center gap-1">
        <a
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          class="nav-link"
          style="padding:8px 16px;border-radius:8px;font-size:14px;font-weight:500;color:var(--muted);text-decoration:none;transition:color .2s;"
          @mouseover="e => e.target.style.color = 'var(--primary)'"
          @mouseout="e => e.target.style.color = 'var(--muted)'"
        >
          {{ item.label }}
        </a>
      </div>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden"
        style="background:none;border:none;cursor:pointer;color:var(--text);padding:8px;"
        @click="mobileOpen = !mobileOpen"
      >
        <svg v-if="!mobileOpen" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M4 6h16M4 12h16M4 18h16"/>
        </svg>
        <svg v-else width="24" height="24" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path d="M6 18L18 6M6 6l12 12"/>
        </svg>
      </button>
    </div>
  </nav>

  <!-- Mobile Menu -->
  <div :class="['mobile-menu', mobileOpen ? 'open' : '']">
    <a
      v-for="item in navItems"
      :key="item.href"
      :href="item.href"
      @click="mobileOpen = false"
    >{{ item.label }}</a>
  </div>
</template>
