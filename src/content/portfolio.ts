import casinoLogo from "@/assets/logo_casino_helsinki.png.asset.json";
import kuurojenLiittoLogo from "@/assets/logo_kuurojen_liitto.png.asset.json";
import klvlLogo from "@/assets/logo_klvl.png.asset.json";
import skulLogo from "@/assets/logo_skul.png.asset.json";
import lapciLogo from "@/assets/logo_lapci.png.asset.json";
import sanomaLogo from "@/assets/logo_sanoma.png.asset.json";
import mcdonaldsLogo from "@/assets/logo_mcdonalds.png.asset.json";
import sMarketLogo from "@/assets/logo_s_market.png.asset.json";
import prismaLogo from "@/assets/logo_prisma.png.asset.json";
import kirkkoImg from "@/assets/suomea_kirkko_kerrallaan_rajattu.jpg.asset.json";
import malmiImg from "@/assets/malmin_perinto_rajattu.jpg.asset.json";
import avaruusImg from "@/assets/avaruusharrastus_rajattu.jpg.asset.json";
import mediaImg from "@/assets/media_murroksessa_rajattu.jpg.asset.json";

export const profile = {
  name: "Oiva Salomaa",
  title: "Journalismin opiskelija · Haaga-Helia",
  tagline: "Toimittaja ja viestijä, jota kiinnostavat erityisesti politiikka, talous ja yhteiskunnallinen viestintä.",
  phone: "044 0105255",
  phoneHref: "tel:+358440105255",
  email: "oiva.salomaa@gmail.com",
  location: "Helsinki, Punavuori",
  instagram: { handle: "@oivasalomaa", url: "https://www.instagram.com/oivasalomaa/" },
  linkedin: { handle: "Oiva Salomaa", url: "https://www.linkedin.com/in/oiva-salomaa-2a0aa5327/" },
};

export const about: string[] = [
  "Opiskelen journalismia Haaga-Helia ammattikorkeakoulussa. Ennen tutkinto-opintojani suoritin journalismin polkuopinnot Haaga-Helian avoimessa AMK:ssa vuonna 2025. Ylioppilaaksi valmistuin Espoon yhteislyseon lukiosta keväällä 2024.",
  "Kirjoitan freelancerina Kuurojen Lehteen, jossa minulta on julkaistu Nuorisopalsta-kolumneja sekä henkilöjuttuja. 360journalismia-mediaan olen tehnyt artikkeleita ja videojuttuja muun muassa koripallosta, teatterista ja liikunnasta. Suomi ja suomalainen viittomakieli ovat molemmat äidinkieliäni, ja tuon kuurojen yhteisön näkökulman luontevasti osaksi journalistista työtäni.",
  "Työkokemusta minulla on asiakaspalvelusta, myynnistä ja ohjaustyöstä. Casino Helsingissä työskentelin pelinhoitajana rulettipöydässä kansainvälisen asiakaskunnan parissa, pääosin ilta- ja yövuoroissa. Sanoma Media Finlandilla toimin myyntineuvottelijana ja markkinoin konsernin lehtiä, kuten Helsingin Sanomia, Me Naisia ja Gloriaa, entisille ja nykyisille tilaajille.",
  "Kolme kesää McDonald’sin ravintoloissa opetti työskentelemään tehokkaasti paineen alla ja tulemaan toimeen hyvin erilaisten ihmisten kanssa. Ensimmäiset työkokemukseni hankin S-ryhmän myymälöistä. Lisäksi olen toiminut noin neljän vuoden ajan lasten ja nuorten ohjaajana useissa kuuloalan järjestöissä.",
  "Seuraan erityisesti taloutta ja politiikkaa – paikallistasolla Suomessa, Euroopassa ja globaalisti. Tavoitteenani on suuntautua viestintään, mahdollisesti pörssiyhtiön viestintätehtäviin. Asun Helsingin Punavuoressa.",
];

export const keyFacts: [string, string][] = [
  ["4", "julkaistua juttua Kuurojen Lehdessä"],
  ["5", "julkaisua 360journalismia-mediassa"],
  ["4 v", "kokemusta lasten ja nuorten ohjaajana"],
  ["2", "äidinkieltä: suomi ja suomalainen viittomakieli"],
];

