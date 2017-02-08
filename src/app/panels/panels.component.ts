import { Component, OnInit, ComponentFactoryResolver, HostListener, ComponentFactory,
  ComponentRef, ViewContainerRef, ReflectiveInjector, ElementRef } from '@angular/core';
import { TableComponent } from '../table/table.component';
import { ChartComponent } from '../chart/chart.component';

declare var $: any;
declare var GoldenLayout: any;

@Component({
  selector: 'app-panels',
  templateUrl: './panels.component.html'
})
export class PanelsComponent implements OnInit {

  private config: any;
  private layout: any;

  constructor(private el: ElementRef, private viewContainer: ViewContainerRef,
        private componentFactoryResolver: ComponentFactoryResolver) {
    this.config = {
      content: [{
        type: 'row',
        content: [{
          type: 'component',
          componentName: 'table',
          componentState: { message: "Top Left" }
        }, {
          type: 'column',
          content: [{
            type: 'component',
            componentName: 'chart',
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
    //this.layout = new GoldenLayout(this.config);
     this.layout = new GoldenLayout(this.config, $(this.el.nativeElement).find("#layout"));


    this.layout.registerComponent('table', (container, componentState) => {
      let factory = this.componentFactoryResolver.resolveComponentFactory(TableComponent);

      var compRef = this.viewContainer.createComponent(factory);
      container.getElement().append($(compRef.location.nativeElement));
      // compRef.instance.setEventHub(this.layout.eventHub);
      //compRef.instance.message = componentState.message;
      //  container.getElement().html('<h2>' + componentState.message + '</h2>');
    });
    this.layout.registerComponent('chart', (container, componentState) => {
      let factory = this.componentFactoryResolver.resolveComponentFactory(ChartComponent);

      var compRef = this.viewContainer.createComponent(factory);
      container.getElement().append($(compRef.location.nativeElement));
      // compRef.instance.setEventHub(this.layout.eventHub);
      //compRef.instance.message = componentState.message;
      //  container.getElement().html('<h2>' + componentState.message + '</h2>');
    });

    this.layout.registerComponent('test1', (container, componentState) => {
      // let factory = this.componentFactoryResolver.resolveComponentFactory(AppComponent);

      // var compRef = this.viewContainer.createComponent(factory);
      // compRef.instance.message = componentState.message;
      container.getElement().html('<h2>' + componentState.message + '</h2>');



    });


    this.layout.init();

  }

}
