<template>

    <li><span @click="update">{{ model.name }}</span> <span @click="delete" class="delete">X</span></li>

</template>

<script>
import { container, create, update, remove } from './RestfulVue'
export default {

    mixins: [ update, remove ],

    methods: {
    
        onUpdate() {
            this.$set( 'model.name', 'Updated' );
            this.itemUpdated( this.model );
        },
        onDelete() {
            this.itemDeleted();
        },

    },

}
</script>

<style>
    .delete {
        cursor: pointer;
    }
</style>
