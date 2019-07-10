import { Component, OnInit } from '@angular/core';
import * as CanvasJS from '../../assets/canvasjs.min';

@Component({
  selector: 'app-bi',
  templateUrl: './bi.component.html',
  styleUrls: ['./bi.component.css']
})
export class BiComponent  {
 data =[
				{ y: 71, label: "Apple" },
				{ y: 55, label: "Reebok" },
				{ y: 50, label: "ucb" },
				{ y: 65, label: "Addidas" },
				{ y: 95, label: "Puma" },
				{ y: 68, label: "titan" },
				{ y: 28, label: "vivo" },
				{ y: 34, label: "nokia" },
				{ y: 14, label: "fastrack" }
			];

  ngOnInit() {
		let chart = new CanvasJS.Chart("chartContainer", {
		animationEnabled: true,
		exportEnabled: true,
		title: {
			text: "Seller vs Number of Products Sold"
		},
		data: [{
			type: "column",
			dataPoints: this.data
		}]
	});
		
	chart.render();

  let chart1 = new CanvasJS.Chart("chartContainer1", {
		theme: "light2",
		animationEnabled: true,
		exportEnabled: true,

		title:{
			text: "% Products sold by merchants"
		},
		data: [{
			type: "pie",
			showInLegend: true,
			toolTipContent: "<b>{label}</b>: ${y} (#percent%)",
			indexLabel: "{label} - #percent%",
			dataPoints: this.data
		}]
	});
		
	chart1.render();
    }
}