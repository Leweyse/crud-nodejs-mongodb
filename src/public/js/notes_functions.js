const notes_body = document.querySelectorAll('.notes_body')
const notes_grid = document.querySelectorAll('.notes__grid')
const notes_row = document.querySelectorAll('.notes__row')
const notes_element = document.querySelectorAll('.notes__row--element')
const notes_extraContent = document.querySelectorAll('.notes__row--extraContent')
const notes_tword = document.querySelectorAll('.notes--tword')
const notes_iconPencil = document.querySelectorAll('.notes--icon_pencil')
const notes_buttonDelete = document.querySelectorAll('.notes--button_delete')
const notes_principalContent = document.querySelectorAll('.notes__row--principalContent')
const notes_word = document.querySelectorAll('.notes--word')

const length_notesElement = notes_element.length;

function widthForEachWord ( arr ) {
    let result = [],
        temp = [];

    arr.forEach( function ( elem, i ) {
        if ( i > 0 && i % 5 === 0 ) {
            result.push( temp );
            temp = [];
        }
        temp.push( elem );
    });
    if ( temp.length > 0 ) {
        result.push( temp );
    }
    return result;
}

function customWidth() {
    function init_update() {
        for (let i = 0; i < length_notesElement; i++) {
            notes_element[i].style.width = minWidth + 'px';
            if (notes_word[i].scrollWidth > notes_element[i].clientWidth) {
                notes_element[i].style.width = notes_word[i].scrollWidth + 'px';
            }
        }
    }

    function init_update2() {
        for (let i of notes_element) {
            notes_element[i].style.width = minWidth + 'px';
            if (notes_word[i].scrollWidth > i.clientWidth) {
                i.style.width = notes_word[i].scrollWidth + 'px';
            }
        }
    }

    minWidth = '100';

    for (let i of notes_element) {
        i.addEventListener('load', init_update);
    }

    init_update();
}

customWidth();

var data = ['a', 'b', 'c', 'd', 'e', 'f', 'g'];

function transform ( arr ) {
    var result = [], temp = [];
    arr.forEach( function ( elem, i ) {
        if ( i > 0 && i % 5 === 0 ) {
            result.push( temp );
            temp = [];
        }
        temp.push( elem );
    });
    if ( temp.length > 0 ) {
        result.push( temp );
    }
    return result;
}

data = transform( data );

$( 'body' ).append( Handlebars.compile( $( '#template' ).html() )( data ) );
