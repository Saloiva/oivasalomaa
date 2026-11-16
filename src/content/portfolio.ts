import veikkausLogo from "@/assets/logo_li_veikkaus.jpg.asset.json";
import kuurojenLiittoLogo from "@/assets/logo_li_kuurojen_liitto.jpg.asset.json";
import klvlLogo from "@/assets/logo_li_klvl.jpg.asset.json";
import skulLogo from "@/assets/logo_li_skul.jpg.asset.json";
import lapciLogo from "@/assets/logo_li_lapci.jpg.asset.json";
import kpsLogo from "@/assets/logo_li_kps.jpg.asset.json";
import sanomaLogo from "@/assets/logo_li_sanoma.jpg.asset.json";
import mcdonaldsLogo from "@/assets/logo_li_mcdonalds.jpg.asset.json";
import portraitImg from "@/assets/oiva_salomaa_muotokuva.jpg.asset.json";
import kirkkoImg from "@/assets/suomea_kirkko_kerrallaan_esikatselu.jpg.asset.json";
import malmiImg from "@/assets/malmin_perinto_esikatselu.jpg.asset.json";
import avaruusImg from "@/assets/avaruusharrastus_esikatselu.jpg.asset.json";
import mediaImg from "@/assets/media_murroksessa_esikatselu.jpg.asset.json";

export type Lang = "fi" | "en";
/** A text in both site languages. */
export type L = { fi: string; en: string };
const l = (fi: string, en: string): L => ({ fi, en });

export const portrait = portraitImg.url;

export const profile = {
  name: "Oiva Salomaa",
  title: l("Journalismin opiskelija · Haaga-Helia", "Journalism student · Haaga-Helia"),
  tagline: l(
    "Olen toimittaja ja viestijä, joka tekee huolellisesti taustoitettua journalismia ihmisistä, kulttuurista ja yhteiskunnasta.",
    "I am a journalist and communicator who produces well-researched journalism about people, culture and society.",
  ),
  email: "oiva.salomaa@gmail.com",
  location: l("Helsinki", "Helsinki, Finland"),
  instagram: { handle: "@oivasalomaa", url: "https://www.instagram.com/oivasalomaa/" },
  linkedin: { handle: "Oiva Salomaa", url: "https://www.linkedin.com/in/oiva-salomaa-2a0aa5327/" },
};

/** Elevator pitch shown on the home page. */
export const about: L[] = [
  l(
    "Olen helsinkiläinen journalismin opiskelija ja freelance-toimittaja. Opiskelen medianomiksi Haaga-Helia ammattikorkeakoulussa. Kuurojen Lehteen olen kirjoittanut henkilöjuttuja ja kolumneja yksittäisinä toimeksiantoina. 360journalismia-mediaan olen tuottanut artikkeleita ja videojuttuja urheilusta, kulttuurista ja liikunnasta.",
    "I am a Helsinki-based journalism student and freelance journalist. I am studying for a Bachelor of Culture and Arts (journalism) at Haaga-Helia University of Applied Sciences I have written profiles and columns on commission for Kuurojen Lehti, the magazine of the Finnish Association of the Deaf. For the 360journalismia newsroom I have produced articles and video stories on sport, culture and fitness.",
  ),
  l(
    "Työssäni korostuvat huolellinen tiedonhankinta, selkeä ilmaisu ja kyky kohdata hyvin erilaisia ihmisiä. Työkokemus Sanoma Media Finlandin myynnissä, Veikkauksen Casino Helsingissä ja kuuloalan järjestöjen ohjaajana on opettanut tarkkuutta, vastuullisuutta ja luotettavuutta tehtävissä, joissa virheisiin ei ole varaa.",
    "My work is built on thorough research, clear expression and the ability to connect with very different people. Experience in sales at Sanoma Media Finland, at Veikkaus’s Casino Helsinki and as a youth leader for hearing-impaired children has taught me accuracy, responsibility and reliability in roles where there is no room for error.",
  ),
  l(
    "Seuraan uutisia ja yhteiskunnallista keskustelua laajasti, kotimaan asioista kansainväliseen politiikkaan. Tavoitteeni on toimittajan työ valtakunnallisessa mediassa tai tehtävä yritysviestinnässä.",
    "I follow the news and public debate closely, from Finnish affairs to international politics. My aim is to work as a reporter for a national news outlet or in corporate communications.",
  ),
];

