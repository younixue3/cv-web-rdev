<template>
  <div class="bg-opacity-50 bg-gray-700 w-full fixed text-yellow-300 z-50">
    <div class="flex justify-around p-3">
      <div class="w-full text-left font-bold">
        LOGO
      </div>
      <div class="hidden md:block w-full text-center space-x-5">
        <a href="#">
          <button class="font-medium">About me</button>
        </a>
        <a href="#portofolio">
          <button class="font-medium">Portofolio</button>
        </a>
        <button class="font-medium">Contacts</button>
      </div>
      <div class="hidden md:block w-full text-right divide-x-2 divide-gray-500">
        <span class="space-x-3 px-2">
          <button><font-awesome-icon :icon="['fab', 'facebook']" /></button>
          <button><font-awesome-icon :icon="['fab', 'instagram']" /></button>
          <button><font-awesome-icon :icon="['fab', 'linkedin']" /></button>
          <button><font-awesome-icon :icon="['fab', 'github']" /></button>
        </span>
        <span class="px-2">
          <button class="px-2 bg-yellow-400 text-gray-900 font-medium rounded-full">Contact Me</button>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
