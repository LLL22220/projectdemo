<template>
  <div class="users">
    <!-- 头部 -->
    <div class="head">
      <a-button class="editable-add-btn" @click="handleAdd">新增</a-button>
      <a-button class="editable-add-btn" @click="ceshi">测试</a-button>
      <a-form layout="inline">
        <a-form-item label="请输入">
          <a-input placeholder="请输入用户名"></a-input>
        </a-form-item>
        <a-form-item>
          <a-button type="primary">搜索</a-button>
        </a-form-item>
      </a-form>
    </div>
    <!-- 表格 -->
    <a-table :columns="columns" :data-source="data" bordered>
      <template
        v-for="col in ['name', 'age', 'address']"
        :slot="col"
        slot-scope="text, record"
      >
        <div :key="col">
          <a-input
            v-if="record.editable"
            style="margin: -5px 0"
            :value="text"
            @change="(e) => handleChange(e.target.value, record.key, col)"
          />
          <template v-else>
            {{ text }}
          </template>
        </div>
      </template>

      <template slot="operation" slot-scope="text, record">
        <div class="box">
          <div class="editable-row-operations">
            <span v-if="record.editable">
              <a @click="() => save(record.key)">Save</a>

              <a-popconfirm
                title="Sure to cancel?"
                @confirm="() => cancel(record.key)"
              >
                <a>Cancel</a>
              </a-popconfirm>
            </span>
            <span v-else>
              <a :disabled="editingKey !== ''" @click="() => edit(record.key)"
                >Edit</a
              >
            </span>
          </div>
          <div class="editable-row-operations">
            <span>
              <a
                :disabled="editingKey !== ''"
                @click="() => onDelete(record.key)"
                >Delete</a
              >
            </span>
          </div>
        </div>
      </template>
    </a-table>
  </div>
</template>

<script>
// 定义列
const columns = [
  {
    title: "name",
    dataIndex: "name",
    width: "25%",
    scopedSlots: { customRender: "name" },
  },
  {
    title: "age",
    dataIndex: "age",
    width: "15%",
    scopedSlots: { customRender: "age" },
  },
  {
    title: "address",
    dataIndex: "address",
    width: "40%",
    scopedSlots: { customRender: "address" },
  },
  {
    title: "operation",
    dataIndex: "operation",
    scopedSlots: { customRender: "operation" },
  },
];
// 初始化数组
const data = [];
for (let i = 1; i < 5; i++) {
  data.push({
    key: i.toString(),
    name: `学生 ${i}`,
    age: 15,
    address: `人民路 ${i}号`,
  });
}
export default {
  created() {
    this.$emit("sendtitle", this.title);
  },
  data() {
    this.cacheData = data.map((item) => ({ ...item }));
    return {
      title: "用户管理",
      data,
      columns,
      editingKey: "",
    };
  },
  methods: {
    handleChange(value, key, column) {
      const newData = [...this.data];
      const target = newData.find((item) => key === item.key);
      if (target) {
        target[column] = value;
        this.data = newData;
      }
    },
    onDelete(key) {
      const newdata = [...this.data];
      this.data = newdata.filter((item) => item.key !== key);
    },
    edit(key) {
      const newData = [...this.data];
      const target = newData.find((item) => key === item.key);
      this.editingKey = key;
      if (target) {
        target.editable = true;
        this.data = newData;
      }
    },
    save(key) {
      const newData = [...this.data];
      const newCacheData = [...this.cacheData];
      const target = newData.find((item) => key === item.key);
      const targetCache = newCacheData.find((item) => key === item.key);
      if (target && targetCache) {
        delete target.editable;
        this.data = newData;
        Object.assign(targetCache, target);
        this.cacheData = newCacheData;
      }
      this.editingKey = "";
    },
    cancel(key) {
      const newData = [...this.data];
      const target = newData.find((item) => key === item.key);
      this.editingKey = "";
      if (target) {
        Object.assign(
          target,
          this.cacheData.find((item) => key === item.key)
        );
        delete target.editable;
        this.data = newData;
      }
    },
    handleAdd() {
      const i = data.length+1;
      data.push({
        key: i.toString(),
        name: `学生 ${i}`,
        age: 15,
        address: `人民路 ${i}号`,
      });
      this.i = i + 1;
    },
    ceshi(){
      let a = data.length+1
      window.console.log(data);
      window.console.log(a);
      
    }
  },
};
</script>
<style scoped>
.users {
  height: 92%;
  border: solid 5px;
}
.head {
  display: flex;
  justify-content: space-between;
  width: 100%;
  height:5%;
}
.editable-row-operations a {
  margin-right: 8px;
}

.box {
  display: flex;
}
</style>

