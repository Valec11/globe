//
// Configuration
//

// ms to wait after dragging before auto-rotating
var rotationDelay = 3000
// scale of the globe (not the canvas element)
var scaleFactor = 0.9
// autorotation speed
var degPerSec = 6
// start angles
var angles = { x: -20, y: 40, z: 0}
// colors
var colorWater = '#6441a5'
var colorLand = 'black'
var colorGraticule = 'blue'
var colorCountry = 'yellow'
var countryColors = [
  {
     "id":"-1",
     "name":"Northern Cyprus",
     "color": ""
  },
  {
     "id":"-2",
     "name":"Kosovo",
     "color":""
  },
  {
     "id":"-3",
     "name":"Somaliland",
     "color":""
  },
  {
     "id":"4",
     "name":"Afghanistan",
     "color":""
  },
  {
     "id":"8",
     "name":"Albania",
     "color":""
  },
  {
     "id":"10",
     "name":"Antarctica",
     "color":"black"
  },
  {
     "id":"12",
     "name":"Algeria",
     "color":""
  },
  {
     "id":"16",
     "name":"American Samoa",
     "color":""
  },
  {
     "id":"20",
     "name":"Andorra",
     "color":""
  },
  {
     "id":"24",
     "name":"Angola",
     "color":""
  },
  {
     "id":"28",
     "name":"Antigua and Barbuda",
     "color":""
  },
  {
     "id":"31",
     "name":"Azerbaijan",
     "color":""
  },
  {
     "id":"32",
     "name":"Argentina",
     "color":""
  },
  {
     "id":"36",
     "name":"Australia",
     "color":""
  },
  {
     "id":"40",
     "name":"Austria",
     "color":""
  },
  {
     "id":"44",
     "name":"Bahamas",
     "color":""
  },
  {
     "id":"48",
     "name":"Bahrain",
     "color":""
  },
  {
     "id":"50",
     "name":"Bangladesh",
     "color":""
  },
  {
     "id":"51",
     "name":"Armenia",
     "color":""
  },
  {
     "id":"52",
     "name":"Barbados",
     "color":""
  },
  {
     "id":"56",
     "name":"Belgium",
     "color":""
  },
  {
     "id":"60",
     "name":"Bermuda",
     "color":""
  },
  {
     "id":"64",
     "name":"Bhutan",
     "color":""
  },
  {
     "id":"68",
     "name":"Bolivia, Plurinational State of",
     "color":""
  },
  {
     "id":"70",
     "name":"Bosnia and Herzegovina",
     "color":""
  },
  {
     "id":"72",
     "name":"Botswana",
     "color":""
  },
  {
     "id":"74",
     "name":"Bouvet Island",
     "color":""
  },
  {
     "id":"76",
     "name":"Brazil",
     "color":""
  },
  {
     "id":"84",
     "name":"Belize",
     "color":""
  },
  {
     "id":"86",
     "name":"British Indian Ocean Territory",
     "color":""
  },
  {
     "id":"90",
     "name":"Solomon Islands",
     "color":""
  },
  {
     "id":"92",
     "name":"Virgin Islands, British",
     "color":""
  },
  {
     "id":"96",
     "name":"Brunei Darussalam",
     "color":""
  },
  {
     "id":"100",
     "name":"Bulgaria",
     "color":""
  },
  {
     "id":"104",
     "name":"Myanmar",
     "color":""
  },
  {
     "id":"108",
     "name":"Burundi",
     "color":""
  },
  {
     "id":"112",
     "name":"Belarus",
     "color":""
  },
  {
     "id":"116",
     "name":"Cambodia",
     "color":""
  },
  {
     "id":"120",
     "name":"Cameroon",
     "color":""
  },
  {
     "id":"124",
     "name":"Canada",
     "color":"violet"
  },
  {
     "id":"132",
     "name":"Cape Verde",
     "color":""
  },
  {
     "id":"136",
     "name":"Cayman Islands",
     "color":""
  },
  {
     "id":"140",
     "name":"Central African Republic",
     "color":""
  },
  {
     "id":"144",
     "name":"Sri Lanka",
     "color":""
  },
  {
     "id":"148",
     "name":"Chad",
     "color":""
  },
  {
     "id":"152",
     "name":"Chile",
     "color":""
  },
  {
     "id":"156",
     "name":"China",
     "color":""
  },
  {
     "id":"158",
     "name":"Taiwan, Province of China",
     "color":""
  },
  {
     "id":"162",
     "name":"Christmas Island",
     "color":""
  },
  {
     "id":"166",
     "name":"Cocos (Keeling) Islands",
     "color":""
  },
  {
     "id":"170",
     "name":"Colombia",
     "color":"orange"
  },
  {
     "id":"174",
     "name":"Comoros",
     "color":""
  },
  {
     "id":"175",
     "name":"Mayotte",
     "color":""
  },
  {
     "id":"178",
     "name":"Congo",
     "color":""
  },
  {
     "id":"180",
     "name":"Congo, the Democratic Republic of the",
     "color":""
  },
  {
     "id":"184",
     "name":"Cook Islands",
     "color":""
  },
  {
     "id":"188",
     "name":"Costa Rica",
     "color":""
  },
  {
     "id":"191",
     "name":"Croatia",
     "color":""
  },
  {
     "id":"192",
     "name":"Cuba",
     "color":""
  },
  {
     "id":"196",
     "name":"Cyprus",
     "color":""
  },
  {
     "id":"203",
     "name":"Czech Republic",
     "color":""
  },
  {
     "id":"204",
     "name":"Benin",
     "color":""
  },
  {
     "id":"208",
     "name":"Denmark",
     "color":""
  },
  {
     "id":"212",
     "name":"Dominica",
     "color":""
  },
  {
     "id":"214",
     "name":"Dominican Republic",
     "color":"purple"
  },
  {
     "id":"218",
     "name":"Ecuador",
     "color":""
  },
  {
     "id":"222",
     "name":"El Salvador",
     "color":""
  },
  {
     "id":"226",
     "name":"Equatorial Guinea",
     "color":""
  },
  {
     "id":"231",
     "name":"Ethiopia",
     "color":""
  },
  {
     "id":"232",
     "name":"Eritrea",
     "color":""
  },
  {
     "id":"233",
     "name":"Estonia",
     "color":""
  },
  {
     "id":"234",
     "name":"Faroe Islands",
     "color":""
  },
  {
     "id":"238",
     "name":"Falkland Islands (Malvinas)",
     "color":""
  },
  {
     "id":"239",
     "name":"South Georgia and the South Sandwich Islands",
     "color":""
  },
  {
     "id":"242",
     "name":"Fiji",
     "color":""
  },
  {
     "id":"246",
     "name":"Finland",
     "color":""
  },
  {
     "id":"248",
     "name":"Åland Islands",
     "color":""
  },
  {
     "id":"250",
     "name":"France",
     "color":""
  },
  {
     "id":"254",
     "name":"French Guiana",
     "color":""
  },
  {
     "id":"258",
     "name":"French Polynesia",
     "color":""
  },
  {
     "id":"260",
     "name":"French Southern Territories",
     "color":""
  },
  {
     "id":"262",
     "name":"Djibouti",
     "color":""
  },
  {
     "id":"266",
     "name":"Gabon",
     "color":""
  },
  {
     "id":"268",
     "name":"Georgia",
     "color":""
  },
  {
     "id":"270",
     "name":"Gambia",
     "color":""
  },
  {
     "id":"275",
     "name":"Palestinian Territory, Occupied",
     "color":""
  },
  {
     "id":"276",
     "name":"Germany",
     "color":"pink"
  },
  {
     "id":"288",
     "name":"Ghana",
     "color":""
  },
  {
     "id":"292",
     "name":"Gibraltar",
     "color":""
  },
  {
     "id":"296",
     "name":"Kiribati",
     "color":""
  },
  {
     "id":"300",
     "name":"Greece",
     "color":""
  },
  {
     "id":"304",
     "name":"Greenland",
     "color":""
  },
  {
     "id":"308",
     "name":"Grenada",
     "color":""
  },
  {
     "id":"312",
     "name":"Guadeloupe",
     "color":""
  },
  {
     "id":"316",
     "name":"Guam",
     "color":""
  },
  {
     "id":"320",
     "name":"Guatemala",
     "color":""
  },
  {
     "id":"324",
     "name":"Guinea",
     "color":""
  },
  {
     "id":"328",
     "name":"Guyana",
     "color":""
  },
  {
     "id":"332",
     "name":"Haiti",
     "color":""
  },
  {
     "id":"334",
     "name":"Heard Island and McDonald Islands",
     "color":""
  },
  {
     "id":"336",
     "name":"Holy See (Vatican City State)",
     "color":""
  },
  {
     "id":"340",
     "name":"Honduras",
     "color":""
  },
  {
     "id":"344",
     "name":"Hong Kong",
     "color":""
  },
  {
     "id":"348",
     "name":"Hungary",
     "color":""
  },
  {
     "id":"352",
     "name":"Iceland",
     "color":""
  },
  {
     "id":"356",
     "name":"India",
     "color":""
  },
  {
     "id":"360",
     "name":"Indonesia",
     "color":""
  },
  {
     "id":"364",
     "name":"Iran, Islamic Republic of",
     "color":""
  },
  {
     "id":"368",
     "name":"Iraq",
     "color":""
  },
  {
     "id":"372",
     "name":"Ireland",
     "color":""
  },
  {
     "id":"376",
     "name":"Israel",
     "color":""
  },
  {
     "id":"380",
     "name":"Italy",
     "color":""
  },
  {
     "id":"384",
     "name":"Côte d'Ivoire",
     "color":""
  },
  {
     "id":"388",
     "name":"Jamaica",
     "color":""
  },
  {
     "id":"392",
     "name":"Japan",
     "color":""
  },
  {
     "id":"398",
     "name":"Kazakhstan",
     "color":""
  },
  {
     "id":"400",
     "name":"Jordan",
     "color":""
  },
  {
     "id":"404",
     "name":"Kenya",
     "color":""
  },
  {
     "id":"408",
     "name":"Korea, Democratic People's Republic of",
     "color":""
  },
  {
     "id":"410",
     "name":"Korea, Republic of",
     "color":""
  },
  {
     "id":"414",
     "name":"Kuwait",
     "color":""
  },
  {
     "id":"417",
     "name":"Kyrgyzstan",
     "color":""
  },
  {
     "id":"418",
     "name":"Lao People's Democratic Republic",
     "color":""
  },
  {
     "id":"422",
     "name":"Lebanon",
     "color":""
  },
  {
     "id":"426",
     "name":"Lesotho",
     "color":""
  },
  {
     "id":"428",
     "name":"Latvia",
     "color":""
  },
  {
     "id":"430",
     "name":"Liberia",
     "color":""
  },
  {
     "id":"434",
     "name":"Libya",
     "color":""
  },
  {
     "id":"438",
     "name":"Liechtenstein",
     "color":""
  },
  {
     "id":"440",
     "name":"Lithuania",
     "color":""
  },
  {
     "id":"442",
     "name":"Luxembourg",
     "color":""
  },
  {
     "id":"446",
     "name":"Macao",
     "color":""
  },
  {
     "id":"450",
     "name":"Madagascar",
     "color":""
  },
  {
     "id":"454",
     "name":"Malawi",
     "color":""
  },
  {
     "id":"458",
     "name":"Malaysia",
     "color":""
  },
  {
     "id":"462",
     "name":"Maldives",
     "color":""
  },
  {
     "id":"466",
     "name":"Mali",
     "color":""
  },
  {
     "id":"470",
     "name":"Malta",
     "color":""
  },
  {
     "id":"474",
     "name":"Martinique",
     "color":""
  },
  {
     "id":"478",
     "name":"Mauritania",
     "color":""
  },
  {
     "id":"480",
     "name":"Mauritius",
     "color":""
  },
  {
     "id":"484",
     "name":"Mexico",
     "color":"blue"
  },
  {
     "id":"492",
     "name":"Monaco",
     "color":""
  },
  {
     "id":"496",
     "name":"Mongolia",
     "color":""
  },
  {
     "id":"498",
     "name":"Moldova, Republic of",
     "color":""
  },
  {
     "id":"499",
     "name":"Montenegro",
     "color":""
  },
  {
     "id":"500",
     "name":"Montserrat",
     "color":""
  },
  {
     "id":"504",
     "name":"Morocco",
     "color":""
  },
  {
     "id":"508",
     "name":"Mozambique",
     "color":""
  },
  {
     "id":"512",
     "name":"Oman",
     "color":""
  },
  {
     "id":"516",
     "name":"Namibia",
     "color":""
  },
  {
     "id":"520",
     "name":"Nauru",
     "color":""
  },
  {
     "id":"524",
     "name":"Nepal",
     "color":""
  },
  {
     "id":"528",
     "name":"Netherlands",
     "color":""
  },
  {
     "id":"531",
     "name":"Curaçao",
     "color":""
  },
  {
     "id":"533",
     "name":"Aruba",
     "color":""
  },
  {
     "id":"534",
     "name":"Sint Maarten (Dutch part)",
     "color":""
  },
  {
     "id":"535",
     "name":"Bonaire, Sint Eustatius and Saba",
     "color":""
  },
  {
     "id":"540",
     "name":"New Caledonia",
     "color":""
  },
  {
     "id":"548",
     "name":"Vanuatu",
     "color":""
  },
  {
     "id":"554",
     "name":"New Zealand",
     "color":""
  },
  {
     "id":"558",
     "name":"Nicaragua",
     "color":""
  },
  {
     "id":"562",
     "name":"Niger",
     "color":""
  },
  {
     "id":"566",
     "name":"Nigeria",
     "color":""
  },
  {
     "id":"570",
     "name":"Niue",
     "color":""
  },
  {
     "id":"574",
     "name":"Norfolk Island",
     "color":""
  },
  {
     "id":"578",
     "name":"Norway",
     "color":""
  },
  {
     "id":"580",
     "name":"Northern Mariana Islands",
     "color":""
  },
  {
     "id":"581",
     "name":"United States Minor Outlying Islands",
     "color":""
  },
  {
     "id":"583",
     "name":"Micronesia, Federated States of",
     "color":""
  },
  {
     "id":"584",
     "name":"Marshall Islands",
     "color":""
  },
  {
     "id":"585",
     "name":"Palau",
     "color":""
  },
  {
     "id":"586",
     "name":"Pakistan",
     "color":""
  },
  {
     "id":"591",
     "name":"Panama",
     "color":""
  },
  {
     "id":"598",
     "name":"Papua New Guinea",
     "color":""
  },
  {
     "id":"600",
     "name":"Paraguay",
     "color":""
  },
  {
     "id":"604",
     "name":"Peru",
     "color":""
  },
  {
     "id":"608",
     "name":"Philippines",
     "color":""
  },
  {
     "id":"612",
     "name":"Pitcairn",
     "color":""
  },
  {
     "id":"616",
     "name":"Poland",
     "color":""
  },
  {
     "id":"620",
     "name":"Portugal",
     "color":""
  },
  {
     "id":"624",
     "name":"Guinea-Bissau",
     "color":""
  },
  {
     "id":"626",
     "name":"Timor-Leste",
     "color":""
  },
  {
     "id":"630",
     "name":"Puerto Rico",
     "color":""
  },
  {
     "id":"634",
     "name":"Qatar",
     "color":""
  },
  {
     "id":"638",
     "name":"Réunion",
     "color":""
  },
  {
     "id":"642",
     "name":"Romania",
     "color":""
  },
  {
     "id":"643",
     "name":"Russian Federation",
     "color":"tomato"
  },
  {
     "id":"646",
     "name":"Rwanda",
     "color":""
  },
  {
     "id":"652",
     "name":"Saint Barthélemy",
     "color":""
  },
  {
     "id":"654",
     "name":"Saint Helena, Ascension and Tristan da Cunha",
     "color":""
  },
  {
     "id":"659",
     "name":"Saint Kitts and Nevis",
     "color":""
  },
  {
     "id":"660",
     "name":"Anguilla",
     "color":""
  },
  {
     "id":"662",
     "name":"Saint Lucia",
     "color":""
  },
  {
     "id":"663",
     "name":"Saint Martin (French part)",
     "color":""
  },
  {
     "id":"666",
     "name":"Saint Pierre and Miquelon",
     "color":""
  },
  {
     "id":"670",
     "name":"Saint Vincent and the Grenadines",
     "color":""
  },
  {
     "id":"674",
     "name":"San Marino",
     "color":""
  },
  {
     "id":"678",
     "name":"Sao Tome and Principe",
     "color":""
  },
  {
     "id":"682",
     "name":"Saudi Arabia",
     "color":""
  },
  {
     "id":"686",
     "name":"Senegal",
     "color":""
  },
  {
     "id":"688",
     "name":"Serbia",
     "color":""
  },
  {
     "id":"690",
     "name":"Seychelles",
     "color":""
  },
  {
     "id":"694",
     "name":"Sierra Leone",
     "color":""
  },
  {
     "id":"702",
     "name":"Singapore",
     "color":""
  },
  {
     "id":"703",
     "name":"Slovakia",
     "color":""
  },
  {
     "id":"704",
     "name":"Viet Nam",
     "color":""
  },
  {
     "id":"705",
     "name":"Slovenia",
     "color":""
  },
  {
     "id":"706",
     "name":"Somalia",
     "color":""
  },
  {
     "id":"710",
     "name":"South Africa",
     "color":""
  },
  {
     "id":"716",
     "name":"Zimbabwe",
     "color":""
  },
  {
     "id":"724",
     "name":"Spain",
     "color":""
  },
  {
     "id":"728",
     "name":"South Sudan",
     "color":""
  },
  {
     "id":"729",
     "name":"Sudan",
     "color":""
  },
  {
     "id":"732",
     "name":"Western Sahara",
     "color":""
  },
  {
     "id":"740",
     "name":"Suriname",
     "color":""
  },
  {
     "id":"744",
     "name":"Svalbard and Jan Mayen",
     "color":""
  },
  {
     "id":"748",
     "name":"Swaziland",
     "color":""
  },
  {
     "id":"752",
     "name":"Sweden",
     "color":""
  },
  {
     "id":"756",
     "name":"Switzerland",
     "color":""
  },
  {
     "id":"760",
     "name":"Syrian Arab Republic",
     "color":""
  },
  {
     "id":"762",
     "name":"Tajikistan",
     "color":""
  },
  {
     "id":"764",
     "name":"Thailand",
     "color":""
  },
  {
     "id":"768",
     "name":"Togo",
     "color":""
  },
  {
     "id":"772",
     "name":"Tokelau",
     "color":""
  },
  {
     "id":"776",
     "name":"Tonga",
     "color":""
  },
  {
     "id":"780",
     "name":"Trinidad and Tobago",
     "color":""
  },
  {
     "id":"784",
     "name":"United Arab Emirates",
     "color":""
  },
  {
     "id":"788",
     "name":"Tunisia",
     "color":""
  },
  {
     "id":"792",
     "name":"Turkey",
     "color":""
  },
  {
     "id":"795",
     "name":"Turkmenistan",
     "color":""
  },
  {
     "id":"796",
     "name":"Turks and Caicos Islands",
     "color":""
  },
  {
     "id":"798",
     "name":"Tuvalu",
     "color":""
  },
  {
     "id":"800",
     "name":"Uganda",
     "color":""
  },
  {
     "id":"804",
     "name":"Ukraine",
     "color":""
  },
  {
     "id":"807",
     "name":"Macedonia, the former Yugoslav Republic of",
     "color":""
  },
  {
     "id":"818",
     "name":"Egypt",
     "color":""
  },
  {
     "id":"826",
     "name":"United Kingdom",
     "color":""
  },
  {
     "id":"831",
     "name":"Guernsey",
     "color":""
  },
  {
     "id":"832",
     "name":"Jersey",
     "color":""
  },
  {
     "id":"833",
     "name":"Isle of Man",
     "color":""
  },
  {
     "id":"834",
     "name":"Tanzania, United Republic of",
     "color":""
  },
  {
     "id":"840",
     "name":"United States",
     "color":"green"
  },
  {
     "id":"850",
     "name":"Virgin Islands, U.S.",
     "color":""
  },
  {
     "id":"854",
     "name":"Burkina Faso",
     "color":""
  },
  {
     "id":"858",
     "name":"Uruguay",
     "color":""
  },
  {
     "id":"860",
     "name":"Uzbekistan",
     "color":""
  },
  {
     "id":"862",
     "name":"Venezuela, Bolivarian Republic of",
     "color":""
  },
  {
     "id":"876",
     "name":"Wallis and Futuna",
     "color":""
  },
  {
     "id":"882",
     "name":"Samoa",
     "color":""
  },
  {
     "id":"887",
     "name":"Yemen",
     "color":""
  },
  {
     "id":"894",
     "name":"Zambia",
     "color":""
  }
];


