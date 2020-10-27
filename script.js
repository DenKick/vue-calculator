let vue = new Vue({
  el: '#app',
  data() {
    return {
      result: '',
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],
      operations: ['+', '-', '*', '/'],
    }
  },
  methods: {
    buttonClick: function(char) {
      this.result += char;
    },
    reset: function() {
      this.result = '';
    },
    calc: function() {
      if (this.result) {
        this.result = eval(this.result);
        this.result = this.result.toString();
      }
    }
  }
})