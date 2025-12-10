---
Author: Dominik Brych
---

# Cell Customizers

Cell customizers provide a flexible way to modify or entirely replace the controls used for rendering cells. Depending on the specific customization requirements, you can choose from various levels of customization to suit your needs.

## Bindings

You can configure control bindings by assigning them to the controls array within a column definition. When using the native cell renderer, you have the option to set two bindings: `PrefixIcon` and `SuffixIcon`. These allow you to display an icon either before or after the cell value. Each binding accepts a stringified [`IIconProps`](https://developer.microsoft.com/en-us/fluentui#/controls/web/icon) object to define the icon properties.

```json
{
  "name": "phone",
  "alias": "phone",
  "dataType": "SingleLine.Phone",
  "displayName": "Phone",
  "order": 0,
  "controls": [
    {
      "appliesTo": "renderer",
      "bindings": {
        "PrefixIcon": {
          "value": {
            "iconName": "Phone"
          },
          "type": "SingleLine.Text"
        }
      }
    }
  ]
}
```
*Column definition that adds Phone icon before cell's value.*

![Prefix icon](/.attachments/applications/Controls/VirtualDataset/prefix_icon.png)

### Set bindings dynamically via expressions

For a more detailed and precise approach, you can utilize an [expression](../ClientExtensibility/general/#cell-control-parameters) to modify the bindings of a specific cell. Additionally, you can incorporate conditions to ensure that the bindings are applied only when certain criteria are satisfied.

```typescript
const icon: IIconProps = {
  iconName: "Phone",
};
record.expressions.ui.setControlParametersExpression("phone", (defaultParameters) => {
    if (record.getValue("phone")?.includes("4")) {
      return {
        ...defaultParameters,
        PrefixIcon: {
          raw: JSON.stringify(icon),
        },
      };
    }
    return defaultParameters;
  }
);
```
*Expression above only appends the prefix if the phone number includes '4'.*

![Prefix icon](/.attachments/applications/Controls/VirtualDataset/prefix_icon_expression.png)

## Column Alignment

You can change the content alignment of any column by setting it via column definition:

```json
{
  "name": "talxis_wholenone",
  "visualSizeFactor": 100,
  "alignment": "center"
}
```
![Column alignment](/.attachments/applications/Controls/VirtualDataset/column_alignment.png)

## Conditional Formatting

It is possible to change cell's look through conditional formatting. This is currently only supported through the custom formatting [expression](../ClientExtensibility/general/#conditional-formatting).

```typescript
record.expressions.ui.setCustomFormattingExpression("color", () => {
  return {
    backgroundColor: record.getValue("color"),
    themeOverride: {
      fonts: {
        medium: {
          fontFamily: 'Consolas, monaco, monospace',
          fontWeight: 600,
        },
      },
    },
  };
});
```
*Expression above assigns the current color value as the cell background.*

![Prefix icon](/.attachments/applications/Controls/VirtualDataset/customizer_formatting.gif)

## Use custom PCF as cell control

It is possible to utilize field PCF controls as cell controls, provided they adhere to best practices and guidelines. To ensure eligibility for use as a cell control, your PCF must meet the following requirements:

- user interface should always be rendered through `updateView`, not `init`

- include this piece of code on top of `init` method:
```typescript
(context as any).factory.fireEvent("onInit", this);
```

- theming/styling should follow our [theming guide](https://dev.azure.com/thenetworg/INT0015/_wiki/wikis/INT0015.wiki/4943/Theming-Guide)

- if used as a cell renderer (or editor with `oneClickEdit`), the PCF must **not trigger** any asynchronous code when it gets loaded (including in the `init` method). If your use case involves asynchronous operations, such as an API request, please refer to the [async section](#asynchronous-code-in-cell-renderer) of this guide.

- use latest version of [Base Controls](https://www.npmjs.com/package/@talxis/client-libraries)

Once your PCF meets these requirements, you can assign it to a column through the `controls` prop:

```json
{
    "name": "talxis_singlelinetext",
    "displayName": "Color",
    "controls": [
      {
        "appliesTo": "editor",
        "name": "talxis_TALXIS.PCF.ColorPicker",
        //optionally pass values for static bindings
        "bindings": {}
      }
    ],
    "visualSizeFactor": 100
  }
```

The code snippet above specifies that the `talxis_TALXIS.PCF.ColorPicker` control should be utilized as the cell editor. For the cell renderer, it will continue to use the default native cell renderer. If you wish to use a custom PCF as cell renderer, please refer to [this section](#optimizing-pcf-performance-for-cell-renderer) of the guide.

![Control customizer](/.attachments/applications/Controls/VirtualDataset/custom_control.gif)

Because the `talxis_TALXIS.PCF.ColorPicker` follows all of the guidelines, it works with other customizer features. For example, if we were to set conditional formatting and change the row height, the control will respect these settings:

```typescript
record.expressions.ui.setCustomFormattingExpression("talxis_singlelinetext", () => {
  return {
    backgroundColor: record.getValue("talxis_singlelinetext"),
    themeOverride: {
      fonts: {
        medium: {
          fontFamily: 'Consolas, monaco, monospace',
          fontWeight: 600,
        },
      },
    },
  };
});
record.expressions.ui.setHeightExpression('talxis_singlelinetext', () => 50);
```
![Control customizer](/.attachments/applications/Controls/VirtualDataset/custom_control_formatting.gif)

### Custom Ribbon PCF

Since Ribbon column is treated like any other column, you can also assign a custom PCF to it. This allows you to create unique Ribbon buttons that align with your specific requirements. You can either create a fuly custom UI or leverage the `GridInlineRibbon` Base Control to build upon the existing Ribbon UI.

```json
{
    "name": "_talxis_gridRibbonButtons",
    "dataType": "SingleLine.Text",
    "controls": [
      {
        "appliesTo": "renderer",
        "name": "talxis_TALXIS.PCF.CustomRibbonDemo",
        "bindings": {
        }
      }
    ]
  }
```
**Custom Ribbon Column Definition**

```typescript
public updateView(context: ComponentFramework.Context<IInputs>): void {
    ReactDOM.render(
        React.createElement(GridInlineRibbon, {
            context: context,
            parameters: {
                Record: context.parameters.Record,
                CommandButtonIds: context.parameters.CommandButtonIds,
                Dataset: context.parameters.Dataset
            },
            onOverrideComponentProps: (props) => {
                return {
                    onRender: (props, defaultRender) => {
                        return defaultRender({
                            ...props,
                            onRenderRibbon: (props, defaultRender) => {
                                return defaultRender({
                                    ...props,
                                    onRenderCommandBar: (props, defaultRender) => {
                                        if (context.parameters.Type?.raw === 'custom') {
                                            return React.createElement(CustomButtons, {
                                                context: context,
                                                items: props.items
                                            });
                                        }
                                        return defaultRender({
                                            ...props,
                                            items: props.items.map((item) => {
                                                return {
                                                    ...item,
                                                    iconProps: {},
                                                    className: mergeStyles({
                                                        '.ms-Button-label': {
                                                            fontWeight: 600
                                                        }
                                                    }),
                                                    text: `${this._getEmojiFromString(item.text!)} ${item.text}`,
                                                };
                                            })
                                        });
                                    }
                                });
                            }
                        });
                    }
                };
            }
        } as IGridInlineRibbon),
        this._container
    );
}
```
*Rendering of Custom Ribbon*

![Control customizer](/.attachments/applications/Controls/VirtualDataset/grid_native_custom_ribbon.png)
*Customized native grid renderer*

![Custom Ribbon](/.attachments/applications/Controls/VirtualDataset/grid_fully_custom_ribbon.png)
*Fully custom Ribbon PCF*

### Default Bindings

When the PCF is rendered as cell control, it will always receive these **bindings** in PCF context:

| Property             | Description                                                                                                           |
|----------------------|-----------------------------------------------------------------------------------------------------------------------|
| `value `              | Bound attribute containing the cell value. If the custom PCF has a differently named binding, you will receive the value in that binding as well. |
| `Dataset`              | Dataset instance                                                                                                      |
| `Record`              | Record instance                                                                                                       |
| `Column`               | Column associated with the record                                                                                     | 
| `EnableNavigation`     | Whether the control instance supports navigating to other pages.                                                      |
| `ColumnAlignment`      | How the control content should be aligned                                                                             |
| `IsPrimaryColumn`      | Whether the column is marked as primary                                                                               |
| `ShowErrorMessage`     | Decides if the control should display its own error messages for native errors. For example, if a user inputs an invalid value (e.g., a string in a number field), the platform (Form, Grid) should show the error message, not the control itself. In this case, the parameter will be `false` to tell the control it should not display the error message that comes with the bound attribute. |
| `CellType`             | Determines whether the control is being used as a Cell Editor or Cell Renderer                                        |
| `AutoFocus`            | Whether the control should set focus on itself once it renders.                                                       |
| `IsInlineNewEnabled`   | Whether new records can be created from the control. (Lookup only)                                                    |
| `EnableTypeSuffix`     | Whether the data type related suffix should be displayed, such as an icon for a Phone field.                          |
| `EnableOptionSetColors`| Whether the control should display option set value colors (OptionSet only)                                          |
| `ShouldUnmountWhenOutputChanges`| Whether the control will unmount once a value is outputed  |

The PCF will also receive `isControlDisabled` within `context.mode`. It's value depends on the control's role: 

- Set to `true` if the control is a cell renderer.
- Set to `false` if the control is a cell editor.


### Theming in pop-ups

Controls often use modals, callouts, and other pop-ups to display additional UI elements. However, applying a cell-specific theme to these components can sometimes lead to undesirable results. For instance, in the example above, we apply a background color to the input field. If we were to extend this theme to the entire control, the callout for selecting colors would also inherit this background, which is not desired.

To address this, we provide the `applicationTheme` within the `fluentDesignLanguage` prop. This theme aligns with the global theme used across the environment. By wrapping your pop-ups in `applicationTheme`, you ensure they blend with the rest of the UI.

```typescript
const theme = useControlTheme(context.fluentDesignLanguage);
const calloutTheme = props.context.fluentDesignLanguage?.applicationTheme ?? theme;

<Callout
  target={`#${buttonId}`}
  theme={calloutTheme}
  onDismiss={() => setIsCalloutVisible(false)}
  setInitialFocus
>
  <ThemeProvider theme={calloutTheme}>
    <ColorPicker
      color={value ?? ""}
      onChange={onColorChangeHandler}
      alphaType="none"
      showPreview={true}
      strings={{
        hueAriaLabel: "Hue",
      }}
    />
  </ThemeProvider>
</Callout>;
```
*Snippet from `talxis_TALXIS.PCF.ColorPicker` showcasing wrapping of Callout for picking colors within `applicationTheme` if available.*

### Optimizing PCF performance for Cell Renderer

When using a PCF control as a cell renderer, ensuring a fast render cycle is critical for optimal performance. To achieve this, your PCF should avoid rendering resource-intensive elements, such as input fields, and instead focus on lightweight components like simple text and icons. 

To improve performance and speed up development, you can leverage the native cell renderer in your custom PCF. You can access it via the `GridCellRenderer` Base Control. It’s designed with performance in mind and you can simply customize it through the `onOverrideComponentProps` prop.


> **_NOTE:_**  The same concept applies to cell editors. Each native editor is managed through a Base Control, which you can utilize and tailor within your editor PCF. For instance, `talxis_TALXIS.PCF.ColorPicker` leverages the `TextField` Base Control and customizes it to suit it's needs.

### Asynchronous code in Cell Renderer

A PCF control used as a cell renderer or editor with `oneClickEdit` should not contain async code like API requests when it loads. Multiple control instances firing requests at once could overload the server and hurt performance. Instead, fetch all data for the controls in one request using the `onNewDataLoaded` event, which triggers when new records are loaded into the Dataset. After fetching, rerender the Dataset control and pass your PCF the data with `setControlParametersExpression`.

```typescript
const cache = new MemoryCache<string>();

this._dataset.addEventListener("onNewDataLoaded", async () => {
  cache.clear();
  const currentPageRecordIds: string[] = [];
  Object.values(this._dataset.records).map((record) => {
    currentPageRecordIds.push(record.getRecordId());
  });
  await new Promise((resolve) => {
    //this set timeout mock async operation like an API call,
    //you should ideally use one API call to get results for all records on page
    setTimeout(() => {
      currentPageRecordIds.map((id) => {
        cache.set(
          id,
          `${id}_async value_page_${this._dataset.paging.pageNumber}!`
        );
      });
      resolve(undefined);
    }, 5000);
  });
  this._dataset.render();
});

this._dataset.addEventListener("onDatasetDestroyed", () => {
  cache.clear();
});

this._dataset.addEventListener("onRecordLoaded", (record) => {
  record.expressions.ui.setControlParametersExpression(
    "talxis_singlelinetext",
    (defaultParameters) => {
      const data = cache.get(record.getRecordId());
      if (!data) {
        return defaultParameters;
      }
      return {
        ...defaultParameters,
        Data: {
          raw: data,
        },
      };
    }
  );
  record.expressions.ui.setLoadingExpression("talxis_singlelinetext", () => {
    if (!cache.get(record.getRecordId())) {
      return true;
    }
    return false;
  });
  record.expressions.ui.setLoadingExpression("talxis_singlelinetext", () => {
    if (!cache.get(record.getRecordId())) {
      return true;
    }
    return false;
  });
});
```
*The code snippet above retrieves asynchronous data whenever new records are loaded into the page. It incorporates a loading expression to ensure the PCF only initializes once the data is fully available, eliminating the need to manage the loading state within the PCF itself*

Once the PCF gets loaded, it can retrieve the data from `Data` parameter:

```typescript
public updateView(context: ComponentFramework.Context<IInputs>): void {
    this._context = context;
    this._container.innerHTML = context.parameters.Data.raw;
}
```
![Async renderer](/.attachments/applications/Controls/VirtualDataset/async_renderer.gif)

### Set controls dynamically via expressions

It is possible to assign controls to specific cells by using an [expression]():

```typescript
record.expressions.ui.setCustomControlsExpression( "talxis_singlelinetext", (defaultControls) => {
    if (record.getValue("talxis_singlelinetext")?.startsWith("#")) {
      return [
        {
          appliesTo: "both",
          name: "talxis_TALXIS.PCF.ColorPicker",
        },
      ];
    }
    return defaultControls;
  }
);
```
*Code snippet above returns the `talxis_TALXIS.PCF.ColorPicker` if the cell value startsWith with "#". Otherwise it will return the default controls.*

![Conditional control](/.attachments/applications/Controls/VirtualDataset/conditional_control.gif)
