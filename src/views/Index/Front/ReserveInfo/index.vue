<template>
    <div class="home maxWH">
        <div class="back-home maxWH clearfix" >
            <!-- 头部 -->
            <div class="head-nav-f fixed">
               
                <div >
                      
                        <!-- <img src="../../assets/avatar.gif" alt="avatar" class="avatar"> -->
                        <!-- 下拉菜单 -->
                        <span class="drop-down-list">
                            <el-dropdown>
                                <span class="el-dropdown-link" style="color: #fff;">
                                    <span class="username text-ellipsis">{{ getUsername }}</span>
                               
                                    <i class="el-icon-arrow-down el-icon--right"></i>
                                </span>
                                <el-dropdown-menu slot="dropdown" >

                                    <el-dropdown-item v-for="item in testdetail[0].episode"  @click.native.prevent.stop="goPath1('episodeinfo',testdetail[0].test_id,item)" >
                                      <!-- {{ testdetail[0].test_id }} -->
                                        episode：{{ item }}
                                    </el-dropdown-item>
                                  
                                </el-dropdown-menu>
                               
                                
                            </el-dropdown>
                        </span>
                       
                       
                 </div>
                
            

            
                </div>
                <div class="head-nav-e fixed "> 
                    <input type="number"  v-model="episodeInput" placeholder="请输入指定episode" class="blue-border">  
                    <button @click.prevent.stop="goPath1('episodeinfo',testdetail[0].test_id,episodeInput)" >查看</button> 
                   
                
                </div>
                
            <div class="header flex-center">

                <!-- 左侧两个卡片 -->
                <div class="left-card flex-center">
                   
                        
                    <div class="title1">
                            <span>环境状态</span>
                        </div>
                            <LineChart4 :test_detail_id="test_detail_id":episode_id="episode_id"></LineChart4>
                        
                            <div class="title flex-center">
                            <!-- <span>动作选择</span> -->
                        </div>
                            <ScatterMap :echarts_info="echarts_list"></ScatterMap>
                            <span class="text">横坐标：step；纵坐标：0代表向左，1代表向右,对应每一步的动作选择</span>
                         
                </div>
                <div class="right-card flex-center">
                    <!-- <div class="title flex-center">
                            <span>shap</span>
                        </div>
                        <ShadowChart :echarts_info="echarts_list"></ShadowChart>
                         -->
                         <div class="title flex-center">
                            <!-- <span>价值函数</span> -->
                        </div>
                        <LineChart1 :echarts_info="echarts_list"></LineChart1>
                        <span class="text">横坐标：step；纵坐标：对应每个状态的长期价值</span>
                        <div class="title flex-center">
                            <!-- <span>Q值函数</span> -->
                        </div>
                            <HeatMap :echarts_info="echarts_list"></HeatMap>
                            <span class="text">横坐标：step；纵坐标：0代表向左，1代表向右,对应方块颜色深浅及具体数值代表当前step的Q值</span>
                        
                   
                </div>
                
            </div>
            <!-- 底部 -->
            <div class="floor flex-center">
                
                <div class="left-line">
                    <LineChart2 :echarts_info="echarts_list"></LineChart2>
                    <span class="text">横坐标：episode；纵坐标：奖励值</span>
                </div>
                <!-- 学习曲线 -->
                <div class="left-line">
                    <LineChart3 :echarts_info="echarts_list"></LineChart3>
                    <span class="text">横坐标：episode；纵坐标：损失值</span>
                </div>
                
            </div>
            <div class="floor ">
               
                <div class="title flex-center">
                <!-- <span>shap</span> -->
                 </div>
                <ShadowChart :echarts_info="echarts_list"></ShadowChart>
                        
                
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
            episodeInput: null, // 用于绑定input的值  
        }
    },
   
    computed: {
        ...mapGetters(['identity', 'echarts_info', 'get_time_arr', 'get_time_val_arr', 'get_time_dict','userinfo','testdetail','echarts_list']),
        getUsername() {
            return this.userinfo.username
        },
        getEpisodes() {
            return this.userinfo.username
        },
    },
    mounted() {
    this.getEchartsList();
  },
  created() {  
    this.episode_id = ''
    this.test_detail_id = this.$route.query.test_detail_id
    console.log(this.test_detail_id)
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
        goPath1(path,test_detail_id,episode_id) {
            
            // this.$router.push(this.getFrontPath(path))
            this.$router.push({path:path,query:{test_detail_id:test_detail_id,episode_id:episode_id}});
        },
        goPath(path) {
            this.$router.push(this.getFrontPath(path))
            // this.$router.push({path:path,query:{parent_id:id}});
        },
         // 去个人信息页
         goUserPath(path) {
            this.$refs.frontHeadNav.activeIndex = null
            this.goPath(path)
        },
        async getEchartsList(user_id) {
            let data = {};  
  
            data.test_detail_id = this.$route.query.test_detail_id;  
            data.episode_id =1;
            
            try {
                await this.$store.dispatch('getEchartsList', data)
                
            } catch (e) {
                console.warn(e.message)
            }
        },
    },
}
</script>

<style lang="less" scoped>
.back-home {
    box-sizing: border-box;
    padding: .1rem;

    .header {

        margin-top:80px;
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
                    font-size: .28rem;
                    // color: rgb(160, 180, 180);
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
        // border-radius: .05rem;
        // box-shadow: 0 0 .1rem rgba(0, 0, 0, .1);

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
.head-nav-f {
    z-index: 1;
    width: 10%;
    height: 50px;
    min-width: 100px;
    box-sizing: border-box;
    padding: 5px 10px;
    background: #324057;
    color: #fff;
    // border-bottom: 1px solid #1f2d3d;
    overflow: hidden;
    margin-top: 61px;
}

.head-nav-e {
    z-index: 1;
    width: 12%;
    height: 50px;
    min-width: 100px;
    box-sizing: border-box;
    padding: 5px 20px 10px 10px;
    background: #324057;
    color: #fff;
    // border-bottom: 1px solid #1f2d3d;
    overflow: hidden;
    margin-left: 150px;
    margin-top: 61px;
    font-size:14px;
    display:inline-block
}
.text{
    font-size:12px;
    padding-top:3px
}
.blue-border {  
  border: 1px solid #409EFF;  
}
.title1 {
        font-size: 18px;
        // color: #555;
        font-weight: 900;
        margin-right:480px
    }
</style>