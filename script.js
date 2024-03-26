let materialArr = [
  "SURGISPON STANDARD",
  "Špongia želatinová absorpčná Gelita-Ssptoenri",
  "Adrenalin Bradex 1 mg/ml injekčný roztsookl inj ",
  "Adrenalin Léčiva sol inj 5x1 ml/1 mg",
  "ANALGIN inj sol inj 5x5 ml",
  "ANOPYRIN 100 mg tbl 28x100 mg",
  "Apaurin sol inj 10x2 ml/10 mga",
  "Betadine dezinfekčný roztok",
  "ATROPIN Biotika 1 mg  ",
  "Brilique 90 mg filmom obalené tablety",
  "Buscopan sol inj 5x1 ml/20 mg",
  "Carbo medicinalis tbl",
  "CARBOFIT CARKL 25G 1x25g ks ",
  "CARBOSORB perorálny prášok plv por 1x25 g",
  "CARBOSORB tablety tbl 20x320 mg ",
  "CARDILAN sol inj 10x10 ml ",
  "CATHEJELL LIDOCAIN ",
  "Compound Sodium Lactate Ringer-Lacstaotl inf 10x1000 ml",
  "Compound Sodium Lactate Ringer-Lacstaotl inf 10x500 ml",
  "Cordarone 150 mg/3 ml",
  "DEGAN 10 mg/2 ml",
  "DEXAMED sol inj 10x2 ml/8 mg",
  "Dexametazón Krka 4 mg tablety tbl 20x4 mg ",
  "DEXAMETHASONE INJ IP 50AM 10x5x2ml ks",
  "Dexamethasone Noridem 4 mg/ml injeksčonl ýin rjo 1z0toxk2 ml ",
  "Diazepam Desitin rectal tube 5 mg sol rec 5x2,5 ml/5 mgtu ",
  "Diazepam Slovakofarma 10 mg tbl 20x10 mg ",
  "DITHIADEN INJ sol inj 10x2 ml/1 mg",
  "Efient 10 mg filmom obalené tablety tbl flm 28x10 mg",
  "Flumazenil Pharmaselect 0,1 mg/ ml sol ifc 5x5 ml/0,5 ",
  "FUROSEMID BBP 10 mg/ml sol inj 5x2 ml/20 mg ",
  "FUROSEMID Biotika FORTE sol inj 10x10 ml/125  ",
  "Gelofusine sol inf 10x500 ml",
  "GLUKÓZA 10% 500ML INF sol inf 10x500 ml",
  "GLUKOZA 40% 10ML INJ sol inj 20x10 ml",
  "GLUKOZA 5% 100 ML INF sol inf 20x100 ml",
  "GLUKOZA 5% 500ML INF sol inf 10x500 ml ",
  "HEPARIN LÉČIVA sol inj 1x10 ml/50",
  "Hydrocortison VUAB 100 mg plv ino 1x100 mg",
  "CHLORID SODNÝ 0,9 % 100 ML INF sol inf 20x100 ml ",
  "CHLORID SODNÝ 0,9 % 250 ML INF sol inf 10x250 ml",
  "CHLORID SODNÝ 0,9 % 500 ML INF sol inf 10x500 ml ",
  "CHLORID SODNÝ 0,9% 10ML INJ sol inj 20x10 ml",
  "ISOKET aer ora 1x300 ",
  "Jodid draselný G.L. Pharma 65 mg tabltebtly 6x65 mg",
  "Lexaurin 1,5 mg tbl 28x1,5 mg",
  "Lexaurin 3 mg tbl 28x3 mg",
  "Lidocain EGIS 10% ",
  "MAGNESIUM SULFURICUM ",
  "MESOCAIN gel urt 1x20 g ",
  "MESOCAIN 1 % sol inj 10x10 ml",
  "Metamizole Kalceks 500 mg/ml ",
  "NALOXONE WZF POLFA ",
  "Nitromint sol asl 1x10 g ",
  "NO-SPA 40 mg/2 ml ",
  "Novalgin 500 mg/1",
  "ONSETROGEN 2 mg/ml",
  "Panadol Baby sup 10x125 mg ",
  "Paracetamol Kabi 10 mg/ml",
  "PARALEN 100 sup 5x100 mg",
  "PARALEN 125 tbl 20x125 mg ",
  "Penthrox vap inl 1x3 ml ",
  "Peroxid vodíka 3 % sol dor 1x100 g ",
  "Peroxid vodíka 3 % sol dor 1x1000 g",
  "Plasmalyte sol inf 20x500 ml",
  "RECTODELT 100MG SUPP 4X100MG sup",
  "Ringer´s Braun Injection sol inf 10x500 ml ",
  "Scopolamine butylbromide Kalceks ",
  "SYNTOPHYLLIN sol inj 5x10 ml/240",
  "Tensiomin 12,5 mg tbl 30x12,5 mg ",
  "Tensiomin 25 mg tbl 30x25 mg ",
  "TORECAN roztok 6,5 mg/1 mlsol inj 5x1 ml/6,5 mga ",
  "TRAMAL injekčný roztok 100 mg/2 ml ",
  "TRAMAL injekčný roztok 50 mg/ml",
  "Trombex 75 mg filmom obalené tablety",
  "Ventolin sol neb 1x20 ml/100 ",
  "Ventolin Inhaler N sus inh 1x200 dávok",
  "Zyllt 75 mg filmom obalené tablety tbl flm 28x75 mg ",
  "3-CESTNY KOHUT ks",
  "3M RESPIRATOR FFP2 s výd. filtrom ",
  "AB Kompres 10x20cm 1ks",
  "ALKO CLEAN",
  "Antibakteriálne mydlo ",
  "Antigenový test SARS COV",
  "BAKTER. FILTER Iso-gard",
  "M1003346 BAKTER. FILTER UNI Junior jednor.",
  "BAKTERIALNY FILTER",
  "BALMEA balzam 500ml",
  "BRAUNOL sol der 250 ml ",
  "Burnshield 10x10cm ",
  "Burnshield 125ml protipopaleninový 125ml ",
  "Burnshield 20x20cm",
  "Burnshield 40x60cm 40x60cm ",
  "Burnshield 50ml hydrogel 50ml ",
  "CorPatch - DEFIBR. ELEKTRODY DOSP.",
  "CorPatcheasy Pediatric - DEFIBR. ELEKTRODY ",
  "ČIAPKA FOLIODRESS CAP univer. zelená baret",
  "DEKOMPRESNA IHLA",
  "DESAM GK 1L",
  "DESAM GK 5kg ",
  "DESAM OX 1L ",
  "DESAM OX 5 KG ",
  "DESPREJ New 500ml ",
  "DESPREJ New 5L ",
  "DESPREJ Sensitive 500ml ",
  "DESPREJ Sensitive 5L",
  "Dezinfekcia na ruky Saniswiss H1 500ml",
  "Dezinfekcia Sanitizer surfaces S2 5L",
  "surfaces S2 flaša s rozprašovačokms na penu",
  "Dezinfekčné obrúsky Sanitizer surfaces",
  "ECOLAV NaCl 0,9% 100ML",
  "EKG ELEKTRODY",
  "EMITNA MISKA PAPIER.",
  "ENDOTRACH. KANYLA bez manzety 2,5MM",
  "ENDOTRACH. KANYLA s manzetou 3,0MM ",
  "ENDOTRACH. KANYLA s manzetou 4,0MM ",
  "ENDOTRACH. KANYLA s manzetou 5,0MM ",
  "ENDOTRACH. KANYLA s manzetou 6,0MM ",
  "ENDOTRACH. KANYLA s manzetou 6,5MM",
  "ENDOTRACH. KANYLA s manzetou 7,0MM ",
  "ENDOTRACH. KANYLA s manzetou 7,5MM ",
  "ENDOTRACH. KANYLA s manzetou 8,0MM ",
  "ENDOTRACH. KANYLA s manzetou 8,5MM ",
  "ENDOTRACH. KANYLA s manzetou 9,0MM ",
  "EtCO2 ADAPTER Corpulus ",
  "FILMPORE 2,5cmx9,15m ",
  "FIXACNA NAPLAST ",
  "FIXACNA NAPLAST DURAPORE ",
  "FIXATOR ENDOTRACH. KANYLY ",
  "FOLIA Izotermicka ",
  "GASTRODUODEN. sonda 12CH 125cm ",
  "GASTRODUODEN. sonda 14CH 125cm ",
  "GASTRODUODEN. sonda 16CH 125cm",
  "GASTRODUODEN. sonda 18CH 125cm",
  "GASTRODUODEN. sonda 20CH 125cm ",
  "GASTRODUODEN. sonda 22CH",
  "Gáza vinutá sterilná 7x90cm ",
  "Grassolind Neutral kompres s masťou10x10cm",
  "HADICKA PREDLZOVACIA ",
  "Hadicka spojovacia",
  "HADIČKA EtCO2 Microstream",
  "HUSI KRK",
  "Chiraflex 14G oranžový ",
  "Chiraflex 16G šedý",
  "Chiraflex 18G 50ks zelený",
  "Chiraflex 22G modrý ",
  "Chiraflex 24G žltý",
  "Chiraflex Safety 18G zelená ",
  "Chiraflex Safety 20G ruzová ",
  "Chiraflex Safety 22G modrá",
  "Chiraflex Safety 24G žltá ",
  "CHIRURGICKA MASKA JEDNORAZ. ",
  "CHLADIVY SPRAY CRYOS ",
  "Chlopňa Heilichova",
  "Ihla injekcna KDM 18G",
  "IHLA JEDNORAZOVA čierna 22G",
  "IHLA JEDNORAZOVA modrá 23G ",
  "IHLA JEDNORAZOVA ružová 18G ",
  "IHLA JEDNORAZOVA zelená 21G",
  "INDULONA NECHTIKOVA",
  "IO BIG ADULT G15",
  "IO BIG INFANT G18",
  "IO NIO DOSP.",
  "Izolačná termotaška",
  "KANYLA LAR LTS-D v.3 ",
  "KANYLA LAR LTS-D v.4 ",
  "KANYLA LAR LTS-D v.5",
  "KANYLA LAR. LTS-D v.0",
  "KANYLA LAR. LTS-D v.1",
  "KANYLA LAR. LTS-D v.2",
  "KATETER ODSAV. 14CH",
  "KATETER ODSAV. 16CH",
  "KATETER ODSAV. 18CH",
  "KATETER ODSAV. 6CH",
  "KATETER ODSAV. 8CH",
  "KATETER ODSAV.10CH ",
  "KATETER ŽEN.JEDNORAZ. NELATON CH12",
  "Kompresy z gazy sterilne 10x10cm ",
  "Kontajner BD na ostré predmety 1,5 l",
  "Kontajner na odpad 0,7l ",
  "LAD INSTANTNY polyetyl.vrecko 14x18cm",
  "LANCETA WELLION 23G",
  "LOPATKY USTNE",
  "MASIMO SENZOR LNCS Infant",
  "MASIMO SENZOR LNCS NEO-3",
  "MASKA KYSLIKOVA ",
  "MASKA KYSLIKOVA DOSP.",
  "MASKA NEBULIZACNA DETS. ",
  "MASKA NEBULIZACNA DOSP.",
  "MASKA O2 MIKRONEBUL. DETS",
  "MASKA O2 MIKRONEBUL. DOSP",
  "MASKA O2 S HADICKOU ",
  "MASKA O2 S REZERVOAROM ",
  "MASKA O2 S REZERVOAROM detska",
  "MASKA SUPRAGLOT. I-GEL v. 4",
  "MASKA SUPRAGLOT. I-GEL v.1 ",
  "MASKA SUPRAGLOT. I-GEL v.3 ",
  "MASKA SUPRAGLOT. I-GEL v.4",
  "NÁDOBA NA OSTRÝ ODPAD 2,0L",
  "NÁPLASŤ ELASTPORE+PAD I.V.",
  "NAPLASTE SPOFAPLAST 3M",
  "NAVLEK NA MATRAC z PVC",
  "NAVLEK NA TOPANKY jednoraz. modrý ",
  "NOZNICE ROVNE ",
  "OBLIECKA NA PRIKR. ",
  "OBVAZ ELASTICKY 10CMX5M ",
  "OBVAZ ELASTICKY 12CMX5M ",
  "OBVAZ ELASTICKY 6CMX5M ",
  "OBVAZ ELASTICKY 8CMX5M ",
  "OBVAZ HOTOVY STERILNY c.3",
  "OBVAZ HOTOVY STERILNY c.4 ",
  "OBVAZ NESTERILNY 10cmx5m ",
  "OBVAZ NESTERILNY 12cmx5m",
  "OBVAZ NESTERILNY 8cmx5m",
  "OCHR. OVERAL Tyvek 500 Xpert - XL",
  "OCHR. OVERAL Tyvek 500 Xpert - XXL",
  "OCHR.OBLEK ",
  "VERAL Tyvek ",
  "OCHRANNÝ OVERAL v. XL jednoraz. biely",
  "OCHRANNÝ OVERAL v.2XL jednoraz. biely",
  "OCHRANNÝ OVERAL v.3XL jednoraz. biely",
  "OCHRANNÝ OVERAL v.L jednoraz. biely",
  "OCHRANNÝ OVERAL v.M jednoraz. biely",
  "OCHRANNY PRACOVNY ODEV Chemsafe ",
  "OKULIARE KYSLIKOVE DETS.",
  "OKULIARE KYSLIKOVE PRE DOSP.",
  "OKULIARE KYSLIKOVE PRE NOVOR",
  " PAPIER EKG Corpuls",
  "PAPIER EKG Lifepack",
  "PERFUSOR SPOJOVACIA HADICKA ",
  "PERFUSOR STRIEKACKA 50ml",
  "PERMANENTNY KATETER 14CH",
  "PERMANENTNY KATETER 16CH",
  "PERMANENTNY KATETER 18CH",
  "PERMANENTNY KATETER 20CH",
  "PERMANENTNY KATETER 22CH",
  "PINZETA ANATOMICKA kov. steril",
  "Plachta 130x210cm",
  "Plachta 90x210cm",
  "Plachta jednorazova biela 220X90CM",
  "PLACHTA POPAL. EVER READY ",
  "PLACHTA PRENASACIA do 150kg 190x80cm ",
  "PLÁŠŤ NÁVŠTEVNÍCKY",
  "PODLOZKA MOLINEA PLUS",
  "PODLOZKA SENI SOFT SUPER 90x60",
  "PRIKRÝVKA/DEKA PRE PACIENTA jednorázová modrá",
  "PROSAVON 1L,",
  "Prosavon 5l,",
  "PROSAVON S DAVKOVACOM",
  "PRSIPLAST k BLS1+ ",
  "PRUBAN vel.10 hrud",
  "PRUBAN vel.4 laket",
  "PRUBAN vel.6 laket",
  "PRUBAN vel.7 rameno",
  "PRUBAN vel.8 rameno",
  "PUMPIĆKA DAVKOVACIA ",
  "QUICK- COMBO ELEKTR. DETSKE",
  "QUICK- COMBO ELEKTR.DOSP",
  "REDUKCNA SPOJKA STERILNA",
  "RESKUE SET PRE NAHLY POROD ",
  "Respirátor FFP2 bez výd. filtra ",
  "Respirátor FFP3 bez výd. ventila",
  "Respirátor FFP3 MFA",
  "RESPIRATOR KN95",
  "RESPIRÁTOR P2 ",
  "RESPIRÁTOR P3 ",
  "RESPIRÁTOR, typ FFP3",
  "Ruk.Nitrylex Classic",
  "RUKAVICE COLAD čierne",
  "RUKAVICE CHIR. VINYLEX L",
  "RUKAVICE nitril. L",
  "RUKAVICE nitril. S",
  "RUKAVICE nitril. XL",
  "RUKAVICE Nitrylex Classic M ",
  "RUKAVICE OPER. TOP GLOVE v.7 steril. bez pudru ",
  "RUKAVICE OPER. TOP GLOVE v.7,5 steril. bez pudru",
  "RUKAVICE OPER. TOP GLOVE v.8 steril. bez pudru ",
  "RUKAVICE OPTILINIE XL",
  "RUKAVICE STERIL. CHIR.",
  "RUKAVICE STERIL. veľ. 8 ",
  "RUKAVICE STERILNE IMUNITY v.7",
  "RUKAVICE STERILNE IMUNITY v.8,0",
  "SACOK NA ZVRATKY SicSac",
  "SATKA TROJROHA",
  "Septoderm 500ml",
  "SET INFUZNY CHIRAPLUS G ECO",
  "SKALPEL JEDNORAZOVY N15",
  "Skinman Foam 600ml ",
  "Skinman Soft Protect 1l",
  "Skinman Soft Protect500ml",
  "SKINSEPT MUCOSA 500ML",
  "SKRTIDLO GUMOVE",
  "SONDA ZALUDOCNA 32CH",
  "STERI-STRIP",
  "STERI-STRIP ",
  "STRIEKAcka 100ml pre LT",
  "STRIEKACKA 50ml pre LT ",
  "STRIEKACKA INJEKCNA BD 5ML ",
  "STRIEKACKA INJEKCNA BD 10ml",
  "STRIEKACKA INJEKCNA BD 20ml",
  "STRIEKACKA INJEKCNA BD 2ml",
  "STRIEKACKA JANETT 150ml",
  "SUMA TAB dezinf. tabl. na báze chlóru300mg",
  "Svorka na pupoc. snuru 1KS",
  "TAMPON Z GAZY STAC. NESTER.",
  "TAMPON STAC. STER.",
  "TENA UMYV. PENA ",
  "TEST. PRUZKY ACCU-CHEK ",
  "TEST.PRUZKY ACCU CHEK PERFOR ",
  "TracheoQuick vel.4 set",
  "Trokar kateter CH24 ",
  "VANKUSIK STER. ",
  "VANKUSIK STER. 20X30 ",
  "VANKUSIK VATOVY NESTER.",
  "Vata buničitá ",
  "VZDUCHOVOD Gaudel c.0",
  "VZDUCHOVOD Gaudel c.00",
  "VZDUCHOVOD Gaudel c.1",
  "VZDUCHOVOD Gaudel c.2",
  "VZDUCHOVOD Guedel c.",
  "VZDUCHOVOD Guedel c.4",
  "VZDUCHOVOD Guedel c.5 ",
  "VZDUCHOVOD Guedel c.6 ",
  "VZDUCHOVOD NOSOVY 3,5mm ",
  "VZDUCHOVOD NOSOVY 4,5mm ",
  "VZDUCHOVOD NOSOVY 4,5mm ",
  "VZDUCHOVOD NOSOVY 5,0MM ",
  "VZDUCHOVOD NOSOVY 7,0mm ",
  "VZDUCHOVOD USTNY STER.",
  "WATER JEL ",
  "WEB COL",
  "DESAM GK 5L",
  "DESAM OX LIQ ",
  "DESPREJ NEW 5L",
  "INCIDIN OXYDES",
  "SUPERCHLOR TBL ",
  "3M FILTER P3 ",
  "3M POLOMASKA ",
  "AMPULARIUM PAX- Tec STREDNÉ M23x25x6cm",
  "BAG- UMELE PLUCA 2L LATEX FREE",
  "BRAŠNA NA 2L KYSL. FLAŠU PAX",
  "DETEKTOR CO plynu ",
  "DLAHA FIXACNA M SPLINT KRATKA ",
  "DLAHA FIXACNA S SPLINT DLAHA",
  "DLAHA FIXACNA XL SPLINT DLHA ",
  "DLAHA FIXAČNÁ XS SPLINT na prst ",
  "FIXACNY GOLIER PATRIOT PEDIATR.",
  "FIXACNY GOLIER PHILLY DETSKY ",
  "FIXACNY GOLIER PHILLY PATRIOT DOSP. ",
  "FIXAČNĚ LIMCE PHILLY SADA ",
  "FIXAČNÝ GOLIER X COLLAR oranžový",
  "FLASA NA MOC MUZSKA",
  "FONENDOSKOP",
  "FONENDOSKOP DUPLEX",
  "Doplex",
  "Geratherm s galiem Classic ",
  "GLUKOMER Accu-Chek",
  "INFRAČERVENÝ TEPLOMER",
  "IZOTERMICKÁ PRIKRYVKA ",
  "KLIESTE MAGILL. DETS.",
  "KLIESTE MAGILL. DOSP.",
  "KRIESIACI PRISTR. - AMBU NEO ",
  "KRIESIACI PRISTR. - AMBU-DETS",
  "KRIESIACI PRISTR.-AMBU DOSP",
  "KRIESIACI VAK MODRY ADULT",
  "KRIESIACI VAK MODRY JUNIOR ",
  "LAMPA VYŠETROVACIA",
  "LARYNGOSKOP. SET",
  "MAGNET ICD",
  "MANZETA PRETLAKOVA ",
  "MANŽETA - NADROZMERNÁ ",
  "MASKA DYCHACIA ADULT TVRDA MANZ.",
  "MASKA DYCHACIA JUNIOR TVRDA MANZ.",
  "MASKA Ultra Seal4",
  "MASKA UltraSeal 3",
  "MASKA UltraSeal 5 ",
  "MODULTASCHE SET NYLON ",
  "NOZNICE OBVAZOVE",
  "NOZNICE OBVAZOVE ",
  "NôŽ/ REZAC PASOV ",
  "OCHR. OKULIARE",
  "OCHR: OKULIARE TESNIACE gumenné ",
  "OCHRANNE OKULIARE STEALTH",
  "OCHRANNÝ ŠTÍT plast.",
  "OCHRANNÝ TVÁROVÝ ŠTÍT UVEX ",
  "PEDIMATE",
  "PEEP VENTIL",
  "PODLOZNA MISA S POKLOPOM ",
  "PRILBA ORANZOVA",
  "PULZOXIMETER CMS ",
  "PULZOXIMETER CMS 50QB DETS.",
  "RUCNY DYMOVY GRANAT ",
  "RUKAVICE OCHR. BRITA BLACK",
  "RUKAVICE OCHR. ORIOLE ",
  "SADA MASIEK DETS. 3 VEL.",
  "SADA VNUTOR. TAŠIEK BERLIN ",
  "SADA VNUTOR. TAŠIEK PAX",
  "SENZOR MASIMO LNCS NEO-3 ",
  "ŠKRTIDLO CAT Combat Application Tkosurniquet",
  "TEPLOMER DIGITÁLNY",
  "TLAKOMER DETSKY SADA 2 MANZ. V TASTICKE",
  "TLAKOMER MANOMETRICKY ",
  "TRANSPORTNÁ PLACHTA 8-RUCNA",
  "TRIAGE páska červená ",
  "TRIAGE páska čiernobiela ",
  "TRIAGE páska zelená ",
  "ZACHRANARSKY BATOH BERLIN",
  "ZACHRANARSKY BATOH FELDBERG4",
  "ZAVADZAC TRACH. KANYLY",
];

