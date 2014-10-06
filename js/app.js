$(function() {
  new Vue({
    el: '#content',
    data: {
      fields: [
        [
          { title: 'TM', x: 300, y: 100, r: 100, people: ['test1', 'test2'] },
          { title: 'PF', x: 380, y: 250, r: 75, people: ['test1', 'test2'] },
          { title: 'CM', x: 500, y: 330, r: 75, people: ['test1', 'test2'] },
          { title: 'FR', x: 80, y: 300, r: 80, people: ['test1', 'test2'] },
          { title: 'EQ', x: 360, y: 450, r: 80, people: ['test1', 'test2'] },
          { title: 'SD', x: 200, y: 600, r: 80, people: ['test1', 'test2'] },
          { title: 'OR', x: 880, y: 110, r: 80, people: ['test1', 'test2'] },
          { title: 'GD', x: 880, y: 310, r: 80, people: ['test1', 'test2'] }
        ], [
          { title: 'GD', x: 880, y: 310, r: 80, people: ['test1', 'test2'] }
        ]
      ],
      school: 0
    },
    methods: {
      select: function(field) {
        if (this.selectedField) {
          this.selectedField.selected = false;
        }
        field.$data.selected = true;
        this.selectedField = field.$data;
      },
      unselect: function() {
        this.selectedField.selected = false;
        this.selectedField = null;
      }
    }
  });
});
