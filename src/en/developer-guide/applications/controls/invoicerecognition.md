---
Author: Jan Losenicky
---
# Invoice Recognition

## Visual Example

<img src='/.attachments/applications/Controls/InvoiceRecognition/invoicerecognition-preview.png' />

## Description

This control displays the Correction UI component feature developed by Konica Minolta which enables you to verify data with the customer register and the rendered invoice and to modify the extracted data from Invoice Miner. Invoice Miner is a cloud-based extraction service that withdraws data from invoices and converts the data into structured JSON content.

This control is also providing a communication between Power Apps (dataverse) and Correction UI which allows us to verify the customer/supplier with the the existing records in database, trigger creation of new records and create a new invoice record after accepting the extracted data.

Control strongly relies on `talxis_purchaseinvoiceheader` and `talxis_purchaseinvoicedetail` entities which records are created after accepting the data.

## Data loaded from Invoice Miner

### Header
There is a list of extracted which the control is working with. In TALXIS Logical Name there is a name of field on `talxis_purchainvoiceheader` entity, these fields are filled after creation of new invoice in dataverse.

| Name | Logical Name (Invoice Miner) | TALXIS Logical Name (default mapping) | Description |
| --- | --- | --- | --- |
| Due Date | dueDate | talxis_duedate |  |
| Invoice Issue Date | invoiceDate | talxis_dateofissue  |  |
| Taxable Supply Date| taxableSupplyDate | talxis_dateoftaxablesupply |  |
| Variable Symbol | paymentReference | talxis_variablesymbol | Variable symbol/Payment reference |
| Invoice ID | invoiceId | talxis_purchaseinvoicenumber |
| Currency  | currency | transactioncurrencyid | Currency is matched by iso code in dataverse |
| Customer ID | customerExtCompanyId | talxis_customerid | guid of matched customer in database |
| Supplier ID | vendorExtCompanyId | talxis_supplierid | guid of matched supplier in dataverse |
| Customer Name | customerName |  |  |
| Customer Tax ID | customerTaxId |  | Used for matching customer with database |
| Customer Identification Number | customerICO |  |  |
| Customer Country Code | customerCountryCode |  |  |
| Customer Address | customerAddress |  |  |
| Customer Address Recipient | customerAddressRecipient |  |
| Supplier Name | vendorName |  |  |
| Supplier Tax ID | vendorTaxId |  | Used for matching supplier with database |
| Supplier Identification Number | vendorICO |  |  |
| Supplier Country Code | vendorCountryCode |  |  |
| Supplier Address | vendorAddress |  |  |
| Supplier Address Recipient | vendorAddressRecipient |  |  |
| Total Amount with VAT | invoiceTotal |  |  |
| Total Amount | amountsSumCheck |  |  |
| Subtotal | subTotal |  |  |
| Total Tax Amount | totalTax |  |  |
| Amount Due | amountDue |  |  |
| Payment Term | paymentTerm |  |  |
| Purchase Order Number | purchaseOrder |  |  |

### Invoice Lines
There is a list of extracted fields which the control is working with. In TALXIS Logical Name there is a name of field on `talxis_purchainvoicedetail` entity, these fields are filled in rows after creation of new invoice in dataverse.

| Name | Logical Name (Invoice Miner) | TALXIS Logical Name (default mapping) | Description |
| --- | --- | --- | --- |
| Line Name / Description | description | talxis_name |  |
| Unit Price | unitPrice | talxis_priceperunit |  |
| VAT Amount | tax | talxis_vatperunit_overridden |  |
| Quantity | quantity | talxis_quantity |  |
| Unit | unit |  |  |
| Amount | amount |  | Not used since total amount is calculated. |
| Product Code | productCode |  | Products are not matched with database. |
| Total Amount | amountCheck |  | Not used since total amount is calculated. |
| Full Line | fullLine |  |  |

## Control Inputs

