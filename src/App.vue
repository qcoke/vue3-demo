<template>
  <TheBaseLayout>
    <template v-slot:content>
      <a-button @click="checkImage">One</a-button>
      <a-table
        v-bind:dataSource="dataSource"
        v-bind:columns="columns"
        :rowKey="(record) => record.id"
      />
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
          width: 220,
          dataIndex: "age",
          align: "center",
          key: "age",
        },
        {
          title: "邮箱",
          width: 220,
          dataIndex: "email",
          key: "email",
        },
        {
          title: "站点",
          dataIndex: "website",
          key: "website",
        },
      ],
    };
  },
  data() {
    return {
      dataSource: [],
    };
  },
  name: "App",
  components: {
    TheBaseLayout,
  },
  mounted() {
    this.loadData();
  },
  methods: {
    loadData() {
      const data = Mock.userList();
      console.info(data);
      this.dataSource = data.data;
    },
    // 使用 FaceID 来做图形识别
    checkImage() {
      
    },
  },
};
</script>
<style scoped></style>
