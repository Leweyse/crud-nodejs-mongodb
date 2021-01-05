document.addEventListener('DOMContentLoaded', function randomInputGame() {
    const af = "autofocus";
    const a_testUitdrukkingen = document.getElementById('testUitdrukkingen-t');
    const b_testUitdrukkingen = document.getElementById('testUitdrukkingen-ct');
    const c_testUitdrukkingen = document.getElementById('testUitdrukkingen-d');
    const d_testUitdrukkingen = document.getElementById('testUitdrukkingen-cd');

    input_answer = [a_testUitdrukkingen, b_testUitdrukkingen, c_testUitdrukkingen, d_testUitdrukkingen];
    random_value = Math.floor(Math.random() * 10)

    function updateWidth(e) {
        function init_update() {
            input_answer[e].style.width = minWidth + 'px';
            if (input_answer[e].scrollWidth > input_answer[e].clientWidth) {
                input_answer[e].style.width = input_answer[e].scrollWidth + 'px';
            }

            input_answer[e].value = input_answer[e].value.charAt(0).toUpperCase() + input_answer[e].value.slice(1);
        }
        minWidth = '150';
        input_answer[e].addEventListener('input', init_update);
        init_update();
    }

    if (random_value % 2 === 0) {
        input_answer[0].style.display = 'block';
        input_answer[1].style.display = 'none';
        input_answer[2].style.display = 'none';
        input_answer[3].style.display = 'block';

        input_answer[0].innerHTML = "<input type='text' id='testUitdrukkingen-t' name='wInfinitief' value='{{uVlaams}} readonly>";
        input_answer[3].innerHTML = "<input type='text' id='testUitdrukkingen-cd' name='confirm_wInfinitief' placeholder='Confirme título' value='{{confirm_uVlaams}}' autocomplete='off' autofocus=" + af + ">";
        input_answer[3].focus();

        updateWidth(3);

    } else {
        input_answer[0].style.display = 'none';
        input_answer[1].style.display = 'block';
        input_answer[2].style.display = 'block';
        input_answer[3].style.display = 'none';

        input_answer[2].innerHTML = "<input type='text' id='testUitdrukkingen-d' name='wSpaans' value='{{uSpaans}} readonly>";
        input_answer[1].innerHTML = "<input type='text' id='testUitdrukkingen-ct' name='confirm_wSpaans' placeholder='Confirme título' value='{{confirm_uSpaans}}' autocomplete='off' autofocus=" + af + ">";
        input_answer[1].focus();

        updateWidth(1);
    }

    console.log(random_value);
}, false)
