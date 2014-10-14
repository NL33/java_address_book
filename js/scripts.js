$(document).ready(function() {
  $("form#new-contact").submit(function(event) {
  event.preventDefault();
	var firstName = $("input#new-first-name").val();
	var lastName = $("input#new-last-name").val();
	var contactAddress = $("input#new-address").val();

	var contact = {name: firstName + " " + lastName, 
					address: contactAddress };

	var contactInsert = contact.name;

	$("ul#contacts").append("<li><span class ='contact'>" + contactInsert + "</span></li>" + "</br>");

	$(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(contactInsert);
      $(".printname").text(contact.name);
     $(".printaddress").text(contact.address);
    });
  });
});

