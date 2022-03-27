$(document).ready(function(){
    $('.phone').mask("+7 (999) 999-9999");

    $(document).on("click", "#form-button", function() {
        $.ajax({
            type: "POST",
            url: "https://kotzdorov.ru/api/request/gemotest",
            data: {
                name: $("#form-name").val(),
                phone: $("#form-phone").val(),
                email: $("#form-email").val(),
            },
            success: function(data) {
                data = JSON.parse(data);
                if(data.status == 'fail') {
                    $('#form-error').show();
                    $('#form-promocode').val('');
                }

                if(data.status == 'success') {
                    $('#form-error').hide();
                    $('#form-promo').hide();
                    $('#form-result').show();
                    $('#form-promocode').val(data.message);
                }
            }
        });

        return false;
    });
});

function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();