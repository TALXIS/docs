(window.webpackJsonp=window.webpackJsonp||[]).push([[53],{523:function(t,s,e){"use strict";e.r(s);var a=e(1),n=Object(a.a)({},(function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"dataset-geolocation-viewer"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#dataset-geolocation-viewer"}},[t._v("#")]),t._v(" Dataset Geolocation Viewer")]),t._v(" "),e("h2",{attrs:{id:"visual-example"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#visual-example"}},[t._v("#")]),t._v(" Visual Example")]),t._v(" "),e("p",[e("img",{attrs:{src:"/.attachments/applications/Controls/datasetgeolocationviewer.png",alt:"Dataset Geolocation Viewer on Subgrid"}})]),t._v(" "),e("h2",{attrs:{id:"description"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#description"}},[t._v("#")]),t._v(" Description")]),t._v(" "),e("p",[t._v("Control shows a map with points loaded from fetch xml.")]),t._v(" "),e("h2",{attrs:{id:"binding"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#binding"}},[t._v("#")]),t._v(" Binding")]),t._v(" "),e("p",[t._v("This control can be binded to data set (view).")]),t._v(" "),e("h2",{attrs:{id:"inputs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#inputs"}},[t._v("#")]),t._v(" Inputs")]),t._v(" "),e("ul",[e("li",[t._v("Data Set - Binding dataset")]),t._v(" "),e("li",[t._v("Language - It is used in google api")]),t._v(" "),e("li",[t._v("Api Key - Parameter is here because of Portal. Authorization will not work there so the api key is taken from this parameter if filled")]),t._v(" "),e("li",[t._v("Fetch Xml - Single line of fetch xml that is used to retrieve records. You can also link entities to get related data")]),t._v(" "),e("li",[t._v("Latitude Atribute - Name of attribute where the latitude will be stored. Use dot notation for linked entities: talxis_address.talxis_lat")]),t._v(" "),e("li",[t._v("Longtitude Atribute - Name of attribute where the longitude will be stored. Use dot notation for linked entities: talxis_address.talxis_long")]),t._v(" "),e("li",[t._v("Address Attribute - Name of attribute where the address will be stored. Use dot notation for linked entities: talxis_address.talxis_fulladdress")]),t._v(" "),e("li",[t._v("Card Payload - JSON definition of an "),e("a",{attrs:{href:"https://adaptivecards.io/designer/",target:"_blank",rel:"noopener noreferrer"}},[t._v("adaptive card"),e("OutboundLink")],1),t._v(" template.")]),t._v(" "),e("li",[t._v("Pin Icons\n"),e("ul",[e("li",[t._v("JArray of pin icon definition. If you want to use just one custom icon, create a JArray with one object where you will specify the url. You can also specify a field name and a value so there would be different icons on one map. Look below on the examples.")])])])]),t._v(" "),e("h3",{attrs:{id:"examples-of-pin-icons"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#examples-of-pin-icons"}},[t._v("#")]),t._v(" Examples of Pin Icons")]),t._v(" "),e("blockquote",[e("p",[e("strong",[t._v("One custom icon")])]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://somewebsite.com/record"')]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])]),e("p",[e("strong",[t._v("Different custom icons")])]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://somewebsite.com/activerecord"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attributeName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"statecode"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"url"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"https://somewebsite.com/inactiverecord"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"attributeName"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"statecode"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"value"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br"),e("span",{staticClass:"line-number"},[t._v("6")]),e("br"),e("span",{staticClass:"line-number"},[t._v("7")]),e("br"),e("span",{staticClass:"line-number"},[t._v("8")]),e("br"),e("span",{staticClass:"line-number"},[t._v("9")]),e("br"),e("span",{staticClass:"line-number"},[t._v("10")]),e("br"),e("span",{staticClass:"line-number"},[t._v("11")]),e("br"),e("span",{staticClass:"line-number"},[t._v("12")]),e("br")])])]),t._v(" "),e("h3",{attrs:{id:"adaptive-card-localization"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#adaptive-card-localization"}},[t._v("#")]),t._v(" Adaptive Card Localization")]),t._v(" "),e("p",[t._v("You can localize the adaptive card using .resx files. Thanks to them you can fully localize the text that is not comming from record attributes. Those .resx files needs to be loaded by using dependencies on the form where you will have this pcf.\nExample: I have an account form in TALXIS Sales, so I crete those .resx files as webresources in TALXIS Sales App solution. I need to make sure to add a script on load of the form and it has to have dependencies on those .resx files to load them.\nPlaceholder for a localized string looks like this: "),e("strong",[t._v("{ $Resources(<webresources_logicalname>):"),e("key",[t._v(" }")])],1),t._v(". You can read more about it here: "),e("a",{attrs:{href:"https://docs.talxis.com/en/developer-guide/applications/utilities/uci-extensions/#getlocalizedstring",target:"_blank",rel:"noopener noreferrer"}},[t._v("GetLocalizedString"),e("OutboundLink")],1),t._v(".\nA text block in a template to display name of account will look like this:")]),t._v(" "),e("div",{staticClass:"language-json line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-json"}},[e("code",[e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"type"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"TextBlock"')]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"wrap"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token property"}},[t._v('"text"')]),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v('"{$Resources(localization/talxis_salesappsdefault):pinDetail.name }: ${$root.name}"')]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[t._v("1")]),e("br"),e("span",{staticClass:"line-number"},[t._v("2")]),e("br"),e("span",{staticClass:"line-number"},[t._v("3")]),e("br"),e("span",{staticClass:"line-number"},[t._v("4")]),e("br"),e("span",{staticClass:"line-number"},[t._v("5")]),e("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);