---
title: Deploy Pipeline
tagline: Creating a deploy pipeline for a project
author: Zdeněk Šrejber
---

# **Creating a deploy pipeline for a project**
In this guide, we assume that you already have a project, a repository and a [build pipeline](src/en/developer-guide/Platform/Pipelines/Build.md) created in DevOps, and what you need right now is to deploy build solutions to an environment. 

Before you get to start working on Deploy pipeline:
- Make sure that you know how [build pipelines](src/en/developer-guide/Platform/Pipelines/Build.md) work and what is the process of getting it up and running smoothly. 

- Make sure environment is [configured for deployment](https://dev.azure.com/thenetworg/INT0006/_wiki/wikis/INT0006.wiki/318/Environment-Configuration). 
Note: we use production configuration on our DEV instances. Do not use DEV/TEST configuration!

Similarly to build pipelines we are using [template provided by INT0014](https://dev.azure.com/thenetworg/_git/INT0014?path=%2Fsrc%2FSDK%2FPipelines%2FDeploy%2FTALXIS.SDK.Pipelines.Deploy.Apps.yml).

```yml
resources:
  #specify other repositories used in deploy pipeline. Optional.
  repositories:
    - repository: INT0006
      type: git
      name: INT0006/INT0006
      ref: develop
    - repository: INT0014
      type: git
      name: INT0014/INT0014
      ref: develop
  

name: $(Build.DefinitionName)_$(InstanceDomain)_$(Date:yyyyMMdd)$(Rev:.r)

trigger: none 

stages:
- stage: 'Release' #Stage name cannot have spaces
  displayName: 'Release' #Name displayed when viewing in Azure DevOps
  jobs:
  - deployment: 'Deploy_Release' #No spaces
    displayName: Deploy CDS Package
    pool: "selfhosted-windows-latest"
    environment: Develop
    timeoutInMinutes: 240 
    strategy:
      runOnce:
        deploy:
          steps:
            - template: /src/SDK/Pipelines/Deploy/TALXIS.SDK.Pipelines.Deploy.Apps.yml@INT0014
              parameters:
                InstanceDomain: $(InstanceDomain) # User overrideable variable to insert domain of target environment. Do not change.
                ProjectNamespace: TALXIS # Project name
                ProjectGUID: 40617db6-cf62-4240-bad0-95203039416b # Guid of a project
                DataversePackageLongName: TALXIS.Apps.Service.Scheduling.Packages.Model # Name of the Dataverse package. TALXIS Dataverse packages contain information about existing dependecies.
                PipelineID: 223 # Guid of build pipeline 
                BranchName: 'refs/heads/develop' # Reference branch, usually develop or master
                SecureFile: prod.talxis.com-deployments-pct20018.pfx # it is a certificate used for the connection to the target environment. Check first if secure file already exists, if not create one
                CertificateThumbprint: $(CertificateThumbprint) # Secret variable. If project has securefile already, there is a thumbprint as well

            # add as many DataversePackages as you need, each one will be using one template call 
            - template: /src/SDK/Pipelines/Deploy/TALXIS.SDK.Pipelines.Deploy.Apps.yml@INT0014
              parameters:
                InstanceDomain: $(InstanceDomain)
                ProjectNamespace: TALXIS
                DataversePackageLongName: TALXIS.Apps.Environment.Utility.Packages.Default
                ProjectGUID: 40617db6-cf62-4240-bad0-95203039416b
                PipelineID: 234
                BranchName: 'refs/heads/develop'
                CertificateThumbprint: $(CertificateThumbprint)
                SecureFile: prod.talxis.com-deployments-pct18031.pfx

            # PCT package is the last package deployed
            - template: /src/SDK/Pipelines/Deploy/TALXIS.SDK.Pipelines.Deploy.Apps.yml@INT0014
              parameters:
                InstanceDomain: $(InstanceDomain)
                ProjectNamespace: PCT20018
                DataversePackageLongName: Default
                ProjectGUID: 2ce851f1-e3d1-4a3d-b175-caaacedecc99
                PipelineID: 197
                BranchName: 'refs/heads/develop'
                BranchName: 'refs/heads/develop'
                CertificateThumbprint: $(CertificateThumbprint)
                SecureFile: deployments.talxis.com.pfx
```

## How to get Project GUID:
  - TALXIS: 40617db6-cf62-4240-bad0-95203039416b
  - PCT projects are bit trickier. You can get it through API call such as this 
```
https://dev.azure.com/{organization}/_apis/projects?api-version=5.0-preview.3
```
 There is also another, easier way because you do not have to remember the API call. Open [dev.azure.com](https://dev.azure.com/), hit F12, use inspect tool and hover or click on the project. There you can see the guid. Find the example screenshot below.

![image.png](.attachments/DeployPipeline/ProjectGUID.png)

## How to get Dataverse package name and Pipeline ID
See TALXIS list of DataversePackages and Pipelines ([INT0006 wiki](https://dev.azure.com/thenetworg/INT0006/_wiki/wikis/INT0006.wiki/4060/List-of-Build-Pipelines)). It will provide you with Dataverse package name, pipeline id, and status of the latest build.

Otherwise, you can get Pipeline Id form pipeline's URL and the name of Dataverse package from the project's repository.
```url
https://dev.azure.com/thenetworg/PCT20018/_build?definitionId=197
```
![image.png](.attachments/DeployPipeline/pipelineID.png)

## How to create certificate and thumbprint
Please follow [certificate guide](https://dev.azure.com/thenetworg/INT0006/_wiki/wikis/INT0006.wiki/2153/Release-Pipeline)




