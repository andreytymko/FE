//function to add element 
let doc = document;
function addElement( parent, child, text){
    let element = doc.createElement(child);
    parent.appendChild(element);
    if(text!=null){
        element.appendChild( doc.createTextNode(text));
    }
    console.log(element);
    
    return element;
}

let body  = addElement( doc.body, 'body')
// header
let header = addElement(body, 'header');
let h1header = addElement( header, 'h1',  'CSS1K');
let nav = addElement(header, 'nav');
let navh2 = addElement(nav, 'h2', 'Select a design')
// List
//stylesName
let styles = 
[
    'Default ','Stripes ','Notepad ' ,'Garden of CSS-3Den ','Bbubles','Swiss ',
    'Turn around ','Whirl ','BundlerInspired ','Oldie ','Typhon ','Cube ',
    'Northern Lights ','Skewed ','Moonlight ','Typewriter ','Old School ','Butchery ',
    'm6tt ','1024-bytes ','Molokai ','Android ','Bookshelf ','GeoCities ','Im Batman ',
    'Ebhoren ','Facetime ','Cloudy ','Grey Matter ','Blue square ','HelvetiPink ','Summer Sun ',
    'Less is More ','Inset ','Legible ','Green Lemon ','Wired ','Narcissist ','Juiz Star ',
    'Wolfr ','fortyeight1k ','Columns ','Trainspotting ','ribbon ','Solarized ','Open Water ','HTML5 Colors ',
    'heart css ','Sourcy ','Terminal ','Goodnight Moon ','Fancy ','Text Levels ','Yelo ','Spartan ',
    'paper ','Lúcuma ','Fresh Soda ','Ev ','B4yamp; A11y ','Adaptype ','BleuBleu ','Simpl ','Mitchiru ',
    'Casoy ','The Simple Swede ','PhotoBox ','Desktop ','Monochrome ','Expandable ','BlueBrush ',
    'Notice Board ','Triangulate ','AAPL ','Yollaw ','Stretchy ','smile ','Toolbar ','Round Rect ',
    'The Rhythm ','SimpleBox ','Crawl '
];
//authorName
let author = 
[
    'Jacob Rask','Vasilis van Gemert','Wout Mager','Alex Walke','akella &amp; Genn',
    'Chris Lee','Bas van Dorst','Vincent De Oliveira','PhilG','Alexander Mankuta','ESWAT',
    'Sergii Iurevych','Igor «SkAZi» Potapov','Paul Steffens','Christian "Schepp" Schaefer',
    'Lance Alton Troxel','Roman Liutikov','Vibby','Matt Woodfield','Faisalman','Kien Nguyen',
    'Aleksej Romanovskij','SelenIT','Alexey Savartsov','Paul Reid','Dominic Mercier',
    'Bernard Nijenhuis','Sergey Leschina','Vadim Makeev','Hubert Sablonnière','Bill Keller',
    'Tanya Peasgood','Rob Balfre','Guillermo Latorre','Reimund Trost','Dirk Radunz','Brett DeWoody',
    'Jackie Balzer','Geoffrey Crofte','Johan Ronsse','Michael Haschke','Alexander Makarov',
    'Henrique Boaventura','David King','heirenton','Gilmore Davidson','Michael Garrett Jones',
    'Choy Kum Jin','Roman Komarov','Mikhail Korepanov','Dethe Elza','Michele Cipriani',
    'Patrick Mann','Bart de Bruin','Trent Mick','Daniel Rauber','Germán Martínez','Jan Ortgies',
    'Mathieu Rochette','Benoit Klein','Vasilis van Gemert','Leighton Rodney','Neofyt',
    'Michael Fritz','Robert Boloc','Tobias Akeblom','Stinkyink','Webmolot','Tamer Aydin',
    'Dennis Madvedovsky','Jenny Hao','Nihar Sawant','Sebastien Paquet','Joffrey Jaffeux',
    'Yan Ivanov','Denis Koltsov','Michael Scharnagl','Maxim Chervonny','Edwin Martin',
    'Roman Komarov','Rael Max','Bram de Haan'
];
//stylesLinks
let stylesHref = 
[
    './','#stripes','#notepad','#gardenof3den','#bbubles','#swiss','#turnaround','#whirl',
    '#bundler_inspired','#oldie','#typhon','#cube','#northern-lights','#skewed','#moonlight',
    '#typewriter','#oldschool','#butchery','#m6tt','#1024-bytes','#molokai','#android','#bookshelf',
    '#geocities','#imbatman','#ebhoren','#facetime','#cloudy','#greymatter','#blue_square','#helvetipink',
    '#summersun','#lessismore','#inset','#legible','#greenlemon','#wired','#narcissist','#juizstar',
    '#wolfr','#trainspotting','#columns','#trainspotting','#ribbon','#solarized','#openwater',
    '#html5colors','#heart_css','#sourcy','#terminal','#goodnight_moon','#fancy','#textlevels',
    '#yelo','#spartan','#paper','#lucuma','#freshsoda','#ev','#b4ya11y','#adaptype','#bleubleu',
    '#simpl','#mitchiru','#casoy','#thesimpleswede','#photobox','#desktop','#monochrome','#expandable','#bluebrush',
    '#noticeboard','#triangulate','#aapl','#yollaw','#stretchy','#smile','#toolbar','#roundrect',
    '#therhythm','#simplebox','#crawl'
];
//authorLinks
let authorHref = 
[
    'http://twitter.com/jacobrask','http://vasilis.nl','http://twitter.com/eworm_','http://designfestival.com',
    'http://cssing.org.ua','http://chrsl.net','http://www.basvandorst.nl','https://twitter.com/iamvdo',
    'https://github.com/PhilG','http://pointlessone.org','http://eswat.ca','http://be.net/iurevych',
    'http://potapoff.org','http://twitter.com/sntxrrr','http://twitter.com/derSchepp','http://thisbythem.com',
    'http://romanliutikov.com','http://vibby.fr','http://m6tt.com','http://github.com/faisalman',
    'http://designtomarkup.com','http://agat.in','https://github.com/SelenIT','https://github.com/asavartsov/',
    '#','http://www.dominic-mercier.com','http://twitter.com/bnijenhuis','http://twitter.com/putnik',
    'http://pepelsbey.net','http://twitter.com/hsablonniere','http://billkeller.name','http://twitter.com/tanya_peasgood',
    'http://twitter.com/rob_balfre','http://lumens.se','http://twitter.com/d_radunz','http://www.digitalwaxworks.com',
    'http://jackiebalzer.com','http://www.creativejuiz.fr','http://twitter.com/wolfr_','http://michael.haschke.biz',
    'http://rmcreative.ru','http://www.hboaventura.com','http://oodavid.com','http://twitter.com/heirenton','https://github.com/gilmoreorless',
    'http://www.theweblife.com','https://github.com/kjchoy','http://kizu.ru/en/','http://twitter.com/PanyaKor',
    'http://livingcode.org','http://www.trustweb.it','http://www.patrickmann.com','http://bartdebruin.nl',
    'http://trentm.com','http://daniel-rauber.de','http://twitter.com/germanmartinez','http://jungundwillich.de',
    'http://evangeneer.net','http://twitter.com/etBen','http://vasilis.nl','http://www.leightonrodney.com',
    'http://www.neofyt.com','http://banquo.de','http://twitter.com/robertboloc','http://www.tobiasphoto.com',
    'http://webmolot.com','http://tamerayd.in','http://twitter.com/curlybrace','https://twitter.com/jennyhao',
    'http://www.about.me/niharsawant','http://jumplinkdesign.co.vu','http://twitter.com/joffreyjaffeux',
    'http://franzose.in','http://twitter.com/mistadikay','http://twitter.com/realmuecke','http://chervonny.ru/en/',
    'http://www.bitstorm.org','http://kizu.ru/en/','http://raelmax.com','http://atelierbramdehaan.nl','http://vasilis.nl','http://vasilis.nl'
]
//function for list
let ul = addElement(nav, 'ul')
for (let i = 0;i < styles.length;i++){
    let li = addElement(ul,'li');
    let a  = addElement(li, 'a', styles[i] )
    a.href = stylesHref[i];
    let a2 = addElement(li,'a',author[i]);
    a2.href =authorHref[i];
}
// main
let article = addElement(body , 'article');
//main header
let articleHeader = addElement(article, 'header');
let headerH2 = addElement(articleHeader, 'h2', 'The Beauty in ');
let headerAbbr = addElement(headerH2, 'abbr', 'CSS');
let headerH2Text = headerH2.appendChild(doc.createTextNode(' Design'));
let headerP = addElement(articleHeader, 'p','A demonstration of what can be accomplished with only 1 ');
let headerPAbbr = addElement(headerP,'abbr', 'K ');
headerPAbbr.title = 'Kibibyte';
let openBracket = headerP.appendChild(doc.createTextNode('('));
let dfn = addElement(headerP,'dfn', 'Kibibyte');
dfn.title = '1024 bytes';
let closeBracket = headerP.appendChild(doc.createTextNode(')'));
let of = headerP.appendChild(doc.createTextNode('of'));
let headerPAbbr2 = addElement(headerP,'abbr', 'CSS');
let headerPText = headerP.appendChild(doc.createTextNode('. Select any design from the list to load it into this page. You can also navigate back and forth by using the left and right arrow keys.'))
//main section1
let articleSection1 = addElement(article , 'section');
let section1H2 = addElement(articleSection1, 'h2','So What is This About?');
//first P
let section1P1 =addElement(articleSection1, 'p','Back in 2003 (thats  ');
let section1P1Span = addElement(section1P1,'span', 'a lot of ');
section1P1Span.id = 'zengarden-age';
let section1Text = section1P1.appendChild(doc.createTextNode(' years ago!) '));
let section1P1A = addElement(section1P1,'a', 'Dave Shea ');
section1P1A.href = 'http://mezzoblue.com';
section1P1Text6 = section1P1.appendChild(doc.createTextNode(' launched the '));
section1P1A2 = addElement(section1P1, 'a');
section1P1A2.href = 'http://www.csszengarden.com';
section1P1A2Cite = addElement(section1P1A2, 'cite');
section1P1A2CiteAbbr = addElement(section1P1A2Cite, 'abbr', 'CSS ');
section1P1A2CiteText = section1P1A2Cite.appendChild(doc.createTextNode(' Zen Garden'));
section1P1TExt = section1P1.appendChild(doc.createTextNode('. It showcased what was possible with '));
section1P1Abbr = addElement(section1P1, 'abbr', 'CSS');
section1P1Text2 = section1P1.appendChild(doc.createTextNode('-based designs, leading to an explosion in the use of CSS on the web. Then, '));
section1P1A3 = addElement(section1P1, 'a','Peter van der Zee');
section1P1A3.href = 'http://qfox.nl';
section1P1Text3 = section1P1.appendChild(doc.createTextNode(' created '));
section1P1A4 = addElement(section1P1, 'a','JS1k');
section1P1A4.href = 'http://js1k.com';
section1P1Text4 = section1P1.appendChild(doc.createTextNode(' in 2010, a competition to build cool applications with no more than 1 '));
section1P1Abbr2 = addElement(section1P1,'abbr','K');
section1P1Text5 = section1P1.appendChild(doc.createTextNode(' of JavaScript.'));
//second P
let section1P2 =addElement(articleSection1, 'p','A lot has happened since the Zen Garden days, and today you can do almost anything with only ');
let section1P2Abbr = addElement(section1P2,'abbr', 'CSS');
let section1P2Text = section1P2.appendChild(doc.createTextNode('. As '));
let section1P2Abbr2 = addElement(section1P2, 'abbr', 'CSS');
let section1P2Text2 = section1P2.appendChild(doc.createTextNode(' use is growing, so is the average '));
let section1P2Abbr3 = addElement(section1P2, 'abbr', 'CSS');
let section1P2Text3 = section1P2.appendChild(doc.createTextNode(' file size. Popular sites have in average '));
let section1P2A1 = addElement(section1P2,'a','75');
section1P2A1.href = 'http://httparchive.org/interesting.php#bytesperpage';
section1P2A1Abbr = addElement(section1P2A1,'abbr', 'K');
section1P2A1Text = section1P2A1.appendChild(doc.createTextNode(' of '));
section1P2A1Abbr2 = addElement(section1P2A1,'abbr', 'CSS');
section1P2text4 = section1P2.appendChild(doc.createTextNode(', but some use up to a megabyte of style sheets!'));
//third P
let section1P3 =addElement(articleSection1, 'p','Do we need that much? ');
let section1P3B = addElement(section1P3,'b','CSS1K')
let section1P3Text = section1P3.appendChild(doc.createTextNode(' invites you to show that web developers are more inventive than ever, and that limitations can sparkle creativity.'));

