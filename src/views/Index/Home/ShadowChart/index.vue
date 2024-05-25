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
      // 初始化echarts实例
     
      let lineCharts = echarts.init(this.$refs.lineCharts)
      // 配置数据
      lineCharts.setOption({

           // 图表的标题
           title: {
              // 主标题
              //text: '奖励信号',
              // text: this.echarts_info.shap
          },
          yAxis: {
            type: 'category',
            
            data: ['learning_rate', 'n_episode', 'n_time_step', 'seed', 'Q_value', 'other']
          },
         xAxis: {
           type: 'value'
         },
        series: [
           {
          data: [...this.echarts_info.shap.split(",")],
          type: 'bar',
          showBackground: true,
          backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)' }
          }
        ]
              })

  },
}
</script>