const header = document.querySelector(".header");
const input = document.querySelector(".input");
const selectItem = document.querySelector(".select-item");
const selectedItems = document.querySelector(".selected-items");
let refreshBtnSelected = document.querySelector(".refresh-selected");

document.addEventListener("DOMContentLoaded", () => {
  let savedItems = JSON.parse(localStorage.getItem("items"));

  savedItemsStr();

  savedInputsStr();
});

let itemFilter = [];

function renderItems(searchItems, myFilters) {
  let searchResult = searchItems.filter((oneItem) => {
    return oneItem.toLowerCase().includes(myFilters.toLowerCase());
  });

  selectItem.innerHTML = "";

  searchResult.forEach((foundItem) => {
    let btn = document.createElement("button");
    btn.textContent = `${foundItem.toLowerCase()}`;
    selectItem.appendChild(btn);

    btn.addEventListener("click", (e) => {
      let selectedDiv = document.createElement("div");
      selectedDiv.classList.add("selected-div");

      let paragraph = document.createElement("p");
      paragraph.textContent = `${foundItem.toLowerCase()}`;
      selectedDiv.appendChild(paragraph);

      let count = document.createElement("input");
      count.type = "text";
      count.value = "";
      count.placeholder = "ks";
      count.style.width = "35px";
      count.classList.add("itemNumber");
      selectedDiv.appendChild(count);

      selectedItems.appendChild(selectedDiv);

      // ..................................................

      localStorage.setItem("items", JSON.stringify(selectedItems.innerHTML));

      // ..................................................

      // Add an event listener to selectedItems that listens for input changes
      selectedItems.addEventListener("input", (e) => {
        // Get all the inputs in selectedItems
        let inputs = selectedItems.querySelectorAll(".itemNumber");

        // Create an array to store the input values
        let inputValues = [];

        // Loop through the inputs and push their values to the array
        inputs.forEach((input) => {
          inputValues.push(input.value);
        });

        // Save the input values to localStorage as a JSON string
        localStorage.setItem("inputValues", JSON.stringify(inputValues));
      });

      // ......................................................

      input.value = "";

      paragraph.addEventListener("dblclick", (e) => {
        paragraph.style.setProperty("text-decoration", "line-through");
      });

      paragraph.addEventListener("click", (e) => {
        paragraph.style.setProperty("text-decoration", "none");
      });
    });
  });
}
refreshBtnSelected.addEventListener("click", (e) => {
  selectedItems.innerHTML = "";
  localStorage.clear();
});

header.addEventListener("click", (e) => {
  selectItem.innerHTML = "";
});

input.addEventListener("input", (e) => {
  itemFilter = e.target.value;
  renderItems(materialArr, itemFilter);
});

// .............FUNCTIONS....................

function savedItemsStr() {
  // Get the saved items from localStorage
  let savedItems = JSON.parse(localStorage.getItem("items"));

  // If there are any saved items, append them to selectedItems
  if (savedItems) {
    selectedItems.innerHTML = savedItems;
  }
}

function savedInputsStr() {
  // Get the saved input values from localStorage
  let savedInputValues = JSON.parse(localStorage.getItem("inputValues"));

  // If there are any saved input values, loop through them and assign them to the inputs in selectedItems
  if (savedInputValues) {
    let inputs = selectedItems.querySelectorAll(".itemNumber");

    for (let i = 0; i < inputs.length; i++) {
      inputs[i].value = savedInputValues[i];
    }
  }
}