export const direction: { title: L; text: L }[] = [
  {
    title: l("Journalismi", "Journalism"),
    text: l(
      "Haluan työskennellä toimittajana valtakunnallisessa mediassa. Minua kiinnostavat erityisesti taustoittavat jutut, henkilöjutut ja ajankohtaiset aiheet.",
      "I want to work as a reporter for national media. I am particularly interested in in-depth features, profiles and current affairs.",
    ),
  },
  {
    title: l("Viestintä", "Communications"),
    text: l(
      "Minua kiinnostavat yritysviestinnän tehtävät, joissa asiat täytyy kertoa selkeästi, oikein ja ajallaan.",
      "I am interested in corporate communications, where information has to be shared clearly, accurately and on time.",
    ),
  },
  {
    title: l("Talous", "Finance"),
    text: l(
      "Seuraan talouden ja yhteiskunnan kehitystä. Haluan kertoa monimutkaisista asioista niin, että ne ovat helppo ymmärtää.",
      "I follow economic and social developments. I want to explain complex issues in a way that is easy to understand.",
    ),
  },
];

export const subscribeUrl = "https://kuurojenliitto.fi/kuurojen-lehti/lomake-tilaa-kuurojen-lehti/";

export type Article = {
  slug: string;
  /** Published (Finnish) title. */
  title: string;
  titleEn: string;
  publication: string;
  column?: string;
  issue: string;
  pages: string;
  credits: L;
  lead: L;
  image: string;
  imageAlt: string;
  /** Opening paragraphs only – the full story stays behind the magazine's paywall. */
  excerpt?: string[];
};

