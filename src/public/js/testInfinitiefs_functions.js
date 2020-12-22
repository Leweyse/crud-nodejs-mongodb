document.addEventListener('DOMContentLoaded', function randomInputGame() {
    const af = "autofocus";
    const a_testInfinitiefs = document.getElementById('testInfinitiefs-t');
    const b_testInfinitiefs = document.getElementById('testInfinitiefs-ct');
    const c_testInfinitiefs = document.getElementById('testInfinitiefs-d');
    const d_testInfinitiefs = document.getElementById('testInfinitiefs-cd');

    input_answer = [a_testInfinitiefs, b_testInfinitiefs, c_testInfinitiefs, d_testInfinitiefs];
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

        input_answer[0].innerHTML = "<input type='text' id='testInfinitiefs-t' name='confirm_wInfinitief' value='{{wInfinitief}} readonly>";
        input_answer[3].innerHTML = "<input type='text' id='testInfinitiefs-cd' name='confirm_wInfinitief' placeholder='Confirme título' value='{{confirm_wInfinitief}}' autocomplete='off' autofocus=" + af + ">";
        input_answer[3].focus();

        updateWidth(3);

    } else {
        input_answer[0].style.display = 'none';
        input_answer[1].style.display = 'block';
        input_answer[2].style.display = 'block';
        input_answer[3].style.display = 'none';

        input_answer[2].innerHTML = "<input type='text' id='testInfinitiefs-d' name='confirm_wSpaans' value='{{wSpaans}} readonly>";
        input_answer[1].innerHTML = "<input type='text' id='testInfinitiefs-ct' name='confirm_wSpaans' placeholder='Confirme título' value='{{confirm_wSpaans}}' autocomplete='off' autofocus=" + af + ">";
        input_answer[1].focus();

        updateWidth(1);
    }

    console.log(random_value);
}, false)