export const careerGoal =
  "Tavoitteena suuntautua viestintään, mahdollisesti pörssiyhtiön viestintätehtäviin.";

export type Article = {
  slug: string;
  title: string;
  publication: string;
  column?: string;
  issue: string;
  pages: string;
  credits: string;
  lead: string;
  image: string;
  imageAlt: string;
  body?: string[];
};

export const articles: Article[] = [
  {
    slug: "media-murroksessa",
    title: "Media murroksessa",
    publication: "Kuurojen Lehti",
    column: "Nuorisopalsta",
    issue: "4/2025",
    pages: "s. 25",
    credits: "Teksti ja kuva Oiva Salomaa",
    lead: "Kolumni mediakentän murroksesta: algoritmit, kiire ja siirtymä video- ja äänisisältöihin muuttavat uutisten kulutusta. Mitä muutos merkitsee viittomakieliselle medialle ja sen yleisölle?",
    image: mediaImg.url,
    imageAlt: "Lehtisivu: Nuorisopalsta – Media murroksessa",
    body: [
      "Myin kesän ajan aikakaus- ja sanomalehtiä suuressa mediatalossa. Näin läheltä, miten kotimainen mediakenttä elää murroksen keskellä. Uskollisten tilaajien ja lopettaneiden lukijoiden välinen kuilu oli kasvussa. Samalla tieto moninkertaistuu. Mikään ei ole niin pysyvää kuin muutos.",
      "Meillä on nyt enemmän tietoa kuin koskaan. Päivittäin algoritmit näyttävät uusia uutisia Suomesta ja ulkomailta. Usein asiat jäävät monimutkaisiksi ja vaikeiksi ymmärtää. Ihmiset odottavat, miten eri mediat kertovat niistä. Toimitusten on reagoitava nopeasti ja julkaistava tietoa ennen muita, jotta ne pysyvät kilpailussa mukana. Jokaisen sanan ja eleen merkitys korostuu. Kuka tahansa voi saada osakseen arvostelua: niin asiantuntijat, vallankäyttäjät kuin kokijat.",
      "Algoritmit ohjaavat, mitä uutisia meille näytetään. Usein ihmiset kiinnostuvat asioista, jotka herättävät tunteita. Se, mitä katsotaan, kuunnellaan, luetaan ja jaetaan, tavoittaa suuren yleisön. Mediat ovat huomanneet tämän ja sopeutuneet olemalla siellä, mistä ihmiset tavoitetaan: sosiaalisessa mediassa.",
      "Kun tiedon kysyntä kasvaa, se asettaa paineita perinteisille mediataloille. Niiden on pystyttävä tuottamaan luotettavaa ja moniäänistä sisältöä. Faktojen tarkistaminen vie aikaa ja vaatii osaamista, mutta siihen ei aina riitä resursseja. Siksi toimitukset käyttävät usein muiden uutistoimistojen tietoja ja täydentävät uutisia, kun uusia yksityiskohtia saadaan.",
      "Kiire näkyy paitsi toimittajien työssä, myös lukijoissa. Monet lukevat vain otsikot, eivätkä tutustu itse juttuun. Tieto jää silloin pinnalliseksi. Samalla mediaympäristö muuttuu yhä digitaalisemmaksi. Video- ja äänisisällön osuus mediasta kasvaa. Ne palvelevat kuluttajaa ajassa, jossa aika ei tunnu riittävän kaikkeen.",
      "Aluksi sosiaalinen media oli tärkeä viittomakieliselle yhteisölle. Se avasi pääsyn tekstisisältöön ja helpotti keskustelun seuraamista. Monet viittomakieliset pystyivät paremmin pysymään mukana ajankohtaisissa asioissa.",
      "Videot madalsivat kynnystä osallistua keskusteluun myös viittomakielellä. Tänä päivänä näkyvät kuitenkin myös muutoksen kääntöpuolet. Alustat ovat siirtyneet vahvasti videoihin ja ääneen, mutta kaikki videot eivät ole esteettömiä. Jos videoissa ei ole tekstitystä, osa yleisöstä jää ulkopuolelle. Tekstitys on tärkeä osa sekä suomenkielistä että viittomakielistä sisältöä.",
      "Ulla Sivusen tieteellisestä artikkelista vuodelta 2024 selviää, että viittomakieltä käyttävät kuurot ja huonokuuloiset nuoret käyttävät monia kieliä verkossa. Koska suomalaista viittomakielistä mediaa on yhä vähän, he seuraavat usein ulkomaisia viittomakielisiä sisältöjä. Tämä kertoo kotimaisen mediakentän tyhjiöstä: tilasta ja tarpeesta, jota ei ole vielä täytetty.",
      "Pysyykö viittomakielinen media muutoksen aallonharjalla ja millä tavoin? Vaikka yleisön koko ei määritä asian tärkeyttä, sisältöä tehdään yleisöä varten. Pallo on nyt viittomakielisellä medialla siinä, miten se tavoittaa yhä monipuolisemman kirjon oman mediansa pariin.",
    ],
  },
  {
    slug: "malmin-perinto",
    title: "Malmin perintö tuli jäädäkseen",
    publication: "Kuurojen Lehti",
    column: "Nuorisopalsta",
    issue: "1/2026",
    pages: "s. 15",
    credits: "Teksti ja kuva Oiva Salomaa",
    lead: "Kansallista viittomakielten päivää vietettiin 12. helmikuuta, kun Suomen ensimmäisen kuurojenkoulun perustajan Carl Oscar Malmin syntymästä tuli kuluneeksi 200 vuotta. Kolumni hänen perinnöstään ja siitä, miksi saavutetuista oikeuksista on pidettävä kiinni.",
    image: malmiImg.url,
    imageAlt: "Lehtisivu: Nuorisopalsta – Malmin perintö tuli jäädäkseen",
    body: [
      "Helmikuun 12. päivänä vietettiin kansallista viittomakielten päivää. Tänä vuonna ajankohta sai erityistä painoarvoa, sillä samalla tuli kuluneeksi 200 vuotta Carl Oscar Malmin syntymästä. Juhlavuosi tarjoaa tilaisuuden tarkastella hänen perintöään uudelleen. Liian tuttu kertomus voi vähitellen latistua symboliksi, jonka ohi kuljetaan pysähtymättä.",
      "C.O. Malm perusti Suomen ensimmäisen kuurojenkoulun Porvooseen ja ilmoitti sen aloittamisesta Borgå Tidning -sanomalehdessä syksyllä 1846. Aikana, jolloin kuuroutta pidettiin yleisesti älyllisen vajavuuden merkkinä, Malmin ajattelu erottui edukseen. Hän oli vakuuttunut siitä, etteivät oppimisen rajat määräydy kuulon perusteella. Tästä lähtökohdasta hän pyrki laajentamaan opetusta mahdollisimman monelle ja siirtämään siitä vastuun valtiolle.",
      "Valtion osallistuminen toteutui vuonna 1858, kun keisarillinen asetus kuurojenkoulun perustamisesta Turkuun annettiin. Samalla paljastui kuitenkin hyväksynnän kapea raja: Malmia ei katsottu sopivaksi koulun johtoon, sillä tehtävään haluttiin kuuleva henkilö. Johtajaksi nimitettiin opettaja Carl Henrik Alopaeus, jolla ei ollut viittomakielen taitoa. Vastaava asetelma ei ole poikkeuksellinen nykyisinkään.",
      "Malmin elinaikana kuurous nähtiin ongelmana, jota tuli ensisijaisesti hoitaa lääketieteen keinoin. Hänen kuuloaan yritettiin palauttaa jopa sähkövirran avulla tukholmalaisen lääkärin vastaanotolla. Menetelmät ovat sittemmin kehittyneet, mutta peruslähtökohta on osin säilynyt. Nykyään syntymäkuuroille lapsille annetaan sisäkorvaistutteita. Itsekin keinotekoisen kuulon saaneena tiedän, että se helpottaa toimimista kuulevassa yhteiskunnassa. Se ei kuitenkaan tee minusta vähemmän kuuroa, mikä asettaa minut väliinputoajan asemaan.",
      "Kuurojen yhteisössä on pitkään kulkenut jakolinja puhuvien ja ei-puhuvien kuurojen välillä. Puhuva kuuro hyväksytään usein helpommin, vaikka puhe ei poistaisi kuuloon liittyviä haasteita. Minulle on tärkeää olla unohtamatta, mistä tulen, ja tuoda näkyviin ne, jotka eivät pääse samaan pöytään. Meillä on yhä matkaa siihen, ettei kenenkään koulutus- tai uravalintoja määritä se, miten kuulee tai mitä kieltä käyttää.",
      "Yhteinen historia tuli konkreettiseksi viime lokakuussa viittomakielisillä nuorisopäivillä, kun osallistuin opastetulle kierrokselle Porvoossa. Kuurojenkoulun entiset oppilaat Håkan Westerholm ja Janne Kankkonen johdattivat nuoria koulun vaiheisiin. Kankkonen kuului koulun viimeisiin oppilaisiin ennen sen sulkemista vuonna 1993. Menneestä ajasta muistuttaa sisäpihalle pystytetty Malmin patsas, jonka on suunnitellut kuuro kuvanveistäjä J. F. Talvia.",
      "Malmin elämäntyö osoittaa, ettei mikään saavutettu ole pysyvää. Oikeudet ja mahdollisuudet säilyvät vain, jos niistä pidetään kiinni ja niitä puolustetaan. Mahdollisuus valita oma kieli, yhteisö ja koulutuspolku on pitkälti hänen työnsä ansiota. Vastuu niiden säilymisestä on nykyisillä ja tulevilla sukupolvilla.",
      "Ilman käsitystä menneisyydestä emme kykene vaikuttamaan nykyhetkeen emmekä rakentamaan tulevaisuutta. Siksi toivon, että viittomakielten päivän merkitystä todella korostetaan. On hyvä muistaa, kuka puun alun perin istutti.",
    ],
  },
  {
    slug: "elamanmittainen-avaruusharrastus",
    title: "Elämänmittainen avaruusharrastus",
    publication: "Kuurojen Lehti",
    issue: "2/2026",
    pages: "s. 18–19",
    credits: "Teksti Oiva Salomaa · Kuvat Harry Malmelin",
    lead: "Harry Malmelinin katse on aina hakeutunut ylöspäin. Avaruuden äärettömyys ja tähtikuvioiden kiehtova historia ovat vieneet miehen mennessään jo yli puoli vuosisataa sitten.",
    image: avaruusImg.url,
    imageAlt: "Lehtiaukeama: Elämänmittainen avaruusharrastus",
  },
  {
    slug: "suomea-kirkko-kerrallaan",
    title: "Suomea kirkko kerrallaan",
    publication: "Kuurojen Lehti",
    issue: "3/2026",
    pages: "s. 24–25",
    credits: "Teksti Oiva Salomaa · Kuvat Päivi ja Petri Mäntylä",
    lead: "Jyväskyläläisten Päivi ja Petri Mäntylän matkasuunnitelmat saavat nykyään usein suuntansa kirkoista. Sattumalta alkanut harrastus on vienyt pariskunnan jo 247 suomalaiselle kirkolle ja samalla tutustuttanut heidät paikkoihin, joihin ei muuten ehkä olisi tullut lähdettyä.",
    image: kirkkoImg.url,
    imageAlt: "Lehtiaukeama: Suomea kirkko kerrallaan",
  },
];

