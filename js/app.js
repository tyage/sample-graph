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
      school: 0,
      language: 'ja'
    },
    methods: {
      select: function(field) {
        if (this.selectedField) {
          this.selectedField.selected = false;
        }
        field.$data.selected = true;
        this.selectedField = field.$data;

        // transition to selected field
        var x = this.selectedField ? (850 - this.selectedField.x) : 0;
        var y = this.selectedField ? (375 - this.selectedField.y) : 0;
        d3.select('#graph-group').transition()
          .attr('transform', 'translate(' + x + ', ' + y + ')');
      },
      unselect: function() {
        if (this.selectedField) {
          this.selectedField.selected = false;
        }
        this.selectedField = null;

        // transition to center
        d3.select('#graph-group').transition()
          .attr('transform', 'translate(0, 0)');
      },
      changeSchool: function(school) {
        if (school !== this.school) {
          this.school = school;
          this.unselect();
        }
      },
      changeLanguage: function(language) {
        this.language = language;
      }
    }
  });
});
