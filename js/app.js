$(function() {
  new Vue({
    el: '#graph',
    data: {
      fields: [
        { title: 'TM', x: 300, y: 100, r: 100 },
        { title: 'PF', x: 380, y: 250, r: 75 },
        { title: 'CM', x: 500, y: 330, r: 75 },
        { title: 'FR', x: 80, y: 300, r: 80 },
        { title: 'EQ', x: 360, y: 450, r: 80 },
        { title: 'SD', x: 200, y: 600, r: 80 },
        { title: 'OR', x: 880, y: 110, r: 80 },
        { title: 'GD', x: 880, y: 310, r: 80 }
      ]
    }
  });
});
