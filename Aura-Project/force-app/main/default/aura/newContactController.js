({
	createContact: function(component, event, helper) {
        let validExpense = component.find('contactform').reduce(function (validSoFar, inputCmp) {
            // Displays error messages for invalid fields
            inputCmp.showHelpMessageIfInvalid();
            return validSoFar && inputCmp.get('v.validity').valid;
        }, true);
        
        if(validExpense){
            // Create the new contact
            let newContact = component.get("v.newContact");
            console.log("Create expense: " + JSON.stringify(newContact));
            helper.createNewContact(component, newContact);
        }
    },
})