---
title: TALXIS Introductions
tagline: Guided help for that visit site for the first time
author: Adel Šabić
---

# **Introductions**

With TALXIS Introductions you can introduce user to parts of the PowerApps model-driven app. There are two main components: Introduction Scenario and Introduction Steps

## **Introduction Scenario**

| Field name 	| Description 	|
|-	|-	|
| talxis_appuniquename 	| Unique Name of the model-driven application 	|
| talxis_configuration_introductionscenarioid 	| ID of the scenario 	|
| talxis_donebuttonlabel 	| Label string of the done button	|
| talxis_entityname 	| Name of the target entity 	|
| talxis_targetentityid 	| ID of the record connected to this instance. Leave blank for subgrids.  	|
| talxis_name 	| Name of the instance (Action sets this to be the same as the processing step) 	|
| talxis_ishandled 	| True/False - Is used to determine if the user has already seen the "Job complete" dialog, so that it doesn't pop up again. 	|
| talxis_completedon 	| Time of completition of the job. **Update this manualy in your logic - it is a required field**.  	|
| talxis_inputparameters 	| Empty text field - If your logic needs any input parameters, add them here 	|
| talxis_outputparameters 	| Empty text field - If your logic returns any parameters you need later, add them here 	|
| talxis_outputfile 	| File field - If your logic generates a file, save it to this field. The user will have the option to download this from the browser 	|

## **Introduction Step**