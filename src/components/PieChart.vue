<template>
  <div class="varRadPieChart" ref="chartdiv">
  </div>
</template>

<script>
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import am4themes_dataviz from "@amcharts/amcharts4/themes/dataviz.js";

am4core.useTheme(am4themes_dataviz);
am4core.useTheme(am4themes_animated);

export default {
  name: 'VarRadPieChart',
  mounted() {

    let chart = am4core.create(this.$refs.chartdiv, am4charts.PieChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in

    const data = [
      {
        channel: "Air conditioning",
        value: 500
      },
      {
        channel: "Hot water",
        value: 400
      },
      {
        channel: "Electric vehicle",
        value: 290
      },
    ];

    chart.data = data;

    let series = chart.series.push(new am4charts.PieSeries());
    series.dataFields.value = "value";
    series.dataFields.radiusValue = "value";
    series.dataFields.category = "channel";
    series.slices.template.cornerRadius = 6;
    series.colors.step = 3;
    
    series.hiddenState.properties.endAngle = -90;

    //chart.legend = new am4charts.Legend();

    this.chart = chart;
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  }
}
</script>

<style scoped>
  .varRadPieChart {
    width: 100%;
    height: 400px;
  }
</style>