| Display Name | Name | Required | Type | Description |
| --- | --- | --- | --- | --- |
| Binding Field | bindingField | Yes | Singleline.Text | Binding field for the control |
| Entity Name | entityName | Yes | Singleline.Text | Name of the entity where the control is bound |
| Entity ID | entityId | Yes | Singleline.Text | ID of the record where the control is bound |
| URL | url | Yes | Singleline.Text | Url of the target invoice from Invoice Miner |
| Host Url | hostUrl | Yes | Singleline.Text | Host url of the Invoice Miner cloud service | 
| Auth Token | authToken | Yes | Singleline.Text | Auth Token used for authorization with Invoice Miner service | 
| Overwrite Default Mappings | overwriteDefaultMappings | No | Singleline.Text | Used to overwrite the default mappings to dataverse columns, example below. |
| Additional Mappings | additionalMappings | No | Singleline.Text | Used to add mappings to the default ones, in case you want to leave the default but add some custom |

### Example of binding control to a form
```
<customControl formFactor="0" name="talxis_TALXIS.PCF.InvoiceRecognition">
		<parameters>
				<bindingField type="SingleLine.Text">data_bindingfield</bindingField>
				<url type="SingleLine.Text">data_invoiceurl</url>
				<authToken type="SingleLine.Text">data_authtoken</authToken>
				<hostUrl static="true" type="SingleLine.Text">https://{% environmentvariable talxis_apps_procurement_invoiceai_environmenturl %}</hostUrl>
				<entityName static="true" type="SingleLine.Text">talxis_document</entityName>
				<entityId type="SingleLine.Text">data_documentid</entityId>
			  <additionalMappings static="true" type="SingleLine.Text" >[{"invoiceMinerPropertyName": "purchaseOrder","invoiceMinerLocation": "header","logicalName": "ntg_purchaseordernumber","type": "text"},{"invoiceMinerPropertyName": "totalTax","invoiceMinerLocation": "header","logicalName": "ntg_totalvatamount","type": "number"}]</additionalMappings>
	 </parameters>
</customControl>
```

### Default column mappings object
**Mappings**
```
[
  {
    invoiceMinerPropertyName: "vendorExtCompanyId",
    invoiceMinerLocation: "header",
    logicalName: "talxis_supplierid@odata.bind",
    type: "lookup",
    targetEntitySetName: "accounts"
  },
  {
    invoiceMinerPropertyName: "customerExtCompanyId",
    invoiceMinerLocation: "header",
    logicalName: "talxis_customerid@odata.bind",
    type: "lookup",
    targetEntitySetName: "accounts"
  },
  {
    invoiceMinerPropertyName: "invoiceDate",
    invoiceMinerLocation: "header",
    logicalName: "talxis_dateofissue",
    type: "date"
  },
  {
    invoiceMinerPropertyName: "dueDate",
    invoiceMinerLocation: "header",
    logicalName: "talxis_duedate",
    type: "date"
  },
  {
    invoiceMinerPropertyName: "taxableSupplyDate",
    invoiceMinerLocation: "header",
    logicalName: "talxis_dateoftaxablesupply",
    type: "date"
  },
  {
    invoiceMinerPropertyName: "invoiceId",
    invoiceMinerLocation: "header",
    logicalName: "talxis_purchaseinvoicenumber",
    type: "text"
  },
  {
    invoiceMinerPropertyName: "paymentReference",
    invoiceMinerLocation: "header",
    logicalName: "talxis_variablesymbol",
    type: "text"
  },
  {
    invoiceMinerPropertyName: "currency",
    invoiceMinerLocation: "header",
    logicalName: "transactioncurrencyid@odata.bind",
    type: "transactioncurrency"
  },
  {
    invoiceMinerPropertyName: "unitPrice",
    invoiceMinerLocation: "lineItems",
    logicalName: "talxis_priceperunit",
    type: "number"
  },
  {
    invoiceMinerPropertyName: "tax",
    invoiceMinerLocation: "lineItems",
    logicalName: "talxis_vatperunit_overridden",
    type: "number"
  },
  {
    invoiceMinerPropertyName: "quantity",
    invoiceMinerLocation: "lineItems",
    logicalName: "talxis_quantity",
    type: "number"
  },
  {
    invoiceMinerPropertyName: "description",
    invoiceMinerLocation: "lineItems",
    logicalName: "talxis_name",
    type: "text",
    defaultValue: "Generated line",
    maxLenght: 100
  }
]
```

**Interface**
```
{
  invoiceMinerPropertyName: string,
  invoiceMinerLocation: "header" | "lineItems",
  logicalName: string,
  type: "text" | "number" | "date" | "lookup" | "transactioncurrency",
  targetEntitySetName?: string | undefined,
  defaultValue?: any | undefined,
  maxLenght?: number | undefined
}
```
