---
author: David Wasserbauer
---
# Požadavky pro nasazení TALXIS

Tato dokumentace popisuje nutné kroky pro kontinuální dodávku softwaru. Nicméně v případě, že některé z těchto kroků nebudou proveditelné, je variantou i instalace řešení manuálně zákazníkem v jeho tenantu.

Pro rozhodnutí o následujících krocích je potřeba odpověď na dvě klíčové otázky:

1. **Budou podkladové licence dodávány součástí TALXIS firmou NETWORG?**

      Standardním postupem je, že licence **Power Apps Per App** plan jsou součástí licence **TALXIS Start**, ale klient může mít licence nakoupené/pořízené jiným partnerem.

      Firma je pak uvedena jako partner v administraci tenantu:

      ![Partner Example](/.attachments/CustomizerGuide/Tenant/partnerExample.png)

2. **Administrativní kroky popisované dále budou prováděny klientem nebo budou svěřeny NETWORG?**

      Jestliže licence bude dodávat **NETWORG** a zároveň bude pověřen administrací nasazení, je možné využít odkaz <https://talxis.com/add-partner>.

      Jedná se o standardní nastavení, které dokumentace v detailu popisuje zde: <https://docs.microsoft.com/en-us/partner-center/customers-revoke-admin-privileges>.

      Když není možné schválit **NETWORG** jako správce v tenantu, je nutné, aby následující nastavení provedl admin tenantu.


Po splnění všech požadavků je možné nasazení všech programových úprav automatizovaně a vzdáleně, aniž by došlo k bezpečnostnímu riziku na straně zákazníka/tenantu. Náš aplikační účet je tzv. neinteraktivní uživatel, nemůže být zneužit k přístupu k datům. Tento postup nevyžaduje další licenční náklady.

## Schválení aplikační registrace „TALXIS Deployments”

Při schválení aplikační registrace dochází k přiřazení konkrétních oprávnění této aplikaci. Ta následně může provádět v rámci celého tenantu akce, ke kterým je oprávněna.

Tuto akci může provést pouze tenant (Global) admin.

### Postup schválení aplikační registrace

