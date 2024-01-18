<template>
  <section id="work" class="section">
    <h1>My work</h1>
    <h3>Projects</h3>
    <div class="work__categories">
      <button class="category__btn selected" data-filter="*">
        All<span class="category__count">8</span>
      </button>
      <button class="category__btn" data-filter="front-end">
        Front-end<span class="category__count">3</span>
      </button>
      <button class="category__btn" data-filter="back-end">
        Back-end<span class="category__count">3</span>
      </button>
    </div>
    <div class="work__projects">
      <a
        href="https://jangharry.github.io/shopping-game/"
        class="project"
        target="blank"
        data-type="front-end"
      >
        <img
          class="project__img"
          src="@/assets/imgs/shopping-game.png"
          alt=""
        />
        <div class="project__description">
          <h3>Shopping Game</h3>
          <span>조그마한 쇼핑 게임</span>
        </div>
      </a>
      <a
        href="https://jangharry.github.io/habit_tracker/"
        class="project"
        target="blank"
        data-type="front-end"
      >
        <img
          class="project__img"
          src="@/assets/imgs/habit_tracker.png"
          alt=""
        />
        <div class="project__description">
          <h3>Habit Tracker</h3>
          <span>조그마한 취미 추가 게임</span>
        </div>
      </a>
      <a href="#" class="project" target="blank" data-type="back-end">
        <img class="project__img" src="@/assets/imgs/incheon.png" alt="" />
        <div class="project__description">
          <h3>Shopping Game</h3>
          <span>조그마한 쇼핑 게임</span>
        </div>
      </a>
      <a href="#" class="project" target="blank" data-type="back-end">
        <img class="project__img" src="@/assets/imgs/incheon.png" alt="" />
        <div class="project__description">
          <h3>Shopping Game</h3>
          <span>조그마한 쇼핑 게임</span>
        </div>
      </a>
      <a href="#" class="project" target="blank">
        <img class="project__img" src="@/assets/imgs/incheon.png" alt="" />
        <div class="project__description">
          <h3>Shopping Game</h3>
          <span>조그마한 쇼핑 게임</span>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
export default {
  name: "temp-work",
};
</script>

<style></style>