/** Kuurojen Lehti stories, newest issue first. */
export const articles: Article[] = [
  {
    slug: "suomea-kirkko-kerrallaan",
    title: "Suomea kirkko kerrallaan",
    titleEn: "Finland, one church at a time",
    publication: "Kuurojen Lehti",
    issue: "3/2026",
    pages: "s. 24–25",
    credits: l("Teksti Oiva Salomaa · Kuvat Päivi ja Petri Mäntylä", "Text Oiva Salomaa · Photos Päivi and Petri Mäntylä"),
    lead: l(
      "Jyväskyläläisten Päivi ja Petri Mäntylän matkasuunnitelmat saavat nykyään usein suuntansa kirkoista. Sattumalta alkanut harrastus on vienyt pariskunnan jo 247 suomalaiselle kirkolle ja samalla tutustuttanut heidät paikkoihin, joihin ei muuten ehkä olisi tullut lähdettyä.",
      "For Päivi and Petri Mäntylä from Jyväskylä, churches now often set the direction of their travels. A hobby that began by chance has taken the couple to 247 Finnish churches and to places they might otherwise never have visited.",
    ),
    image: kirkkoImg.url,
    imageAlt: "Lehtiaukeama: Suomea kirkko kerrallaan",
  },
  {
    slug: "elamanmittainen-avaruusharrastus",
    title: "Elämänmittainen avaruusharrastus",
    titleEn: "A lifelong passion for space",
    publication: "Kuurojen Lehti",
    issue: "2/2026",
    pages: "s. 18–19",
    credits: l("Teksti Oiva Salomaa · Kuvat Harry Malmelin", "Text Oiva Salomaa · Photos Harry Malmelin"),
    lead: l(
      "Harry Malmelinin katse on aina hakeutunut ylöspäin. Avaruuden äärettömyys ja tähtikuvioiden kiehtova historia ovat vieneet miehen mennessään jo yli puoli vuosisataa sitten.",
      "Harry Malmelin has always looked upwards. The vastness of space and the fascinating history of the constellations captured him more than half a century ago.",
    ),
    image: avaruusImg.url,
    imageAlt: "Lehtiaukeama: Elämänmittainen avaruusharrastus",
  },
  {
    slug: "malmin-perinto",
    title: "Malmin perintö tuli jäädäkseen",
    titleEn: "Malm’s legacy is here to stay",
    publication: "Kuurojen Lehti",
    column: "Nuorisopalsta",
    issue: "1/2026",
    pages: "s. 15",
    credits: l("Teksti ja kuva Oiva Salomaa", "Text and photo Oiva Salomaa"),
    lead: l(
      "Kansallista viittomakielten päivää vietettiin 12. helmikuuta, kun Suomen ensimmäisen kuurojenkoulun perustajan Carl Oscar Malmin syntymästä tuli kuluneeksi 200 vuotta. Kolumnissa pohdin hänen perintöään ja sitä, miksi saavutetuista oikeuksista on pidettävä kiinni.",
      "Finland’s National Sign Language Day on 12 February marked 200 years since the birth of Carl Oscar Malm, founder of the country’s first school for the deaf. In this column I reflect on his legacy and why hard-won rights must be defended.",
    ),
    image: malmiImg.url,
    imageAlt: "Lehtisivu: Nuorisopalsta – Malmin perintö tuli jäädäkseen",
    excerpt: [
      "Helmikuun 12. päivänä vietettiin kansallista viittomakielten päivää. Tänä vuonna ajankohta sai erityistä painoarvoa, sillä samalla tuli kuluneeksi 200 vuotta Carl Oscar Malmin syntymästä. Juhlavuosi tarjoaa tilaisuuden tarkastella hänen perintöään uudelleen. Liian tuttu kertomus voi vähitellen latistua symboliksi, jonka ohi kuljetaan pysähtymättä.",
      "C.O. Malm perusti Suomen ensimmäisen kuurojenkoulun Porvooseen ja ilmoitti sen aloittamisesta Borgå Tidning -sanomalehdessä syksyllä 1846. Aikana, jolloin kuuroutta pidettiin yleisesti älyllisen vajavuuden merkkinä, Malmin ajattelu erottui edukseen.",
    ],
  },
  {
    slug: "media-murroksessa",
    title: "Media murroksessa",
    titleEn: "Media in transition",
    publication: "Kuurojen Lehti",
    column: "Nuorisopalsta",
    issue: "4/2025",
    pages: "s. 25",
    credits: l("Teksti ja kuva Oiva Salomaa", "Text and photo Oiva Salomaa"),
    lead: l(
      "Kolumni käsittelee mediakentän murrosta. Algoritmit, kiire ja siirtymä video- ja äänisisältöihin muuttavat uutisten kulutusta. Mitä muutos merkitsee viittomakieliselle medialle ja sen yleisölle?",
      "This column looks at the changing media landscape. Algorithms, speed and the shift to video and audio are transforming how news is consumed. What does this mean for sign-language media and its audience?",
    ),
    image: mediaImg.url,
    imageAlt: "Lehtisivu: Nuorisopalsta – Media murroksessa",
    excerpt: [
      "Myin kesän ajan aikakaus- ja sanomalehtiä suuressa mediatalossa. Näin läheltä, miten kotimainen mediakenttä elää murroksen keskellä. Uskollisten tilaajien ja lopettaneiden lukijoiden välinen kuilu oli kasvussa. Samalla tieto moninkertaistuu. Mikään ei ole niin pysyvää kuin muutos.",
      "Meillä on nyt enemmän tietoa kuin koskaan. Päivittäin algoritmit näyttävät uusia uutisia Suomesta ja ulkomailta. Usein asiat jäävät monimutkaisiksi ja vaikeiksi ymmärtää.",
    ],
  },
];

export type OtherWork = {
  kind: L;
  title: string;
  date: string;
  credits: L;
  description: L;
  url: string;
  platform: "web" | "instagram" | "audio";
};

