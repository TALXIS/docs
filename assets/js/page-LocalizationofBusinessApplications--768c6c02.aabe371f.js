(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{594:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"localization-of-business-applications"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#localization-of-business-applications"}},[e._v("#")]),e._v(" Localization of Business Applications")]),e._v(" "),o("p",[e._v("TALXIS Business applications are being localized in an external tool named Localazy. Localazy is integrated to our build pipelines to ease everything up. In case of localizing customer specific solutions, Localazy is not used, and the localization happens in the repository directly without additional overhead.")]),e._v(" "),o("h2",{attrs:{id:"basics"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#basics"}},[e._v("#")]),e._v(" Basics")]),e._v(" "),o("p",[e._v("Every label or phrase is stored in a "),o("code",[e._v(".resx")]),e._v(" file. All these files are then uploaded to Localazy (if possible), where anyone with access can translate them. If the translations are approved, they're published for the next release.")]),e._v(" "),o("h2",{attrs:{id:"how-to"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#how-to"}},[e._v("#")]),e._v(" How to ...")]),e._v(" "),o("p",[e._v("These guides are ordered chronologically from a new Dataverse solution being introduced to a localized release. If something is not clear or not working, contact jan.kostejn@me.com please.")]),e._v(" "),o("h3",{attrs:{id:"get-solution-s-resource-file"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#get-solution-s-resource-file"}},[e._v("#")]),e._v(" Get Solution's Resource File")]),e._v(" "),o("p",[e._v("Solution's "),o("code",[e._v(".resx")]),e._v(" file contains all the phrases as already mentioned. This file is automatically generated by "),o("a",{attrs:{href:"#merge-the-solutions-resource-file-to-develop"}},[e._v("merge to "),o("code",[e._v("develop")]),e._v(" branch")]),e._v(" to avoid mistakes. However, you need to introduce it first to trigger this whole process.")]),e._v(" "),o("ol",[o("li",[e._v("Build a solution you want to localize."),o("br"),e._v(" "),o("img",{attrs:{src:"/.attachments/developer-guide/getting-started/contributing/localization-of-business-applications_solutionBuild.png",alt:"Build a solution"}})]),e._v(" "),o("li",[e._v("Find the build output and use "),o("a",{attrs:{href:"https://docs.microsoft.com/en-us/dynamics365/customerengagement/on-premises/developer/compress-extract-solution-file-solutionpackager?view=op-9-1",target:"_blank",rel:"noopener noreferrer"}},[e._v("SolutionPackager"),o("OutboundLink")],1),e._v(" to extract the resource file with "),o("code",[e._v("/localize")]),e._v(" and "),o("code",[e._v("/sourceLoc:1033")]),e._v(" arguments."),o("br"),e._v(" "),o("img",{attrs:{src:"/.attachments/developer-guide/getting-started/contributing/localization-of-business-applications_extractResourceFile.png",alt:"Extract resource file"}})]),e._v(" "),o("li",[e._v("Add generated "),o("code",[e._v(".resx")]),e._v(" file to the solution in the repository.\n"),o("img",{attrs:{src:"/.attachments/developer-guide/getting-started/contributing/localization-of-business-applications_copyResourceFile.png",alt:"Copy resource file"}})]),e._v(" "),o("li",[e._v("Prepare content of the folder for "),o("a",{attrs:{href:"#merge-the-solutions-resource-file-to-develop"}},[e._v("merge")]),e._v(".\n"),o("ol",[o("li",[e._v("Leave only "),o("code",[e._v("./en-US/resources.en-US.resx")]),e._v(".")]),e._v(" "),o("li",[e._v("Delete phrases from the file to make sure no one will be making translations in the repository."),o("br"),e._v(" "),o("img",{attrs:{src:"/.attachments/developer-guide/getting-started/contributing/localization-of-business-applications_editResourceFile.png",alt:"Edit resource file"}})])])])]),e._v(" "),o("h3",{attrs:{id:"create-a-localazy-project"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#create-a-localazy-project"}},[e._v("#")]),e._v(" Create a Localazy Project")]),e._v(" "),o("p",[e._v("Every solution has a project in Localazy. Translators can then go and localize the solution in a friendly UI without any technical knowledge.")]),e._v(" "),o("ol",[o("li",[e._v("Create a project inside NETWORG Localazy organization.\n"),o("ol",[o("li",[e._v("Set "),o("strong",[e._v("Project name")]),e._v(" to solution's display name.")]),e._v(" "),o("li",[e._v("Set "),o("strong",[e._v("URL Slug")]),e._v(" to solution's unique name.")]),e._v(" "),o("li",[e._v("Set "),o("strong",[e._v("Source Language")]),e._v(" to "),o("code",[e._v("en_US")]),o("br"),e._v(" "),o("img",{attrs:{src:"/.attachments/developer-guide/getting-started/contributing/localization-of-business-applications_createLocalazyProject.png",alt:"Edit resource file"}})])])])]),e._v(" "),o("h3",{attrs:{id:"add-localazy-secrets-to-azure-key-vault"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#add-localazy-secrets-to-azure-key-vault"}},[e._v("#")]),e._v(" Add Localazy Secrets to Azure Key Vault")]),e._v(" "),o("p",[e._v("Since we want to automatically push new phrases to the Localazy project and pull newest translations from it, we need to authenticate against Localazy in our pipelines. We use Azure Key Vault for Localazy secrets.")]),e._v(" "),o("ol",[o("li",[e._v("Get the secrets from the Localazy.\n"),o("ol",[o("li",[e._v("You can quickly access them through previously inputted "),o("strong",[e._v("URL Slug")]),e._v(". Just visit this link - "),o("code",[e._v("https://localazy.com/p/{ URL Slug }/settings#access-keys")])]),e._v(" "),o("li",[e._v("There are two keys, one is for read and the second for write. You'll need both of them.")])])]),e._v(" "),o("li",[e._v("Add the secrets to the Azure Key Vault.\n"),o("ol",[o("li",[e._v("Open "),o("a",{attrs:{href:"https://portal.azure.com/#@networg.com/resource/subscriptions/45aa8379-dcec-46bc-a42d-f899d6664b9c/resourceGroups/int0006-pipelines/providers/Microsoft.KeyVault/vaults/int0006-pipelines/secrets",target:"_blank",rel:"noopener noreferrer"}},[o("strong",[e._v("int0006-pipelines")]),e._v(" Key Vault's secrets"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Add Localazy read key following this convention - "),o("code",[e._v("localazy-readKey-{ solution's unique name }")]),e._v(" where non-alphanumeric characters are removed.")]),e._v(" "),o("li",[e._v("Add Localazy write key following this convention - "),o("code",[e._v("localazy-writeKey-{ solution's unique name }")]),e._v(" where non-alphanumeric characters are removed.")])])])]),e._v(" "),o("h3",{attrs:{id:"merge-the-solution-s-resource-file-to-develop"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#merge-the-solution-s-resource-file-to-develop"}},[e._v("#")]),e._v(" Merge the Solution's Resource File to 'develop'")]),e._v(" "),o("p",[e._v("If everything above was done, now you need to get your phrases into your new Localazy project. This step has been automated with merge to "),o("code",[e._v("develop")]),e._v(" branch.")]),e._v(" "),o("ol",[o("li",[e._v("Commit "),o("a",{attrs:{href:"#get-solutions-resource-file"}},[e._v("the resource file")]),e._v(".")]),e._v(" "),o("li",[e._v("Open a pull request to develop.")]),e._v(" "),o("li",[e._v("Wait for approval.")]),e._v(" "),o("li",[e._v("Make sure that the phrases appear in the Localazy project after successful build. If not, something is wrong and you need to investigate."),o("br"),e._v(" "),o("img",{attrs:{src:"/.attachments/developer-guide/getting-started/contributing/localization-of-business-applications_checkPhrasesInLocalazy.png",alt:"Check phrases in the Localazy"}})])]),e._v(" "),o("h3",{attrs:{id:"localize-the-solution"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#localize-the-solution"}},[e._v("#")]),e._v(" Localize the Solution")]),e._v(" "),o("p",[e._v("The biggest strength of this approach is that anyone can translate the phrases without any technical background. Suggested translations also improve the experience a lot.")]),e._v(" "),o("ol",[o("li",[e._v("Login to Localazy\n"),o("ol",[o("li",[e._v("Make sure that you're part of the NETWORG organization.")]),e._v(" "),o("li",[e._v("Make sure that you have access to the Localazy project you wish to localize.")]),e._v(" "),o("li",[e._v("Translate.")])])])]),e._v(" "),o("h3",{attrs:{id:"publish-a-localized-release"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#publish-a-localized-release"}},[e._v("#")]),e._v(" Publish a Localized Release")]),e._v(" "),o("p",[e._v("Cherry on top.")]),e._v(" "),o("ol",[o("li",[e._v("Approve translations in the Localazy project.\n"),o("ol",[o("li",[e._v("If translations are not approved, they won't be released.")])])]),e._v(" "),o("li",[e._v("Trigger a release in Azure DevOps ("),o("code",[e._v("master")]),e._v(" build).")])])])}),[],!1,null,null,null);t.default=s.exports}}]);