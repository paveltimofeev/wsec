var app = new Vue({
  el: '#app',
  data: {
    message: 'Click on me!',
    domain: '',
    email: '',
    ip: '',
    checks: checks
  },
  methods: {
    isValid: function( check ){
        
        switch( check.type )
        {
            case "IP":
                return this.ip !== '';
            case "DOMAIN":
                return this.domain !== '';
            case "EMAIL":
                return this.email !== '';
            case "*":
                return true;
            default:
                return false;
        }
    },
    openCheck: function( check ){
    
        if( this.domain && check.url_mask ){
            window.open( check.url_mask.replace("%DOMAIN%", this.domain), null, );
        }
        else if( this.ip && check.ip_mask ){
            window.open( check.ip_mask.replace("%IP%", this.ip), null, );
        }
        else if( this.email && check.mask ){
            window.open( check.mask.replace("%EMAIL%", this.email), null, );
        }
        else if( check.ip_mask ){
            window.open( check.ip_mask, null, );
        }
    }
  }
})