/** 360journalismia work, newest first. */
export const otherWork: OtherWork[] = [
  {
    kind: l("Video", "Video"),
    title: "Muijat rullaa -yhteisö saa naiset liikkeelle",
    date: "9.10.2026",
    credits: l(
      "Toimitus Oiva Salomaa · Kuvaus Oiva Salomaa, Sanna Niemi ja Aapo Kämäräinen",
      "Reporting Oiva Salomaa · Camera Oiva Salomaa, Sanna Niemi and Aapo Kämäräinen",
    ),
    description: l(
      "Videojuttu kertoo toukokuussa 2026 perustetusta pyöräily-yhteisöstä, joka kasvoi muutamassa kuukaudessa yli tuhannen jäsenen yhteisöksi. Haastattelin yhteisön perustajaa Hanna Solomonia sekä lenkkien vetäjiä.",
      "This video story is about a women’s cycling community founded in May 2026 that grew to over a thousand members within months. I interviewed founder Hanna Solomon and the ride leaders.",
    ),
    url: "https://www.360journalismia.fi/muijat-rullaa-saa-naiset-liikkeelle/",
    platform: "web",
  },
  {
    kind: l("Video · Instagram", "Video · Instagram"),
    title: "Miksi maajoukkue kerää yleisöä eri tavalla kuin kotimainen sarja?",
    date: "17.3.2026",
    credits: l("Oiva Salomaa", "Oiva Salomaa"),
    description: l(
      "Lyhytvideo täydentää Susijengi-artikkelia. Se kysyy, miksi maajoukkueen yleisöhuuma ei siirry Korisliigan otteluihin. Video julkaistiin 360° Median Instagram-tilillä.",
      "This short video accompanies the Susijengi article. It asks why the national team’s crowd appeal does not carry over to the domestic league. It was published on 360° Media’s Instagram.",
    ),
    url: "https://www.instagram.com/reel/DV9nuHfgkTn/",
    platform: "instagram",
  },
  {
    kind: l("Artikkeli", "Article"),
    title: "Susijengi-huuma ei täytä Korisliigan katsomoita",
    date: "16.3.2026",
    credits: l("Teksti ja kuvat Oiva Salomaa", "Text and photos Oiva Salomaa"),
    description: l(
      "Susijengi täyttää hallit, mutta ilmiö näkyy Korisliigan yleisömäärissä vain osittain. Haastattelin Loimaa Bisonsin hallituksen jäsentä Heikki Perhoa, Helsinki Seagullsin viestintäpäällikköä Mikko-Taneli Mäkeä ja Suomen Koripalloliiton viestintä- ja markkinointipäällikköä Heini Santosta.",
      "Finland’s national basketball team fills arenas, but the effect shows only partly in domestic league attendance. I interviewed Loimaa Bisons board member Heikki Perho, Helsinki Seagulls head of communications Mikko-Taneli Mäki and Finnish Basketball Association communications and marketing manager Heini Santos.",
    ),
    url: "https://www.360journalismia.fi/susijengi-huuma-ei-tayta-korisliigan-katsomoita/",
    platform: "web",
  },
  {
    kind: l("Radio-ohjelma", "Radio show"),
    title: "Nostalgiaradio: Aikamatka vuoteen 2016",
    date: "13.3.2026",
    credits: l(
      "Reportteri Oiva Salomaa · Juontajat Miisa Miettinen ja Saana Korhonen",
      "Reporter Oiva Salomaa · Hosts Miisa Miettinen and Saana Korhonen",
    ),
    description: l(
      "Radio-ohjelma vie kuulijat kymmenen vuoden taakse vuoteen 2016. Ohjelmassa muistellaan vuoden trendejä ja tapahtumia vieraiden kanssa. Toimin ohjelmassa reportterina.",
      "This radio show takes listeners ten years back to 2016. The hosts and their guests look back at the trends and events of that year. I worked on the show as a reporter.",
    ),
    url: "https://www.360journalismia.fi/nostalgiaradio-aikamatka-vuoteen-2016/",
    platform: "audio",
  },
  {
    kind: l("Artikkeli", "Article"),
    title: "Teatteri jättää tilaa tulkinnalle",
    date: "27.2.2026",
    credits: l("Teksti ja kuva Oiva Salomaa", "Text and photo Oiva Salomaa"),
    description: l(
      "Kansallisteatterin Kolme harjoitelmaa sodan ja rakkauden vuosilta käsittelee Israelin ja Palestiinan konfliktia kolmen suomalaisen naisen näkökulmasta. Haastattelin teatterintutkija Hanna Korsbergia sekä näytelmän kirjoittajaa ja ohjaajaa Michael Barania.",
      "The Finnish National Theatre’s play examines the Israeli–Palestinian conflict through the eyes of three Finnish women. I interviewed theatre scholar Hanna Korsberg and the play’s writer and director Michael Baran.",
    ),
    url: "https://www.360journalismia.fi/teatteri-jattaa-tilaa-tulkinnalle/",
    platform: "web",
  },
  {
    kind: l("Video · katugallup", "Video · vox pop"),
    title: "Kuinka usein käyt teatterissa?",
    date: "27.2.2026",
    credits: l("Oiva Salomaa", "Oiva Salomaa"),
    description: l(
      "Katugallupissa Kampin ohikulkijat kertovat teatterissa käynneistään, lippujen hinnoista ja toivomistaan aiheista. Taustalla ovat TINFOn tilastot katsojamäärien kehityksestä.",
      "In this vox pop, passers-by in Kamppi, Helsinki talk about how often they go to the theatre, ticket prices and the themes they want to see. The video draws on TINFO audience statistics.",
    ),
    url: "https://www.instagram.com/p/DVQiti-jeSd/",
    platform: "instagram",
  },
];

