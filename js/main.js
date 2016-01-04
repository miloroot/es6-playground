$( function() {
  "use strict";

  let working = "jQuery loaded.";
  console.log( working );

  let $name    = $( '.name' ),
      $age     = $( '.age' ),
      $form    = $( '.theform' ),
      $display = $( '.display' );

  $form.on( 'submit', function() {
    $display.append( $name.val() + "<br>" + $age.val() );

    return false;
  });

});
