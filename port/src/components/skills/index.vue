<template>
  <section id="skills" class="section">
    <div class="section__container">
      <h1>Skills</h1>
      <h2>Skils & Attributes</h2>
      <p>
        소프트웨어의 모든 단계에 대한 배우고자 하는 열정이 있으며 새로운 팀
        환경의 적응이 빠릅니다. 그리고 모든 일에 계획을 세우고 시간을 중요시
        여기며 스트레스가 생기더라도 충분히 잘 적응 할 수 있습니다.
      </p>
      <div class="skillset">
        <div class="skillset__left">
          <h3 class="skillset__title">Skills</h3>
          <Skill v-for="(item, idx) in skillList" :key="idx" :item="item" />
        </div>
        <div class="skillset__right">
          <div class="tools">
            <h3 class="skillset__title">Tools</h3>
            <ul class="tools__list">
              <li><span>Visul Studio Code</span></li>
              <li><span>Eclipse</span></li>
            </ul>
          </div>
          <div class="etc">
            <h3 class="skillset__title">Etc</h3>
            <ul class="etc__list">
              <li><span>GitHub</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Skill from "./components/Skill.vue";
export default {
  name: "temp-skills",
  data() {
    return {
      skillList: [
        {
          name: "HTML",
          per: 99,
        },
        {
          name: "HTML",
          per: 0,
        },
      ],
    };
  },
  components: {
    Skill,
  },
};
</script>

<style></style>
