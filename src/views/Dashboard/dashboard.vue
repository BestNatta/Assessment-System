<template>
    <div class="container">
        <div class="text-center mt-3 mb-5">
            <h3>ชื่อบริษัท : </h3>
        </div>
        <CanvasJSChart :options="options" :styles="styleOptions" />
    </div>
</template>

<script>
import CanvasJSChart from '../../assets/CanvasJSVueComponent.vue';
export default {
    components: {
        CanvasJSChart
    },
    data() {
        return {
            options: {
                animationEnabled: true,
                theme: "light2",
                exportEnabled: true,
                // title: {
                //     text: "ชื่อบริษัท : "
                // },
                legend: {
                    cursor: "pointer",
                    itemclick: this.toggleDataSeries
                },
                axisY: {
                    prefix: "$",
                    suffix: "K"
                },
                toolTip: {
                    shared: true
                },
                data: [{
                    type: "stackedBar",
                    name: "สูง",
                    showInLegend: true,
                    color: "#C00000",
                    // yValueFormatString: "$#,##0K",
                    dataPoints: [
                        { label: "ข้อที่ 1", y: 48 },
                        { label: "ข้อที่ 2", y: 55 },
                        { label: "ข้อที่ 3", y: 49 },
                        { label: "ข้อที่ 4", y: 65 }
                    ]
                },
                {
                    type: "stackedBar",
                    name: "ปานกลาง",
                    showInLegend: true,
                    color: "#FFC000",
                    // yValueFormatString: "$#,##0K",
                    dataPoints: [
                        { label: "ข้อที่ 1", y: 60 },
                        { label: "ข้อที่ 2", y: 70 },
                        { label: "ข้อที่ 3", y: 53 },
                        { label: "ข้อที่ 4", y: 70 }
                    ]
                },
                {
                    type: "stackedBar",
                    name: "ต่ำ",
                    showInLegend: true,
                    color: "#92D050",
                    // yValueFormatString: "$#,##0K",
                    dataPoints: [
                        { label: "ข้อที่ 1", y: 45 },
                        { label: "ข้อที่ 2", y: 60 },
                        { label: "ข้อที่ 3", y: 61 },
                        { label: "ข้อที่ 4", y: 50 }
                    ]
                },
                {
                    type: "stackedBar",
                    name: "AIC",
                    showInLegend: true,
                    color: "#00B0F0",
                    // yValueFormatString: "$#,##0K",
                    dataPoints: [
                        { label: "ข้อที่ 1", y: 30 },
                        { label: "ข้อที่ 2", y: 40 },
                        { label: "ข้อที่ 3", y: 43 },
                        { label: "ข้อที่ 4", y: 46 }
                    ]
                }]
            },
            styleOptions: {
                width: "100%",
                height: "360px"
            }
        }
    },
    methods: {
      toggleDataSeries(e) {
        if (typeof (e.dataSeries.visible) === "undefined" || e.dataSeries.visible) {
          e.dataSeries.visible = false;
        }
        else {
          e.dataSeries.visible = true;
        }
        e.chart.render();
      }
    }
}
</script>