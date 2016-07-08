# @lassehaslev/restful-vue
> Helpers for showing, update and delete elements

## Install
Run ```npm install @lassehaslev/restful-vue --save``` in your project folder

This class contains mixins for making the use of restful apis easier.

We help you to add new items, update items and remove them from index with simple steps.

## Usage
To get any of the mixins just get what you want from the ```@lassehaslev/restful-vue```
``` js
import Vue from 'vue'

// Install plugin and dependencies
import RestfulVue from '@lassehaslev/restful-vue';
Vue.use( RestfulVue );

// Import everything
import { container, create, update, remove } from '@lassehaslev/restful-vue'

// If you only want the container
import { container } from '@lassehaslev/restful-vue'
```

#### Container
The container mixin is to handle list of items and index. This is also where we add newly created models, and remove them on delete.

The container is also the home of the objects that uses the [Create mixin](###Create ) and [Edit mixin](###Edit).
``` html
<template>
    <update v-for="model in models" :url="'/api/update/' + model.id" :model="model"></update>
    <create url="/api/store"></create>
</template>
<script>
    import { container } from '@lassehaslev/restful-vue'
    module.exports = {

        mixins: [ container ],

        components: {
            Create,
            Edit,
        }

    }
</script>
```

#### Create
Create is the mixin thats create an elements an push it in to the container
``` html
<template>
    <button @click="create" class="add">Create</button>
</template>
<script>
    import { create } from '@lassehaslev/restful-vue'
    module.exports = {
        mixins: [ create ],
    }
</script>
```

#### Update and Delete
The update mixin is for updating items. When updated the new items goes into the container index list. 

The Delete sends out that the item should be deleted and it gets removed from the container.
``` html
<template>
    <div>
        <form @submit="update">
            <input id="" type="text" v-model="model.name">
            <button type="submit">Update</button>
        </form>
        <span @click="delete">X</span>
    </div>
</template>
<script>
    import { update, remove } from '@lassehaslev/restful-vue'
    module.exports = {
        mixins: [ update, remove ],
    }
</script>
```

## Development
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev
```
