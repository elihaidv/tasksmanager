<template lang="html">
<section class="task">
    <v-card class="mx-auto mt-5" max-width="500" :color="task.status ? 'success' : ''" @click="setStatus()">
        <v-list-item three-line>
            <v-list-item-content>
                <v-list-item-title class="headline mb-1">
                    {{ task.title }}
                </v-list-item-title>
                <v-list-item-subtitle>{{ task.description }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar size="60" class="priority col-3">
                <div>Priority</div>
                <h2>{{priority}}</h2>
            </v-list-item-avatar>

            <v-list-item-avatar size="60" class="priority col-3">
                <div>Status</div>
                <h2>{{task.status ? 'Done' : 'To Do'}}</h2>
            </v-list-item-avatar>
        </v-list-item>

        <v-card-actions >
            <DeleteTaskDialog :task="task" />
        </v-card-actions>
    </v-card>
</section>
</template>

<script lang="js">
import DeleteTaskDialog from '../components/DeleteTaskDialog';
export default {
    name: 'task',
    components: {
        DeleteTaskDialog
    },
    props: [
        'task'
    ],
    mounted() {

    },
    data() {
        return {

        }
    },
    methods: {
        setStatus(status) {
            this.task.status = !this.task.status;
            this.$store.dispatch('updateTask', this.task)
        },
    },
    computed: {
        priority() {
            return this.$store.getters.priorities.find(p => p.id == this.task.priority).label
        }
    }
}
</script>

<style scoped>
.priority {

    flex: 1;
    flex-direction: column;
    justify-content: space-around;
}
</style>
