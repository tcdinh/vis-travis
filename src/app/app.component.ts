import { Component, OnInit, ElementRef } from '@angular/core';
import * as vis from 'vis';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private element: ElementRef) {
  }

  ngOnInit() {
  // create an array with nodes
    let nodes = new vis.DataSet([
      {id: 1, label: 'Node 1'},
      {id: 2, label: 'Node 2'},
      {id: 3, label: 'Node 3'},
      {id: 4, label: 'Node 4'},
      {id: 5, label: 'Node 5'}
    ]);

  // create an array with edges
    let edges = new vis.DataSet([
      {from: 1, to: 3},
      {from: 1, to: 2},
      {from: 2, to: 4},
      {from: 2, to: 5},
      {from: 3, to: 3}
    ]);

  // create a network
    let container = document.getElementById('visualization');
    let data = {
      nodes: nodes,
      edges: edges
    };
    let options = {};

    const network = new vis.Network(container, data, options);

    container.ondragover = function(event) {
      event.preventDefault();
    };

    container.ondrop = function(event) {
      event.preventDefault();
      console.log(event);
      nodes.add({
        id: '6',
        label: 'test'
      });
    };
  }

}
