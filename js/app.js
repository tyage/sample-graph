$(function() {
  new Vue({
    el: '#graph',
    data: {
      fields: [
        { title: 'TM', x: 300, y: 150, r: 100 },
        { title: 'PF', x: 380, y: 300, r: 75 },
        { title: 'CM', x: 500, y: 380, r: 75 },
        { title: 'FR', x: 80, y: 350, r: 80 },
        { title: 'EQ', x: 360, y: 500, r: 80 },
        { title: 'SD', x: 200, y: 650, r: 80 },
        { title: 'OR', x: 880, y: 160, r: 80 },
        { title: 'GD', x: 880, y: 360, r: 80 }
      ]
    }
  });
});