export type OtherWork = {
  kind: string;
  title: string;
  date: string;
  credits: string;
  description: string;
  url: string;
  linkLabel: string;
};

export const otherWork: OtherWork[] = [
  {
    kind: "Video",
    title: "Muijat rullaa -yhteisö saa naiset liikkeelle",
    date: "9.10.2026",
    credits: "Toimitus Oiva Salomaa · Kuvaus Oiva Salomaa, Sanna Niemi ja Aapo Kämäräinen",
    description:
      "Videojuttu toukokuussa 2026 perustetusta pyöräily-yhteisöstä, joka on kasvanut muutamassa kuukaudessa yli tuhannen jäsenen yhteisöksi. Haastateltavina perustaja Hanna Solomon sekä lenkkien vetäjät.",
    url: "https://www.360journalismia.fi/muijat-rullaa-saa-naiset-liikkeelle/",
    linkLabel: "Katso video",
  },
  {
    kind: "Video · Instagram",
    title: "Miksi maajoukkue kerää yleisöä eri tavalla kuin kotimainen sarja?",
    date: "Maaliskuu 2026",
    credits: "Oiva Salomaa",
    description: "Lyhytvideo Susijengi-artikkelin rinnalle 360journalismian Instagramiin.",
    url: "https://www.instagram.com/reels/DV9nuHfgkTn/",
    linkLabel: "Katso Instagramissa",
  },
  {
    kind: "Artikkeli",
    title: "Susijengi-huuma ei täytä Korisliigan katsomoita",
    date: "16.3.2026",
    credits: "Teksti ja kuvat Oiva Salomaa",
    description:
      "Susijengi täyttää hallit, mutta ilmiö näkyy Korisliigan yleisömäärissä vain osittain. Haastateltavina Heikki Perho (Loimaa Bisons), Mikko-Taneli Mäki (Helsinki Seagulls) ja Heini Santos (Suomen Koripalloliitto).",
    url: "https://www.360journalismia.fi/susijengi-huuma-ei-tayta-korisliigan-katsomoita/",
    linkLabel: "Lue juttu",
  },
  {
    kind: "Artikkeli",
    title: "Teatteri jättää tilaa tulkinnalle",
    date: "27.2.2026",
    credits: "Teksti ja kuva Oiva Salomaa",
    description:
      "Kansallisteatterin Kolme harjoitelmaa sodan ja rakkauden vuosilta käsittelee Israelin ja Palestiinan konfliktia kolmen suomalaisen naisen näkökulmasta. Haastateltavina teatterintutkija Hanna Korsberg sekä näytelmän kirjoittaja ja ohjaaja Michael Baran.",
    url: "https://www.360journalismia.fi/teatteri-jattaa-tilaa-tulkinnalle/",
    linkLabel: "Lue juttu",
  },
  {
    kind: "Video · katugallup",
    title: "Kuinka usein käyt teatterissa?",
    date: "27.2.2026",
    credits: "Oiva Salomaa",
    description:
      "Katugallup Kampissa: ohikulkijat kertovat teatterissa käynneistään, lippujen hinnoista ja toivomistaan teemoista. Taustalla TINFOn tilastot katsojamäärien kehityksestä.",
    url: "https://www.instagram.com/p/DVQiti-jeSd/",
    linkLabel: "Katso Instagramissa",
  },
];

