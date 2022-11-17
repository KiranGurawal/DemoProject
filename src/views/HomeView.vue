<template>
  <div class="home">
    <h1>{{count}}</h1>
    <button v-on:click="addValue()" type="button">increase</button>
    <button v-on:click="subValue()" type="button">decrease</button>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: 'HomeView',
  data(){
    return{
      count:0,
    }
  },
  methods:{
  addValue(){
    this.count++;
  },
  subValue(){
    this.count--;
  }
  }
}
</script>
