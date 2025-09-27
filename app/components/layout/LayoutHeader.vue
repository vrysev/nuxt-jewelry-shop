<script lang="ts" setup>
const navigation = [
  { name: 'Home', route: '/' },
  { name: 'About us', route: '/about' },
]

const icons = [
  { name: 'Search', icon: 'material-symbols-light:search-rounded', route: '/search' },
  { name: 'Cart', icon: 'material-symbols-light:shopping-cart-outline', route: '/cart' },
  { name: 'Favorites', icon: 'material-symbols-light:favorite-outline', route: '/favorites' },
  { name: 'Profile', icon: 'material-symbols-light:person-outline', route: '/profile' }
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white border-light-gray">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16">

        <!-- Logo -->
        <NuxtLink to="/">
          LOGO
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:flex items-center gap-8">
          <!-- Navigation links -->
          <ul class="flex items-center gap-8">
            <li v-for="item in navigation" :key="item.name">
              <NuxtLink :to="item.route" active-class="border-opacity-100"
                class="transition-all duration-300 pb-4 border-b-2 border-black border-opacity-0">
                {{ item.name }}
              </NuxtLink>
            </li>
          </ul>

          <!-- Separator -->
          <div class="separator w-px h-6 bg-light-gray"></div>

          <!-- Navigation icons -->
          <div class="flex items-center gap-8">
            <NuxtLink v-for="icon in icons" :key="icon.name" :to="icon.route" :aria-label="icon.name"
              class="leading-none">
              <Icon :name="icon.icon" class="w-6 h-6" />
            </NuxtLink>
          </div>
        </nav>


        <!-- Mobile Navigation -->
        <button class="md:hidden p-2" aria-label="Open menu">
          <Icon name="material-symbols-light:menu" class="w-6 h-6" />
        </button>
      </div>
    </div>
  </header>
</template>
