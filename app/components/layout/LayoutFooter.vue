<script lang="ts" setup>
const { footerNavigation, socialLinks } = useNavigation();
const currentYear = new Date().getFullYear();
</script>

<template>
  <footer class="border-t border-light-gray">
    <UiContainer>
      <nav
        class="flex flex-col gap-8 md:flex-row md:items-center justify-between"
      >
        <ul class="flex items-center flex-col md:flex-row gap-6">
          <li v-for="item in footerNavigation" :key="item.name">
            <NuxtLink
              :to="item.route"
              class="text-dark-gray hover:text-black transition-colors duration-300"
            >
              {{ item.name }}
            </NuxtLink>
          </li>
        </ul>
        <UiInput
          type="email"
          icon="material-symbols-light:outgoing-mail-outline"
        />
      </nav>

      <div
        class="flex flex-col-reverse md:flex-row md:items-center justify-between mt-8 pt-8 gap-6"
      >
        <span class="text-dark-gray text-sm"
          >© {{ currentYear }} Company. All rights reserved.</span
        >
        <ul class="flex gap-6">
          <li v-for="link in socialLinks" :key="link.name">
            <NuxtLink
              :to="link.route"
              :aria-label="link.name"
              class="text-dark-gray hover:text-black transition-colors duration-300"
            >
              <Icon :name="link.icon" class="w-5 h-5" />
            </NuxtLink>
          </li>
        </ul>
      </div>
    </UiContainer>
  </footer>
</template>
