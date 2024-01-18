<template>
  <div class="skill">
    <div class="skill__description">
      <span>{{ item.name }}</span>
      <span>{{ item.per }}%</span>
    </div>
    <div class="skill__bar">
      <div class="skill__value" :style="{ width: item.per + '%' }"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "temp-skill",
  data() {
    return {};
  },
  props: ["item"],
};
</script>

<style></style>
