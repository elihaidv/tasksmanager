<template lang="html">
<section class="add-task-dialog">
    <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
            <v-btn class="mx-2 plus" fab dark color="primary" @click="dialog = true">
                <h1>+</h1>
            </v-btn>
        </template>

        <v-card>
            <v-card-title class="headline grey lighten-2">
                Add New Task
            </v-card-title>

            <v-form class="pa-5" v-model="valid" ref="form">
                <v-text-field v-model="form.title" :rules="requireRule" label="Title" required></v-text-field>
                <v-text-field v-model="form.description" :rules="requireRule" label="Description" required></v-text-field>
                <v-overflow-btn :items="priorities" :rules="requireRule" v-model="form.priority" label="Priority" item-text="label" item-value="id" required ></v-overflow-btn>
            </v-form>

            <v-divider></v-divider>

            <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" text @click="add">
                    ADD
                </v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</section>
</template>

<script lang="js">
export default {
    name: 'add-task-dialog',
    props: [],
    mounted() {

    },
    data() {
        return {
            dialog: false,
            form: {},
            valid: true,
            requireRule: [
                v => !!v || 'Required Field'
            ],
        }
    },
    methods: {
      add(){
        if (this.$refs.form.validate()){
          this.dialog = false
          this.$store.dispatch('createTask', this.form)
          this.form = {}
        }
      }
    },
    computed: {

      priorities() {
        return this.$store.getters.priorities
      }
    }
}
</script>

<style scoped>
.plus {
    position: absolute;
    bottom: 50px;
    right: 50px;
}
</style>
