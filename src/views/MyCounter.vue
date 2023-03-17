<template>
    <div class="counter">
      <div class="container">
        <h1>
        Count: <span id="ctr">{{ counter }}</span>
      </h1>
      <span>Set your value: </span><input id="box" placeholder="Set Value" type="text" v-model="counter" /> <button class="submit" @click="submit">Submit</button>
     
      <section class="manage">
        <button @click="increment"><img src="../assets/plusbw.png" alt="increase"></button>
        <button @click="decrement"><img src="../assets/minusbw.png" alt="decrease"></button>
        <button @click="reset"><img src="../assets/reloadbw.png" alt="reset"></button>
      </section>
      <button class="reset" @click="setValue">Set Your Value</button>
      </div>
    </div>
  </template>
  
  <script>
  import { mapFields } from "vuex-map-fields";
  export default {
    name: "CounterPage",
    computed: {
      ...mapFields({
        counter: "counter",
      }),
    },
    methods: {
      increment() {
        this.$store.dispatch("increment");
        document.getElementById("box").style.display = 'none';
                document.getElementById("ctr").style.display = 'initial'
      },
      decrement() {
        this.$store.dispatch("decrement");
        document.getElementById("box").style.display = 'none';
                document.getElementById("ctr").style.display = 'initial'
      },
      reset() {
        this.$store.dispatch("reset");
        document.getElementById("box").style.display = 'initial'
        document.getElementById("ctr").style.display = 'none'
      },
      setValue(){
          document.getElementById("box").style.display = 'initial'
          document.getElementById("ctr").style.display = 'none'
      },
      submit() {
          document.getElementById("ctr").style.display = 'initial'
      }
    },
  };
  </script>
  
  <style>
  @import '../styles/counter.css'
  </style>
  