export type Job = {
  role: string;
  org: string;
  period: string;
  meta?: string;
  description: string;
  logo?: string;
  sub?: { org: string; period: string; logo?: string; monogram?: string }[];
};

export const experience: Job[] = [
  {
    role: "Pelinhoitaja (Casino Dealer)",
    org: "Veikkaus Oy · Casino Helsinki",
    period: "4/2026 – 8/2026",
    meta: "Osa-aikainen · Helsinki",
    logo: casinoLogo.url,
    description:
      "Ruletin pelinhoito pääosin loppuviikon ilta- ja yövuoroissa. Vastuualueina rahankäsittely, asiakaspalvelu ja pelin sujuva kulku. Asiakaskunta oli kansainvälinen, ja työkielenä toimi pääosin englanti.",
  },
  {
    role: "Freelance-toimittaja",
    org: "Kuurojen Liitto ry · Kuurojen Lehti",
    period: "10/2025 – 8/2026",
    meta: "Freelance · Etätyö",
    logo: kuurojenLiittoLogo.url,
    description:
      "Henkilöjuttuja ja Nuorisopalsta-kolumneja Kuurojen Lehteen. Julkaistuja juttuja numeroissa 4/2025, 1/2026, 2/2026 ja 3/2026.",
  },
  {
    role: "Lasten ja nuorten ohjaaja · leiriohjaaja",
    org: "Kuuloalan järjestöt",
    period: "7/2022 – 10/2026",
    meta: "Osa-aikainen",
    description:
      "Leirien ja vapaa-ajan toiminnan ohjaamista kuulovammaisille lapsille ja nuorille. Työssä korostuvat vastuullisuus, ryhmänhallinta sekä viittomakielen ja puhutun kielen joustava käyttö.",
    sub: [
      { org: "Kuulovammaisten Lasten Vanhempien Liitto ry (KLVL)", period: "1/2025 – 10/2026", logo: klvlLogo.url },
      { org: "Suomen Kuurojen Urheiluliitto ry (SKUL)", period: "3/2026 – 9/2026", logo: skulLogo.url },
      { org: "LapCI ry", period: "4/2023 – 9/2026", logo: lapciLogo.url },
      { org: "Kuurojen Palvelusäätiö sr", period: "2/2025 – 3/2026", monogram: "KPS" },
    ],
  },
  {
    role: "Myyntineuvottelija (Sales Specialist)",
    org: "Sanoma Media Finland Oy",
    period: "5/2025 – 7/2025, 12/2025",
    meta: "Osa-aikainen · Vantaa",
    logo: sanomaLogo.url,
    description:
      "Puhelinmyyntiä Sanoman Vantaan toimipisteestä Sanomalasta. Tehtävänä oli tarjota entisille ja nykyisille tilaajille konsernin lehtiä, kuten Helsingin Sanomia, Me Naisia ja Gloriaa.",
  },
  {
    role: "Ravintolatyöntekijä (Crew Member)",
    org: "McDonald’s",
    period: "7/2022 – 8/2024",
    meta: "Kesätyö · pääkaupunkiseutu",
    logo: mcdonaldsLogo.url,
    description:
      "Monipuolisia ravintolatehtäviä: asiakaspalvelua, tavaravastaanottoa, kotiinkuljetustilausten kokoamista, siisteydestä huolehtimista sekä ruoanvalmistusta. Työ kehitti paineensietokykyä ja tiimityötaitoja kiireisessä ympäristössä.",
    sub: [
      { org: "McDonald’s Pitäjänmäki", period: "5/2024 – 8/2024" },
      { org: "McDonald’s Teollisuuskatu", period: "7/2023 – 8/2023" },
      { org: "McDonald’s Suomenoja", period: "7/2022" },
    ],
  },
  {
    role: "Myymälätyöntekijä",
    org: "S-market Lähderanta",
    period: "7/2021",
    meta: "Tutustu ja tienaa -jakso",
    logo: sMarketLogo.url,
    description: "Tuotteiden hyllytystä ja myymälätyötä peruskoulun päättymisen jälkeen.",
  },
  {
    role: "TET-harjoittelija",
    org: "Prisma Olari",
    period: "8. luokka",
    meta: "Kaksi viikkoa",
    logo: prismaLogo.url,
    description: "Tavaravastaanottoa ja tuotteiden käsittelyä myymälässä.",
  },
  {
    role: "Taksvärkkipäivä",
    org: "Prisma Sello",
    period: "7. luokka",
    meta: "Yksi päivä",
    logo: prismaLogo.url,
    description: "Saapuvien kuormien purkua ja tuotteiden hyllytystä.",
  },
];

export const education = [
  { degree: "Medianomi (AMK), journalismi", school: "Haaga-Helia ammattikorkeakoulu", period: "2026 –" },
  { degree: "Journalismin polkuopinnot", school: "Haaga-Helia, avoin AMK", period: "2025" },
  { degree: "Ylioppilastutkinto", school: "Espoon yhteislyseon lukio", period: "2021 – 2024" },
];

export const languages = [
  { name: "Suomi", level: "Äidinkieli" },
  { name: "Suomalainen viittomakieli", level: "Äidinkieli" },
  { name: "Englanti", level: "Hyvä" },
  { name: "Ruotsi", level: "Perustaso" },
];

export const interests = [
  "Talous",
  "Kotimainen politiikka ja kuntapolitiikka",
  "EU ja kansainvälinen politiikka",
  "Yritys- ja sijoittajaviestintä",
  "Median murros ja saavutettavuus",
  "Kuurojen kulttuuri ja historia",
];
