var itemStyle = {
    normal: {
    },
    emphasis: {
        barBorderWidth: 1,
        shadowBlur: 10,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        shadowColor: 'rgba(0,0,0,0.5)'
    }
};
option = {
    title : {
        text: '某地区蒸发量和降水量',
        subtext: '纯属虚构'
    },
    tooltip : {
        trigger: 'axis'
    },
    legend: {
        data:['蒸发量','降水量']
    },
    color:['#F35541','#1890FF'],
    toolbox: {
        show : true,
        feature : {
            dataView : {show: true, readOnly: false},
            magicType : {show: true, type: ['line', 'bar']},
            restore : {show: true},
            saveAsImage : {show: true}
        }
    },
    calculable : true,
    xAxis : [
        {
            type : 'category',
            data : ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月'],
            axisTick:{
                show:false
            },
            axisLine:{//坐标轴轴的样式（不包括lable展示字段）
                show:true,
                lineStyle:{
                    type:'dashed'
                },
            },
        }
    ],
    yAxis : [
        {
            type : 'value',
            name:'占净资产（%）',
            min: 0,
            max: 250,
            axisLine:{//坐标轴轴的样式（不包括lable展示字段）
                show:false
            },
            axisTick:{
                show:false
            },
            splitLine: {//背景线样式及显示设置，第二个y轴未设置也可以正常展示
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
            // interval: 5,//控制网格
        },
        {
            type : 'value',
            name:'市值（万元）',
            min: 0,
            max: 25,
            axisLine:{//坐标轴轴的样式（不包括lable展示字段）
                show:false
            },
            axisTick:{//坐标轴刻度样式
                show:false
            },
            splitLine: {//背景线样式及显示设置，第二个y轴未设置也可以正常展示
                show: true,
                lineStyle: {
                    type: 'dashed'
                }
            },
        }
    ],
    series : [
        {
            name:'蒸发量',
            type:'bar',
            data:[2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3],
            itemStyle:itemStyle
        },
        {
            name:'降水量',
            type:'bar',
            yAxisIndex: 1,//设置左右的项（尝试左右y轴的lable都展示时使用，有待进一步处理）
            data:[2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3],
            itemStyle:itemStyle//鼠标悬浮后显示阴影
        }
    ]
};
