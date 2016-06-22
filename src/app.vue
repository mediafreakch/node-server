<template>
  <app-header></app-header>
  <div id="content">
    <!-- // put your article-component here -->
  </div>
  <app-footer></app-footer>
</template>

<script>
  var header = require('component~header'),
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
