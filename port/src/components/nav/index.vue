<template>
  <nav id="navbar">
    <div class="navbar__log">
      <i class="fab fa-diaspora"></i>
      <a href="#">Incheon</a>
    </div>
    <ul class="navbar__menu">
      <li class="navbar__menu__item" data-link="#home">Home</li>
      <li class="navbar__menu__item" data-link="#about">About</li>
      <li class="navbar__menu__item" data-link="#skills">Skills</li>
      <li class="navbar__menu__item" data-link="#work">My work</li>
      <li class="navbar__menu__item" data-link="#contact">Contact</li>
    </ul>

    <!-- Toggle button -->
    <button class="navbar__toggle-btn">
      <i class="fas fa-bars"></i>
    </button>
  </nav>
</template>

<script>
export default { name: "temp-nav" };
</script>

<style></style>
