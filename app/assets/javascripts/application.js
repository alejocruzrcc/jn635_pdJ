// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//------ require bootstrap-datepicker/dist/js/bootstrap-datepicker
//= require sip/motor
//= require heb412_gen/motor
//= require_tree .

document.addEventListener('turbolinks:load', function() {
  var root;
  root = typeof exports !== "undefined" && exports !== null ? 
    exports : window;
  sip_prepara_eventos_comunes(root, null, false);
  heb412_gen_prepara_eventos_comunes(root);
  //mr519_gen_prepara_eventos_comunes(root);

  $(document).on('change', 'select[id$=_departamento]', (e) => {
    debugger
    llena_municipio($(e.target), root, true)
  }
  )
  $(document).on('change', 'select[id$=_municipio]', (e) => {
    llena_clase($(e.target), root, true)
  }
  )

});


