var FormHelpers = require( './Helpers' );
export default {

    mixins: [ FormHelpers ],

    props: {
        url: {
            type: String,
        }
    },

    data() {
        return {
            model: {},
            modelBackup: null,
        };
    },

    ready() {
        this.$set( 'modelBackup', this.clone( this.model ) );
    },

    events: {
        'ModelAdded'() {
            this.$set( 'model', this.clone( this.modelBackup ) );
        }
    },

    methods: {

        create() {
            this.onCreate();
        },

        beforeCreate() {},
        onCreate() {
            this.beforeCreate();
            if ( this.url ) {
                return this.$http.post( this.url, this.dataFormat() ).then( function( request ) {
                    this.itemCreated( request.data.data );
                } ). catch( function( reason ) {
                    this.itemError( reason.data )
                } );
            }

            // Else
            this.itemCreated( this.model );
        },

        dataFormat() {
            return {
                data: this.model,
            }
        },

        itemCreated( item ) {
            var copy = this.clone( item );
            this.$dispatch( 'ModelCreated', copy );
        },

        itemError( data ) {
            this.$dispatch( 'ModelError', data );
        },


    },

}
