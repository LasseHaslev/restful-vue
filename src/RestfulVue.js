import CreateModelMixin from './Mixins/CreateModel';
import UpdateModelMixin from './Mixins/UpdateModel';
import DeleteModelMixin from './Mixins/DeleteModel';
import ModelContainer from './Mixins/ModelContainer';

import VueResource from 'vue-resource';

export default function install( Vue ) {
    Vue.use( VueResource );
}

export {
    ModelContainer as container,
    CreateModelMixin as create,
    UpdateModelMixin as update,
    DeleteModelMixin as remove,
}
// export object CreateModelMixin;
// export UpdateModelMixin;
// export DeleteModelMixin;
