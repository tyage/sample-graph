$(function() {
  new Vue({
    el: '#graph',
    data: {
      fields: [
        [
          { title: 'A', breakedTitles: ['A'],
            x: 170, y: 79, r: 50, people: ['test1', 'test2'] },
          { title: 'B', breakedTitles: ['B'],
            x: 217, y: 150, r: 35, people: ['test1', 'test2'] },
          { title: 'C', breakedTitles: ['C'],
            x: 281, y: 181, r: 35, people: ['test1', 'test2'] },
          { title: 'D', breakedTitles: ['D'],
            x: 60, y: 170, r: 40, people: ['test1', 'test2'] },
          { title: 'E', breakedTitles: ['E'],
            x: 245, y: 253, r: 45, people: ['test1', 'test2'] },
          { title: 'F', breakedTitles: ['F'],
            x: 161, y: 233, r: 40, people: ['test1', 'test2'] }
        ], [
          { title: 'tests', x: 470, y: 168, r: 38, people: ['test1', 'test2'] }
        ]
      ],
      school: 0,
      language: 'ja',
      axis: {
        x: { start: 25, middle: 480, end: 935 },
        y: { start: 25, middle: 248, end: 410 }
      }
    },
    methods: {
      select: function(field) {
        if (this.selectedField) {
          this.selectedField.selected = false;
        }
        field.$data.selected = true;
        this.selectedField = field.$data;

        // transition to selected field
        var x = this.selectedField ? (480 - this.selectedField.x) : 0;
        var y = this.selectedField ? (460 - this.selectedField.y) : 0;
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
