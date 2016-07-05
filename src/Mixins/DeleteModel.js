module.exports = {

    props: {
        url: {
            type: String,
            required: true,
        },

        model: {
            type: Object,
            required: true,
        }
    },

    methods: {
        delete() {
            this.beforeDelete();
            this.onDelete();
            this.afterDelete();
        },

        beforeDelete() {},
        afterDelete() {},

        onDelete() {
            if ( this.url ) {
                return this.$http.delete( this.url ).then( function( request ) {
                    this.itemDeleted();
                } ). catch( function( reason ) {
                    this.itemNotDeleted( reason );
                } );
            }
        },

        itemDeleted() {
            this.$dispatch( 'ModelDeleted', this.model );
        },
        itemNotDeleted( reason ) {
            this.$dispatch( 'DeleteError', reason.data );
        }

    }

}
