<template>
  <div class="container" id="app">
    <div class="part">
      <img src="@/assets/1.jpg" alt />
      <input class="btn" type="button" value="立即下载" />
    </div>
    <div class="part part2">
      <div class="title">
        <div>开户福利</div>
      </div>
      <div class="fuli">
        <img src="@/assets/fuli.png" alt />
      </div>
      <div @click="showPopup">点击查看活动规则 >>></div>
      <van-popup v-model="show" closeable :style="{height:'30%'}">内容内容内容内容内容内容内容</van-popup>
    </div>
    <div class="part part2">
      <div class="title">
        <div>集金号 · 炒黄金明智之选</div>
      </div>
      <img src="@/assets/chao.png" alt />
    </div>
    <div class="part">
      <div class="title">
        <div>炒黄金 · 用集金</div>
      </div>
      <div class="box">
        <p>1.集金号携手财经垂直门户网站'金投网'提供综合性黄金投资服务</p>
        <p>2. 集金号与工商银行、浦发银行等达成合作，共同推广黄金白银T+D业务</p>
        <p>3. 交易平台是经国务院批准、由人民银行组建的上海黄金交易所</p>
      </div>
    </div>
    <div class="bottom">
      <p>投资有风险，入市须谨慎</p>
      <p>copyright 版权所有©2008-2019杭州集金号网络科技有限公司 浙ICP备16032008</p>
    </div>
    <div class="fixed">
      <div class="left">
          <div>
        <img src="@/assets/logo.png" alt />
          </div>
        <div class="left-text">
          <span>炒黄金</span>
          <span>上集金号</span>
        </div>
      </div>
      <div class="right">
      <input class="btn2" type="button" value="立即下载" />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show: false
    };
  },

  methods: {
    showPopup() {
      this.show = true;
    }
  }
};
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: rgb(255, 237, 154);
  margin: 0;
  background: #c51200;
  overflow: hidden;
}
.part {
  width: 100%;
  position: relative;
}
.part2 {
  margin-top: 2rem;
}
img {
  width: 100%;
}
.btn {
  border: 0;
  border-radius: 1rem;
  font-size: 1.1rem;
  font-weight: bold;
  padding: 0.6rem 6rem;
  background: rgb(250, 211, 56);
  color: red;
  position: absolute;
  bottom: 5rem;
  left: 50%;
  transform: translate(-50%);
}
.title {
  width: 100%;
  font-size: 1.2rem;
  background: url("./assets/title.png") no-repeat 100%;
  background-size: 100% 100%;
}
.fuli {
  width: 100%;
}
.box {
  width: 100%;
  margin-top: 1rem;
  padding-left: 1rem;
}
.box p {
  margin: 0;
  font-size: 0.5rem;
  text-align: left;
}
.bottom {
  font-size: 0.5rem;
  color: #ccc;
  padding-bottom: 5rem;
}
.fixed {
  position: fixed;
  bottom: 0;
  width: 100%;
  height: 3.5rem;
  background: rgb(255, 237, 154);
  padding: 0.3rem 1rem;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
}
.left {
  display: flex;
  height: 100%;
  color: #c51200;
  font-size: .8rem;
}
.left img {
  height: 100%;
}
.left-text {
  margin-left: 1rem;
  text-align:left;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.right {
    padding: .3rem 0;
}
.btn2 {
    background: #c51200;
    width: 100%;
    height: 100%;
    padding: 0 1rem;
    border: 0;
}
</style>