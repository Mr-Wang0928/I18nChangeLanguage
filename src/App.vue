<template>
  <div id="app">
    <div class="nav">
      <ul>
        <li>{{ $t("nav.home") }}</li>
        <li>{{ $t("nav.company") }}</li>
      </ul>
      <button class="btn" @click="chlanguage">中文/English</button>
      
    </div>
    <div class="content">
      <p style="font-size: 16px; text-align: center; display:inline-block">{{ $t("nav.content") }}</p>
    </div>
    
   
  </div>
</template>
<script>
export default{
  methods: {
    chlanguage(){
      console.log(this.$i18n.locale);
      let language = this.$i18n.locale === 'zh' ? 'en' : 'zh'
      this.$i18n.locale = language
    },

  }
}


</script>
<style lang="less">
  *{
    margin: 0;
    padding: 0;
  }
  li{
    list-style: none;
  }
  .nav{
    margin-left: auto;
    margin-right: auto;
    width: 500px;
    height: 100px;
    ul{
      float: left;
      height: 60px;
      line-height: 60px;
      li{
        float: left;
        width: 200px;
        text-align: center;
      }
    }
    .btn{
      width: 100px;
      height: 50px;
      background-color: green;
      border-radius: 6px;
      float: right;
    }
  }
  .content{
    text-align: center;
  }
</style>
