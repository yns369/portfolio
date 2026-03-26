<script setup>
import { ref, onMounted } from 'vue'
import { usePortfolioData } from './composables/usePortfolioData'
import AppNav from './components/AppNav.vue'
import HeroSection from './components/HeroSection.vue'
import AboutSection from './components/AboutSection.vue'
import SkillsSection from './components/SkillsSection.vue'
import ExperienceSection from './components/ExperienceSection.vue'
import ProjectsSection from './components/ProjectsSection.vue'
import ContactSection from './components/ContactSection.vue'
import AppFooter from './components/AppFooter.vue'

const {
  navItems,
  heroPills,
  marquee,
  aboutFeatures,
  skillCategories,
  experience,
  projects,
} = usePortfolioData()

const formSent = ref(false)
const form = ref({ name: '', email: '', message: '' })

function sendMessage() {
  formSent.value = true
  setTimeout(() => (formSent.value = false), 3000)
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible')
      })
    },
    { threshold: 0.1, rootMargin: '0px 0px -60px 0px' }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
})
</script>

<template>
  <AppNav :nav-items="navItems" />

  <main>
    <HeroSection :hero-pills="heroPills" />
    <AboutSection :about-features="aboutFeatures" />
    <SkillsSection :skill-categories="skillCategories" :marquee="marquee" />
    <ExperienceSection :experience="experience" />
    <ProjectsSection :projects="projects" />
    <ContactSection :form-sent="formSent" :form="form" @send="sendMessage" />
  </main>

  <AppFooter />
</template>