//
// Handler
//
function getSelectedCountry(country) {
  var country = countryList.find(function(c) {
    return c.id === country.id
  })

  return country || {};
}


function enter(country) {
  var country = getSelectedCountry(country);
  var countryName = country.name || ''
  current.text(countryName);
}

function leave(country) {
  current.text('')
}

//
// Variables
//

var current = d3.select('#current')
var canvas = d3.select('#globe')
var context = canvas.node().getContext('2d')
var water = {type: 'Sphere'}
var projection = d3.geoOrthographic().precision(0.1)
var graticule = d3.geoGraticule10()
var path = d3.geoPath(projection).context(context)
var v0 // Mouse position in Cartesian coordinates at start of drag gesture.
var r0 // Projection rotation as Euler angles at start.
var q0 // Projection rotation as versor at start.
var lastTime = d3.now()
var degPerMs = degPerSec / 1000
var width, height
var land, countries
var countryList
var autorotate, now, diff, roation
var currentCountry

//
// Functions
//

function setAngles() {
  var rotation = projection.rotate()
  rotation[0] = angles.y
  rotation[1] = angles.x
  rotation[2] = angles.z
  projection.rotate(rotation)
}

function scale() {
  width = document.documentElement.clientWidth
  height = document.documentElement.clientHeight
  canvas.attr('width', width).attr('height', height)
  projection
    .scale((scaleFactor * Math.min(width, height)) / 2)
    .translate([width / 2, height / 2])
  render()
}

