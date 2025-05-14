---
Author: Adel Šabić
---

# Metadata picker
This control is used as a way to fetch metadata and give user ability to choose values from its autocomplete control. It gives ability to choose entity, attribute, relationship or language depending on control setup.
## Visual Example
![Metadata Picker Screenshot](/.attachments/applications/Controls/metadatapicker.png)

# Structure
## Data Access Layer (DAL)
### Metadata repository
Job of this class is to fetch metadata for multiple entites or specific entity. It has two methods:
- ```typescript  
    /**
     * Gets all entites contained in environment
     * @returns object with LogicalName, DisplayName and MetadataId 
     */
    public GetEntities()
    ```
- ```typescript 
    /**
     * Gets the entity metadata for the specified entity.
     * @param entityName - The logical name of the entity.
     * @returns object with LogicalName, DisplayName, MetadataId, Attributes and Relationships 
     */
    public GetEntity(entityName:string)
    ```

## Logic

``json`` property has very nice role in Metadata picker. You can provide it with array of entity metadata objects as ``IEntityMetadata[]`` and it will enable Metadata picker to work with it. In that case it will not need to fetch metadata. Only if metadata is missing, it will fetch it and populate back ``json`` property with newly fetched data.

### MetadataMapper
It's job is to map metadata to objects acceptable by Autocomplete UI component.

<!-- TODO: ## Presentation (UI) -->

# Control manifest parameters
<!-- Make window bigger for table to be able to fit and be formated correctly -->
|                   Name                    |               Type            | Usage | Required |
| ----------------------------------------- | ----------------------------- | ----- | -------- |
| bindingField                              | SingleLine.Text/Whole.None    | bound | true     | 
| entityLogicalName                         | SingleLine.Text               | bound | false    | 
| applyAppmoduleFilter                      | Enum                          | input | false    | 
| applyEnvironmentEnabledLanguagesFilter    | Enum                          | input | false    | 
| json                                      | Multiple                      | input | false    | 
| mode                                      | Enum                          | input | false    | 
| enableBorder                              | Enum                          | input | false    | 



# Dependencies
### NPM
- @talxis/react-components: 1.2305.3 - Used UI components
- @types/xrm: ^9.0.73 - Used for usage of certain Xrm methods
- remove-accents: ^0.4.4 - Used for removing accents from strings