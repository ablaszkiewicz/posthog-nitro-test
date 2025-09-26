<template>
  <div>
    <button @click="handleClick">Click me!</button>
  </div>
</template>

<script setup>
const handleClick = () => {
  throw new Error("Button clicked error!");
};
</script>
