---
title: Email Proxy
tagline: Using Email Connector in PowerAutomate
author: Jan Losenicky
---

# **Email Proxy**

You will find Email Proxy in TALXIS.Connectors.Email.zip solution which you can import to your environment.

## Authorization - Making Connection

Email Proxy is authenticated with Azure Active Directory (AAD) login. Also there needs to be existing Environment Configuration for current environment saved in TableStorage.

## Actions and triggers

### Trigger: Email is Received


This can trigger flows when email is received on specific email address or whole domain.

#### INPUTS

- Hostname (required)
  - Domain name where emails will arrive
  - e.g. "talxis.com"
- Email Addreses (optional)
  - Array of email addresses which can trigger the flow.
  - e.g. 
  ``` 
  [
    "test@talxis.com",
    "user@talxis.com",
    "emails@talxis.com"
  ]
  ```

#### OUTPUTS

Returns json object containing information from email including attachments.

<details>
<summary>Schema</summary>

```
{
"type": "object",
"properties": {
  "Headers": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "Key": {
          "type": "string"
        },
        "Value": {
          "type": "string"
        }
      },
      "required": [
        "Key",
        "Value"
      ]
    }
  },
  "Dkim": {
    "type": "string"
  },
  "To": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "Email": {
          "type": "string"
        },
        "Name": {
          "type": "string"
        }
      },
      "required": [
        "Email",
        "Name"
      ]
    }
  },
  "Cc": {
    "type": "array"
  },
  "Html": {
    "type": "string"
  },
  "Text": {
    "type": "string"
  },
  "From": {
    "type": "object",
    "properties": {
      "Email": {
        "type": "string"
      },
      "Name": {
        "type": "string"
      }
    }
  },
  "SenderIp": {
    "type": "string"
  },
  "SpamReport": {
    "type": "string"
  },
  "Envelope": {
    "type": "object",
    "properties": {
      "To": {
        "type": "array",
        "items": {
          "type": "string"
        }
      },
      "From": {
        "type": "string"
      }
    }
  },
  "Subject": {
    "type": "string"
  },
  "SpamScore": {
    "type": "string"
  },
  "Attachments": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "Id": {
          "type": "string"
        },
        "ContentType": {
          "type": "string"
        },
        "SasUrl": {
          "type": "string"
        },
        "FileName": {
          "type": "string"
        },
        "Name": {
          "type": "string"
        },
        "ContentId": {
          "type": "string"
        }
      },
      "required": [
        "Id",
        "ContentType",
        "SasUrl",
        "FileName",
        "Name",
        "ContentId"
      ]
    }
  },
  "Charsets": {
    "type": "array",
    "items": {
      "type": "object",
      "properties": {
        "Key": {
          "type": "string"
        },
        "Value": {
          "type": "string"
        }
      },
      "required": [
        "Key",
        "Value"
      ]
    }
  },
  "Spf": {
    "type": "string"
  },
  "RawEmail": {},
  "EmlUrl": {
    "type": "string"
  }
}
}
```
</details>

<details>

<summary>Example of object returned</summary>

