<template>
  <div>
    <v-toolbar dark color="indigo">
      <router-link class="icon-link" to="/">
        <v-icon>mdi-arrow-left</v-icon>
      </router-link>
      <v-toolbar-title class="white--text">My Todo</v-toolbar-title>
    </v-toolbar>
    <v-text-field v-model="newAdd" placeholder="Input hear..."></v-text-field>
    <v-btn dark color="indigo" @click="addTodo()">ADD</v-btn>
  </div>
</template>

<script>
export default {
  data() {
    return { newAdd: "" };
  },
  methods: {
    addTodo() {
      if (!checkNewAdd(this.newAdd)) {
        alert("Please Input newAdd");
        return;
      }
      const todos = JSON.parse(localStorage.getItem("todos")) || [];
      todos.push(this.newAdd);
      localStorage.setItem("todos", JSON.stringify(todos));
      this.newAdd = "";
      this.$router.push("/");
    },
  },
};
function checkNewAdd(value) {
  let retFlg = true;
  if (value === "") {
    retFlg = false;
  }
  return retFlg;
}
</script>

<style scoped>
.icon-link {
  text-decoration: none;
}
</style>
