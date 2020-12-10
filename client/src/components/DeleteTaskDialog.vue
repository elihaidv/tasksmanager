<template lang="html">

  <section class="delete-task-dialog">
     <v-dialog
      v-model="dialog"
      width="500"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn text color="red" @click="reveal = true" 
          v-bind="attrs"
          v-on="on">
            delete
        </v-btn>
      </template>

      <v-card>
        <v-card-title class="headline grey lighten-2">
          Warning
        </v-card-title>

        <v-card-text class="mt-5">
          <h1>Delete Task {{ task.title }}, Are You Sure?</h1>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="error"
            text
            @click="deleteTask"
          >
            delete
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </section>

</template>

<script lang="js">

  export default  {
    name: 'delete-task-dialog',
    props: [
      'task'
    ],
    mounted () {

    },
    data () {
      return {
        dialog: false
      }
    },
    methods: {
      deleteTask() {
        this.dialog = false
        this.$store.dispatch('deleteTask', this.task)
      }
    },
    computed: {

    }
}


</script>

<style scoped >
  .delete-task-dialog {

  }
</style>