export type Job = {
  role: L;
  org: L;
  /** One line per period, so separate stints never run together. */
  periods: string[];
  meta: L;
  description: L;
  logo: string;
  sub?: { org: string; period: string; logo: string }[];
};

/** Work experience, newest first. */
export const experience: Job[] = [
  {
    role: l("Pelinhoitaja", "Casino Dealer"),
    org: l("Veikkaus Oy · Casino Helsinki", "Veikkaus Oy · Casino Helsinki"),
    periods: ["4/2026 – 8/2026"],
    meta: l("Osa-aikainen · Helsinki", "Part-time · Helsinki"),
    logo: veikkausLogo.url,
    description: l(
      "Hoidin ruletti-pelejä Suomen ainoalla kasinolla, pääosin ilta- ja yövuoroissa. Tehtäviin kuuluivat pelin johtaminen sääntöjen mukaisesti, panosten ja voittojen tarkka käsittely, vastuullisen pelaamisen periaatteiden noudattaminen sekä asiakaspalvelu kansainväliselle asiakaskunnalle, pääosin englanniksi. Tehtävään valitaan taustatarkistuksen kautta, ja se edellyttää tarkkuutta, keskittymiskykyä ja paineensietoa.",
      "I dealt roulette at Finland’s only casino, mainly on evening and night shifts. Responsibilities included running the game by the rules, handling stakes and payouts accurately, applying responsible-gambling principles and serving an international clientele, mostly in English. The role requires a background check and calls for precision, concentration and composure under pressure.",
    ),
  },
  {
    role: l("Freelance-toimittaja", "Freelance Journalist"),
    org: l("Kuurojen Liitto ry · Kuurojen Lehti", "Finnish Association of the Deaf · Kuurojen Lehti"),
    periods: ["10/2025 – 8/2026"],
    meta: l("Freelance · etätyö", "Freelance · remote"),
    logo: kuurojenLiittoLogo.url,
    description: l(
      "Kirjoitan henkilöjuttuja ja Nuorisopalsta-kolumneja neljästi vuodessa ilmestyvään aikakauslehteen yksittäisinä toimeksiantoina. Työhön kuuluvat aiheiden ideointi, haastattelut, kirjoittaminen ja kuvaaminen sekä yhteistyö toimituksen kanssa editoinnissa ja aikatauluissa. Juttujani on julkaistu numeroissa 4/2025, 1/2026, 2/2026 ja 3/2026.",
      "I write profiles and youth columns on commission for a magazine published four times a year. The work covers story ideas, interviews, writing and photography, as well as working with the editors on edits and deadlines. My stories have appeared in issues 4/2025, 1/2026, 2/2026 and 3/2026.",
    ),
  },
  {
    role: l("Lasten ja nuorten ohjaaja · leiriohjaaja", "Child and Youth Worker · Camp Leader"),
    org: l("Kuuloalan järjestöt", "Hearing-sector organisations"),
    periods: ["7/2022 – 10/2026"],
    meta: l("Osa-aikainen", "Part-time"),
    logo: klvlLogo.url,
    description: l(
      "Ohjaan leirejä, vertaistukitapahtumia ja vapaa-ajan toimintaa kuulovammaisille lapsille ja nuorille. Tehtäviin kuuluvat ohjelman suunnittelu ja toteutus, ryhmänhallinta sekä osallistujien turvallisuudesta ja hyvinvoinnista huolehtiminen. Neljä järjestöä on luottanut minuun toistuvasti useiden vuosien ajan.",
      "I lead camps, peer-support events and leisure activities for hearing-impaired children and young people. Responsibilities include planning and running programmes, group management and looking after participants’ safety and wellbeing. Four organisations have repeatedly entrusted me with this work over several years.",
    ),
    sub: [
      { org: "Kuulovammaisten Lasten Vanhempien Liitto ry", period: "1/2025 – 10/2026", logo: klvlLogo.url },
      { org: "Suomen Kuurojen Urheiluliitto ry", period: "3/2026 – 9/2026", logo: skulLogo.url },
      { org: "LapCI ry", period: "4/2023 – 9/2026", logo: lapciLogo.url },
      { org: "Kuurojen Palvelusäätiö sr", period: "2/2025 – 3/2026", logo: kpsLogo.url },
    ],
  },
  {
    role: l("Myyntineuvottelija", "Sales Specialist"),
    org: l("Sanoma Media Finland Oy", "Sanoma Media Finland Oy"),
    periods: ["5/2025 – 7/2025", "12/2025"],
    meta: l("Osa-aikainen · Vantaa", "Part-time · Vantaa"),
    logo: sanomaLogo.url,
    description: l(
      "Tein puhelinmyyntiä Sanoma Media Finlandin myyntitoimistossa Vantaalla. Kartoitin entisten ja nykyisten kuluttaja-asiakkaiden tarpeita ja tarjosin heille sopivia tilausratkaisuja konsernin tunnetuimmista medioista, kuten Helsingin Sanomista, Me Naisista ja Gloriasta. Tavoitteellinen ja tulosperusteinen työ antoi käytännön näkymän mediatalon tilausliiketoimintaan ja asiakkuuksien hoitoon.",
      "I worked in telephone sales at Sanoma Media Finland’s sales office in Vantaa. I identified the needs of former and current consumer customers and offered suitable subscriptions to the group’s best-known titles, including Helsingin Sanomat, Me Naiset and Gloria. The target-driven, results-based role gave me hands-on insight into a media company’s subscription business and customer relationships.",
    ),
  },
  {
    role: l("Ravintolatyöntekijä", "Crew Member"),
    org: l("McDonald’s", "McDonald’s"),
    periods: ["7/2022 – 8/2024"],
    meta: l("Kesätyö · kolme kesää", "Summer job · three summers"),
    logo: mcdonaldsLogo.url,
    description: l(
      "Työskentelin kolmena kesänä pääkaupunkiseudun vilkkaissa ravintoloissa Suomenojalla, Teollisuuskadulla ja Pitäjänmäessä. Tehtäviin kuuluivat asiakaspalvelu, ruoanvalmistus laatu- ja hygieniastandardien mukaisesti, kotiinkuljetustilausten kokoaminen, tavaravastaanotto ja ravintolan siisteydestä huolehtiminen. Työ vahvisti paineensietokykyä, täsmällisyyttä ja tiimityötaitoja.",
      "I spent three summers working in busy restaurants in the Helsinki region, in Suomenoja, Teollisuuskatu and Pitäjänmäki. Duties included customer service, food preparation to quality and hygiene standards, assembling delivery orders, receiving goods and keeping the restaurant clean. The job strengthened my composure under pressure, precision and teamwork.",
    ),
  },
];

