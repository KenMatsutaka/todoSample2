<template>
  <div>
    <v-toolbar color="indigo" dark>
      <v-toolbar-title class="white--text">My Todo</v-toolbar-title>
    </v-toolbar>
    <v-list>
      <template v-for="(todo, index) in todos">
        <v-list-item v-bind:key="index">
          <v-list-item-content>{{todo}}</v-list-item-content>
          <v-list-item-action>
            <v-btn icon>
              <v-icon @click="deleteTodo(index)">mdi-delete</v-icon>
            </v-btn>
          </v-list-item-action>
        </v-list-item>
        <v-divider v-bind:key="`divider-${index}`"></v-divider>
      </template>
    </v-list>
    <div class="bottom-right">
      <v-btn fab color="indigo">
        <v-icon color="white" @click="addTodo()">mdi-plus</v-icon>
      </v-btn>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      todos: [],
    };
  },
  created() {
    //localStorage.setItem("todos", null);
    this.todos = JSON.parse(localStorage.getItem("todos")) || [];
  },
  methods: {
    deleteTodo(index) {
      this.todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(this.todos));
    },
    addTodo() {
      this.$router.push("/todos/add");
    },
  },
};
</script>

<style scoped>
.bottom-right {
  position: fixed;
  bottom: 0px;
  right: 0px;
}
</style>