//main section 2
let articleSection2 = addElement(article , 'section');
let section2H1 = addElement(articleSection2,'h2','Participation');
let section2Ol = addElement(articleSection2, 'ol');
//li1
let section2Li1 = addElement(section2Ol,'li', 'Submissions must consist of only ');
let section2LiAbbr = addElement(section2Li1, 'abbr', 'CSS');
//li2
let section2Li2 = addElement(section2Ol, 'li', 'Submissions may be up to 1 ');
let section2Li2Abbr = addElement(section2Li2, 'abbr','K');
section2Li2Abbr.title = 'Kibibyte';
let section2Li2Text = section2Li2.appendChild(doc.createTextNode(' (1024 bytes) minified'));
//li3
let section2Li3 = addElement(section2Ol,'li','Vendor prefixes are ');
let section2L3Em = addElement(section2Li3,'em','not');
let section2li3Text = section2Li3.appendChild(doc.createTextNode(' counted to the total number of bytes – submit your code unprefixed and '));
let section2Li3A = addElement(section2Li3,'a','PrefixFree');
section2Li3A.href = 'https://leaverou.github.io/prefixfree/';
let section2li3Text2 = section2Li3.appendChild(doc.createTextNode(' will add necesssary prefixes'));
//li4
let section2li4 = addElement(section2Ol, 'li','Any external resources and images, including ');
let section2li4Code = addElement(section2li4,'code', 'data');
let section2Li4Abbr = addElement(section2li4, 'abbr','URI');
let section2Li4Text = section2li4.appendChild(doc.createTextNode('s, '));
let section2li4Code2 = addElement(section2li4, 'code','@font-face');
let section2Li4Text2 = section2li4.appendChild(doc.createTextNode(' and '));
let section2li4Code3 = addElement(section2li4,'code','@import');
let section2Li4Text3 = section2li4.appendChild(doc.createTextNode('s, are forbidden'));
//li5
let section2li5 = addElement(section2Ol,'li','The page ');
let section2li5A =addElement(section2li5,'a','does not');
section2li5A.href = 'http://dowebsitesneedtolookexactlythesameineverybrowser.com';
let section2li5Text = section2li5.appendChild(doc.createTextNode(' have to look the same in every browser, but graceful degradation is encouraged'));
//li6
let section2Li6 = addElement(section2Ol,'li','The submitted code is licensed under the ');
let section2Li6A = addElement(section2Li6,'a','MIT License');
section2Li6A.href = 'http://www.opensource.org/licenses/mit-license.php';
// //p
let section2P = addElement(articleSection2,'p','To participate, fork ');
let section2PA = addElement(section2P,'a','CSS1K');
section2PA.href = 'https://github.com/selfthinker/CSS1K/';
let section2PText = section2P.appendChild(doc.createTextNode(' at GitHub and send your submission as a pull request. You are free to update your style at any time by sending a new pull request. Please specify the name of the style, your own name, and a URL you want us to link to (such as your homepage).'));

// footer
let footer = addElement(body,'footer')
let footerP = addElement(footer, 'p', 'Licensed under the ');
let footerPA1 = addElement(footerP, 'a', 'MIT Licence ');
footerPA1.href = "http://www.opensource.org/licenses/mit-license.php";
footerPA1.rel = "license";
let footerSpan = addElement(footerP, 'span' , 'Hosted and managed at ')
let footerA2 = addElement(footerP, 'a' , 'GitHub');
footerA2.href = "https://github.com/selfthinker/CSS1K";
