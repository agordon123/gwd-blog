<script setup>
const count = ref(0)
const plusOne = computed(() => count.value +1)

function decrement() {
  count.value--;
}

function increment() {
  count.value++;
}

</script>

<template>
  <div>
    <div>Counter: {{ count }}</div>
    <div>Plus One: {{ plusOne }}</div>
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
  </div>
</template>
