<template>

    <button @click="create">Create new</button>

</template>

<script>
import { container, create, update, remove } from './RestfulVue'
export default {

    mixins: [ create ],

    methods: {
    
        onCreate() {
            this.itemCreated( {
                name: 'Hello world',
            } );
        }

    },

}
</script>

<style>
</style>