function startRotation(delay) {
  autorotate.restart(rotate, delay || 0)
}

function stopRotation() {
  autorotate.stop()
}

function dragstarted() {
  v0 = versor.cartesian(projection.invert(d3.mouse(this)))
  r0 = projection.rotate()
  q0 = versor(r0)
  stopRotation()
}

function dragged() {
  var v1 = versor.cartesian(projection.rotate(r0).invert(d3.mouse(this)))
  var q1 = versor.multiply(q0, versor.delta(v0, v1))
  var r1 = versor.rotation(q1)
  projection.rotate(r1)
  render()
}

function dragended() {
  startRotation(rotationDelay)
}

function render() {
  context.clearRect(0, 0, width, height)
  fill(water, colorWater)
  stroke(graticule, colorGraticule)
  fill(land, colorLand)
  if (currentCountry) {
    var selectedCountry = getSelectedCountry(currentCountry);
    var country = countryColors.filter(c => selectedCountry.id == c.id);
    if(country && country[0]){
      console.log(country);
      return fill(currentCountry, country[0].color);
    }
    return fill(currentCountry, colorCountry)
  }
}

function renderTooltip(c) {
 var country = getSelectedCountry(c);

 d3.select('#Name').text(`Donations from ${country.name}`);
 d3.select('#Name2').text("user01: 1000 bits");


  d3.select('#tooltip')
  .style('left', (d3.event.pageX + 20) + 'px')
  .style('top', (d3.event.pageY - 80) + 'px')
  .style('display', 'block')
  .style('opacity', 0.8)
}

