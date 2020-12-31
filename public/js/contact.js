$(document).ready(function(){
    
    (function($) {
        "use strict";

    
    jQuery.validator.addMethod('answercheck', function (value, element) {
        return this.optional(element) || /^\bcat\b$/.test(value)
    }, "type the correct answer -_-");

    // validate contactForm form
    $(function() {
        $('#contactForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },
                club: {
                    required: true,
                    minlength: 2
                },
                event: {
                    required: true,
                    minlength: 4
                },
                number: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                date: {
                    required: true,
                    minlength: 4
                },
                time: {
                    required: true,
                    minlength: 4
                },
                venue: {
                    required: true,
                    minlength: 3
                }
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },
                club: {
                    required: "we need to know which club/ team you are representing...",
                    minlength: "your name must consist of at least 2 characters"
                },
                event: {
                    required: "come on, you have a event, don't you?",
                    minlength: "your subject must consist of at least 4 characters"
                },
                number: {
                    required: "we need your number to give you a callback!",
                    minlength: "your Number must consist of at least 10 characters"
                },
                email: {
                    required: "no email, no message"
                },
                date: {
                    required: "we need the date to know when to cover",
                    minlength: "thats all? really?"
                },
                time: {
                    required: "we need the time to know when to cover",
                    minlength: "thats all? really?"
                },
                venue: {
                    required: "we need the location to know where to cover",
                    minlength: "thats all? really?"
                }
            },
            submitHandler: function(form) {
                $("#formMessage").text("Thank you for your request, but we are not taking event coverage requests now, cuz, you know, the obvious, college is not functioning.");
                // $('#contactForm :input').attr('disabled', 'disabled');
                //         $('#contactForm').fadeTo( "slow", 1, function() {
                //             $(this).find(':input').attr('disabled', 'disabled');
                //             $(this).find('label').css('cursor','default');
                //             $('#success').fadeIn()
                //             $('.modal').modal('hide');
		        //         	$('#success').modal('show');
                //         })


                // $(form).ajaxSubmit({
                //     type:"POST",
                //     data: $(form).serialize(),
                //     url:"contact_process.php",
                //     success: function() {
                //         $('#contactForm :input').attr('disabled', 'disabled');
                //         $('#contactForm').fadeTo( "slow", 1, function() {
                //             $(this).find(':input').attr('disabled', 'disabled');
                //             $(this).find('label').css('cursor','default');
                //             $('#success').fadeIn()
                //             $('.modal').modal('hide');
		        //         	$('#success').modal('show');
                //         })
                //     },
                //     error: function() {
                //         $('#contactForm').fadeTo( "slow", 1, function() {
                //             $('#error').fadeIn()
                //             $('.modal').modal('hide');
		        //         	$('#error').modal('show');
                //         })
                //     }
                // })
            }
        })
    })

    $(function() {
        $('#emrForm').validate({
            rules: {
                name: {
                    required: true,
                    minlength: 2
                },                
                number: {
                    required: true,
                    minlength: 10
                },
                email: {
                    required: true,
                    email: true
                },
                insta: {
                    required: true,
                    minlength: 3
                }                
            },
            messages: {
                name: {
                    required: "come on, you have a name, don't you?",
                    minlength: "your name must consist of at least 2 characters"
                },               
                number: {
                    required: "we need your number to give you a callback!",
                    minlength: "your Number must consist of at least 10 characters"
                },
                email: {
                    required: "no email, no message"
                },
                insta: {
                    required: "we need your insta id to tag you when we post",
                    minlength: "your insta id must consist of at least 3 characters"
                }                         
            },
            submitHandler: function(form) {
                $("#formMessage").text("Thank you for your request, but we are not taking event coverage requests now, cuz, you know, the obvious, college is not functioning.");
                // $('#contactForm :input').attr('disabled', 'disabled');
                //         $('#contactForm').fadeTo( "slow", 1, function() {
                //             $(this).find(':input').attr('disabled', 'disabled');
                //             $(this).find('label').css('cursor','default');
                //             $('#success').fadeIn()
                //             $('.modal').modal('hide');
		        //         	$('#success').modal('show');
                //         })


                // $(form).ajaxSubmit({
                //     type:"POST",
                //     data: $(form).serialize(),
                //     url:"contact_process.php",
                //     success: function() {
                //         $('#contactForm :input').attr('disabled', 'disabled');
                //         $('#contactForm').fadeTo( "slow", 1, function() {
                //             $(this).find(':input').attr('disabled', 'disabled');
                //             $(this).find('label').css('cursor','default');
                //             $('#success').fadeIn()
                //             $('.modal').modal('hide');
		        //         	$('#success').modal('show');
                //         })
                //     },
                //     error: function() {
                //         $('#contactForm').fadeTo( "slow", 1, function() {
                //             $('#error').fadeIn()
                //             $('.modal').modal('hide');
		        //         	$('#error').modal('show');
                //         })
                //     }
                // })
            }
        })
    })
        
 })(jQuery)
})