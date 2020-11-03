// 基于准备好的dom，初始化echarts实例
var myChart1 = echarts.init(document.getElementById('myChart1'));

// 指定图表的配置项和数据
var option1 = {
    title: {
        text: '堆叠区域图'
    },
    tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            label: {
                backgroundColor: '#6a7985'
            }
        }
    },
    legend: {
        data: ['邮件营销', '联盟广告', '视频广告', '直接访问', '搜索引擎']
    },
    toolbox: {
        feature: {
            saveAsImage: {}
        }
    },
    grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
    },
    xAxis: [
        {
            type: 'category',
            boundaryGap: false,
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        }
    ],
    yAxis: [
        {
            type: 'value'
        }
    ],
    series: [
        {
            name: '邮件营销',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [120, 132, 101, 134, 90, 230, 210]
        },
        {
            name: '联盟广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [220, 182, 191, 234, 290, 330, 310]
        },
        {
            name: '视频广告',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [150, 232, 201, 154, 190, 330, 410]
        },
        {
            name: '直接访问',
            type: 'line',
            stack: '总量',
            areaStyle: {},
            data: [320, 332, 301, 334, 390, 330, 320]
        },
        {
            name: '搜索引擎',
            type: 'line',
            stack: '总量',
            label: {
                normal: {
                    show: true,
                    position: 'top'
                }
            },
            areaStyle: {},
            data: [820, 932, 901, 934, 1290, 1330, 1320]
        }
    ]
};

myChart1.setOption(option1);
// 使用刚指定的配置项和数据显示图表。
var myChart2 = echarts.init(document.getElementById('myChart2'));

var option2 = {
    title: {
        text: '商品的销售量'
    },
    tooltip: {},
    legend: {
        data: ['品类', 'xx1', 'xx2', 'xx3', 'xx4', 'xx5'],

    },
    xAxis: {
        data: ['9月1日', '9月2日', '9月3日', '9月4日', '9月5日']
    },
    yAxis: {},
    series: [{
        name: '品类',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
    },
    {
        name: '品类',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    },
    {
        name: 'xx1',
        type: 'line',
        data: [10, 40, 36, 20, 20, 30],



    },
    {
        name: 'xx1',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    },
    {
        name: 'xx2',
        type: 'line',
        data: [10, 40, 36, 20, 20, 30],



    },

    {
        name: 'xx3',
        type: 'line',
        data: [10, 40, 36, 20, 20, 30],



    },
    {
        name: 'xx3',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    },
    {
        name: 'xx4',
        type: 'line',
        data: [10, 40, 36, 20, 20, 30],



    },
    {
        name: 'xx4',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    },
    {
        name: 'xx5',
        type: 'line',
        data: [10, 40, 36, 20, 20, 30],



    },
    {
        name: 'xx5',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    },
    ]
};
myChart2.setOption(option2);
var myChart3 = echarts.init(document.getElementById('myChart3'));

var option3 = {
    title: {
        text: '商品的销售额'
    },
    tooltip: {},
    legend: {
        data: ['品类', 'xx1', 'xx2', 'xx3', 'xx4', 'xx5'],

    },
    xAxis: {
        data: ['9月1日', '9月2日', '9月3日', '9月4日', '9月5日']
    },
    yAxis: {},
    series: [{
        name: '品类',
        type: 'line',
        data: [5, 20, 36, 10, 10, 20]
    },
    {
        name: '品类',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    },
    {
        name: 'xx1',
        type: 'line',
        data: [10, 40, 36, 20, 20, 30],



    },
    {
        name: 'xx1',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    },
    {
        name: 'xx2',
        type: 'line',
        data: [10, 40, 36, 20, 20, 30],



    },

    {
        name: 'xx3',
        type: 'line',
        data: [10, 40, 36, 20, 20, 30],



    },
    {
        name: 'xx3',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    },
    {
        name: 'xx4',
        type: 'line',
        data: [10, 40, 36, 20, 20, 30],



    },
    {
        name: 'xx4',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    },
    {
        name: 'xx5',
        type: 'line',
        data: [10, 40, 36, 20, 20, 30],



    },
    {
        name: 'xx5',
        type: 'bar',
        data: [5, 20, 36, 10, 10, 20]
    },
    ]
};
myChart3.setOption(option3);
var myChart4 = echarts.init(document.getElementById('myChart4'));
var option4 = {
    backgroundColor: '#2c343c',

    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 274, name: '联盟广告'},
                {value: 235, name: '视频广告'},
                {value: 400, name: '搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
myChart4.setOption(option4);
var myChart5 = echarts.init(document.getElementById('myChart5'));
var option5 = {
    backgroundColor: '#2c343c',

    title: {
        text: 'Customized Pie',
        left: 'center',
        top: 20,
        textStyle: {
            color: '#ccc'
        }
    },

    tooltip: {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
    },

    visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
            colorLightness: [0, 1]
        }
    },
    series: [
        {
            name: '访问来源',
            type: 'pie',
            radius: '55%',
            center: ['50%', '50%'],
            data: [
                {value: 335, name: '直接访问'},
                {value: 310, name: '邮件营销'},
                {value: 274, name: '联盟广告'},
                {value: 235, name: '视频广告'},
                {value: 400, name: '搜索引擎'}
            ].sort(function (a, b) { return a.value - b.value; }),
            roseType: 'radius',
            label: {
                color: 'rgba(255, 255, 255, 0.3)'
            },
            labelLine: {
                lineStyle: {
                    color: 'rgba(255, 255, 255, 0.3)'
                },
                smooth: 0.2,
                length: 10,
                length2: 20
            },
            itemStyle: {
                color: '#c23531',
                shadowBlur: 200,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
            },

            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDelay: function (idx) {
                return Math.random() * 200;
            }
        }
    ]
};
myChart5.setOption(option5);
/**
 * 响应式布局
 */
var charts = [];
charts.push(myChart1)
charts.push(myChart2)
charts.push(myChart3)
charts.push(myChart4)
charts.push(myChart5)
window.onresize = function(){
    for(var i = 0; i < charts.length; i++){
        charts[i].resize();
    }
};