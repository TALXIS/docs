(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{546:function(e,t,s){"use strict";s.r(t);var r=s(1),a=Object(r.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("p",[e._v("Can be used to specify record UI expressions. These can be used to modify the record UI during runtime.")]),e._v(" "),s("h2",{attrs:{id:"properties"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#properties"}},[e._v("#")]),e._v(" Properties")]),e._v(" "),s("h3",{attrs:{id:"setcelleditorparametersexpression"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setcelleditorparametersexpression"}},[e._v("#")]),e._v(" setCellEditorParametersExpression()")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("setCellEditorParametersExpression")]),e._v(": ("),s("code",[e._v("columnName")]),e._v(", "),s("code",[e._v("parameterExpression")]),e._v(") => "),s("code",[e._v("void")])])]),e._v(" "),s("p",[e._v("Allows you to override parameters that are passed to cell editor control.")]),e._v(" "),s("h4",{attrs:{id:"parameters"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),s("p",[e._v("• "),s("strong",[e._v("columnName")]),e._v(": "),s("code",[e._v("string")])]),e._v(" "),s("p",[e._v("• "),s("strong",[e._v("parameterExpression")])]),e._v(" "),s("h4",{attrs:{id:"returns"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),s("p",[s("code",[e._v("void")])]),e._v(" "),s("h4",{attrs:{id:"defined-in"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defined-in"}},[e._v("#")]),e._v(" Defined in")]),e._v(" "),s("p",[e._v("src/utils/dataset/data-providers/interfaces.ts:409")]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"setheightexpression"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setheightexpression"}},[e._v("#")]),e._v(" setHeightExpression()")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("setHeightExpression")]),e._v(": ("),s("code",[e._v("columnName")]),e._v(", "),s("code",[e._v("heightExpression")]),e._v(") => "),s("code",[e._v("void")])])]),e._v(" "),s("p",[e._v("Sets the height for individual cells, which determines the height of the entire row.")]),e._v(" "),s("ul",[s("li",[e._v("If you specify a height for only one cell, the entire row will adjust to that cell's height.")]),e._v(" "),s("li",[e._v("If multiple cells in a row have specified heights, the row height will match the tallest cell.")])]),e._v(" "),s("p",[e._v("The provided expression accepts two parameters:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("columnWidth")]),e._v(" - The current width of the column where the cell is being rendered.")]),e._v(" "),s("li",[s("code",[e._v("rowHeight")]),e._v(" - The default row height, used if no cells in the row specify a custom height.")])]),e._v(" "),s("h4",{attrs:{id:"parameters-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-2"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),s("p",[e._v("• "),s("strong",[e._v("columnName")]),e._v(": "),s("code",[e._v("string")])]),e._v(" "),s("p",[e._v("• "),s("strong",[e._v("heightExpression")])]),e._v(" "),s("h4",{attrs:{id:"returns-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns-2"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),s("p",[s("code",[e._v("void")])]),e._v(" "),s("h4",{attrs:{id:"defined-in-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defined-in-2"}},[e._v("#")]),e._v(" Defined in")]),e._v(" "),s("p",[e._v("src/utils/dataset/data-providers/interfaces.ts:404")]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"setloadingexpression"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setloadingexpression"}},[e._v("#")]),e._v(" setLoadingExpression()")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("setLoadingExpression")]),e._v(": ("),s("code",[e._v("columnName")]),e._v(", "),s("code",[e._v("loadingExpression")]),e._v(") => "),s("code",[e._v("void")])])]),e._v(" "),s("p",[e._v("Allows you to specify whether the given column is being loaded or not. Useful if you want to show the cell only when some asynchronous operation finishes.")]),e._v(" "),s("h4",{attrs:{id:"parameters-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-3"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),s("p",[e._v("• "),s("strong",[e._v("columnName")]),e._v(": "),s("code",[e._v("string")])]),e._v(" "),s("p",[e._v("• "),s("strong",[e._v("loadingExpression")])]),e._v(" "),s("h4",{attrs:{id:"returns-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns-3"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),s("p",[s("code",[e._v("void")])]),e._v(" "),s("h4",{attrs:{id:"defined-in-3"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defined-in-3"}},[e._v("#")]),e._v(" Defined in")]),e._v(" "),s("p",[e._v("src/utils/dataset/data-providers/interfaces.ts:390")]),e._v(" "),s("hr"),e._v(" "),s("h3",{attrs:{id:"setnotificationsexpression"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#setnotificationsexpression"}},[e._v("#")]),e._v(" setNotificationsExpression()")]),e._v(" "),s("blockquote",[s("p",[s("strong",[e._v("setNotificationsExpression")]),e._v(": ("),s("code",[e._v("columnName")]),e._v(", "),s("code",[e._v("notificationExpression")]),e._v(") => "),s("code",[e._v("void")])])]),e._v(" "),s("p",[e._v("Allows you to add notifications to a column. Notifications appear as a set of buttons next to the column formatted value.")]),e._v(" "),s("h4",{attrs:{id:"parameters-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#parameters-4"}},[e._v("#")]),e._v(" Parameters")]),e._v(" "),s("p",[e._v("• "),s("strong",[e._v("columnName")]),e._v(": "),s("code",[e._v("string")])]),e._v(" "),s("p",[e._v("• "),s("strong",[e._v("notificationExpression")])]),e._v(" "),s("h4",{attrs:{id:"returns-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#returns-4"}},[e._v("#")]),e._v(" Returns")]),e._v(" "),s("p",[s("code",[e._v("void")])]),e._v(" "),s("h4",{attrs:{id:"defined-in-4"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#defined-in-4"}},[e._v("#")]),e._v(" Defined in")]),e._v(" "),s("p",[e._v("src/utils/dataset/data-providers/interfaces.ts:385")])])}),[],!1,null,null,null);t.default=a.exports}}]);