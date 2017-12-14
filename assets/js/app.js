$(document).ready(function() {
	//inicializar el funcionamiento del menu select del html//
    $('select').material_select();
    $('.modal').modal();

    $('#signUp').click(function(){
        $('#intro').hide();
        $('.sign').fadeIn(500);
    });

    $('#signBack').click(function(){
        $('.sign').fadeOut(500);
        $('#intro').show();
    });



    $('input#input_text').change(function() {
        if (($('input#input_text').val().length)===10){
            $('#signNext').removeClass('disabled');
        } else {
            $('#signNext').addClass('disabled');
        }
    });

    $('#signNext').click(function(){
        $('#code').empty();
        $('#code').append(Math.floor(Math.random() * 10001));
    });

    $('#acceptCode').click(function(){
        $('.sign').hide();
        $('.verify').fadeIn(500);
    });

    $('#verifyBack').click(function(){
        $('.verify').hide();
        $('.sign').fadeIn(500);
    });

    $('input#input_code').change(function() {
        if ($('input#input_code').val()===$('#code').text())
        {
            $('#validate').removeClass('disabled');
        } else {
            $('#validate').addClass('disabled');
        }
    });

    $('input:checkbox').change(
    function(){
        if ($(this).is(':checked')) {
            if ($('#name, #email').hasClass('valid')){
                $('#finish').removeClass('disabled');
            }
        } else {
            $('#finish').addClass('disabled');
        }
    })

    $('#finish').click(function(){
        $('section').hide();
        $('#end').show();
    });


 });

 $('#end').click(function() {
     $('#end').fadeOut(500);
     location.reload();
 });

$(function(){
    setTimeout(function() {
        $('#splash').fadeOut(500);
    }, 2000);

});