function fill(obj, color) {
  context.beginPath()
  path(obj)
  context.fillStyle = color
  context.fill()
}

function stroke(obj, color) {
  context.beginPath()
  path(obj)
  context.strokeStyle = color
  context.stroke()
}

function rotate(elapsed) {
  now = d3.now()
  diff = now - lastTime
  if (diff < elapsed) {
    rotation = projection.rotate()
    rotation[0] += diff * degPerMs
    projection.rotate(rotation)
    render()
  }
  lastTime = now
}

function loadData(cb) {
  d3.json('https://unpkg.com/world-atlas@1/world/110m.json', function(error, world) {
    if (error) throw error
    d3.tsv('https://gist.githubusercontent.com/mbostock/4090846/raw/07e73f3c2d21558489604a0bc434b3a5cf41a867/world-country-names.tsv', function(error, countries) {
      if (error) throw error
      cb(world, countries)
    })
  })
}

// https://github.com/d3/d3-polygon
function polygonContains(polygon, point) {
  var n = polygon.length
  var p = polygon[n - 1]
  var x = point[0], y = point[1]
  var x0 = p[0], y0 = p[1]
  var x1, y1
  var inside = false
  for (var i = 0; i < n; ++i) {
    p = polygon[i], x1 = p[0], y1 = p[1]
    if (((y1 > y) !== (y0 > y)) && (x < (x0 - x1) * (y - y1) / (y0 - y1) + x1)) inside = !inside
    x0 = x1, y0 = y1
  }
  return inside
}

function mousemove() {
  var c = getCountry(this)

  if (!c) {
    if (currentCountry) {
      leave(currentCountry)
      currentCountry = undefined
      render()
    }
    return
  }
  if (c === currentCountry) {
    return
  }
  currentCountry = c;
  render()
  renderTooltip(c);
  enter(c)
}


function getCountry(event, caller) {
  var pos = projection.invert(d3.mouse(event))
  if(!caller) {
    console.log(pos);
  }
  return countries.features.find(function(f) {
    return f.geometry.coordinates.find(function(c1) {
      return polygonContains(c1, pos) || c1.find(function(c2) {
        return polygonContains(c2, pos)
      })
    })
  })
}


//
// Initialization
//

setAngles()

canvas

  .call(d3.drag()
    .on('start', dragstarted)
    .on('drag', dragged)
    .on('end', dragended)
  ) 
  .on('mousemove', mousemove)

loadData(function(world, cList) {
  land = topojson.feature(world, world.objects.land)
  countries = topojson.feature(world, world.objects.countries)
  countryList = cList

  console.log(JSON.stringify(countryList.map(c => ({
    ...c,
    color: ''
  }))
  ));
  window.addEventListener('resize', scale)
  scale()
  autorotate = d3.timer(rotate)
})
