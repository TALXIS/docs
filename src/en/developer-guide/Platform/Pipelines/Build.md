---
title: Build Pipeline
tagline: Creating a build pipeline for a project
author: Zdeněk Šrejber
---

# **Creating a build pipeline for a project**
In this guide, we assume that you already have a project and repository created in DevOps, and what you need right now is to build it in DevOps. 

Build pipelines are fairly simple and this should take long. However, there are two ways to do so based on branch policies, your priviliges, and your preference. Follow the guide which applies to:

1. I have the privilege to commit to the main branch and potential mistake won't cause any problems for others working on the project. Stis usually applies to new projects.
    - [Move to guide](#I-can-commit-to-main)
2. I can not commit to the main and I need to go through a pull request. This usually applies to ptroject that have exiasted for some time.
    - [Move to guide](#I-have-to-go-through-a-pull-request)

# I can commit to the main branch

1. Step: Go to the Pipeline section and click Create Pipeline

![image.png](.attachments/BuildPipeline/newpipeline.png)

2. Step: Select the location of your code. We are using DevOps, so select Azure Repos Git.

![image.png](.attachments/BuildPipeline/whereiscode.png)

3. Step: Select source repository

![image.png](.attachments/BuildPipeline/repositoryselect.png)

4. Step: Pick Starter Pipeline. This will create a .yml file which we will edit

![image.png](.attachments/BuildPipeline/configuration.png)

5. Steps
    1. rename pipeline to follow naming convention ```[project]-APPS-BUILD-[branchname]```. We usually create two pipelines per project, one for develop and one for the main branch.

    2. paste in following the code (completely replace whatever was automatically created in the starter file). You can see the code is just a setup of pipeline and then reference to [INT0014 yaml template](https://dev.azure.com/thenetworg/_git/INT0014?path=%2Fsrc%2FSDK%2FPipelines%2FBuild%2FTALXIS.SDK.Pipelines.Build.Apps.yml) which actually performs the build action.

        ```yml
        resources:
          repositories:
            - repository: INT0014
              type: git
              name: INT0014/INT0014

        #Builds Numbers: 0.0.1{YY}{MM}.XXX - Daily Develop; 0.0.20000.0 - Local; 0.0.3{YY}{MM}.XXX - PR; 1.0.{YY}{MM}.XXX - Production
        name: 0.0.1$(Date:yyMM).$(Rev:r)

        trigger:
        - develop

        pool: "selfhosted-windows-latest"

        variables:
          solution: '**/*.sln'
          buildPlatform: 'Any CPU'
          buildConfiguration: 'Release'

        steps:
        - template: /src/SDK/Pipelines/Build/TALXIS.SDK.Pipelines.Build.Apps.yml@INT0014
        ```

6. Step: Make a few necessary edits
   - name: defines a version of the output build. The convention is in provided code.
   - trigger: put in the name of a branch that will trigger the automated build (usually develop or main), You can also type in '- none' for manual triggers only

7. Step: That is it! Build pipeline should be up and running. 

# I have to go through a pull request
 If there are branch policies already in place, you are likely not able to directly commit to the main branch. In this case, you need to create .yml file in your dev branch, make a pull request to develop/master, then go to pipeline and in step 4, pick 'create a pipeline from existing yml file' instead of 'starter pipeline'.

 1. Step: Make a new branch based on main and don't forget to follow naming conventions

2. Step: Create a new file in the root of the repository. Name it according to schema ```[PROJECT]-APPS-BUILD-[TARGET BRANCH NAME].yml``` eg. ```PCT20000-APPS-BUILD-MASTER.yml```. If you plan to create a pipeline for develop and main branch then you will need two files and two pipelines.

3. Steps: Paste in following code. You can see the code is just a setup of pipeline and then reference to [INT0014 yaml template](https://dev.azure.com/thenetworg/_git/INT0014?path=%2Fsrc%2FSDK%2FPipelines%2FBuild%2FTALXIS.SDK.Pipelines.Build.Apps.yml) which actually performs the build action.
```yml
resources:
  repositories:
    - repository: INT0014
      type: git
  name: INT0014/INT0014
#Builds Numbers: 0.0.1{YY}{MM}.XXX - Daily Develop; 0.0.20000.0 - Local; 0.0.3{YY}{MM}.XXX - PR; 1.0.{YY}{MM}.XXX - Production
name: 0.0.1$(Date:yyMM).$(Rev:r)

trigger:
- develop

pool: "selfhosted-windows-latest"

variables:
  solution: '**/*.sln'
  buildPlatform: 'Any CPU'
  buildConfiguration: 'Release'

steps:
- template: /src/SDK/Pipelines/Build/TALXIS.SDK.Pipelines.Build.Apps.yml@INT0014
```

4. Step: Make a few necessary edits
   - name: defines a version of the output build. The convention is in provided code.
   - trigger: put in the name of a branch that will trigger the automated build (usually develop or main), You can also type in '- none' for manual triggers only

5. Step: Testing pipeline before pull request! Go to the pipeline section and click Create Pipeline

![image.png](.attachments/BuildPipeline/newpipeline.png)

6. Step: Select the location of your code. We are using DevOps, so select Azure Repos Git.

![image.png](.attachments/BuildPipeline/whereiscode.png)

7. Step: Select source repository 

![image.png](.attachments/BuildPipeline/repositoryselect.png)

8. Step: Pick ''Existing Azure Pipeline YAML file', select your branch and insert a path to your file (file should be already available through dropdown menu)

![image.png](.attachments/BuildPipeline/existingyamlfile.png)

9. Confirm and Run the pipeline. No variables are needed here. If no issues were found, proceed to make a pull request. Feel free to delete the old pipeline

10. One pull request is approved and merged proceed to make a new pipeline based on the file in main, don't forget to change pipeline's name according to schema ```[PROJECT]-APPS-BUILD-[TARGET BRANCH NAME]```

![image.png](.attachments/BuildPipeline/editpipeline.png)