```
{
  "headers": {
      "Host": "prod-123.westeurope.logic.azure.com",
      "Content-Length": "4363",
      "Content-Type": "application/json; charset=utf-8"
  },
  "body": {
      "Headers": [
          {
              "Key": "Received",
              "Value": "by mx0138p1mdw1.sendgrid.net with SMTP id NYddkcZOTi Thu, 13 Apr 2023 15:53:11 +0000 (UTC)"
          },
          {
              "Key": "Received",
              "Value": "from mail-pj1-f47.google.com (unknown [209.85.216.47]) by mx0138p1mdw1.sendgrid.net (Postfix) with ESMTPS id 75FF43818E7 for <admin@janlos.fun>; Thu, 13 Apr 2023 15:53:11 +0000 (UTC)"
          },
          {
              "Key": "Received",
              "Value": "by mail-pj1-f47.google.com with SMTP id hg12so1055484pjb.2 for <admin@janlos.fun>; Thu, 13 Apr 2023 08:53:11 -0700 (PDT)"
          },
          {
              "Key": "DKIM-Signature",
              "Value": "v=1; a=rsa-sha256; c=relaxed/relaxed; d=gmail.com; s=20221208; t=1681401191; x=1683993191; h=to:subject:message-id:date:from:mime-version:from:to:cc:subject :date:message-id:reply-to; bh=Q7WmHBFX6ZN+e/gIsUuXQY/W6XCBEj0AMXF3KRiVCeg=; b=SzuMwstrpHvAMaZBQdAolodQsEVmckVVOR5NxQM2mbGVN53O5xJrPbtAV0nHHMBqqw xqtUUo4CkpVpZoQt4fsGJzaryQ0zd/lGmAEC1oKkpcM8FUV0Vy5HlQb/XtSrMqCFjs10 ZHUW/6EowRlBbQT1B2jKtCBWFnC6shsndQSP0jWwr8xc1bMnb7Ws3GQenWrCzi0zYvCy SJoG6+BoRwx5w1GzqdnBY2lcy0pI3YmbzcYd9iKalq1+L7Bd4FMisCHfrUoz+7fqxB2S 0efJL/qPFnCXHbe+82tT/xQzQq9CDaPA0qTgTg0cQIfxAnwZT6SqmClY1SWphv063SaY KgZQ=="
          },
          {
              "Key": "X-Google-DKIM-Signature",
              "Value": "v=1; a=rsa-sha256; c=relaxed/relaxed; d=1e100.net; s=20221208; t=1681401191; x=1683993191; h=to:subject:message-id:date:from:mime-version:x-gm-message-state :from:to:cc:subject:date:message-id:reply-to; bh=Q7WmHBFX6ZN+e/gIsUuXQY/W6XCBEj0AMXF3KRiVCeg=; b=DGvHH53Wgs3ZRvnyIXjV8y6EuhLP8r9odpEbnI+y6SDYINMpbGPUrxuvJgsv3zg2au LUbKssM3yWECNKM4abSYNK3iFx7PUcNNGNwWDSyVZSrOilU0NiyHYyrdQReDsRMJjSam GS2KojUA/jY2IxOtblLR/pwRFiegQTZNAy6pNHYkygLBdGhyOrCZtuNp/66GECi2RddO cWEyEoLKfgsspQIhXTHeO/GKVajsYqlyj57dyjpv8MJJN+GOrmWxFLrFlmcrq1OyHbas fJHJvXkKEVWmLRdbx5wFetdL2SBoDhM7jLpINACPfsW8gU25NZ+vZG7j9lnO6nTGaeta ODYg=="
          },
          {
              "Key": "X-Gm-Message-State",
              "Value": "AAQBX9dz8Td1kGasEd8ph1xOtalvbjErZCI4dAcrPSxS2wNNgXkpWBGV x5wtxz2uMTt94kH+qrq285V+e7lfBvm/pr+mZPytQ5I7jSw="
          },
          {
              "Key": "X-Google-Smtp-Source",
              "Value": "AKy350aDkEP+g5sqRyRyPTXAexR8Nv8QwCE8psvVTihtw0gdMW7hjHykVj2jjCGao8wWNQ6XTHhdeLuWfx0OStWAAUI="
          },
          {
              "Key": "X-Received",
              "Value": "by 2002:a17:902:f30b:b0:1a6:81b5:9138 with SMTP id c11-20020a170902f30b00b001a681b59138mr788068ple.11.1681401190608; Thu, 13 Apr 2023 08:53:10 -0700 (PDT)"
          },
          {
              "Key": "MIME-Version",
              "Value": "1.0"
          },
          {
              "Key": "From",
              "Value": "Jan Losenicky <losenickyjan.jl@gmail.com>"
          },
          {
              "Key": "Date",
              "Value": "Thu, 13 Apr 2023 17:52:58 +0200"
          },
          {
              "Key": "Message-ID",
              "Value": "<CABraN2Nht8G9eNsL=Ci+ghp4By0q2i3KuPwrR+FLzf1cNrUsVQ@mail.gmail.com>"
          },
          {
              "Key": "Subject",
              "Value": "Test"
          },
          {
              "Key": "To",
              "Value": "admin@janlos.fun"
          },
          {
              "Key": "Content-Type",
              "Value": "multipart/mixed; boundary=\"000000000000b122b405f939b85c\""
          }
      ],
      "Dkim": "{@gmail.com : pass}",
      "To": [
          {
              "Email": "admin@janlos.fun",
              "Name": ""
          }
      ],
      "Cc": [],
      "Html": "<div dir=\"ltr\">test</div>\r\n",
      "Text": "test\r\n",
      "From": {
          "Email": "losenickyjan.jl@gmail.com",
          "Name": "Jan Losenicky"
      },
      "SenderIp": "209.85.216.47",
      "Envelope": {
          "To": [
              "admin@janlos.fun"
          ],
          "From": "losenickyjan.jl@gmail.com"
      },
      "Subject": "Test",
      "Attachments": [
          {
              "Id": "attachment2",
              "ContentType": "application/octet-stream",
              "SasUrl": "http://127.0.0.1:10000/devstoreaccount1/emails/admin%40janlos.fun/<CABraN2Nht8G9eNsL%3DCi%2Bghp4By0q2i3KuPwrR%2BFLzf1cNrUsVQ%40mail.gmail.com>/attachment2-Email.Proxy.yml?sv=2021-12-02&se=2023-05-13T15%3A53%3A11Z&sr=b&sp=r&sig=hVXrEVJVv%2Bg7qlh2kLld8LXdvAS8x3o%2FHJ8ocwHMZjs%3D",
              "FileName": "Email.Proxy.yml",
              "Name": "Email.Proxy.yml",
              "ContentId": "f_lgfauj1v0"
          },
          {
              "Id": "attachment1",
              "ContentType": "text/xml",
              "SasUrl": "http://127.0.0.1:10000/devstoreaccount1/emails/admin%40janlos.fun/<CABraN2Nht8G9eNsL%3DCi%2Bghp4By0q2i3KuPwrR%2BFLzf1cNrUsVQ%40mail.gmail.com>/attachment1-schema.xml?sv=2021-12-02&se=2023-05-13T15%3A53%3A11Z&sr=b&sp=r&sig=ZWItunFNQTj%2Bz0o2toUD0vFfXsNEiESw%2BnmDef0CSJs%3D",
              "FileName": "schema.xml",
              "Name": "schema.xml",
              "ContentId": "f_lgfauj1z1"
          }
      ],
      "Charsets": [
          {
              "Key": "to",
              "Value": "UTF-8"
          },
          {
              "Key": "filename",
              "Value": "UTF-8"
          },
          {
              "Key": "html",
              "Value": "UTF-8"
          },
          {
              "Key": "subject",
              "Value": "UTF-8"
          },
          {
              "Key": "from",
              "Value": "UTF-8"
          },
          {
              "Key": "text",
              "Value": "UTF-8"
          }
      ],
      "Spf": "pass",
      "EmlUrl": "http://127.0.0.1:10000/devstoreaccount1/emails/admin%40janlos.fun/<CABraN2Nht8G9eNsL%3DCi%2Bghp4By0q2i3KuPwrR%2BFLzf1cNrUsVQ%40mail.gmail.com>/mail.eml?sv=2021-12-02&se=2023-05-13T15%3A53%3A11Z&sr=b&sp=r&sig=4Ts67naVxq5sC2RBXH6Ci1m0rdHfntfD1W5ImcxpNTw%3D"
  }
}
```
</details>

