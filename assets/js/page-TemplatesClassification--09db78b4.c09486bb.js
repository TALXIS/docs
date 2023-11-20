(window.webpackJsonp=window.webpackJsonp||[]).push([[153],{521:function(e,t,o){"use strict";o.r(t);var a=o(1),s=Object(a.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"templates-classification"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#templates-classification"}},[e._v("#")]),e._v(" Templates & Classification")]),e._v(" "),o("p",[e._v("In File Explorer, you can leverage our "),o("RouterLink",{attrs:{to:"/en/developer-guide/applications/utilities/templates/document-template.html"}},[e._v("Document Templates")]),e._v(" and on top of that you can categorize them using "),o("strong",[e._v("Document Type")]),e._v(" entity.\nThe result looks for example like this:")],1),e._v(" "),o("p",[o("img",{attrs:{src:"/.attachments/applications/Controls/FileExplorer/fileexplorer_templateselection.png",alt:"File Explorer Template Selection"}})]),e._v(" "),o("h2",{attrs:{id:"document-type"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#document-type"}},[e._v("#")]),e._v(" Document Type")]),e._v(" "),o("p",[e._v("Document Type settings are once again located in the TALXIS Admin App. They operate hierarchically based on the "),o("strong",[e._v("Parent")]),e._v(" attribute. You can create nested categories with up to 3 levels.")]),e._v(" "),o("p",[e._v("Records of this entity can also be used for the classification of uploaded and existing documents.")]),e._v(" "),o("p",[e._v("This is what root document type looks like:")]),e._v(" "),o("p",[o("img",{attrs:{src:"/.attachments/applications/Controls/FileExplorer/documenttype_rootform.png",alt:"Document Type Form Root"}})]),e._v(" "),o("p",[e._v("To use a Document Type record for document classification, you need to have the tag enabled for file classification set to true. It is recommended to set this at the bottom level, but it can be configured at any level.")]),e._v(" "),o("p",[e._v("This is what a child Document Type meant for file classification looks like:")]),e._v(" "),o("p",[o("img",{attrs:{src:"/.attachments/applications/Controls/FileExplorer/documenttype_childform.png",alt:"Document Type Child Root"}})]),e._v(" "),o("p",[e._v("You can see that when 'Enabled for File Classification' is set to true, some additional properties are provided for you to set up. Both 'Allowed Paths' and 'Form ID' are optional.")]),e._v(" "),o("h3",{attrs:{id:"allowed-paths"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#allowed-paths"}},[e._v("#")]),e._v(" Allowed Paths")]),e._v(" "),o("p",[e._v("This parameter specifies in which folder(s) this classification is enabled. If it is not specified then it is not filtered out.")]),e._v(" "),o("p",[e._v("Split folder names by ';' in case you need to add multiple ones.")]),e._v(" "),o("p",[e._v('For example in screenshot above the value "EXTERNAL;INTERNAL;PARTNER" means that you can use any '),o("strong",[e._v("Document Template")]),e._v(" which has this "),o("strong",[e._v("Document Type")]),e._v(' selected only in folders which names equal to "EXTERNAL", "INTERNAL" or "PARTNER".')]),e._v(" "),o("p",[e._v("This serves one purpose, which is to assist users in creating documents in the correct paths.")]),e._v(" "),o("h3",{attrs:{id:"form-id"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#form-id"}},[e._v("#")]),e._v(" Form ID")]),e._v(" "),o("p",[e._v("This parameter can be used to override the default talxis_file form used for opening file details. Enter the form ID, and it will be rendered when opening the details pane. This can be useful when dealing with a specific type of file that has custom attributes.")]),e._v(" "),o("h2",{attrs:{id:"document-template"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#document-template"}},[e._v("#")]),e._v(" Document Template")]),e._v(" "),o("p",[e._v("Nothing much differs from standard Document Template behavior, but you get some more options to specify here. If you do not have the Document Type attribute on the Document Template record specified, then it is shown directly in the 'From Template' section of File Explorer. If you have it specified, then it gets further filtered and structured, as shown in the example above.")]),e._v(" "),o("h3",{attrs:{id:"record-fetching"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#record-fetching"}},[e._v("#")]),e._v(" Record fetching")]),e._v(" "),o("p",[e._v("Document Template records are once again matched using the Entity Name and Query attributes on the record. The record also needs to be published to be displayed. On top of that, you can create a new one directly from File Explorer using the 'New Template' option in the 'From Template' section.")]),e._v(" "),o("h2",{attrs:{id:"summary"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#summary"}},[e._v("#")]),e._v(" Summary")]),e._v(" "),o("ul",[o("li",[e._v("Document Templates needs to be properly setuped and published in order to be used in File Explorer.")]),e._v(" "),o("li",[e._v("Use Document Type records to further diversify and specify possibilities for users.")]),e._v(" "),o("li",[e._v("Try to enable File Classification for bottom levels of Document Types.")]),e._v(" "),o("li",[e._v("If you need help, ask WAS.")])])])}),[],!1,null,null,null);t.default=s.exports}}]);