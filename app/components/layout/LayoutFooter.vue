<script lang="ts" setup>

</script>

<template>
  <footer
    class="h-20 border-t max-w-7xl mx-auto px-6 h-full lg:px-8 border-light-gray flex-col items-center justify-center gap-14">
    <nav class="footer-nav flex flex-col-reverse gap-8 md:flex-row md:items-center justify-between w-full mt-8">
      <ul class="flex md:items-center flex-col md:flex-row gap-8 mb-4">
        <li>
          <NuxtLink to="/contact" class="text-dark-gray hover:text-black transition-colors duration-300">Contact Us
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/terms" class="text-dark-gray hover:text-black transition-colors duration-300">Terms of
            Service
          </NuxtLink>
        </li>
        <li>
          <NuxtLink to="/privacy" class="text-dark-gray hover:text-black transition-colors duration-300">Privacy Policy
          </NuxtLink>
        </li>
      </ul>
      <UiInput />
    </nav>
    <div
      class="footer-creds flex flex-col-reverse md:flex-row w-full md:items-center justify-between pb-16 mt-12 gap-8">
      <span class="text-dark-gray text-sm">© 2024 Company. All rights reserved.</span>
      <div class="footer-social flex gap-8">
        <!-- Social media icons can be added here -->
        <NuxtLink to="/twitter">
          <Icon name="mdi:twitter" class="w-6 h-6 text-dark-gray hover:text-black transition-colors duration-300" />
        </NuxtLink>
        <NuxtLink to="/facebook">
          <Icon name="mdi:facebook" class="w-6 h-6 text-dark-gray hover:text-black transition-colors duration-300" />
        </NuxtLink>
        <NuxtLink to="/instagram">
          <Icon name="mdi:instagram" class="w-6 h-6 text-dark-gray hover:text-black transition-colors duration-300" />
        </NuxtLink>
        <NuxtLink to="/linkedin">
          <Icon name="mdi:linkedin" class="w-6 h-6 text-dark-gray hover:text-black transition-colors duration-300" />
        </NuxtLink>
      </div>
    </div>
  </footer>
</template>



<style></style>