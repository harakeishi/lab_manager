<template>
  <!-- アプリのヘッダー部分-->
  <div id="appHeader">
    <div class="Fourth_grader tab">
      <!-- ４年生のタブ-->
      <router-link to="/AvailabilitySituation" Schoolyear="4">４年生</router-link>
    </div>
    <div class="Third_grader tab">
      <!-- 3年生のタブ-->
      <router-link to="/AvailabilitySituation" Schoolyear="3">３年生</router-link>
    </div>
    <div class="Management tab">
      <!-- 管理画面用タブ-->
      <router-link to="/AvailabilitySituation" Schoolyear="0">管理画面</router-link>
    </div>
  </div>
</template>

<script>

export default {
  name: 'appHeader'
}

</script>

<style scoped>
#appHeader{
  text-align: center;/*文字を中央ぞろえ*/
  width: 100%;
  border-bottom: 2px solid rgb(119, 119, 119);
}
a{
  text-decoration: none;/*リンクの下線を非表示*/
  color: rgb(0, 0, 0);
}
.tab{
  display: inline-block;
  padding: 0 30px;
  font-size: 5vw;
  border-radius: 20px 45px 0 0;
}
.Fourth_grader{
  background-color: rgb(255, 206, 96);
}
.Third_grader{
  background-color: rgb(171, 255, 96);
}
.Management{
  background-color: rgb(96, 222, 255);
}

</style>
