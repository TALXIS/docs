# Provision Approvals
If you want to use [approvals](https://docs.microsoft.com/en-us/connectors/approvals/) in your Dataverse environment, you'll have to provision them first. 
![Provision Approvals Warning (Power Automate)](/.attachments/en/customizer-guide/modules/people/provision-approvals/provision-approvals-warning.png)

## Check for Provisioned Solutions
The environment might have approvals already provisioned. You can easily check that in solutions. However, if you are sure that the environment does not have approvals provisioned, or you do not know what solutions are used for, feel free to skip this step and continue with the rest of the guide.

1. Open solutions on the environment
1. Check for following solution logical names
   - `msdyn_FlowApprovals`
   - `msdyn_FlowApprovalsCore`

![Provision Approvals Solution View](/.attachments/en/customizer-guide/modules/people/provision-approvals/provision-approvals-solution-view.png)

If these solutions are not there, you will have to perform the following.

## How to Provision Approvals
1. Navigate to the environment you want to provision the approvals for
![Provision Approvals Environment Selection](/.attachments/en/customizer-guide/modules/people/provision-approvals/provision-approvals-environment-selection.png)
1. Select **Flows** from the left navigation menu and add a new instant flow
![Provision Approvals Create a New Flow](/.attachments/en/customizer-guide/modules/people/provision-approvals/provision-approvals-create-flow.png)
1. Name the flow, choose a manual trigger, and create the flow
![Provision Approvals Flow Details](/.attachments/en/customizer-guide/modules/people/provision-approvals/provision-approvals-flow-info.png)
1. Add the action **Start and wait for an approval**
![Provision Approvals Flow Action Addition](/.attachments/en/customizer-guide/modules/people/provision-approvals/provision-approvals-flow-approval-action.png)
1. Fill out the action details as bellow, assign the approval to yourself and save the flow
![Provision Approvals Flow Action Details](/.attachments/en/customizer-guide/modules/people/provision-approvals/provision-approvals-flow-approval-action-details.png)
1. Now test the flow manually
![Provision Approvals Flow Test](/.attachments/en/customizer-guide/modules/people/provision-approvals/provision-approvals-test-flow.png)
![Provision Approvals Flow Test](/.attachments/en/customizer-guide/modules/people/provision-approvals/provision-approvals-test-flow-2.png)
1. Once your flow is running, solutions will be provisioned on the background
1. Cancel the running flow by navigating back to the flow card and reopening the run you have triggered
![Provision Approvals Cancel Flow Run](/.attachments/en/customizer-guide/modules/people/provision-approvals/provision-approvals-cancel-flow-run.png)
1. You can go back and delete the flow; provisioning will not be canceled on the background
![Provision Approvals Delete Flow](/.attachments/en/customizer-guide/modules/people/provision-approvals/provision-approvals-delete-flow.png)
1. Wait up to 15 minutes and [check for provisioned solutions](#check-for-provisioned-solutions)