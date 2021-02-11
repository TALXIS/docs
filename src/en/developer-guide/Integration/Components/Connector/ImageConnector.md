---
title: Image Connector
tagline: Transformation of images using Image Connector
author: Zdeněk Šrejber
---

# **Working with Image connector**

## Image sources
Connector can work with either:
1.  URL of source image
2.  Base64 - e.g. output of "Get file or image content" action in PowerAutomate

## Property tranformation
With image connector you can transform several properties of the image:
1. Width and Height - in pixels. If desired resolution changes aspect ratio of image, the result will be stretched. If you do not want stretched images, insert resolution that has same aspect ratio as original image. See example of common resolutions for 16:9 aspect ratio [here](https://en.wikipedia.org/wiki/16:9_aspect_ratio#Common_resolutions)
2. DPI - must be calculated to specific needs. E.g. when printing on A4, you probably won't need more than 300dpi 
3. Quality - from 0 (maximum compression) to 100 (original quality).

# Step 1: Get the image 
In this example we will be using image from Dataverse. Do not forget to check that a file has been actually uploaded to the record, othwise your flow will fail eventually.

![image.png](/.attachments/ImageConnector/Image3.png)

# Step 2: Insert the base64 of image
Be sure to use base64 of the image as input. You will likely not be able to use dynamic content from previous action. You will have to parse it first or use an expression. In example here, we are using an expression below, which specifies the path to the base64 of image in JSON output of previous action.

```
outputs('Get_image_content')?['body/$content']
```

Secondly, to work with output image from the connector you will HTTP action, because the processed image is stored on a server and not directly returned. Use method Get and URI is body of image connector output. You will be using output of this HTTP action for further work with image.

![image.png](/.attachments/ImageConnector/Image2.png)

# Step 3: Work with image
Now you are free to use the transformed image as you wish. Check the transformation and make sure that it looks as desired, if not just play a bit with properties in image connector. 

The image itself can be again accessed through expression or parsed JSON. Expression to base64 of image is below:

```
outputs('HTTP')?['body']['$content'])
```

In our case we are adding it to an array of images through expression bellow:
```
setProperty(variables('Helper image variable'), 'value', outputs('HTTP')?['body']['$content'])
```

![image.png](/.attachments/ImageConnector/Image1.png)

Such array can be then used as input for other actions, such as PowerPoint Filler or [Excel Connector](src\en\developer-guide\Integration\Components\Connector\ExcelConnector.md)
