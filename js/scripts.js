$(document).ready(function() {
  $("#add-address").click(function() {
    $("#new-addresses").append('<div class="new-address">' + 
                                 '<div class="form-group">' + 
                                   '<label for="new-street">Street</label>' + 
                                   '<input type="text" class="form-control new-street">' + 
                                 '</div>' + 
                                 '<div class="form-group">' + 
                                   '<label for="new-city">City</label>' + 
                                   '<input type="text" class="form-control new-city">' + 
                                 '</div>' + 
                                 '<div class="form-group">' + 
                                   '<label for="new-state">State</label>' + 
                                   '<input type="text" class="form-control new-state">' + 
                                 '</div>' + 
                               '</div>');
  });

  $("form#new-contact").submit(function(event) {
  event.preventDefault();
	var firstName = $("input#new-first-name").val();
	var lastName = $("input#new-last-name").val();

	var newContact = { name: firstName + " " + lastName, 
					addresses: [] };

  $(".new-address").each(function(){
    var inputtedStreet = $(this).find("input.new-street").val();
    var inputtedCity = $(this).find("input.new-city").val();
    var inputtedState = $(this).find("input.new-state").val();

    var additionalAddresses = {thisstreet: inputtedStreet, thiscity: inputtedCity, thisstate: inputtedState};
    
    newContact.addresses.push(additionalAddresses);
  });

	var contactInsert = newContact.name;

	$("ul#contacts").append("<li><span class ='contact'>" + contactInsert + "</span></li>" + "</br>");

	$(".contact").last().click(function(){
      $("#show-contact").show();
      $("#show-contact h2").text(contactInsert);
      newContact.addresses.forEach(function(address) {  //for each property in the addresses object in the newContact variable (these properties are in the additional Addresses variable), run the following loop:
        $("ul#addresses").append("<li>" + address.thisstreet + ", " + address.thiscity + ", " + address.thisstate + "</li>");
      });
    });
  });
});

