---
author: Jan Kostejn
---

# Git
You can find `git` related naming conventions here. This includes branches and pull requests.

## Branches
Naming branches differs based on their purpose.

### Feature Branches
Feature branches are the ones, where you contribute to TALXIS with new functionality. These are always created from default branch (currently `develop`).

> #### Convention
> users/{ Alias }/{ Work item id }.{ Friendly label }
>
> #### Example
> users/jan.kostejn/9364.nonconformityCosts

### Release Branches
Release branches are always created from `develop` branch and they are used to merge changes into `master` branch. You release feature with introducing it into `master` branch.

> #### Convention
> releases-users/{ Alias }/{ Sprint number - SYYMM }.{ Iteration }
>
> #### Example
> releases-users/jan.kostejn/S2101.1

### HOTFIX Branches
There can be business critical issue which needs to fixed as soon as possible. Hotfix branches are here for that.

> #### Convention
> hotfixes-users/{ Alias }/{ Work item id }.{ Friendly label }
>
> #### Example
> hotfixes-users/jan.kostejn/9364.nonconformityCostsNotGenerating

## Pull Requests
If you would like to contribute to TALXIS, there are naming conventions for branches so that pull requests are easy to complete and changes can be found without big efforts in the version history.

### Changes in Source (src/**/*.*)
You should always specify the area and module you are working on with short description of the feature / change. Both area and module can be synthesized from path.

> #### Convention
> { Area }/{ Module } - { Short description }
>
> #### Examples
> Operation/Procurement - Multiple approvers support in the process
> Distribution/Sales - Quote management

In case you are not requesting to pull changes under some module (works on infrastructure for example) name the pull request based on namespace of the project you are working on with short description of the feature / change.

> #### Convention
> { Namespace } - { Short description }
>
> #### Example
> TALXIS.Infrastructure.BusinessLayer - Microsoft Graph Client Added

### Changes Elswhere
In case where your chagnes are not under 'src/' folder, name pull request by short description of the feature / change.

> #### Convention
> { Short description }
>
> #### Example
> Updated readme\.md

### HOTFIXES
All hotfixes follow the above.