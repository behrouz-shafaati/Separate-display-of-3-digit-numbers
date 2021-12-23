//3 ragham 3 ragham kardan ba farakhani tabe
selector = ".sheet-content input.number";
function _3digits(var selector){ 
    jQuery( selector ).each(function( index ) {
        var number = jQuery( this ).val().replace(/\,/g, ''); //delete ',' from string

        number = number.split('').reverse().join('')
        .replace(/(\d{3})/g, '$1,').replace(/\,$/, '')
        .split('').reverse().join('');
        jQuery( this ).val( number ) ; //Add ',' between all three digits
      });
}
