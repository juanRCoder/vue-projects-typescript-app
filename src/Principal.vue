<script setup lang="ts">
const projects = [{ name: "Github Profile", path: "/github-profile" }];
</script>

<template>
  <main class="bg-[#111]">
    <section class="max-w-7xl mx-auto py-8 flex flex-col min-h-screen">
      <div class="flex-1">
        <header class="sm:flex sm:items-center sm:justify-center sm:gap-6 mb-10">
          <span class="w-24 h-20">
            <img
              src="./assets/vue-logo.png"
              alt="logo-Vue"
              class="shadow-logo mx-auto w-24 h-20 sm:w-full sm:h-full object-cover mb-4"
            />
          </span>
          <h1 class="text-3xl text-[#ddd] font-bold text-center">
            Proyectos Vue
          </h1>
        </header>
        <section
          className="grid sm:grid-cols-2 md:grid-cols-3 mx-4 text-center gap-4"
        >
          <template v-for="project in projects" :key="project.name">
            <router-link
              :to="project.path"
              className="bg-[#222] hover:bg-[#333] transition cursor-pointer rounded-md py-2 no-underline"
            >
              <p className="text-center text-lg text-white">
                {{ project.name }}
              </p>
            </router-link>
          </template>
        </section>
      </div>
      <footer className="flex-none md:text-base text-center text-white mb-1">
        Realizado por Juan Ramirez | JuanRCoder
      </footer>
    </section>
  </main>
</template>

<style scoped>
.shadow-logo {
  filter: drop-shadow(4px 8px 10px #079e67);
}
</style>
