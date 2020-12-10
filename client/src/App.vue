<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <h1>Task Manager</h1>
      </div>

      <v-spacer></v-spacer>

    
    </v-app-bar>

    <v-main>
      <Tasks/>
    </v-main>
  </v-app>
</template>

<script>
import Tasks from './views/Tasks';

export default {
  name: 'App',

  components: {
    Tasks,
  },

  data: () => ({
    //
  }),
};
</script>