export const education: { degree: L; school: L; period: string }[] = [
  {
    degree: l("Medianomi (AMK), journalismi", "Bachelor of Culture and Arts, Journalism"),
    school: l("Haaga-Helia ammattikorkeakoulu", "Haaga-Helia University of Applied Sciences"),
    period: "2026 –",
  },
  {
    degree: l("Journalismin polkuopinnot", "Journalism pathway studies"),
    school: l("Haaga-Helia, avoin AMK", "Haaga-Helia Open UAS"),
    period: "2025",
  },
  {
    degree: l("Ylioppilastutkinto", "Matriculation examination"),
    school: l("Espoon yhteislyseon lukio", "Espoon yhteislyseo upper secondary school"),
    period: "2021 – 2024",
  },
];

export const languages: { name: L; level: L }[] = [
  { name: l("Suomi", "Finnish"), level: l("Äidinkieli", "Native") },
  { name: l("Suomalainen viittomakieli", "Finnish Sign Language"), level: l("Äidinkieli", "Native") },
  { name: l("Englanti", "English"), level: l("Hyvä", "Good") },
  { name: l("Ruotsi", "Swedish"), level: l("Perustaso", "Basic") },
];

export const interests: L[] = [
  l("Talous ja sijoittaminen", "Economics and investing"),
  l("Kotimainen politiikka", "Finnish politics"),
  l("EU ja kansainvälinen politiikka", "EU and international affairs"),
  l("Median murros", "The changing media landscape"),
  l("Suomen kulttuuri ja historia", "Finnish culture and history"),
];

