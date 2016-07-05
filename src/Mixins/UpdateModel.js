var FormHelpers = require( './Helpers' );
module.exports = {

    props: {
        url: {
            type:String,
            required: true,
        },

        model: {
            type:Object,
            required: true,
        },
    },

    mixins: [ FormHelpers ],

    methods: {

        // Callable function
        update() {
            this.onUpdate();
        },

        // Function to be called when a form item has clicked confirm
        onUpdate() {

            if ( this.url ) {
                return this.$http.put( this.url, this.dataFormat() ).then( function( request ) {
                    this.itemUpdated( request.data.data );
                } ). catch( function( reason ) {
                    this.updateError( reason.data )
                } );
            }

            // Else
            this.itemUpdated( this.model );
        },

        dataFormat() {
            return {
                data: this.model,
            }
        },

        itemUpdated( item ) {
            var copy = this.clone( item );
            this.$broadcast( 'ModelUpdated', copy );
        },

        updateError( data ) {
            this.$broadcast( 'UpdateError', data );
        },

    },

    events: {

        // Catch the event where we confirm an form element 
        // Then call local value onUpdate
        'UpdateModel'() {
            this.update();
        },

    },

    // components: {

        // 'date-edit': require( '../Elements/Inline/Items/Date/Date' ),
        // 'text-edit': require( '../Elements/Inline/Items/Text/Text' ),
        // 'element-edit': require( '../Elements/Inline/Items/Element/Element' ),
        // 'time-edit': require( '../Elements/Inline/Items/Time/Time' ),
        // 'boolean-edit': require( '../Elements/Inline/Items/Boolean/Boolean' ),
        // 'image-edit': require( '../Elements/Inline/Items/Image/Image' ),
        // 'select-edit': require( '../Elements/Inline/Items/Select/Select' ),

    // }

}
