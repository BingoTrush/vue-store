<template>
  <div class="home" id="home" name="home">
    <!-- 轮播图 -->
    <div class="block">
      <el-carousel height="460px">
        <el-carousel-item v-for="item in carousel" :key="item.carousel_id">
          <img style="height:460px;" :src="item.imgPath" :alt="item.describes" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <!-- 轮播图END -->
    <div class="qir-search__search-results">
      <div class="item" v-for="item in list" :key="item.title" @click="onClick(item)">
        <img :src="item.bg" alt="bg" width="320">
        <div class="price">
          <h3 class="title">{{item.title}}</h3>
          <span class="cost">{{item.cost}}</span>
        </div>
        <p class="sub-title">
          {{item.subTitle}}
        </p>
        <div class="button-wrapper">
          <button 
            type="button"
            class="button-wrapper">
            <div  class="a-button__slot-wrapper">
              {{item.btn}}
            </div>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      carousel: [], // 轮播图数据
      list: [], // 手机商品列表
    };
  },
  created() {
    // 获取轮播图数据
    const carousel = [];
    const values = (imgPath, describes) => {
      carousel.push({
        carousel_id: carousel.length + 1,
        imgPath,
        describes
      })
    };
    values('/imgs/swipper/cms_1.jpg', '123456');
    values('/imgs/swipper/cms_2.jpg', '123456');
    values('/imgs/swipper/cms_3.jpg', '123456');
    values('/imgs/swipper/cms_4.jpg', '123456');

    this.carousel = carousel;

    this.list = [
      {
        bg: 'https://images.financemagnates.com/images/QIR3%202021_id_64219cae-3bb4-4aa8-a6a0-2866ef2c5c31_size900.jpg',
        title: 'Quarter 3 of 2021',
        cost: '€ 510',
        subTitle: 'Quarterly Intelligence Report for Q3 of 2021',
        btn: 'BUY'
      },
      {
        bg: 'https://images.financemagnates.com/images/QIR3%202021_id_64219cae-3bb4-4aa8-a6a0-2866ef2c5c31_size900.jpg',
        title: 'Quarter 3 of 2021',
        cost: '€ 510',
        subTitle: 'Quarterly Intelligence Report for Q3 of 2021',
        btn: 'BUY'
      },
      {
        bg: 'https://images.financemagnates.com/images/QIR3%202021_id_64219cae-3bb4-4aa8-a6a0-2866ef2c5c31_size900.jpg',
        title: 'Quarter 3 of 2021',
        cost: '€ 510',
        subTitle: 'Quarterly Intelligence Report for Q3 of 2021',
        btn: 'BUY'
      },
      {
        bg: 'https://images.financemagnates.com/images/QIR3%202021_id_64219cae-3bb4-4aa8-a6a0-2866ef2c5c31_size900.jpg',
        title: 'Quarter 3 of 2021',
        cost: '€ 510',
        subTitle: 'Quarterly Intelligence Report for Q3 of 2021',
        btn: 'BUY'
      }
    ]
  },
  methods: {
    onClick(item) {
      console.log(item);
      const title = `Confirm`;
      const content = `${item.subTitle}`;
      this.$alert(content, title, {
          confirmButtonText: 'Confirm',
          callback: action => {
            if (action === 'confirm') {
              this.showForm()
            }
          }
        });
    },
    showForm() {
      this.$message({
        type: 'info',
        message: `action`
      });
    }
  }
};
</script>
<style scoped>
@import "../assets/css/index.css";

.qir-search__search-results {
    max-width: 1225px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 30px;
}

.item {
    width: 320px;
    margin-bottom: 50px;
    font-size: 19px;
    &:hover {
      color: #69f;
      cursor: pointer;
      .button-wrapper{
        opacity: .7;
      }
    }
}

.price {
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  font-weight: bold;
}

.sub-title {
  white-space: pre-line;
  height: 86px;
  overflow: hidden;
  line-height: 29px;
}

.button-wrapper {
  position: relative;
    display: block;
    width: 140px;
    height: 40px;
    font-size: 14px;
    font-weight: 600;
    line-height: 16px;
    background: #69f;
    color: #fff;
    :hover {
      opacity: .7;
      cursor: pointer;
    }
}
</style>