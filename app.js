var app = new Vue({
  el: '#app',
  data: {
    domain: '',
    email: '',
    ip: '',
    checks: checks
  },
  methods: {
    isValid: function( check ){
        
        switch( check.type )
        {
            case "*":
                return true;
            default:
                return this[check.type.toLowerCase()] !== '';
        }
    },
    openCheck: function( check ){
    
        if( this[check.type.toLowerCase()] && check.mask ){
            window.open( check.mask.replace("%%", this[check.type.toLowerCase()]), null, );
        }
        else if( check.mask ){
            window.open( check.mask, null, );
        }
    }
  }
})