1. Navštivte následující link: <https://talxis.com/add-deployment-app>

    ![Dialog se žádostí o oprávnění pro aplikaci 'TALXIS Deployments](/.attachments/CustomizerGuide/Tenant/talxisDeploymentsPermission.png)

2. Akceptujte žádost o oprávnění.

K správnému fungování aplikace je nutné schválit i další aplikační registrace. 
Jejich výčet se liší od nasazeného modulu a použitých funkcionalit. (TALXIS Data Feed, TALXIS Documents, TALXIS File Picker, …)

## Vytvoření Power Platform prostředí

Aplikace TALXIS se nasazují do prostředí Power Platform, proto je potřeba prvně mít prostředí připravené. Po vytvoření prostředí poskytněte prosím _Environment URL._

### Postup vytvoření nového prostředí

Dle oficiální Microsoft dokumentace: [Vytváření a správa prostředí](https://learn.microsoft.com/cs-cz/power-platform/admin/create-environment#create-an-environment-in-the-power-platform-admin-center)

S vytvořením prostředí Vám můžeme pomoci. Pokud si prostředí přejete připravit sami, tak je třeba při jeho vytváření dbát určitých pravidel.

Vytvořené prostředí musí být typu **Production** a je nutné, aby obsahovalo **Dataverse**. Nezapomeňte proto vybrat tuto možnost před pokračováním na další stránku.

![Tvorba nového produkčního prostředí - stránka první](/.attachments/CustomizerGuide/Tenant/newEnv1.png)

Dále je nutné, aby vytvořené prostředí mělo základní jazyk systému nastavený na **English (United States)**. Čeština se do prostředí přidá později.

Měnu si nastavte ideálně na základě měny ve které vedete účetnictví.

Je velmi vhodné upravit URL výsledného prostředí. Z vygenerované URL často není na první pohled poznat o jaké prostředí jde.

> URL výsledného prostředí může být název aplikace nebo společnosti a za tím "-prod". Tento suffix používáme pro odlišení od [UAT](https://it-slovnik.cz/pojem/uat#:~:text=V%C3%BDznam%3A,situac%C3%ADch%20v%20souladu%20se%20specifikacemi.r) prostředí, kde probíhá schvalování nové funkcionality před nasazením do produkčního prostředí.

Pokud máte v tenantu uživatele, kteří nebudou aplikaci využívat, je vhodné vytvořit Security Group, kterou přiřadíte k prostředí. Návod naleznete zde: [Řízení přístupu uživatelů k prostředím: skupiny zabezpečení a licence](https://learn.microsoft.com/cs-cz/power-platform/admin/control-user-access).

Dynamics 365 a ukázková data nejsou v prostředí třeba.

![Tvorba nového produkčního prostředí - stránka druhá](/.attachments/CustomizerGuide/Tenant/newEnv2.png)

## Vytvoření aplikačního uživatele v Power Platform prostředí

Aplikační uživatel je neinteraktivní uživatel, pomocí kterého NETWORG nasazuje aplikace TALXIS do konkrétního Power Platform prostředí.

### Postup vytvoření aplikačního uživatele

Postup je popisován dokumentací Microsoft zde: [Manage application users in the Power Platform admin center - Power Platform | Microsoft Learn](https://learn.microsoft.com/en-us/power-platform/admin/manage-application-users#create-an-application-user)

**Application ID** pro **aplikaci TALXIS Deployments** je **4ab337b1-27bc-421d-8d56-7462bbea9831**. Podle toho ID můžete aplikaci rychleji vyhledat v bodě 6. postupu v dokumentaci.

Při přiřazení rolí přiřaďte roli **System Administrator** (Správce systému).

Po provedení těchto kroků je možné vzdálené nasazení TALXIS aplikace.

## Přidělení podkladových předplatných Microsoft uživatelům

Aby aplikaci mohli využívat koncoví uživatelé klienta, musí mít přidělené předplatné. Na výběr jsou dvě následující:

- Power Apps Premium plan – předplatné pro konkrétního uživatele, který je oprávněn používat více PowerApps aplikací
- Power Apps Per App plan – předplatné pro konkrétní aplikaci pro konkrétního uživatele

### Přiřazení _Power Apps Premium_ předplatných konkrétním uživatelům

Postup přidělení předplatného je popsán zde: [Přiřazení nebo zrušení přiřazení licencí uživatelům v Centru pro správu Microsoftu 365](https://learn.microsoft.com/cs-cz/microsoft-365/admin/manage/assign-licenses-to-users?view=o365-worldwide)

### Přiřazení _Power Apps Per App_ předplatných konkrétním aplikacím

Postup přidělení předplatného je popsán zde: [O Power Apps podle plánu aplikace](https://learn.microsoft.com/cs-cz/power-platform/admin/about-powerapps-perapp#step-two-allocate-per-app-plans)

V případě tohoto předplatného každý uživatel využije jeden **„Power Apps Per App plan“** pro přístup k jedné Model-Driven / Canvas aplikaci. Pokud tedy konkrétní uživatel používá více aplikací, tak každá tato aplikace konzumuje jeden **„Power Apps Per App plan“**.

Například _TALXIS Sales_ aplikace potřebuje pro každého uživatele dvě _Power Apps Per App plan_ licence. Jedna je pro _TALXIS Sales_ aplikace a druhá pro _App for Outlook_, která slouží k integraci produktu _Outlook_ s TALXIS aplikacemi.

## Přidělení uživatelských rolí TALXIS

Jakmile dojde k úspěšnému nasazení aplikace TALXIS, každý uživatel musí obdržet správnou roli zabezpečení, aby k aplikaci mohl přistupovat.

### Postup přidělení

1. V prohlížeči zadejte adresu: <https://admin.powerplatform.microsoft.com/>
2. Vyberte prostředí, ke kterému budou uživatelé přistupovat (produkci)  
    ![Přiřazení rolí zabezpečení 1](/.attachments/CustomizerGuide/Tenant/secRole1.png)
3. Klikněte na „Settings“  
    ![Přiřazení rolí zabezpečení 2](/.attachments/CustomizerGuide/Tenant/secRole2.png)
4. Vyberte „Security roles“ pod „User + permissions“  
    ![Přiřazení rolí zabezpečení 3](/.attachments/CustomizerGuide/Tenant/secRole3.png)
5. Všem uživatelům přiřaďte roli „TALXIS Baseline Access“  
    ![Přiřazení rolí zabezpečení 4](/.attachments/CustomizerGuide/Tenant/secRole4.png)
    ![Přiřazení rolí zabezpečení 5](/.attachments/CustomizerGuide/Tenant/secRole5.png)
6. Přiřaďte další bezpečnostní role dle aplikace a oprávnění jednotlivých uživatelů  
    ![Přiřazení rolí zabezpečení 6](/.attachments/CustomizerGuide/Tenant/secRole6.png)

## Zásady Data Loss Prevention

Pokud v rámci Power Platform ve Vašem tenantu využíváte zásady DLP, je nutné provést následující nastavení:

Pro cílové prostředí by měla existovat separátní politika, která bude mít výjimku z globální politiky. Tato politika musí umožňovat použitým konektorům v rámci TALXIS řešení komunikovat napříč Power Platform a Microsoft 365. Pokud zásady DLP používáte a neproběhne toto nastavení, aplikace TALXIS nemusí správně fungovat.

Pokud zásady DLP nevyužíváte, lze tuto sekci přeskočit.

## Nastavení Outlook Integrace

Pro synchronizaci aktivit (schůzky, emaily a úkoly) je potřeba pro každého uživatele zapnout server-side synchronizaci jeho mailové schránky. Detailní návod v dokumentaci Microsoftu lze nalézt zde: [Connect to Exchange Online - Configure Mailboxes](https://learn.microsoft.com/en-us/power-platform/admin/connect-exchange-online#configure-mailboxes).

Jakmile budou všechny mailové schránky nakonfigurované, nezapomeňte nastavení otestovat: [Connect to Exchange Online - Test the Configuration](https://learn.microsoft.com/en-us/power-platform/admin/connect-exchange-online#test-the-configuration-of-mailboxes).

Posledním krokem je instalace App for Outlook doplňku: [How to deploy Dynamics 365 App for Outlook](https://learn.microsoft.com/en-us/dynamics365/outlook-app/deploy-dynamics-365-app-for-outlook#step-4-install-app-for-outlook.).