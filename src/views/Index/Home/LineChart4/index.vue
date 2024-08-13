<template>  
  <div class="container">  
    <img :src="currentImageUrl" alt="image" />  
     <div class="index-display">step: {{ currentIndex + 1 }}</div>  
  </div>  
</template>  
  
<script>  
export default {  
  props: ['test_detail_id', 'episode_id'],  
  data() {  
    return {  
      currentIndex: 0,  
      // imageFiles: [], // 假设这是从服务器或某处获取的图片文件名列表  
      imageFiles : [],
      intervalId: null,  
      delay: 1000, // 图片切换时间间隔，单位毫秒  
      imageUrlPrefix: "../../../../assets/picture/" // 注意：这里应该是部署后的路径  
    };  
  },  
  computed: {  
    currentImageUrl() {  
    // 确保 imageFiles 数组不为空且 currentIndex 在有效范围内  
    if (this.imageFiles.length === 0 || this.currentIndex >= this.imageFiles.length) {  
      console.log("wuwuwuwu")
      return '../../../../assets/picture/1/1/image1.jpg'; // 或者返回一个默认图片 URL  
    }  
    console.log("sssss")
    // 从 imageFiles 数组中获取当前索引对应的文件名  
    const fileName = this.imageFiles[this.currentIndex];  
    // 构建图片 URL（注意：这里不使用 require）  
    // return require(this.imageUrlPrefix+this.test_detail_id+this.episode_id+fileName)
    return require('../../../../assets/picture/'+this.test_detail_id+'/'+this.episode_id+'/'+fileName)
    // return `${this.imageUrlPrefix}${this.test_detail_id}/${this.episode_id}/${fileName}`;  
    
  }  
},  
  watch: {  
    'episode_id': function(newVal) {  
      this.loadImageFiles(newVal);  
      this.currentIndex = 0; // 重置为第一张图片  
    },  
    'test_detail_id': function(newVal) {  
      this.loadImageFiles(this.episode_id); // 假设test_detail_id也影响图片列表  
      this.currentIndex = 0; // 重置为第一张图片  
    }  
  },  
  methods: {  
    loadImageFiles(episodeId) {  
    // 这里应该是从服务器或某处获取图片文件名列表的逻辑  
    // 为了示例，我们直接模拟一个列表  
    // 注意：确保这个列表在组件使用之前就已经准备好了  
    this.imageFiles = ['image1.png', 'image2.png', 'image3.png','image4.png', 'image5.png', 'image6.png','image7.png', 'image8.png', 'image9.png','image10.png', 'image11.png', 'image12.png','image13.png', 'image14.png', 'image15.png','image16.png', 'image17.png', 'image18.png','image19.png', 'image20.png']; // 假设列表  
    // 如果这个列表是异步加载的，您可能需要在加载完成后触发某种更新（如使用 Vuex, EventBus 或简单的 this.$forceUpdate()）  
  },   
    nextImage() {  
      this.currentIndex = (this.currentIndex + 1) % this.imageFiles.length;  
    },  
    startCarousel() {  
      this.intervalId = setInterval(this.nextImage, this.delay);  
    },  
    stopCarousel() {  
      if (this.intervalId) {  
        clearInterval(this.intervalId);  
        this.intervalId = null;  
      }  
    }  
  },  
  mounted() {  
    this.loadImageFiles(this.episode_id); // 组件挂载时加载图片列表  
    this.startCarousel(); // 开始轮播  
  },  
  beforeDestroy() {  
    this.stopCarousel(); // 组件销毁前停止轮播  
  }  
};  
</script>  
  
  
<style lang="less" scoped>  
.container {  
  position: relative;  
  width: 100%;  
  height: 100%;  
  overflow: hidden;  
}  
  
.container img {  
  max-width: 100%;  
  max-height: 100%;  
}  
  
.index-display {  
  position: absolute;  
  bottom: 10px;  
  left: 50%;  
  transform: translateX(-50%);  
  // color: #fff;  
  color: 'rgba(180, 180, 180, 0.2)' ;
  // background-color: rgba(0, 0, 0, 0.5); // 可选：添加背景色以增加可读性  
  font-size:20px;
  padding: 5px 10px;  
  border-radius: 5px;  
}  
</style>