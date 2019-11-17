import $ from "jquery";
import * as echarts from 'echarts';
const option = {
    title: {
        text: 'ECharts 入门示例'
    },
    tooltip: {},
    legend: {
        data: ['销量']
    },
    xAxis: {
        data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
    },
    yAxis: {},
    series: [{
        name: '销量',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    }]
};
const option1 = {
    series: {
        type: 'pie',
        data: [
            { name: 'A', value: 1212 },
            { name: 'B', value: 2323 },
            { name: 'C', value: 1919 }
        ]
    }
}
const options2 = {
    title: { text: 'Line Chart' },
    tooltip: {},
    toolbox: {
        feature: {
            dataView: {},
            saveAsImage: {
                pixelRatio: 2
            },
            restore: {}
        }
    },
    xAxis: {},
    yAxis: {},
    series: [{
        type: 'line',
        smooth: true,
        data: [[12, 5], [24, 20], [36, 36], [48, 10], [60, 10], [72, 20]]
    }]
}

$(() => {
    console.log("加载完成");
    echarts.init($('#app1')[0]).setOption(option);
})