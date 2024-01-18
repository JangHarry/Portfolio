<template>
  <section id="about" class="section">
    <h1>About me</h1>
    <p>안녕하세요 이제 막 5년차 개발자가 된 장인천입니다.</p>
    <div class="about__majors">
      <div class="major">
        <div class="major__icon">
          <i class="fab fa-react"></i>
        </div>
        <div class="major__title">Vue</div>
        <div class="major__description">Vue 라이브러리</div>
      </div>
      <div class="major">
        <div class="major__icon">
          <i class="fab fa-html5"></i>
        </div>
        <div class="major__title">Html</div>
        <div class="major__description">Html 관련</div>
      </div>
      <div class="major">
        <div class="major__icon">
          <i class="fab fa-java"></i>
        </div>
        <div class="major__title">Java</div>
        <div class="major__description">전자정부 프레임워크</div>
      </div>
    </div>
    <div class="about__jobs">
      <div class="job">
        <img
          src="@/assets/imgs/jobs/sangsang.png"
          alt="sangs"
          class="job__log"
        />
        <div class="job__description">
          <p class="job__name">데이터사업팀 개발팀 사원</p>
          <p class="job__period">2019.08 ~ 2020.11</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default { name: "temp-about" };
</script>

<style></style>
