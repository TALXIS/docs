---
redirectFrom:
  - /cz/integration/raynet
---

# Raynet

### Co je Raynet?

Raynet je oblíbený český CRM systém (Customer Relationship Management), který Vám umožňuje udržovat si přehled o vztazích s Vašimi zákazníky a vést obchod přehledně a jednoduše. Více se dozvíte na stránkách: www.raynet.cz.

### Co integrace nabízí?

Tato integrace byla vyvinuta za účelem propojení Raynetu s Vašemi kalendáři a kontakty v Outlooku. Díky ní tedy například nebudete muset ručně přepisovat události do obou kalendářů.

- Oboustranná synchronizace kalendáře

- Jednosměrná synchronizace kontaktů

## Ceník
---
Cena je fixní a **není** závislá na počtu uživatelů, pro které je integrace zapnuta.

- Synchronizace kalendářů: 1000 Kč/měsíc 

- Synchronizace kontaktů: 1000 Kč/měsíc


## Předpoklady
---
### Vytvoření Microsoft 365 skupiny

Pro nasazení integrace je zapotřebí vytvořit Microsoft 365 skupinu, do které stačí přidat uživatele, pro které má být integrace zapnuta.

Díky tomu budete moci jednoduše měnit, pro koho má být integrace zapnuta -- stačí uživatele do skupiny přidat či jej případně odebrat.

Nezapomeňte prosím zkontrolovat, že uživatelé nejsou v dané skupině pouze vlastníci, ale že jsou zároveň i členové.

### Notifikace

V Raynetu je integrace vždy vázána API klíčem na účet některého z uživatelům. Při synchronizacích, kdy integrace provádí ve Vašem Raynetu změny, se ovšem v notifikacích ukazují změny jménem daného uživatele, což může být matoucí.

Ve spolupráci s Raynetem jsme zavedli řešení pomocí tzv. virtuálního uživatele TALXIS Integrace, na kterého se integrace nasadí. Integrační uživatel je za zvýhodněnou sazbu 390 Kč bez DPH měsíčně.

Pro zapnutí této možnosti prosím proveďte následující:

- Vytvořte ve svém Microsoft 365 tenantu nového uživatele **talxis@[vašeDoména]** - např. talxis@networg.com.

- Uživateli nemusíte přidávat žádnou licenci.

- Přidejte uživatele do Microsoft 365 skupiny, pro níž bude integrace zapnutá.

- Vytvořte v Raynetu uživatele se stejným jménem.

- Kontaktujte Raynet podporu, že se jedná o virtuálního uživatele vytvořeného za účelem fungování této integrace.

## Jak začít integraci používat?
---
Zde naleznete formulář, po jehož vyplnění Vás zašleme nabídku na Vaši emailovou adresu. Po jejím odsouhlasení a zaplacení prvního měsíce Vám bude integrace nasazena.

Pro vyplnění formuláře je potřeba se přihlásit Vaším administrátorským Microsoft 365 účtem, formulář Vás poté procesem provede. Bude potřeba zadat následující údaje:

### 1. Název prostředí

Název vašeho Raynet prostředí následuje za lomítkem v adresním řádku po app.raynet.cz. Například pokud je-li Vaše adresa v prohlížeči *https://app.raynet.cz/talxis/?view=Helpboard*, název Vašeho prostředí je **talxis**.

### 2. Vaše uživatelské jméno v Raynetu

Emailová adresa, pod kterou se přihlašujete do Raynetu.

### 3. API klíč

API klíč můžete snadno vygenetovat po přihlášení do Raynetu následujícím způsobem:

- Běžte do *Nastavení* (najdete u symbolu ozubeného kola v pravém horním rohu stránky).

- V nabídce zvolte *API klíče*.

- Klikněte na zelené tlačítko *Nový API klíč*.

### 4. Microsoft 365 skupina

Zde z automatické nabídky vybere Microsoft 365 skupinu, kterou jste vytvořili podle výše uvedeného návodu (Předpoklady).

### 5. Režim hotových a soukromých událostí

Více informací naleznete v sekci **Kalendář**.

### 6. Fakturační údaje

Zde vyplňte IČO Vaší společnosti, kontaktní emailovou adresu a své telefonní číslo.

### 7. Režim synchronizace

Na závěr zbývá vybrat, zda chcete synchronizovat schůzky, kontakty nebo obojí.
