<template>
  <nav class="route-nav">
  <router-link to="/"><img src="./assets/left-arrowbw.png" alt=""></router-link>
  <router-link to="/counter"><img src="./assets/right-arrowbw.png" alt=""></router-link>
</nav>
<div class="home">
<router-view/>
</div>
</template>

<style>
@import './styles/index.css';
</style>
