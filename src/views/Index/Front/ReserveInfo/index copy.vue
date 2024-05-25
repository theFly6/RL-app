<template>
    <div class="home maxWH">
        <div class="back-home maxWH clearfix" >
            <!-- 头部 -->
            <div class="header flex-center">

                <!-- 左侧两个卡片 -->
                <div class="left-card flex-center">
                   
                        
                    <div class="title flex-center">
                            <span>环境状态</span>
                        </div>
                            <LineChart4 :echarts_info="echarts_info"></LineChart4>
                        
                            <div class="title flex-center">
                            <span>动作选择</span>
                        </div>
                            <ScatterMap :echarts_info="echarts_info"></ScatterMap>
                        
                         
                </div>
                <div class="right-card flex-center">
                    <div class="title flex-center">
                            <span>shap</span>
                        </div>
                        <ShadowChart :echarts_info="echarts_info"></ShadowChart>
                        
                            <div class="title flex-center">
                            <span>Q值函数</span>
                        </div>
                            <HeatMap :echarts_info="echarts_info"></HeatMap>
                        
                   
                </div>
                
            </div>
            <!-- 底部 -->
            <div class="floor flex-center">
                <!--价值函数-->
                <div class="left-line">
               
                    <LineChart1 :echarts_info="echarts_info"></LineChart1>
                </div>
                <!-- 奖励信号 -->
                <div class="left-line">
                    <LineChart2 :echarts_info="echarts_info"></LineChart2>
                </div>
                <!-- 学习曲线 -->
                <div class="left-line">
                    <LineChart3 :echarts_info="echarts_info"></LineChart3>
                </div>
                


            </div>
        </div>
        
    </div>
</template>

<script>
import { mapGetters } from 'vuex'
import { user_identity_admin, user_identity_user } from '@/config'
import LineChart1 from '../../Home/LineChart1'
import LineChart2 from '../../Home/LineChart2'
import LineChart3 from '../../Home/LineChart3'
import LineChart4 from '../../Home/LineChart4'
import PieChart from '../../Home//PieChart'
import HeatMap from '../../Home//HeatMap'
import ScatterMap from '../../Home//ScatterMap'
import ShadowChart from '../../Home//ShadowChart'
export default {
    name: 'Home',
    components: { LineChart1, PieChart ,LineChart2,LineChart3,HeatMap,ScatterMap,ShadowChart,LineChart4},
    data() {
        return {
            user_identity_admin: user_identity_admin,
            user_identity_user: user_identity_user,
        }
    },
    computed: {
        ...mapGetters(['identity', 'echarts_info', 'get_time_arr', 'get_time_val_arr', 'get_time_dict'])
    },
    methods: {
        // 路由判断
        getFrontPath(path) {
            let href = this.$route.path
            if (href.includes('front')) {
                return path
            } else {
                return 'front/' + path
            }
        },
        // 去哪个页面
        goPath(path) {
            this.$router.push(this.getFrontPath(path))
        },
        // 去预约座位页
        goReserveSeat() {
            this.$bus.$emit('switchCheckNav', '1-1')
            this.goPath('reserveseat')
        },
    },
}
</script>

<style lang="less" scoped>
.back-home {
    box-sizing: border-box;
    padding: .1rem;

    .header {
        width: 100%;
        height: 100%;
        justify-content: space-between;
        
       
        .left-card {
            width: 40%;
            height: 100%;
            flex-flow: column;
            justify-content: space-between;

            .box-card {
                width: 100%;
                height: 100%;

                .title {
                    font-size: .13rem;
                    color: rgb(160, 180, 180);
                    justify-content: space-between;
                }

               
            }
        }

        .right-card {
            width: 60%;
            height: 100%;
            flex-flow: column;
            justify-content: space-between;

            .box-card {
                width: 100%;
                height: 100%;

                .title {
                    font-size: .13rem;
                    color: rgb(160, 180, 180);
                    justify-content: space-between;
                }

                .info {
                    font-size: .22rem;
                }
            }
        }
    }

    .floor {
        width: 100%;
        height: 55%;
        margin-top: 2%;
        border-radius: .05rem;
        box-shadow: 0 0 .1rem rgba(0, 0, 0, .1);

        .left-line {
            width: 70%;
            height: 100%;
            box-sizing: border-box;
            padding: .1rem;
        }

        .right-ranking {
            width: 30%;
            height: 100%;
            box-sizing: border-box;
            padding: .1rem .1rem .1rem 0;

            .ranking-title {
                font-size: .1rem;
            }

            .ranking-list {
                box-sizing: border-box;
                padding-top: .1rem;
                width: 100%;

                .ranking-item {
                    width: 100%;
                    font-size: .1rem;
                    box-sizing: border-box;
                    padding-bottom: .1rem;

                    .item-num {
                        width: 15%;

                        span {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            width: .13rem;
                            height: .13rem;
                        }

                        .radius {
                            color: #fff;
                            border-radius: 50%;
                            background-color: #333;
                        }
                    }

                    .item-floor {
                        width: 50%;
                    }

                    .item-count {
                        width: 35%;
                    }
                }
            }

        }
    }
}

.front-home {
    box-sizing: border-box;
    padding: 10px;
    flex-flow: column;
    // justify-content: space-evenly;

    .title {
        font-size: 50px;
        color: #555;
        font-weight: 900;
    }

    .intro {
        margin: 50px 0;
        font-size: 18px;
        flex-flow: column;
    }
}

</style>