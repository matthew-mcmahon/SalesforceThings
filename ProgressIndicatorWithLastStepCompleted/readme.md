# ProgressIndicator with Last Step Completed

This is based off the basic example provided by Salesforce at https://developer.salesforce.com/docs/atlas.en-us.lightning.meta/lightning/components_using_flow_stages.htm

This is a progress indicator example on a Salesforce aura component that makes the last stage in current stages invisible, and alters the second to last stage to appear as the last stage - allowing it to look like the whole progressindicator is completed.

It requires a pseudo-stage as the last stage that will not be displayed in the component, that when the stage is set to that pseudo-stage it indicates that every stage is completed.

Example:

![Example](/ProgressIndicatorWithLastStepCompleted/example.png)