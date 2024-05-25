<template>
    <div class="LineChart maxWH" ref="lineCharts">
    
    </div>
</template>

<script>
import * as echarts from 'echarts'
export default {
    name: 'LineChart',
    props: ['echarts_info'],
    mounted() {
        // const { nine_time_count, ten_time_count, eleven_time_count, twelve_time_count, thirteen_time_count, fourteen_time_count, fifteen_time_count, sixteen_time_count, seventeen_time_count, eighteen_time_count, nineteen_time_count, twenty_time_count, twenty_one_time_count } = this.echarts_info
        const hours = ['0', '1', '2', '3', '4', '5', '6','7', '8', '9', '10', '11', '12', '13','14', '15', '16', '17', '18', '19', '20'];
const days = [
  '0', '1',
];

// prettier-ignore
// const data = [[0,0,0.10737966],[0,1,0.2],[0,2,0.3],[0,3,0.4],[0,4,0.2],[0,5,0.9],[0,6,0.6],[0,7,0.4],[0,8,0.5],[0,9,0.5],[0,10,0.2],[0,11,0.1],[0,12,0.4],[0,13,0.1],[0,14,0.1],[0,15,0.3],[0,16,0.4],[0,17,0.6],[0,18,0.4],[0,19,0.4],[0,20,0.3],[0,21,3],[1,0,7],[1,1,0],[1,2,0],[1,3,0],[1,4,0],[1,5,0],[1,6,0],[1,0,0.2279],[1,1,0.227982223],[1,2,0.3],[1,3,0.4],[1,4,0.2],[1,5,0.6],[1,6,0.2],[1,7,0.8],[1,8,0.4],[1,9,0.3],[1,10,0.2],[1,11,0.5],[1,11,0.4],[1,12,1],[1,13,0.5],[1,14,0.7],[1,15,0.2],[1,16,0.7],[1,17,0.2],[1,18,0.7],[1,19,0.2],[1,20,0.7]]
let str = this.echarts_info.qvalue;  
let data = JSON.parse('[' + str.replace(/\]\[/g, '],[') + ']').map(function (item) {
    return [item[1], item[0], item[2] || '-'];
});

   
        
    // console.log(data)    
        
        // 初始化echarts实例
        let lineCharts = echarts.init(this.$refs.lineCharts)
        if (!this.echarts_info || typeof this.echarts_info.learning_curve !== 'string') {  
        console.error(this.echarts_info);  
        console.error('echarts_info 或 learning_curve 未正确初始化');  
        return;  
    }  
        // 配置数据
        lineCharts.setOption({
            tooltip: {
    position: 'top'
  },
  grid: {
    height: '50%',
    top: '10%'
  },
  xAxis: {
    type: 'category',
    data: hours,
    splitArea: {
      show: true
    }
  },
  yAxis: {
    type: 'category',
    data: days,
    splitArea: {
      show: true
    }
  },
  visualMap: {
    min: 0,
    max: 1,
    calculable: true,
    orient: 'horizontal',
    left: 'center',
    // bottom: '15%'
  },
  series: [
    {
      name: 'Punch Card',
      type: 'heatmap',
      data: data,
      // label: {
      //   show: true
      // },
      // 具体数值显示
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }
  ]
                })

    },
}
</script>
