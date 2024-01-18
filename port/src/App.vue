<template>
  <div id="app">
    <Home />
    <About />
    <Work />
    <Skills />
    <Contact />
  </div>
</template>

<script>
import Home from "./components/home";
import About from "./components/about";
import Work from "./components/work";
import Skills from "./components/skills";
import Contact from "./components/contact";

export default {
  name: "App",
  components: { Home, Work, About, Skills, Contact },
};
</script>
