<script lang="ts" setup>
const { navigation, icons, isSearchOpen } = useNavigation();

const searchValue = ref("");
</script>

<template>
  <header class="sticky top-0 z-50 bg-white border-light-gray">
    <UiContainer>
      <div class="flex items-center justify-between h-16">
        <!-- Logo -->
        <NuxtLink
          to="/"
          class="text-xl font-semibold text-black hover:text-accent transition-colors duration-300"
        >
          LOGO
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <!-- Navigation links -->
          <ul class="flex items-center gap-8 w-full">
            <li v-for="item in navigation" :key="item.name">
              <NuxtLink
                :to="item.route"
                active-class="border-opacity-100"
                class="text-black pb-4 border-b-2 border-black border-opacity-0 transition-all duration-300"
              >
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>

          <!-- Separator -->
          <div class="w-px h-6 bg-light-gray"></div>

          <UiInput
            v-if="isSearchOpen"
            v-model="searchValue"
            type="search"
            placeholder="Search..."
          />

          <!-- Navigation icons -->
          <div class="flex items-center gap-8">
            <button
              v-for="icon in icons"
              :key="icon.name"
              :aria-label="icon.name"
              class="leading-none"
              @click="icon.action"
            >
              <Icon :name="icon.icon" class="w-6 h-6" />
            </button>
          </div>
        </nav>

        <!-- Mobile Navigation -->
        <button class="md:hidden p-2" aria-label="Open menu">
          <Icon name="material-symbols-light:menu" class="w-6 h-6" />
        </button>
      </div>
    </UiContainer>
  </header>
</template>