### Action: Get Attachment Content
---

This action can be used to get a content of attachment returned from email in base64.

#### INPUTS

- File Url (required)
  - Url where the file is saved, it is returned in property `SasUrl` in attachment returned from trigger.

---

> **_NOTE_**: SasUrl = Shared Access Signature Url of the file saved in Azure Blob Storage. (Have an expiration, its not limitless)

---

#### OUTPUTS

Return a json object with content and content-type.

```
{
  "$content-type": string,
  "$content": string
}
```

### Action: Send Mail (v2)

Action can be used to send emails through SendGrid. The email address from which you are sending the email from needs to registered in SendGrid you are using.

#### INPUTS

- From Email
  - Email Address
  - e.g. `test-user@talxis.com`
- From Name
  - e.g. `Test User`
- To
  - Array of objects of recepients
  - Email - Email address
  - Name
- Subject
- Cc (Carbon Copy)
  - Array of objects (Email, Name) of recipients which should receive a copy of the message.
- Bcc (Blind Carbon Copy)
  - Array of objects (Email, Name) of recipients which should receive a copy of the message and stays hidden.
- Content
  - Array of objects (Value, Type).
  - Type - can be text/html or text/plain
  - Value - plain text or html
- Reply To Email
  - Email address that should appear when someone will try to reply to email sent.
- Reply To Name
  - Name that should appear when someone will try to reply to email sent.
- Attachments
  - Array of objects (Content, Filename, Type)
  - Content - Base64 of the file
  - Filename - Name of the file
  - Type - mimetype of the file e.g. `application/pdf`


#### OUTPUTS

Return json object with MessageId returned from SendGrid so it is possible to find the message in SendGrid if needed.

```
{
  "MessageId": string
}
```