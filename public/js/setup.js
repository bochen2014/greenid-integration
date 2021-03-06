	
	greenidJQuery("document").ready(function() {
				
				// The setup function initialises the greenID Simple UI and passes in key variables, 
				// such as the div ID where the form controls will be injected and the ID of your form.
				// A full list of parameters is available at https://vixverify.atlassian.net/wiki/display/GREEN/Using+the+SimpleUI#UsingtheSimpleUI-JavascriptSetupforRegisteringaNewPerson
			    greenidUI.setup({
				    environment: greenidEnvironment,	
				    formId: "theform",
				    frameId: "greenid-div",
				    country: "usethiscountry",
				    debug: false,
				    preSubmitValidationCallback: onValidation
			    });
			    
			    // if you want to override anything from the greenidConfig.js file, you would use this function
			    greenidConfig.setOverrides();
			    
			})
	window.addEventListener('message', function(event) { 
		//  // IMPORTANT: Check the origin of the data! 
        //if (~event.origin.indexOf('http://yoursite.com')) {
        if(event.data === 'submit' && $("#greenid-error-content").length === 0){
			$('#btn_submit').click()
			console.log(window.parent)
			window.parent.$("#test").val("test data from iframe")
		}
}); 