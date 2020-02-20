<template>
  <div class="container mx-auto py-10">
    <div class="m-6 bg-white border-l-4 border-blue-500 mx-auto max-w-sm shadow-md overflow-hidden">
      <div class="sm:flex sm:items-center px-6 py-4">
        <img
          class="block h-16 sm:h-24 rounded-full mx-auto mb-4 sm:mb-0 sm:mr-4 sm:ml-0"
          :src="flashCardIcon"
          alt="icon"
        />
        <div class="text-center sm:text-left sm:flex-grow">
          <div class="mb-4">
            <p class="leading-tight text-sm text-gray-500">{{ flashCardHeading }}</p>
            <p class="text-4xl font-black text-blue-500">{{flashCardVal}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "FlashCard",
  props: {
    flashCardIcon: {
      type: String,
      default: ""
    },
    flashCardHeading: {
      type: String,
      default: ""
    },
    flashCardVal: {
      type: Number,
      default: 0
    }
  }
};
</script>
<style></style>
