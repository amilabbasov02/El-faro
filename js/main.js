$(document).ready(function() {
    function formatState(state) {
        console.log(state);
        if (!state.id) {
            return state.text;
        }
        var baseUrl = state.element.getAttribute('data-image');
        var $state = $(
            '<span><img src="' + baseUrl + '" class="img-flag" /> ' + state.text + '</span>'
        );
        return $state;
    };
    $('.room_select').select2({
        // templateResult: formatState,
        // templateSelection: formatState
    });
    $('.number_select').select2({
        minimumResultsForSearch: Infinity
    });
    $('.room_select').on('select2:open', function() {
        $('.select2-search__field').attr('placeholder', 'Axtar');
    });
    $("#entryDate").datepicker({
        dateFormat: "dd-mm-yy",
        buttonText: "Seçin"
    })
    $("#exitDate").datepicker({
        dateFormat: "dd-mm-yy",
        buttonText: "Seçin"
    })
    function selectOption1(optionElement) {
        var selectedSpan = $("#selectedOption1");
        var selectedValue = $("#selectedValue1");
        var selectedClass = $(optionElement).attr("class").split(" ")[1];
        var selectedText = $(optionElement).text();
        selectedSpan.attr("class", selectedClass);
        selectedSpan.text(selectedText);
        selectedSpan.css("background-color", $(optionElement).css("background-color"));
        selectedValue.val(selectedText).attr("class", selectedClass);
        $("#listContainer1").hide();
    }

    function toggleListVisibility1() {
        $("#listContainer1").toggle();
    }

    $("#listContainer1 .option1").click(function() {
        selectOption1(this);
    });

    $("#inputContainer1").click(function() {
        toggleListVisibility1();
    });

    // İkinci etiket ve liste için
    function selectOption2(optionElement) {
        var selectedSpan = $("#selectedOption2");
        var selectedValue = $("#selectedValue2");
        var selectedClass = $(optionElement).attr("class").split(" ")[1];
        var selectedText = $(optionElement).text();
        selectedSpan.attr("class", selectedClass);
        selectedSpan.text(selectedText);
        selectedSpan.css("background-color", $(optionElement).css("background-color"));
        selectedValue.val(selectedText).attr("class", selectedClass);
        $("#listContainer2").hide();
    }

    function toggleListVisibility2() {
        $("#listContainer2").toggle();
    }

    $("#listContainer2 .option2").click(function() {
        selectOption2(this);
    });

    $("#inputContainer2").click(function() {
        toggleListVisibility2();
    });
    $(".more_btn").click(function(){
        $(".filter_inputs").toggleClass("active")
        $(this).toggleClass("active")
    })
});