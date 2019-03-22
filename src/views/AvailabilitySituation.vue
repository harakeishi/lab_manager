<template>
  <div id="AvailabilitySituation">
    <table border="1">
      <thead>
        <th></th><th>名前</th><th>ステータス</th>
      </thead>
      <tbody v-for="data in students">
        <td>{{data.img}}</td>
        <td>{{data.name}}</td>
        <td v-bind:class="{'stationing' : data.status == '在室',
        'OffCampus' : data.status == '学外',
        'OnCampus' : data.status == '学内'}">
        {{data.status}}</td>
      </tbody>
    </table>
  </div>
</template>

<script>

export default {
  name: 'AvailabilitySituation',
  data () {
    return {
      students: [
        {
          name: "学生1",
          status: "在室",
          img: "src"
        },
        {
          name: "学生２",
          status: "学外",
          img: "src"
        },
        {
          name: "学生３",
          status: "学内",
          img: "src"
        }
      ]
    }
  },
  props: {
    Schoolyear: String
  }
}
</script>

<style scoped>
#AvailabilitySituation{
  text-align: center;
  width: 100%;
}
table{
  width: 90%;
  margin: auto;
  font-size: 2vh;
  font-weight: bold;
}
.stationing{
  background-color: rgb(30, 126, 139);
  color: rgb(255, 255, 255);
}
.OffCampus{
  background-color: rgb(255, 50, 0);
  color: rgb(255, 255, 255);
}
.OnCampus{
  background-color: rgb(214, 202, 40);
  color: rgb(0, 0, 0);
}
</style>
