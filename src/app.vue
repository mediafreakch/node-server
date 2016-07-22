<template>
  <app-header></app-header>
  <div id="content" class="row">
    <!-- // put your article-component here -->
    <h1>Hallo Sprint Review - with Y, N and T</h1>
    <a href="/crash-me">Crash me</a>
  </div>
  <app-footer></app-footer>
</template>

<script>
  var layout = require('page~global'),
      header = require('component~header'),
      footer = require('component~footer');

  module.exports = {
    el: '#app',
    components: {
      'app-header': header,
      'app-footer': footer
    },
    replace: false
  };
</script>