/** Interface strings. */
export const ui = {
  nav: {
    home: l("Etusivu", "Home"),
    publications: l("Julkaisut", "Work"),
    experience: l("Työkokemus", "Experience"),
    education: l("Koulutus", "Education"),
    contact: l("Yhteystiedot", "Contact"),
  },
  portfolio: l("Portfolio", "Portfolio"),
  aboutTitle: l("Minusta", "About"),
  directionTitle: l("Suunta", "Direction"),
  explore: l("Tutustu", "Explore"),
  seeWork: l("Katso julkaisut", "View my work"),
  getInTouch: l("Ota yhteyttä", "Get in touch"),
  pub: {
    title: l("Julkaisut", "Published work"),
    intro: l(
      "Täältä löydät henkilöjuttuni ja kolumnini Kuurojen Lehdessä sekä artikkelini ja videojuttuni 360journalismia-mediassa.",
      "Here you will find my profiles and columns in Kuurojen Lehti, as well as my articles and video stories for 360journalismia.",
    ),
    magazine: l("Kuurojen Lehti", "Kuurojen Lehti"),
    preview: l("Esikatselu. Koko juttu on luettavissa painetusta lehdestä.", "Preview. The full story is in the print magazine."),
    magazineNote: l(
      "Kuurojen Lehti on Kuurojen Liiton aikakauslehti, joka ilmestyy neljästi vuodessa. Jutuista on tässä esillä maistiainen, ja kokonaisuudessaan ne ovat luettavissa painetusta lehdestä.",
      "Kuurojen Lehti is the magazine of the Finnish Association of the Deaf, published four times a year. A preview of each story is shown here; the full versions appear in the magazine.",
    ),
    other: l("360journalismia · artikkelit ja videot", "360journalismia · articles and video"),
    read: l("Lue maistiainen", "Read preview"),
    excerptNote: l("Ote jutusta", "Excerpt (in Finnish)"),
    fullInMagazine: l("Koko juttu on luettavissa Kuurojen Lehden numerosta", "The full story appears in Kuurojen Lehti issue"),
    subscribe: l("Tilaa Kuurojen Lehti", "Subscribe to Kuurojen Lehti"),
    original: l("Alkuperäinen otsikko", "Original title"),
    openWeb: l("Lue juttu", "Read article"),
    openIg: l("Katso Instagramissa", "Watch on Instagram"),
    openAudio: l("Kuuntele ohjelma", "Listen to the show"),
  },
  exp: {
    title: l("Työkokemus", "Experience"),
    intro: l(
      "Kokemukseni kattaa journalismia, myyntiä, asiakaspalvelua ja ohjaustyötä.",
      "My experience covers journalism, sales, customer service and youth work.",
    ),
    orgs: l("Järjestöt", "Organisations"),
  },
  edu: {
    title: l("Koulutus", "Education"),
    intro: l("Tällä sivulla kerron koulutuksestani, kielitaidostani ja kiinnostuksen kohteistani.", "This page covers my education, languages and areas of interest."),
    education: l("Koulutus", "Education"),
    languages: l("Kielitaito", "Languages"),
    interests: l("Kiinnostuksen kohteet", "Interests"),
  },
  contact: {
    title: l("Otetaan yhteyttä", "Let’s talk"),
    intro: l(
      "Kiinnostaako yhteistyö, juttuidea tai avoin tehtävä? Tavoitat minut parhaiten sähköpostilla tai LinkedInissä.",
      "Interested in working together, a story idea or an open position? Email or LinkedIn is the best way to reach me.",
    ),
    email: l("Sähköposti", "Email"),
    location: l("Sijainti", "Location"),
  },
};
