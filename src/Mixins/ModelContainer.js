module.exports = {

    props: {
        url: {
            type: String,
            default: null,
        },

        models: {
            type: Array,
            default() {
                return [];
            }
        }
    },

    ready() {
        if ( this.url ) {
            this.loadModels( this.url );
        }
    },

    methods: {

        loadModels( url ) {
            this.$http.get( url ).then( function(response) {
                this.$set( 'models', response.data.data )
            } );
        },

        addModel( model ) {
            this.models.push( model )
            this.$broadcast( 'ModelAdded', model );
        },

        removeModel( model ) {
            var indexOf = this.models.indexOf( model );
            this.models.splice( indexOf, 1);
        },

    },

    events: {

        'ModelCreated'( model ) {
            this.addModel( model );
        },

        'ModelDeleted'( model ) {
            this.removeModel( model );
        },

    }

}
