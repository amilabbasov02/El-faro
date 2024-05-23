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
    function selectOption(optionElement) {
        var selectedSpan = $("#selectedOption");
        var selectedValue = $("#selectedValue");
        var selectedClass = $(optionElement).attr("class").split(" ")[1];
        var selectedText = $(optionElement).text();
        selectedSpan.attr("class", selectedClass);
        selectedSpan.text(selectedText);
        selectedSpan.css("background-color", $(optionElement).css("background-color"));
        selectedValue.val(selectedText).attr("class", selectedClass);
        $("#listContainer").hide();
    }
    function toggleListVisibility() {
        $("#listContainer").toggle();
    }
    $(".option").click(function() {
        selectOption(this);
    });
    $("#inputContainer").click(function() {
        toggleListVisibility();
    });
});