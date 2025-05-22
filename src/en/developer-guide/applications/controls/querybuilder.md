---
Author: Adel Šabić
---

# Query Builder
This control is used to compose FetchXML query.
## Visual Example
![Query Builder V1 Screenshot](/.attachments/applications/Controls/querybuilder.png)

# Structure
## Data Access Layer (DAL)
### Entity metadata
For entity metadata fetching [TALXIS Metadata Picker](https://dev.azure.com/thenetworg/_git/INT0015?path=/src/controls/MetadataPicker) is used. 

``json`` parameter of Metadata Picker is link through which Metadata Picker and QueryBuilder are communicating. Metadata Picker is fulfilling that parameter with entity metadata object array every time it fetches something new, but it is also capable of reading it. So if metadata already exists inside of the JSON object, it will not fetch it twice. 

Query Builder is taking this entity metadata array object and works with it. So there is no need to implement entity metadata fetch inside of the Query Builder. All work is being done by Metadata Picker.

### Option sets metadata
When control is being used in TALXIS Portal, there is no need for optionset fetching. TALXIS Portal is handling optionset fetching when rendering optionset control.

Control is not currently ready for PowerApps use, but there is logic implemented which would fetch optionsets. This is needed in PowerApps because of when using nested optionset control in PowerApps, we need to provide options to it. PowerApps optionset control is not handling optionset fetching like TALXIS Portal does.

## Logic
### Custom Value Editor
Custom value editor is used for values representation, edit and update. Depending on the portal that Query Builder is being rendered on, it uses either TALXIS Portal or PowerApps native controls (DateTime, TextField, MultiselectOptionset etc.). It job is to bind correct control based on chosen attribute and operator type.

### Entity Metadata Mapper
Job of entity metadata mapper is to compose object that is acceptable by React query builder component from provided entity metadata.

### FetchXML
FetchXML class is handling composition and output of FetchXML. It is used through out QueryConverter logic to compose correct FetchXML from object that is passed from React Query Builder.

### Metadata Picker
It handles binding and event handling of TALXIS Metadata Picker control

### Operators
Class that handles supported condition operators. It translates and retrieves correct set of operators for specific attribute type.

### Query Builder
This is most important class. This is where all of the classes meet together and Query Builder handles all of the event events, composes props for UI, renders components, takes care of value state.

### Query Converter
This class handles conversion from FetchXML to React Query Builder object and viceversa.


## Presentation (UI)
### Query Builder
Query builder component utilizes already existing UI from @react/querybuilder. It also contains the logic for rendering all custom components used in query builder. Few things custom things worth mentioning:
- #### Custom components
    ``controlElements`` property of React Query Builder allows us to overwrite all components used inside of the Query Builder. Therefor, many of controls have been overwritten either to be able to compose linked entities or to use Fluent UI controls.
- #### Context
    ``context`` property allows us to pass any object to childer components in Query tree. So there we are sending object with values so it can be read in controlsElements when that are supposed to be rendered.
- #### Control Class Names
    ``controlClassnames`` is property used to overwrite default React Query Builder styles.

It also contains seprate folders and files for used enums, interfaces and styles.

### Metadata Picker
Wrapper div for metadata picker. It triggers binding logic upon div render.

### Link Entity
Custom component for link-entity composition. It renders TALXIS Metadata Picker as relationship selector, handles value changes and metadata loading events and renders nested query builder component upon props composition.

### Custom Value Editor
Wrapper div for Custom Value Editor. It triggers binding logic upon div render.

# Control manifest parameters
<!-- Make window bigger for table to be able to fit and be formated correctly -->
|       Name        |                   Type                        | Usage | Required |                       Description                          |
| ----------------- | --------------------------------------------- | ----- | -------- | ---------------------------------------------------------  |
| value             | SingleLine.Text/SingleLine.TextArea/Multiple  | bound | true     | Stores Fetch XML                                           | 
| queryEntity       | SingleLine.Text                               | bound | false    | Custom entity name for which fetchXML will be composed for | 
| showEntityPicker  | SingleLine.Text (true/false)                  | input | false    | Give user ability to change entity name                    | 


# Dependencies
### Nested PCFs
- TALXIS.PCF.MetadataPicker
### NPM
- @fluentui/react: ^8.110.11 - It uses Fluent UI for custom controls (selectors, operators, buttons, icons etc).
- react-querybuilder: ^6.5.1 - Open source react component used for UI representation
- fast-xml-parser: ^4.2.7 - Used for parsing FetchXML so object for react-querybuilder could be composed.
- xmlbuilder2: ^3.1.1 - Used for FetchXML composition
- uuid: ^9.0.0 - Used for generating unique IDs for rows and groups inside of the querybuilder.
- Declared but unused dependecies: (More effort needs to be put in to figure out a way how these import will not make production build bigger than 5MB)
    - @react-querybuilder/dnd: ^6.5.1
    - @react-querybuilder/fluent: ^6.5.1