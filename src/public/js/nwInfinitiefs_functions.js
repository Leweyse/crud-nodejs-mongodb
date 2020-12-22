document.addEventListener('DOMContentLoaded', function nwInfinitiefs_form() {
    // New Werkwoord, Infinitiefs = 'nwi'
    const input_nwi = document.querySelectorAll('.nieuw_werkwoord__form--input');

    function nwInfinitief_uppercase() {
        for (let i = 0; i < input_nwi.length; i++) {
          function init_update() {
              input_nwi[i].style.width = minWidth + 'px';
              input_nwi[i].value = input_nwi[i].value.charAt(0).toUpperCase() + input_nwi[i].value.slice(1);
              if (input_nwi[i].scrollWidth > input_nwi[i].clientWidth) {
                  input_nwi[i].style.width = input_nwi[i].scrollWidth + 'px';
              }
          }
          minWidth = '70';
          input_nwi[i].addEventListener('input', init_update);
          init_update();
        }
    }

    nwInfinitief_uppercase();
}, false)
