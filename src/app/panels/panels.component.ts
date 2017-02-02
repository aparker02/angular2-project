import { Component, OnInit } from '@angular/core';
declare var $: any;
declare var GoldenLayout: any;

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html'
})
export class PanelsComponent implements OnInit {

  private config: any;
  private layout: any;

  constructor() {
    this.config = {
      content: [{
        type: 'row',
        content: [{
          type: 'component',
          componentName: 'test1',
          componentState: { message: "Top Left" }
        }, {
          type: 'column',
          content: [{
            type: 'component',
            componentName: 'test1',
            componentState: { message: "Top Right" }
          }, {
            type: 'component',
            componentName: 'test1',
            componentState: { message: "Bottom Right" }
          }]
        }]
      }]
    };
  }

  ngOnInit() {
    this.layout = new GoldenLayout(this.config);

    this.layout.registerComponent('test1', (container, componentState) => {
          // let factory = this.componentFactoryResolver.resolveComponentFactory(AppComponent);

          // var compRef = this.viewContainer.createComponent(factory);
          // compRef.instance.message = componentState.message;
          container.getElement().html('<h2>' + componentState.message + '</h2>');
    });

    this.layout.init();

  }

}
