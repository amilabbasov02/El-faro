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
        buttonText: "Seçin",
    })
    $(".birthday").datepicker({
        changeMonth: true,
        changeYear: true,
        yearRange: "c-100:c+10"
    })
    function selectOption1(optionElement) {
        var selectedSpan = $("#SelectedStatusDiv1");
        var selectedValue = $("#selectedStatus1");
        var selectedClass = $(optionElement).attr("class").split(" ")[1];
        var selectedText = $(optionElement).text();
        selectedSpan.attr("class", selectedClass);
        selectedSpan.text(selectedText);
        selectedSpan.css("background-color", $(optionElement).css("background-color"));
        selectedValue.val(selectedText).attr("class", selectedClass);
        $("#statusList1").hide();
    }
    
    function toggleListVisibility1() {
        $("#statusList1").toggle();
    }
    
    $(document).on("click", "#statusList1 .statusOption1", function() {
        selectOption1(this);
    });
    
    $("#statusContainer1").click(function() {
        toggleListVisibility1();
    });
    

    function selectstatusOption(optionElement) {
        var selectedSpan = $("#SelectedStatusDiv");
        var selectedValue = $("#selectedStatus");
        var selectedClass = $(optionElement).attr("class").split(" ")[1];
        var selectedText = $(optionElement).text();
        selectedSpan.attr("class", selectedClass);
        selectedSpan.text(selectedText);
        selectedSpan.css("background-color", $(optionElement).css("background-color"));
        selectedValue.val(selectedText).attr("class", selectedClass);
        $("#statusList").hide();
    }

    function toggleListVisibility2() {
        $("#statusList").toggle();
    }

    $(document).on("click", "#statusList .statusOption", function() {
        selectstatusOption(this);
    });

    $(document).on("click", "#statusContainer", function() {
        toggleListVisibility2();
    });
    $(".more_btn").click(function(){
        $(".filter_inputs").toggleClass("active")
        $(this).toggleClass("active")
    })
    $(function() {
        $('input[name="daterange"]').daterangepicker({
            opens: 'left',
            locale: {
                format: 'MM/DD/YYYY'
            }
        }, function(start, end, label) {
            console.log("A new date selection was made: " + start.format('MM/DD/YYYY') + ' to ' + end.format('MM/DD/YYYY'));
        });
    });
    $('.password img').click(function(){
        var input = $(this).siblings('.users_input');
        if (input.attr('type') === 'password') {
            input.attr('type', 'text');
            $(".password img").toggle();
        } else {
            input.attr('type', 'password');
            $(".password img").toggle();
        }
    });
    $('.create_form').on('submit', function() {
        event.preventDefault();

        var allFilled = true;
    
        $('.create_form input').each(function() {
            var input = $(this);
            if (input.val().trim() === '') {
                input.parent().addClass('error');
                allFilled = false;
            } else {
                input.parent().removeClass('error');
            }
        });
    
        if (allFilled) {
            $('.notification_access').css('display', 'flex').fadeIn();
    
            setTimeout(function() {
                $('.notification_access').fadeOut();
            }, 2000);
        }
    });
    $(".delete").click(function(){
        $(".pop_up").toggle()
    })
    $(".back_btn").click(function(){
        $(".pop_up").toggle()
    })
    $(".close_btn").click(function(){
        $(".pop_up").toggle()
    })
    $(".pop_bg").click(function(){
        $(".pop_up").toggle()
    })
    $(".delete_btn").click(function(){
        $('.notification_deleted').css('display', 'flex').fadeIn();
        setTimeout(function() {
            $('.notification_deleted').fadeOut();
        }, 2000);
        $(".pop_up").toggle()
    })
    $(".text_input").on("input", function(){
        var inputValue = $(this).val();
        $(this).val(inputValue.replace(/[^a-zA-Z]/g, ''));
    });
    $(".birthday").on("input",function(){
        var inputValue = $(this).val();
        var numericValue = inputValue.replace(/[^\d./\-]/g, '');
    })
    $(".phone").on("input", function(){
        var inputValue = $(this).val();
        var numericValue = inputValue.replace(/\D/g, '');
        if (numericValue.length > 0) {
            numericValue = "+" + numericValue;
        }
        var formattedValue = numericValue.replace(/(\+\d{3})(\d{2})(\d{3})(\d{2})(\d{2})/, "$1 $2 $3 $4 $5");
        $(this).val(formattedValue);    
    });
    var options = {
        series: [
            {
                name: 'Rezervasiya sayı',
                type: 'line',
                data: [
                    [new Date('2024-05-21').getTime(), 10],
                    [new Date('2024-05-22').getTime(), 14],
                    [new Date('2024-05-23').getTime(), 6],
                    [new Date('2024-05-24').getTime(), 18],
                    [new Date('2024-05-25').getTime(), 8],
                    [new Date('2024-05-26').getTime(), 12],
                    [new Date('2024-05-27').getTime(), 16]
                ]
            },
            {
                name: 'Məbləğ',
                type: 'line',
                data: [
                    [new Date('2024-05-21').getTime(), 10],
                    [new Date('2024-05-22').getTime(), 12],
                    [new Date('2024-05-23').getTime(), 6],
                    [new Date('2024-05-24').getTime(), 15],
                    [new Date('2024-05-25').getTime(), 8],
                    [new Date('2024-05-26').getTime(), 10],
                    [new Date('2024-05-27').getTime(), 12]
                ]
            },
            {
                name: 'Ödənilmiş məbləğ',
                type: 'line',
                data: [
                    [new Date('2024-05-21').getTime(), 8],
                    [new Date('2024-05-22').getTime(), 12],
                    [new Date('2024-05-23').getTime(), 5],
                    [new Date('2024-05-24').getTime(), 14],
                    [new Date('2024-05-25').getTime(), 8],
                    [new Date('2024-05-26').getTime(), 10],
                    [new Date('2024-05-27').getTime(), 10]
                ]
            }
        ],
        chart: {
            type: 'line',
            height: 400,
            stacked: false,
        },
        colors: ['#FFA500', '#0000FF', '#008000'],
        dataLabels: {
            enabled: false
        },
        stroke: {
            curve: 'smooth',
            width: [2, 2, 2]
        },
        legend: {
            position: 'bottom',
            horizontalAlign: 'center'
        },
        xaxis: {
            type: 'datetime',
            labels: {
                format: 'dd.MM.yyyy'
            }
        },
        yaxis: [
            {
                seriesName: 'Rezervasiya sayı',
                min: 0,
                max: 20,
                labels: {
                    formatter: function (val) {
                        return val ;
                    }
                },
            },
            {
                seriesName: 'Məbləğ',
                opposite: true,
                min: 0,
                max: 20,
                labels: {
                    formatter: function (val) {
                        return val + "man";
                    }
                },
            },
            {
                seriesName: 'Ödənilmiş məbləğ',
                opposite: false,
                min: 0,
                max: 20,
                labels: {
                    formatter: function (val) {
                        return val + "man";
                    }
                },
                yaxis: {
                    labels: {
                        show: true // x ekseninde etiketlerin gösterilmesini sağlar
                    }
                }
            }
        ],
        tooltip: {
            x: {
                format: 'dd MMM yyyy'
            },
        },
    };

    var chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();
})