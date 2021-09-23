<template>
  <TheBaseLayout>
    <template v-slot:content>
      <a-table :dataSource="dataSource" :columns="columns" />
    </template>
  </TheBaseLayout>
</template>

<script lang="ts">
import TheBaseLayout from "./components/TheBaseLayout.vue";
import Mock from "./mock/mock";

export default {
  setup() {
    return {
      columns: [
        {
          title: "姓名",
          width: 120,
          dataIndex: "name",
          key: "name",
        },
        {
          title: "年龄",
          width: 120,
          dataIndex: "age",
          key: "age",
        },
        {
          title: "邮箱",
          width: 220,
          dataIndex: "email",
          key: "email",
        },{
          title: "站点",
          dataIndex: "website",
          key: "website",
        },
      ],
    };
  },
  data(){
    return {
      dataSource: []
    }
  },
  name: "App",
  components: {
    TheBaseLayout,
  },
  mounted(){
    this.loadData();
  },
  methods: {
    loadData(){
      const data = Mock.userList();
      console.info(data)
      this.dataSource = data.data;
    }
  },
};
</script>
<style scoped>
</style>
