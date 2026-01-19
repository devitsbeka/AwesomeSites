export interface Site {
  name: string;
  slug: string;
  screenshot: string;
  repo: string;
  url: string | null;
  category: string;
}

export const categories = [
  'All',
  'Car',
  'Exhibition',
  'Portfolio',
  'Metaverse',
  'Room',
  'E-Commerce',
  'Game',
  'Space',
  'Other',
  'Mobile Only'
] as const;

export type Category = typeof categories[number];

export const sites: Site[] = [
  // Car
  { name: "Lamborghini", slug: "lamborghini", screenshot: "/screenshot/pack01-lamborghini.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/car/www.lamborghini.com", url: null, category: "Car" },
  { name: "Toyota Gazoo Racing", slug: "toyota-gazoo-racing", screenshot: "/screenshot/toyotagazooracing.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/car/toyotagazooracing.com", url: null, category: "Car" },
  { name: "Volkswagen Mexico", slug: "volkswagen-mexico", screenshot: "/screenshot/vw-com-mx.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/car/www.vw.com.mx", url: null, category: "Car" },
  { name: "Gemini Experience", slug: "gemini-experience", screenshot: "/screenshot/exp-gemini.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/car/exp-gemini.lusion.co", url: null, category: "Car" },
  { name: "Renault Twingo", slug: "renault-twingo", screenshot: "/screenshot/nouvelletwingo-renault.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack05/tree/main/car/www.experience-nouvelletwingo.renault.fr", url: null, category: "Car" },
  { name: "Xiaomi SU7", slug: "xiaomi-su7", screenshot: "/screenshot/mi-su7.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/car/mi-su7", url: null, category: "Car" },
  { name: "Classics Garage", slug: "classics-garage", screenshot: "/screenshot/classics-garage.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/car/www.classics-garage.com", url: null, category: "Car" },
  { name: "Virtual Car Lab", slug: "virtual-car-lab", screenshot: "/screenshot/labs-otherlife-xyz-virtualcar.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/car/labs.otherlife.xyz", url: null, category: "Car" },

  // Exhibition
  { name: "Iconic Mints WSJ Barrons", slug: "iconic-mints", screenshot: "/screenshot/iconicmintswsjbarrons.jpg", repo: "https://github.com/ezshine/AwesomeSites-iconicmints.wsjbarrons.com", url: null, category: "Exhibition" },
  { name: "TJDI Exhibition 2022", slug: "tjdi-exhibition", screenshot: "/screenshot/tjdi-exhibition2022.jpg", repo: "https://github.com/ezshine/AwesomeSites-tjdi-exhibition", url: null, category: "Exhibition" },
  { name: "Infinite Passerella", slug: "infinite-passerella", screenshot: "/screenshot/exp-infinite-passerella.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/exhibition/exp-infinite-passerella.lusion.co", url: null, category: "Exhibition" },
  { name: "VR Showroom", slug: "vr-showroom", screenshot: "/screenshot/vrshow-oss-dt-space.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/car/vrshow-oss.dt-space.cn/showroom", url: null, category: "Exhibition" },
  { name: "AF1 Hotel", slug: "af1-hotel", screenshot: "/screenshot/af1hotel-koikreative.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/minisite/af1hotel.koikreative.com/", url: null, category: "Exhibition" },
  { name: "A Number from the Ghost", slug: "number-from-ghost", screenshot: "/screenshot/anumberfromtheghost.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack05/tree/main/room/www.anumberfromtheghost.com/", url: null, category: "Exhibition" },

  // Portfolio
  { name: "Bruno Simon", slug: "bruno-simon", screenshot: "/screenshot/bruno-simon.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/portfolio/bruno-simon.com", url: "https://bruno-simon.com", category: "Portfolio" },
  { name: "David HCKH", slug: "david-hckh", screenshot: "/screenshot/david-hckh.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/portfolio/david-hckh.com", url: null, category: "Portfolio" },
  { name: "Interview Ueno", slug: "interview-ueno", screenshot: "/screenshot/interview-ueno.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/portfolio/interview.ueno.co", url: null, category: "Portfolio" },
  { name: "Madbox", slug: "madbox", screenshot: "/screenshot/madbox-io.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/portfolio/madbox.io", url: "https://madbox.io", category: "Portfolio" },
  { name: "Quentin Hocde", slug: "quentin-hocde", screenshot: "/screenshot/quentinhocde.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/portfolio/quentinhocde.com", url: "https://quentinhocde.com", category: "Portfolio" },
  { name: "Akino Kogomi", slug: "akino-kogomi", screenshot: "/screenshot/akinokogomi.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack03/tree/main/others/akinokogomi.vercel", url: null, category: "Portfolio" },
  { name: "We Are Zizo", slug: "we-are-zizo", screenshot: "/screenshot/wearezizo.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack03/tree/main/portfolio/wearezizo.com", url: null, category: "Portfolio" },
  { name: "Brett Williams", slug: "brett-williams", screenshot: "/screenshot/brettwilliams.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack03/tree/main/portfolio/www.brettwilliams.net", url: null, category: "Portfolio" },
  { name: "HLE.io", slug: "hle-io", screenshot: "/screenshot/hle-io.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/portfolio/hle.io", url: null, category: "Portfolio" },
  { name: "Impossible Box", slug: "impossible-box", screenshot: "/screenshot/impossible-box.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/portfolio/impossible-box.web.app", url: null, category: "Portfolio" },
  { name: "Luni App", slug: "luni-app", screenshot: "/screenshot/luni-app.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/portfolio/www.luni-app", url: null, category: "Portfolio" },
  { name: "Curious", slug: "curious", screenshot: "/screenshot/curious.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/portfolio/curious.co", url: null, category: "Portfolio" },
  { name: "Artisans d'Idees", slug: "artisans-didees", screenshot: "/screenshot/artisansdidees.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/portfolio/www.artisansdidees.com", url: null, category: "Portfolio" },
  { name: "Active Theory", slug: "active-theory", screenshot: "/screenshot/activetheory.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/portfolio/logartis.info", url: null, category: "Portfolio" },
  { name: "Logartis", slug: "logartis", screenshot: "/screenshot/logartis.info.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/portfolio/logartis.info", url: null, category: "Portfolio" },
  { name: "Sector 32", slug: "sector-32", screenshot: "/screenshot/sector32-net.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/portfolio/www.sector32.net", url: null, category: "Portfolio" },
  { name: "Story Sector 32", slug: "story-sector-32", screenshot: "/screenshot/story-sector32-net.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/portfolio/story.sector32.net", url: null, category: "Portfolio" },
  { name: "Nanoshrine Interactive", slug: "nanoshrine", screenshot: "/screenshot/nanoshrineinteractive.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/portfolio/nanoshrineinteractive.com", url: null, category: "Portfolio" },
  { name: "Utsubo", slug: "utsubo", screenshot: "/screenshot/utsubocom.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/portfolio/www.utsubo.com", url: null, category: "Portfolio" },

  // Metaverse
  { name: "Coastal World", slug: "coastal-world", screenshot: "/screenshot/coastalworld.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack03/tree/main/metaverse/coastalworld.com", url: null, category: "Metaverse" },
  { name: "OPPO InnoDay 2021", slug: "oppo-innoday", screenshot: "/screenshot/oppoinno2021.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack03/tree/main/metaverse/oppo_innoday2021", url: null, category: "Metaverse" },
  { name: "Douyin Carnival 2022", slug: "douyin-carnival", screenshot: "/screenshot/douyin-carnival-2022.jpg", repo: "https://github.com/ezshine/AwesomeSites-douyin_carnival_2022", url: null, category: "Metaverse" },
  { name: "ICBC BJ Miniverse", slug: "icbc-miniverse", screenshot: "/screenshot/icbc-bj-miniverse.jpg", repo: "https://github.com/ezshine/AwesomeSites-icbc-bj-metaverse", url: null, category: "Metaverse" },
  { name: "Pop Mart Exhibition", slug: "popmart-exhibition", screenshot: "/screenshot/popmart-exhibition.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack03/tree/main/metaverse/popmart2022", url: null, category: "Metaverse" },
  { name: "Orion Adrian Red", slug: "orion-adrianred", screenshot: "/screenshot/orion-adrianred-com.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/metaverse/orion.adrianred.com", url: null, category: "Metaverse" },
  { name: "Samsy Ninja", slug: "samsy-ninja", screenshot: "/screenshot/samsy-ninja.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/metaverse/samsy.ninja", url: null, category: "Metaverse" },

  // Room
  { name: "Adobe x Bowie", slug: "adobe-bowie", screenshot: "/screenshot/adobexbowie.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/room/adobexbowie75.com", url: null, category: "Room" },
  { name: "Little Workshop Showroom", slug: "little-workshop", screenshot: "/screenshot/showroom-littleworkshop.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/room/showroom.littleworkshop.fr", url: null, category: "Room" },
  { name: "Hennessy House of Moves", slug: "hennessy-house", screenshot: "/screenshot/hennessy-house-of-moves.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/room/hennessy-house-of-moves.hello-jury.com", url: null, category: "Room" },
  { name: "AU Floor", slug: "au-floor", screenshot: "/screenshot/au-floor.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/room/au-floor.vercel.app", url: null, category: "Room" },

  // E-Commerce
  { name: "WebXR Sneakers", slug: "webxr-sneakers", screenshot: "/screenshot/webxr-sneakers.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/e-commerce/webxr-sneakers.lusion.co", url: null, category: "E-Commerce" },
  { name: "MaxMara Bearing Gifts", slug: "maxmara-gifts", screenshot: "/screenshot/maxmara-bearinggifts.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/e-commerce/maxmara-bearinggifts.betteringbrands.com", url: null, category: "E-Commerce" },
  { name: "WebGI Jewelry", slug: "webgi-jewelry", screenshot: "/screenshot/webgi-jewelry.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/other/webgi-jewelry.vercel", url: null, category: "E-Commerce" },
  { name: "Gleec", slug: "gleec", screenshot: "/screenshot/gleec.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/other/gleec.com", url: null, category: "E-Commerce" },
  { name: "The Magical Pantry", slug: "magical-pantry", screenshot: "/screenshot/themagicalpantry.jpg", repo: "https://github.com/ezshine/AwesomeSites-themagicalpantry.com", url: null, category: "E-Commerce" },
  { name: "Fendi Baguette 25", slug: "fendi-baguette", screenshot: "/screenshot/baguette25.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/e-commerce/www.fendi.com", url: null, category: "E-Commerce" },
  { name: "VR Seat", slug: "vr-seat", screenshot: "/screenshot/vrseat.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/room/vrseat.vercel", url: null, category: "E-Commerce" },
  { name: "L'Oreal Future of Beauty", slug: "loreal-future", screenshot: "/screenshot/futureofbeauty-loreal.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack03/tree/main/e-commerce/futureofbeauty.loreal.com", url: null, category: "E-Commerce" },
  { name: "Panasonic Technology", slug: "panasonic-tech", screenshot: "/screenshot/technology-panasonic.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack03/tree/main/e-commerce/technology.panasonic.eu", url: null, category: "E-Commerce" },
  { name: "The Perfume Shop", slug: "perfume-shop", screenshot: "/screenshot/theperfumeshop.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/e-commerce/www.theperfumeshop.com", url: null, category: "E-Commerce" },
  { name: "Indigo Hakusho 45R", slug: "indigo-hakusho", screenshot: "/screenshot/indigo-hakusho.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack05/tree/main/e-commerce/45r.jp", url: null, category: "E-Commerce" },
  { name: "Dolce & Gabbana Gift Finder", slug: "dg-gift-finder", screenshot: "/screenshot/giftfinder-dolcegabbana.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack05/tree/main/e-commerce/giftfinder.dolcegabbana.com", url: null, category: "E-Commerce" },

  // Game
  { name: "Let's Play Ouigo", slug: "letsplay-ouigo", screenshot: "/screenshot/letsplay-ouigo.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/game/letsplay.ouigo.com", url: null, category: "Game" },
  { name: "Slow Roads", slug: "slow-roads", screenshot: "/screenshot/slowroads.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/game/slowroads", url: "https://slowroads.io", category: "Game" },
  { name: "NARS Play Your Power", slug: "nars-play-power", screenshot: "/screenshot/playyourpowernarscosmetics.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/game/playyourpower.narscosmetics.com", url: null, category: "Game" },
  { name: "Evian True Source", slug: "evian-true-source", screenshot: "/screenshot/truesource-evian.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/game/truesource.evian.com", url: null, category: "Game" },
  { name: "Microwaver 59", slug: "microwaver-59", screenshot: "/screenshot/microwaver59.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/game/microwaver59.com", url: null, category: "Game" },
  { name: "Gucci Beloved Bounce", slug: "gucci-bounce", screenshot: "/screenshot/guccilovedbounce.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/game/guccibelovedbounce.gucci.com", url: null, category: "Game" },
  { name: "Foosball World Cup 18", slug: "foosball-worldcup", screenshot: "/screenshot/foosballworldcup18.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/game/www.foosballworldcup18.com", url: null, category: "Game" },
  { name: "Play GL", slug: "play-gl", screenshot: "/screenshot/playgl.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/game/play.gl", url: null, category: "Game" },
  { name: "Montblanc The Race", slug: "montblanc-race", screenshot: "/screenshot/therace.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/game/therace.montblanclegend.com", url: null, category: "Game" },
  { name: "MSI I Want It All", slug: "msi-iwantitall", screenshot: "/screenshot/iwantitall.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/game/iwantitall.msi.com", url: null, category: "Game" },
  { name: "Chocapic Nutri Game", slug: "chocapic-nutri", screenshot: "/screenshot/chocapic-nutri-game.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/game/www.chocapic-nutri-game.fr", url: null, category: "Game" },
  { name: "Kodinger Goy", slug: "kodinger-goy", screenshot: "/screenshot/kodingergoy.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/game/kodingergoy.arkivert.no", url: null, category: "Game" },
  { name: "Zizo Party", slug: "zizo-party", screenshot: "/screenshot/zizoparty.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack03/tree/main/game/party.wearezizo.com", url: null, category: "Game" },
  { name: "Colorful Night", slug: "colorful-night", screenshot: "/screenshot/colorfulnight-pha5e.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/game/colorfulnight.pha5e.com", url: null, category: "Game" },
  { name: "Summer Afternoon", slug: "summer-afternoon", screenshot: "/screenshot/summerafternoon.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/game/summer-afternoon.vlucendo.com", url: null, category: "Game" },
  { name: "Out of Doors", slug: "out-of-doors", screenshot: "/screenshot/out-of-doors-lostmechanics.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/game/out-of-doors.lostmechanics.com", url: null, category: "Game" },
  { name: "Cartier Fabulous Journey", slug: "cartier-journey", screenshot: "/screenshot/thefabulouscartierjourney.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/game/thefabulouscartierjourney.cartier.com", url: null, category: "Game" },
  { name: "Haunted Digital Panda", slug: "haunted-panda", screenshot: "/screenshot/haunted-thedigitalpanda.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/game/haunted.thedigitalpanda.com", url: null, category: "Game" },
  { name: "PCOL", slug: "pcol", screenshot: "/screenshot/pcol.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/game/pcol", url: null, category: "Game" },
  { name: "VeeCon 2023", slug: "veecon-2023", screenshot: "/screenshot/veecon2023game-veefriends.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/game/veecon2023game.veefriends.com", url: null, category: "Game" },
  { name: "Estee Lauder ANR Cade", slug: "estee-lauder-anr", screenshot: "/screenshot/esteelauderanrcade.jpg", repo: "https://github.com/ezshine/AwesomeSites-esteelauderanrcade", url: null, category: "Game" },
  { name: "Plume Game", slug: "plume-game", screenshot: "/screenshot/plumegame.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack05/tree/main/game/plumegame.com", url: null, category: "Game" },
  { name: "Going Home", slug: "going-home", screenshot: "/screenshot/goinghome-302chanwoo.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack05/tree/main/game/goinghome.302chanwoo.com", url: null, category: "Game" },
  { name: "I Spy Heihei", slug: "ispy-heihei", screenshot: "/screenshot/ispy-heihei-resn.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack05/tree/main/game/ispy.heihei.resn.co", url: null, category: "Game" },
  { name: "Short Trip", slug: "short-trip", screenshot: "/screenshot/alexanderperrin-shorttrip.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack05/tree/main/game/alexanderperrin.com.au", url: "https://alexanderperrin.com.au/paper/shorttrip/", category: "Game" },
  { name: "Trolli Dark Escape", slug: "trolli-escape", screenshot: "/screenshot/trollideliciouslydarkescape.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack05/tree/main/game/trollideliciouslydarkescape.com", url: null, category: "Game" },
  { name: "Giga Game", slug: "giga-game", screenshot: "/screenshot/giga-game.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/game/giga.game", url: null, category: "Game" },
  { name: "Equinox Space", slug: "equinox-space", screenshot: "/screenshot/equinox-space.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/games/equinox.space", url: null, category: "Game" },
  { name: "Choo Choo World", slug: "choochoo-world", screenshot: "/screenshot/choochooworld.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/game/choochooworld.com", url: null, category: "Game" },
  { name: "Pinball Cosmic Shelter", slug: "pinball-cosmic", screenshot: "/screenshot/pinball-cosmicshelter-com.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/games/pinball.cosmicshelter.com", url: null, category: "Game" },
  { name: "Shopify BFCM", slug: "shopify-bfcm", screenshot: "/screenshot/bfcm-shopify-com.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/games/bfcm.shopify.com", url: null, category: "Game" },

  // Space
  { name: "Space Force", slug: "space-force", screenshot: "/screenshot/spaceforce.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/minisite/www.spaceforce.com", url: null, category: "Space" },
  { name: "Roberts Space Industries", slug: "roberts-space", screenshot: "/screenshot/robertsspaceindustries-starmap.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/space/robertsspaceindustries.com", url: null, category: "Space" },
  { name: "Leap for Mankind", slug: "leap-mankind", screenshot: "/screenshot/leap-for-mankind.jpg", repo: "https://github.com/ezshine/AwesomeSites-leap-for-mankind.com", url: null, category: "Space" },
  { name: "NASA Mars 2020", slug: "nasa-mars-2020", screenshot: "/screenshot/eyes-nasa-mars2020.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/space/eyes.nasa.gov", url: null, category: "Space" },
  { name: "Sigma Software Labs", slug: "sigma-labs", screenshot: "/screenshot/sigmasoftwarelabs.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack03/tree/main/others/sigmasoftwarelabs.com", url: null, category: "Space" },
  { name: "SpaceX ISS Docking Simulator", slug: "spacex-iss", screenshot: "/screenshot/issdockingsimulator.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack05/tree/main/space/iss-sim.spacex.com", url: "https://iss-sim.spacex.com", category: "Space" },
  { name: "Cocosmos", slug: "cocosmos", screenshot: "/screenshot/cocosmos-online.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack05/tree/main/space/cocosmos.online", url: null, category: "Space" },

  // Other
  { name: "My Little Storybook", slug: "little-storybook", screenshot: "/screenshot/expmylittlestorybook.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/game/exp-my-little-storybook.lusion.co", url: null, category: "Other" },
  { name: "Turn of the Screw", slug: "turn-of-screw", screenshot: "/screenshot/turnofthescrewtrailer.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/other/turn-of-the-screw-trailer.s3.eu-west-2.amazonaws.com", url: null, category: "Other" },
  { name: "Avatar Builder", slug: "avatar-builder", screenshot: "/screenshot/avatarbuilder.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/other/avatarbuilder", url: null, category: "Other" },
  { name: "Lucy Hardcastle Fifth Sense", slug: "lucy-fifth-sense", screenshot: "/screenshot/lucyhardcastle-thefifthsense.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/other/lucyhardcastle-thefifthsense.i-d.co", url: null, category: "Other" },
  { name: "Wildflower", slug: "wildflower", screenshot: "/screenshot/windflower.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/other/wildflower.resn.co.nz", url: null, category: "Other" },
  { name: "Atmos Leeroy", slug: "atmos-leeroy", screenshot: "/screenshot/atmosleeroy.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/portfolio/atmos.leeroy.ca", url: null, category: "Other" },
  { name: "Yellow World", slug: "yellow-world", screenshot: "/screenshot/yelloworld.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/other/yelloworld.pinkyellow.com", url: null, category: "Other" },
  { name: "Blues-D", slug: "blues-d", screenshot: "/screenshot/blues-d.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack01/tree/main/portfolio/www.blues-d.co.jp", url: null, category: "Other" },
  { name: "LR Does Book", slug: "lr-doesbook", screenshot: "/screenshot/lr-doesbook.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/other/lr.doesbook.kr/en", url: null, category: "Other" },
  { name: "Persepolis Getty", slug: "persepolis-getty", screenshot: "/screenshot/persepolis-getty.jpg", repo: "https://github.com/ezshine/AwesomeSite-persepolis.getty.edu", url: null, category: "Other" },
  { name: "DDD Dance Party", slug: "ddd-dance-party", screenshot: "/screenshot/dddanceparty.jpg", repo: "https://github.com/ezshine/AwesomeSite-dddance.party", url: null, category: "Other" },
  { name: "Media Facade Shiftlink", slug: "media-facade", screenshot: "/screenshot/media-facade-shiftlink.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/other/media-facade.shiftlink.tech", url: null, category: "Other" },
  { name: "Design Next iPhone", slug: "design-iphone", screenshot: "/screenshot/design-next-iphone.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/other/neal.fun%3Adesign-the-next-iphone", url: "https://neal.fun/design-the-next-iphone/", category: "Other" },
  { name: "The Female Gaze", slug: "female-gaze", screenshot: "/screenshot/thefemalegaze.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/other/www.thefemalegaze.art", url: null, category: "Other" },
  { name: "The Pleasure Pursuit", slug: "pleasure-pursuit", screenshot: "/screenshot/thepleasurepursuit.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/other/www.thepleasurepursuit.com", url: null, category: "Other" },
  { name: "Cleo Show", slug: "cleo-show", screenshot: "/screenshot/cleoshow.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack03/tree/main/others/cleo.show", url: null, category: "Other" },
  { name: "Rainforest Arkivert", slug: "rainforest-arkivert", screenshot: "/screenshot/rainforest-arkivert.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack03/tree/main/others/rainforest.arkivert.no", url: null, category: "Other" },
  { name: "Hape.io", slug: "hape-io", screenshot: "/screenshot/hape-io.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack03/tree/main/others/www.hape.io", url: null, category: "Other" },
  { name: "Renaud Rohlinger", slug: "renaud-rohlinger", screenshot: "/screenshot/renaudrohlinger.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack03/tree/main/portfolio/renaudrohlinger.com", url: null, category: "Other" },
  { name: "Google Web Showcase", slug: "google-showcase", screenshot: "/screenshot/thewebshowcase-withgoogle.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/minisite/thewebshowcase.withgoogle.com", url: null, category: "Other" },
  { name: "Girls Who Code Girls", slug: "girls-who-code", screenshot: "/screenshot/girlswhocodegirls.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/tools/www.girlswhocodegirls.com", url: null, category: "Other" },
  { name: "QQ PVP 6749", slug: "qq-pvp", screenshot: "/screenshot/qqpvp6749.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/other/pvp.qq.com", url: null, category: "Other" },
  { name: "Air Force Into the Storm", slug: "airforce-storm", screenshot: "/screenshot/airforce-intothestorm.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/other/www.airforce.com", url: null, category: "Other" },
  { name: "Fingerspelling", slug: "fingerspelling", screenshot: "/screenshot/fingerspelling.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/other/fingerspelling.xyz", url: "https://fingerspelling.xyz", category: "Other" },
  { name: "FWA 100 Jam3", slug: "fwa-100-jam3", screenshot: "/screenshot/fwa100-jam3.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack05/tree/main/portfolio/fwa100.jam3.com", url: null, category: "Other" },
  { name: "Cannes PR Lions News", slug: "cannes-lions", screenshot: "/screenshot/lionsnews.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack05/tree/main/other/cannesprlions.com", url: null, category: "Other" },
  { name: "2019 Make Me Pulse", slug: "makemepulse-2019", screenshot: "/screenshot/2019-makemepulse.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack05/tree/main/other/2019.makemepulse.com", url: null, category: "Other" },
  { name: "Poor Charlie's Almanack", slug: "poor-charlie", screenshot: "/screenshot/poor-charlies-almanack.jpg", repo: "https://github.com/ezshine/AwesomeSites-poor-charlies-almanack", url: null, category: "Other" },
  { name: "Virtual Cleverfarm", slug: "virtual-cleverfarm", screenshot: "/screenshot/virtual-cleverfarm.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/other/virtual.cleverfarm.ag", url: null, category: "Other" },
  { name: "Kaizen Make Me Pulse", slug: "kaizen-makemepulse", screenshot: "/screenshot/kaizen-makemepulse.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/other/kaizen.makemepulse.com", url: null, category: "Other" },
  { name: "Noomo Beat", slug: "noomo-beat", screenshot: "/screenshot/noomobeat.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/other/beat.noomoagency.com", url: null, category: "Other" },
  { name: "Lacoste Members Experience", slug: "lacoste-members", screenshot: "/screenshot/membersexperience-create-lacoste-com.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/tool/membersexperience-create.lacoste.com", url: null, category: "Other" },
  { name: "Kokuyo", slug: "kokuyo", screenshot: "/screenshot/kokuyo-com.jpg", repo: "https://github.com/ezshine/AwesomeSites-Pack06/tree/main/other/www.kokuyo.com", url: null, category: "Other" },

  // Mobile Only
  { name: "Wonderland", slug: "wonderland", screenshot: "/screenshot/wonderland.png", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/other/wonderland", url: null, category: "Mobile Only" },
  { name: "Ellometay33 Art", slug: "ellometay33", screenshot: "/screenshot/ellometay33art.png", repo: "https://github.com/ezshine/AwesomeSites-Pack02/tree/main/room/ellometay33art", url: null, category: "Mobile Only" },
  { name: "Howl's Loewe", slug: "howls-loewe", screenshot: "/screenshot/hawls-loewe.png", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/game/howls.loewe.com", url: null, category: "Mobile Only" },
  { name: "Fragrance Hermes", slug: "fragrance-hermes", screenshot: "/screenshot/fragrance-hermes.png", repo: "https://github.com/ezshine/AwesomeSites-Pack04/tree/main/game/fragrance.hermes.com", url: null, category: "Mobile Only" },
];
