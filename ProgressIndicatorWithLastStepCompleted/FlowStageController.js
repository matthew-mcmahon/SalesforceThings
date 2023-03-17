({
    init: function (component, event, helper) {
        var progressIndicator = component.find('progressIndicator');
        component.get('v.stages').forEach((step, index) => {
            $A.createComponent(
                "lightning:progressStep",
                {
                    "aura:id": step,
                    "label": step,
                    "value": step,
                    "class": (step == "Stage Closed") ? "slds-hide" : (index + 1 == component.get('v.stages').length - 1) ? "slds-show laststep" : "slds-show"
                },
                function (newProgressStep, status, errorMessage) {
                    if (status === "SUCCESS") {
                        var body = progressIndicator.get("v.body");
                        body.push(newProgressStep);
                        progressIndicator.set("v.body", body);
                    }
                    else if (status === "INCOMPLETE") {
                        // Show offline error
                        console.log("No response from server, or client is offline.")
                    }
                    else if (status === "ERROR") {
                        // Show error message
                        console.log("Error: " + errorMessage);
                    }
                }
          );
        
    })
}
})