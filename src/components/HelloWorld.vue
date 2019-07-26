<template>
  <div class="hello">
    <h1>{{ msg }}</h1>


    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary" disabled></button>
      <button type="button" class="btn btn-primary"></button>
      <button type="button" class="btn btn-primary" disabled></button>
    </div><br/>
    <div class="btn-group" role="group" aria-label="Basic example">
      <button type="button" class="btn btn-primary" disabled></button>
      <button type="button" class="btn btn-primary"></button>
      <button type="button" class="btn btn-primary" ></button>
    </div>
    <br/>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
