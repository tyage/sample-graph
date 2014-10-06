$(function() {
  new Vue({
    el: '#graph',
    data: {
      fields: [
        { title: 'Therapeutic Machine', x: 21, y: 21, r: 10 },
        { title: 'Plant Factory', x: 10, y: 31, r: 5 },
      ]
    }
  });
});
