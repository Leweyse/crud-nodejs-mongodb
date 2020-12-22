document.addEventListener('DOMContentLoaded', function randomInputGame() {
    const af = "autofocus";
    const a_catchy = document.getElementById('catchy-t');
    const b_catchy = document.getElementById('catchy-ct');
    const c_catchy = document.getElementById('catchy-d');
    const d_catchy = document.getElementById('catchy-cd');

    input_answer = [a_catchy, b_catchy, c_catchy, d_catchy];
    random_value = Math.floor(Math.random() * 10)

    function updateWidth(e) {
        function init_update() {
            // Establecemos el ancho inicial
            input_answer[e].style.width = minWidth + 'px';
            // Si el ancho interno es mayor al ancho externo
            if (input_answer[e].scrollWidth > input_answer[e].clientWidth) {
                // Establecemos el ancho interno
                input_answer[e].style.width = input_answer[e].scrollWidth + 'px';
            }
        }

        // Guardamos el ancho inicial
        minWidth = '50';
        // Cada vez que se ingrese un valor en el input
        input_answer[e].addEventListener('input', init_update);
        // Inicializamos el input con el ancho necesario
        init_update();
    }

    if (random_value % 2 === 0) {
        input_answer[0].style.display = 'block';
        input_answer[1].style.display = 'none';
        input_answer[2].style.display = 'none';
        input_answer[3].style.display = 'block';

        input_answer[0].innerHTML = "<input type='text' id='catchy-t' name='confirm_title' value='{{title}} readonly>";
        input_answer[3].innerHTML = "<input type='text' id='catchy-cd' name='confirm_title' placeholder='Confirme título' value='{{confirm_title}}' autocomplete='off' autofocus=" + af + ">";
        input_answer[3].focus();

        updateWidth(3);

    } else {
        input_answer[0].style.display = 'none';
        input_answer[1].style.display = 'block';
        input_answer[2].style.display = 'block';
        input_answer[3].style.display = 'none';

        input_answer[2].innerHTML = "<input type='text' id='catchy-d' name='confirm_description' value='{{description}} readonly>";
        input_answer[1].innerHTML = "<input type='text' id='catchy-ct' name='confirm_description' placeholder='Confirme título' value='{{confirm_title}}' autocomplete='off' autofocus=" + af + ">";
        input_answer[1].focus();

        updateWidth(1);
    }

    console.log(random_value);
}, false)
