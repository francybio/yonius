/* ==========================================================
   YONIUS — textos en castellano (por defecto), català,
   english y français. Para añadir un idioma: una entrada en
   `langs`, su bloque en `ui` y, si hace falta, en `carta`
   y `reviews` (lo que falte sale en castellano).
   ========================================================== */
window.YN_I18N = {
  langs: [
    { c: 'es', n: 'Castellano', loc: 'es-ES' },
    { c: 'ca', n: 'Català', loc: 'ca-ES' },
    { c: 'en', n: 'English', loc: 'en-GB' },
    { c: 'fr', n: 'Français', loc: 'fr-FR' }
  ],
  ui: {
    /* ------------------------------------------------ CASTELLANO */
    es: {
      'meta.title': 'Yonius · Greek Restaurant en Lloret de Mar',
      'meta.desc': 'Yonius, restaurante griego en Lloret de Mar: gyros, souvlaki, musaka, tzatziki y postres griegos en una terraza llena de flores. Martes a domingo de 12:00 a 23:30. Tel. 663 38 71 31.',
      'nav.home': 'Yonius, inicio', 'nav.main': 'Principal', 'nav.menu': 'Menú',
      'nav.opa': '¡Opa!', 'nav.carta': 'Carta', 'nav.terraza': 'Terraza', 'nav.reels': 'Reels', 'nav.visita': 'Visítanos', 'nav.call': 'Llamar',
      'lang.change': 'Cambiar idioma', 'lang.label': 'Idioma',

      'hero.eyebrow': 'Restaurante griego · Lloret de Mar',
      'hero.l1': 'Grecia,', 'hero.l2': '<em>a la vuelta</em>', 'hero.l3': 'de la esquina.',
      'hero.lead': 'Gyros recién cortados, souvlaki a la brasa, musaka gratinada y baklava con miel. Cocina griega de verdad, en una terraza llena de flores.',
      'hero.cta': 'Ver la carta',
      'hero.rating': '4,7', 'hero.ratingTxt': '★ en Google<br>386 reseñas',
      'hero.days': 'Martes a domingo<br>Lunes cerrado',
      'hero.video': 'La terraza de Yonius llena de gente por la noche',
      'hero.badge': 'GYROS · SOUVLAKI · MUSAKA · BAKLAVA · TZATZIKI · ',
      'tick.musaka': 'musaka',

      'opa.eyebrow': 'Una tradición muy griega',
      'opa.h': '¡Opa! Rompe un plato.',
      'opa.lead': 'En Grecia los platos se rompen cuando la fiesta lo merece. Aquí cada plato roto te descubre algo de nuestra carta. Toca el plato… y que suene.',
      'opa.plate': 'Romper el plato y descubrir un plato de la carta',
      'opa.tap': 'Toca', 'opa.again': '¡Otra vez!',
      'opa.q': '¿Qué te toca hoy?',
      'opa.qDesc': 'Rompe el plato y te lo decimos. Cada uno esconde un plato distinto de la carta.',
      'opa.count1': '{n} plato roto', 'opa.countN': '{n} platos rotos',
      'opa.next': 'Otro plato',
      'tag.classic': 'El clásico', 'tag.oven': 'Al horno', 'tag.fav': 'Favorito en las reseñas', 'tag.honey': 'Con miel', 'tag.spicy': 'Pica un poco',

      'carta.eyebrow': 'La carta',
      'carta.h': 'Para picar, para compartir,<br><em>para repetir.</em>',
      'carta.photoAlt': 'Gyro envuelto en papel de periódico, con patatas y tzatziki',
      'carta.tabs': 'Secciones de la carta',
      'carta.mezze': 'Entrantes', 'carta.gyros': 'Gyros', 'carta.grill': 'Carnes y grill', 'carta.dulces': 'Postres',
      'carta.veg': 'Solo vegetariano', 'carta.vegTitle': 'Vegetariano',
      'carta.empty': 'En esta sección no hay platos vegetarianos. Prueba en Entrantes o Postres.',
      'carta.note': 'Precios con IVA incluido. Pan de pita extra: 1,00 €. Pregunta al servicio por alérgenos e intolerancias.',

      'ter.h': 'Flores, guirnaldas<br>y <em>noches largas.</em>',
      'ter.lead': 'Arrastra para girar. Toca una foto para verla en grande.',
      'ter.ring': 'Carrusel de fotos de Yonius. Usa las flechas para girar.',
      'ter.prev': 'Foto anterior', 'ter.next': 'Foto siguiente',
      'ph.gyro': 'El gyros, envuelto y listo', 'ph.sala': 'Dentro, azul y blanco', 'ph.rincon': 'El rincón de los cojines', 'ph.pita': 'Gyro recién hecho', 'ph.mediodia': 'La terraza a mediodía',
      'ph.a0': 'Terraza de Yonius llena de flores', 'ph.a1': 'Fachada de Yonius de noche, con los letreros iluminados', 'ph.a2': 'Gyro envuelto en papel',
      'ph.a3': 'Comedor interior en azul y blanco', 'ph.a4': 'Terraza de Yonius de día', 'ph.a5': 'Rincón con cojines', 'ph.a6': 'Gyro en pita recién hecho', 'ph.a7': 'Terraza con cojines a mediodía',

      'reels.eyebrow': 'Desde Instagram',
      'reels.h': 'Así suena una<br><em>noche en Yonius.</em>',
      'reels.lead': 'La terraza se llena cuando cae el sol: luces encendidas, platos que van y vienen y el olor del gyros dando vueltas.',
      'reels.follow': 'Seguir en Instagram',
      'reels.sound': 'Activar sonido', 'reels.mute': 'Silenciar',

      'rev.h': '<span class="big">4,7</span> en Google',
      'rev.lead': '386 reseñas. Esto es lo que más se repite.',
      'rev.stars': '5 estrellas', 'rev.cite': 'Reseña en Google',

      'vis.eyebrow': 'Visítanos', 'vis.hours': 'Horario', 'vis.dir': 'Cómo llegar',
      'vis.map': 'Mapa: Yonius Greek Restaurant en Lloret de Mar',
      'vis.photoAlt': 'Fachada de Yonius de noche, con los letreros iluminados',

      'st.soon': 'Cierra pronto · {h}', 'st.open': 'Abierto · hasta las {h}', 'st.opensAt': 'Abre a las {h}',
      'st.closedAt': 'Cerrado · abre a las {h}', 'st.closedTomorrow': 'Cerrado · abre mañana a las {h}', 'st.closedDay': 'Cerrado · abre el {d} a las {h}', 'st.closed': 'Cerrado',
      'st.days': 'Domingo,Lunes,Martes,Miércoles,Jueves,Viernes,Sábado',

      'foot.tr': '“¡Hola!” en griego. Nos vemos en Lloret.',
      'foot.credit': 'Fotos y vídeos: Instagram @yonius_greek_restaurant y Google',
      'lb.label': 'Foto ampliada', 'lb.close': 'Cerrar'
    },

    /* ------------------------------------------------ CATALÀ */
    ca: {
      'meta.title': 'Yonius · Greek Restaurant a Lloret de Mar',
      'meta.desc': 'Yonius, restaurant grec a Lloret de Mar: gyros, souvlaki, mussaca, tzatziki i postres grecs en una terrassa plena de flors. De dimarts a diumenge de 12:00 a 23:30. Tel. 663 38 71 31.',
      'nav.home': 'Yonius, inici', 'nav.main': 'Principal', 'nav.menu': 'Menú',
      'nav.opa': 'Opa!', 'nav.carta': 'Carta', 'nav.terraza': 'Terrassa', 'nav.reels': 'Reels', 'nav.visita': 'Visita’ns', 'nav.call': 'Trucar',
      'lang.change': 'Canviar d’idioma', 'lang.label': 'Idioma',

      'hero.eyebrow': 'Restaurant grec · Lloret de Mar',
      'hero.l1': 'Grècia,', 'hero.l2': '<em>a la volta</em>', 'hero.l3': 'de la cantonada.',
      'hero.lead': 'Gyros acabat de tallar, souvlaki a la brasa, mussaca gratinada i baklava amb mel. Cuina grega de veritat, en una terrassa plena de flors.',
      'hero.cta': 'Veure la carta',
      'hero.rating': '4,7', 'hero.ratingTxt': '★ a Google<br>386 ressenyes',
      'hero.days': 'De dimarts a diumenge<br>Dilluns tancat',
      'hero.video': 'La terrassa de Yonius plena de gent a la nit',
      'hero.badge': 'GYROS · SOUVLAKI · MUSSACA · BAKLAVA · TZATZIKI · ',
      'tick.musaka': 'mussaca',

      'opa.eyebrow': 'Una tradició molt grega',
      'opa.h': 'Opa! Trenca un plat.',
      'opa.lead': 'A Grècia els plats es trenquen quan la festa s’ho val. Aquí cada plat trencat et descobreix alguna cosa de la nostra carta. Toca el plat… i que soni.',
      'opa.plate': 'Trencar el plat i descobrir un plat de la carta',
      'opa.tap': 'Toca', 'opa.again': 'Un altre cop!',
      'opa.q': 'Què et toca avui?',
      'opa.qDesc': 'Trenca el plat i t’ho direm. Cada un amaga un plat diferent de la carta.',
      'opa.count1': '{n} plat trencat', 'opa.countN': '{n} plats trencats',
      'opa.next': 'Un altre plat',
      'tag.classic': 'El clàssic', 'tag.oven': 'Al forn', 'tag.fav': 'Preferit a les ressenyes', 'tag.honey': 'Amb mel', 'tag.spicy': 'Pica una mica',

      'carta.eyebrow': 'La carta',
      'carta.h': 'Per picar, per compartir,<br><em>per repetir.</em>',
      'carta.photoAlt': 'Gyro embolicat amb paper de diari, amb patates i tzatziki',
      'carta.tabs': 'Seccions de la carta',
      'carta.mezze': 'Entrants', 'carta.gyros': 'Gyros', 'carta.grill': 'Carns i graella', 'carta.dulces': 'Postres',
      'carta.veg': 'Només vegetarià', 'carta.vegTitle': 'Vegetarià',
      'carta.empty': 'En aquesta secció no hi ha plats vegetarians. Prova a Entrants o Postres.',
      'carta.note': 'Preus amb IVA inclòs. Pa de pita extra: 1,00 €. Pregunta al servei pels al·lèrgens i les intoleràncies.',

      'ter.h': 'Flors, garlandes<br>i <em>nits llargues.</em>',
      'ter.lead': 'Arrossega per girar. Toca una foto per veure-la en gran.',
      'ter.ring': 'Carrusel de fotos de Yonius. Fes servir les fletxes per girar.',
      'ter.prev': 'Foto anterior', 'ter.next': 'Foto següent',
      'ph.gyro': 'El gyros, embolicat i a punt', 'ph.sala': 'A dins, blau i blanc', 'ph.rincon': 'El racó dels coixins', 'ph.pita': 'Gyro acabat de fer', 'ph.mediodia': 'La terrassa al migdia',
      'ph.a0': 'Terrassa de Yonius plena de flors', 'ph.a1': 'Façana de Yonius de nit, amb els rètols il·luminats', 'ph.a2': 'Gyro embolicat amb paper',
      'ph.a3': 'Menjador interior en blau i blanc', 'ph.a4': 'Terrassa de Yonius de dia', 'ph.a5': 'Racó amb coixins', 'ph.a6': 'Gyro en pita acabat de fer', 'ph.a7': 'Terrassa amb coixins al migdia',

      'reels.eyebrow': 'Des d’Instagram',
      'reels.h': 'Així sona una<br><em>nit a Yonius.</em>',
      'reels.lead': 'La terrassa s’omple quan cau el sol: llums enceses, plats que van i vénen i l’olor del gyros donant voltes.',
      'reels.follow': 'Segueix-nos a Instagram',
      'reels.sound': 'Activar el so', 'reels.mute': 'Silenciar',

      'rev.h': '<span class="big">4,7</span> a Google',
      'rev.lead': '386 ressenyes. Això és el que més es repeteix.',
      'rev.stars': '5 estrelles', 'rev.cite': 'Ressenya a Google · traduïda del castellà',

      'vis.eyebrow': 'Visita’ns', 'vis.hours': 'Horari', 'vis.dir': 'Com arribar-hi',
      'vis.map': 'Mapa: Yonius Greek Restaurant a Lloret de Mar',
      'vis.photoAlt': 'Façana de Yonius de nit, amb els rètols il·luminats',

      'st.soon': 'Tanca aviat · {h}', 'st.open': 'Obert · fins a les {h}', 'st.opensAt': 'Obre a les {h}',
      'st.closedAt': 'Tancat · obre a les {h}', 'st.closedTomorrow': 'Tancat · obre demà a les {h}', 'st.closedDay': 'Tancat · obre {d} a les {h}', 'st.closed': 'Tancat',
      'st.days': 'Diumenge,Dilluns,Dimarts,Dimecres,Dijous,Divendres,Dissabte',

      'foot.tr': '«Hola!» en grec. Ens veiem a Lloret.',
      'foot.credit': 'Fotos i vídeos: Instagram @yonius_greek_restaurant i Google',
      'lb.label': 'Foto ampliada', 'lb.close': 'Tancar'
    },

    /* ------------------------------------------------ ENGLISH */
    en: {
      'meta.title': 'Yonius · Greek Restaurant in Lloret de Mar',
      'meta.desc': 'Yonius, a Greek restaurant in Lloret de Mar: gyros, souvlaki, moussaka, tzatziki and Greek desserts on a terrace full of flowers. Tuesday to Sunday, 12:00–23:30. Tel. +34 663 38 71 31.',
      'nav.home': 'Yonius, home', 'nav.main': 'Main', 'nav.menu': 'Navigation',
      'nav.opa': 'Opa!', 'nav.carta': 'Menu', 'nav.terraza': 'Terrace', 'nav.reels': 'Reels', 'nav.visita': 'Visit us', 'nav.call': 'Call',
      'lang.change': 'Change language', 'lang.label': 'Language',

      'hero.eyebrow': 'Greek restaurant · Lloret de Mar',
      'hero.l1': 'Greece,', 'hero.l2': '<em>just around</em>', 'hero.l3': 'the corner.',
      'hero.lead': 'Freshly carved gyros, flame-grilled souvlaki, golden baked moussaka and baklava with honey. Real Greek cooking, on a terrace full of flowers.',
      'hero.cta': 'See the menu',
      'hero.rating': '4.7', 'hero.ratingTxt': '★ on Google<br>386 reviews',
      'hero.days': 'Tuesday to Sunday<br>Closed on Mondays',
      'hero.video': 'The Yonius terrace full of people at night',
      'hero.badge': 'GYROS · SOUVLAKI · MOUSSAKA · BAKLAVA · TZATZIKI · ',
      'tick.musaka': 'moussaka',

      'opa.eyebrow': 'A very Greek tradition',
      'opa.h': 'Opa! Smash a plate.',
      'opa.lead': 'In Greece, plates get smashed when the party deserves it. Here, every broken plate reveals something from our menu. Tap the plate… and let it ring.',
      'opa.plate': 'Smash the plate and discover a dish from the menu',
      'opa.tap': 'Tap', 'opa.again': 'Again!',
      'opa.q': 'What’s yours today?',
      'opa.qDesc': 'Smash the plate and we’ll tell you. Each one hides a different dish from the menu.',
      'opa.count1': '{n} plate smashed', 'opa.countN': '{n} plates smashed',
      'opa.next': 'Another plate',
      'tag.classic': 'The classic', 'tag.oven': 'Oven-baked', 'tag.fav': 'Reviewers’ favourite', 'tag.honey': 'With honey', 'tag.spicy': 'A little spicy',

      'carta.eyebrow': 'The menu',
      'carta.h': 'To nibble, to share,<br><em>to order again.</em>',
      'carta.photoAlt': 'Gyro wrapped in newspaper, with fries and tzatziki',
      'carta.tabs': 'Menu sections',
      'carta.mezze': 'Starters', 'carta.gyros': 'Gyros', 'carta.grill': 'Meat & grill', 'carta.dulces': 'Desserts',
      'carta.veg': 'Vegetarian only', 'carta.vegTitle': 'Vegetarian',
      'carta.empty': 'There are no vegetarian dishes in this section. Try Starters or Desserts.',
      'carta.note': 'Prices include VAT. Extra pitta bread: €1.00. Please ask our staff about allergens and intolerances.',

      'ter.h': 'Flowers, garlands<br>and <em>long nights.</em>',
      'ter.lead': 'Drag to spin. Tap a photo to see it full size.',
      'ter.ring': 'Yonius photo carousel. Use the arrow keys to spin it.',
      'ter.prev': 'Previous photo', 'ter.next': 'Next photo',
      'ph.gyro': 'Gyros, wrapped and ready', 'ph.sala': 'Inside, blue and white', 'ph.rincon': 'The cushion corner', 'ph.pita': 'A freshly made gyro', 'ph.mediodia': 'The terrace at lunchtime',
      'ph.a0': 'The Yonius terrace full of flowers', 'ph.a1': 'Yonius at night, with its signs lit up', 'ph.a2': 'Gyro wrapped in paper',
      'ph.a3': 'Blue and white dining room', 'ph.a4': 'The Yonius terrace by day', 'ph.a5': 'Corner with cushions', 'ph.a6': 'Freshly made gyro in pitta', 'ph.a7': 'Terrace with cushions at lunchtime',

      'reels.eyebrow': 'From Instagram',
      'reels.h': 'This is what a night<br><em>at Yonius sounds like.</em>',
      'reels.lead': 'The terrace fills up as the sun goes down: lights on, plates coming and going and the smell of gyros turning on the spit.',
      'reels.follow': 'Follow on Instagram',
      'reels.sound': 'Turn sound on', 'reels.mute': 'Mute',

      'rev.h': '<span class="big">4.7</span> on Google',
      'rev.lead': '386 reviews. This is what people say most.',
      'rev.stars': '5 stars', 'rev.cite': 'Google review · translated from Spanish',

      'vis.eyebrow': 'Visit us', 'vis.hours': 'Opening hours', 'vis.dir': 'Get directions',
      'vis.map': 'Map: Yonius Greek Restaurant in Lloret de Mar',
      'vis.photoAlt': 'Yonius at night, with its signs lit up',

      'st.soon': 'Closing soon · {h}', 'st.open': 'Open · until {h}', 'st.opensAt': 'Opens at {h}',
      'st.closedAt': 'Closed · opens at {h}', 'st.closedTomorrow': 'Closed · opens tomorrow at {h}', 'st.closedDay': 'Closed · opens {d} at {h}', 'st.closed': 'Closed',
      'st.days': 'Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday',

      'foot.tr': '“Hello!” in Greek. See you in Lloret.',
      'foot.credit': 'Photos and videos: Instagram @yonius_greek_restaurant and Google',
      'lb.label': 'Enlarged photo', 'lb.close': 'Close'
    },

    /* ------------------------------------------------ FRANÇAIS */
    fr: {
      'meta.title': 'Yonius · Greek Restaurant à Lloret de Mar',
      'meta.desc': 'Yonius, restaurant grec à Lloret de Mar : gyros, souvlaki, moussaka, tzatziki et desserts grecs sur une terrasse fleurie. Du mardi au dimanche, de 12:00 à 23:30. Tél. +34 663 38 71 31.',
      'nav.home': 'Yonius, accueil', 'nav.main': 'Principale', 'nav.menu': 'Menu',
      'nav.opa': 'Opa !', 'nav.carta': 'Carte', 'nav.terraza': 'Terrasse', 'nav.reels': 'Reels', 'nav.visita': 'Nous trouver', 'nav.call': 'Appeler',
      'lang.change': 'Changer de langue', 'lang.label': 'Langue',

      'hero.eyebrow': 'Restaurant grec · Lloret de Mar',
      'hero.l1': 'La Grèce,', 'hero.l2': '<em>au coin</em>', 'hero.l3': 'de la rue.',
      'hero.lead': 'Gyros tout juste découpé, souvlaki à la braise, moussaka gratinée et baklava au miel. Une vraie cuisine grecque, sur une terrasse pleine de fleurs.',
      'hero.cta': 'Voir la carte',
      'hero.rating': '4,7', 'hero.ratingTxt': '★ sur Google<br>386 avis',
      'hero.days': 'Du mardi au dimanche<br>Fermé le lundi',
      'hero.video': 'La terrasse de Yonius pleine de monde le soir',
      'hero.badge': 'GYROS · SOUVLAKI · MOUSSAKA · BAKLAVA · TZATZIKI · ',
      'tick.musaka': 'moussaka',

      'opa.eyebrow': 'Une tradition bien grecque',
      'opa.h': 'Opa ! Cassez une assiette.',
      'opa.lead': 'En Grèce, on casse les assiettes quand la fête le mérite. Ici, chaque assiette cassée vous fait découvrir un plat de notre carte. Touchez l’assiette… et que ça sonne !',
      'opa.plate': 'Casser l’assiette et découvrir un plat de la carte',
      'opa.tap': 'Touchez', 'opa.again': 'Encore !',
      'opa.q': 'Qu’est-ce qui vous attend ?',
      'opa.qDesc': 'Cassez l’assiette et on vous le dit. Chacune cache un plat différent de la carte.',
      'opa.count1': '{n} assiette cassée', 'opa.countN': '{n} assiettes cassées',
      'opa.next': 'Une autre assiette',
      'tag.classic': 'Le classique', 'tag.oven': 'Au four', 'tag.fav': 'Le préféré des avis', 'tag.honey': 'Au miel', 'tag.spicy': 'Un peu relevé',

      'carta.eyebrow': 'La carte',
      'carta.h': 'À grignoter, à partager,<br><em>à reprendre.</em>',
      'carta.photoAlt': 'Gyros enveloppé dans du papier journal, avec frites et tzatziki',
      'carta.tabs': 'Sections de la carte',
      'carta.mezze': 'Entrées', 'carta.gyros': 'Gyros', 'carta.grill': 'Viandes et grill', 'carta.dulces': 'Desserts',
      'carta.veg': 'Végétarien seulement', 'carta.vegTitle': 'Végétarien',
      'carta.empty': 'Pas de plat végétarien dans cette section. Essayez les Entrées ou les Desserts.',
      'carta.note': 'Prix TTC. Pain pita supplémentaire : 1,00 €. Renseignez-vous auprès du personnel sur les allergènes et les intolérances.',

      'ter.h': 'Des fleurs, des guirlandes<br>et de <em>longues nuits.</em>',
      'ter.lead': 'Faites glisser pour tourner. Touchez une photo pour l’agrandir.',
      'ter.ring': 'Carrousel de photos de Yonius. Utilisez les flèches pour le faire tourner.',
      'ter.prev': 'Photo précédente', 'ter.next': 'Photo suivante',
      'ph.gyro': 'Le gyros, emballé et prêt', 'ph.sala': 'À l’intérieur, bleu et blanc', 'ph.rincon': 'Le coin des coussins', 'ph.pita': 'Un gyros tout juste préparé', 'ph.mediodia': 'La terrasse à midi',
      'ph.a0': 'La terrasse de Yonius pleine de fleurs', 'ph.a1': 'La façade de Yonius le soir, enseignes allumées', 'ph.a2': 'Gyros emballé dans du papier',
      'ph.a3': 'Salle intérieure en bleu et blanc', 'ph.a4': 'La terrasse de Yonius en journée', 'ph.a5': 'Coin avec coussins', 'ph.a6': 'Gyros en pita tout juste préparé', 'ph.a7': 'Terrasse avec coussins à midi',

      'reels.eyebrow': 'Sur Instagram',
      'reels.h': 'Le son d’une<br><em>soirée chez Yonius.</em>',
      'reels.lead': 'La terrasse se remplit au coucher du soleil : lumières allumées, assiettes qui vont et viennent et l’odeur du gyros qui tourne.',
      'reels.follow': 'Suivre sur Instagram',
      'reels.sound': 'Activer le son', 'reels.mute': 'Couper le son',

      'rev.h': '<span class="big">4,7</span> sur Google',
      'rev.lead': '386 avis. Voici ce qui revient le plus.',
      'rev.stars': '5 étoiles', 'rev.cite': 'Avis Google · traduit de l’espagnol',

      'vis.eyebrow': 'Nous trouver', 'vis.hours': 'Horaires', 'vis.dir': 'Itinéraire',
      'vis.map': 'Carte : Yonius Greek Restaurant à Lloret de Mar',
      'vis.photoAlt': 'La façade de Yonius le soir, enseignes allumées',

      'st.soon': 'Ferme bientôt · {h}', 'st.open': 'Ouvert · jusqu’à {h}', 'st.opensAt': 'Ouvre à {h}',
      'st.closedAt': 'Fermé · ouvre à {h}', 'st.closedTomorrow': 'Fermé · ouvre demain à {h}', 'st.closedDay': 'Fermé · ouvre {d} à {h}', 'st.closed': 'Fermé',
      'st.days': 'Dimanche,Lundi,Mardi,Mercredi,Jeudi,Vendredi,Samedi',

      'foot.tr': '« Bonjour ! » en grec. À bientôt à Lloret.',
      'foot.credit': 'Photos et vidéos : Instagram @yonius_greek_restaurant et Google',
      'lb.label': 'Photo agrandie', 'lb.close': 'Fermer'
    }
  },

  /* ----------------------------------------------------------
     CARTA · por el nombre en castellano → [nombre, descripción]
     ---------------------------------------------------------- */
  carta: {
    ca: {
      'Ensalada griega': ['Amanida grega', 'Tomàquet, cogombre, pebrot, ceba, olives i formatge feta.'],
      'Ensalada César': ['Amanida Cèsar', 'Enciam, pa torrat, pit de pollastre, suc de llimona, ou i maionesa.'],
      'Dolmadakia': ['Dolmadakia', 'Fulles de parra farcides d’arròs (5 unitats).'],
      'Tzatziki': ['Tzatziki', 'Crema de iogurt grec amb cogombre i all.'],
      'Melitzanosalata': ['Melitzanosalata', 'Albergínia rostida amb pebrots, all i julivert.'],
      'Tirokafteri': ['Tirokafteri', 'Crema de iogurt grec amb formatge i un punt picant.'],
      'Queso feta': ['Formatge feta', 'Feta grec.'],
      'Saganaki': ['Saganaki', 'Formatge kefalotiri a la planxa.'],
      'Bouyiourdi': ['Bouyiourdi', 'Formatge grec picant amb tomàquet i pebrot al forn.'],
      'Halloumi': ['Halloumi', 'Formatge halloumi. Ració 7,50 € · en plat 9,50 €.'],
      'Burek + ayran': ['Burek + ayran', 'Burek de formatge acompanyat d’ayran.'],
      'Patatas fritas': ['Patates fregides', 'Ració.'],
      'Patatas bravas': ['Patates braves', 'Patates amb salsa picant.'],
      'Gyro de cerdo o pollo': ['Gyro de porc o pollastre', 'Pita, tzatziki, carn de porc o pollastre, tomàquet, patates i ceba.'],
      'Gyro falafel': ['Gyro de falàfel', 'El clàssic en pita, amb falàfel.'],
      'Gyro mixto': ['Gyro mixt', 'Pollastre i porc a la mateixa pita.'],
      'Combinado gyro': ['Plat combinat de gyro', 'El gyros, servit en plat.'],
      'Combinado gyro mixto': ['Plat combinat de gyro mixt', 'Pollastre i porc, servit en plat.'],
      'Combinado carnes': ['Plat combinat de carns', 'Pita, tzatziki, gyros de pollastre o porc, tomàquet, patates i ceba.'],
      'Souvlaki de pollo o cerdo': ['Souvlaki de pollastre o porc', 'Broquetes de pollastre o de porc.'],
      'Skepasti': ['Skepasti', 'Doble pita, tzatziki, gyros de porc, tomàquet, patates i ceba.'],
      'Loukaniko': ['Loukaniko', 'Salsitxa especial amb patates fregides.'],
      'Bifteki relleno de queso': ['Bifteki farcit de formatge', 'Hamburguesa grega de porc farcida de formatge feta.'],
      'Kebab de ternera relleno': ['Kebab de vedella farcit', 'Rotlle de vedella farcit de formatge o philadelphia, amb patates, tzatziki i verdures.'],
      'Pita souvlaki': ['Pita souvlaki', 'Pita amb broqueta de porc o pollastre, patates, tzatziki i verdures.'],
      'Musaka': ['Mussaca', 'Albergínies, carn picada, beixamel i formatge ratllat.'],
      'Baklava': ['Baklava', 'Pasta fullada grega amb almívar de mel i canyella. Petit 4,50 € · gran 5,50 €.'],
      'Kadaifi': ['Kadaifi', 'Pastís de fils de pasta kataïfi farcit de fruits secs.'],
      'Karidopita': ['Karidopita', 'Pastís grec de mel amb canyella, clau i brandi, servit amb gelat.'],
      'Portokalopita': ['Portokalopita', 'Iogurt, làmines cruixents de pasta fil·lo i un almívar intens de taronja.']
    },
    en: {
      'Ensalada griega': ['Greek salad', 'Tomato, cucumber, pepper, onion, olives and feta cheese.'],
      'Ensalada César': ['Caesar salad', 'Lettuce, croutons, chicken breast, lemon juice, egg and mayonnaise.'],
      'Dolmadakia': ['Dolmadakia', 'Vine leaves stuffed with rice (5 pieces).'],
      'Tzatziki': ['Tzatziki', 'Greek yoghurt dip with cucumber and garlic.'],
      'Melitzanosalata': ['Melitzanosalata', 'Roasted aubergine with peppers, garlic and parsley.'],
      'Tirokafteri': ['Tirokafteri', 'Greek yoghurt and cheese dip with a little heat.'],
      'Queso feta': ['Feta cheese', 'Greek feta.'],
      'Saganaki': ['Saganaki', 'Grilled kefalotyri cheese.'],
      'Bouyiourdi': ['Bouyiourdi', 'Spicy Greek cheese baked with tomato and pepper.'],
      'Halloumi': ['Halloumi', 'Halloumi cheese. Portion €7.50 · as a plate €9.50.'],
      'Burek + ayran': ['Burek + ayran', 'Cheese burek served with ayran.'],
      'Patatas fritas': ['Fries', 'Portion.'],
      'Patatas bravas': ['Patatas bravas', 'Potatoes with spicy sauce.'],
      'Gyro de cerdo o pollo': ['Pork or chicken gyro', 'Pitta, tzatziki, pork or chicken, tomato, fries and onion.'],
      'Gyro falafel': ['Falafel gyro', 'The classic in a pitta, with falafel.'],
      'Gyro mixto': ['Mixed gyro', 'Chicken and pork in the same pitta.'],
      'Combinado gyro': ['Gyro plate', 'Gyros served on a plate.'],
      'Combinado gyro mixto': ['Mixed gyro plate', 'Chicken and pork, served on a plate.'],
      'Combinado carnes': ['Mixed meat plate', 'Pitta, tzatziki, chicken or pork gyros, tomato, fries and onion.'],
      'Souvlaki de pollo o cerdo': ['Chicken or pork souvlaki', 'Chicken or pork skewers.'],
      'Skepasti': ['Skepasti', 'Double pitta, tzatziki, pork gyros, tomato, fries and onion.'],
      'Loukaniko': ['Loukaniko', 'Special sausage with fries.'],
      'Bifteki relleno de queso': ['Cheese-stuffed bifteki', 'Greek pork patty stuffed with feta cheese.'],
      'Kebab de ternera relleno': ['Stuffed beef kebab', 'Beef roll stuffed with cheese or Philadelphia, with fries, tzatziki and vegetables.'],
      'Pita souvlaki': ['Souvlaki pitta', 'Pitta with a pork or chicken skewer, fries, tzatziki and vegetables.'],
      'Musaka': ['Moussaka', 'Aubergine, minced meat, béchamel sauce and grated cheese.'],
      'Baklava': ['Baklava', 'Greek pastry in honey and cinnamon syrup. Small €4.50 · large €5.50.'],
      'Kadaifi': ['Kadaifi', 'Shredded filo pastry filled with nuts.'],
      'Karidopita': ['Karidopita', 'Greek honey cake with cinnamon, cloves and brandy, served with ice cream.'],
      'Portokalopita': ['Portokalopita', 'Yoghurt, crispy filo pastry sheets and an intense orange syrup.']
    },
    fr: {
      'Ensalada griega': ['Salade grecque', 'Tomate, concombre, poivron, oignon, olives et feta.'],
      'Ensalada César': ['Salade César', 'Laitue, croûtons, blanc de poulet, jus de citron, œuf et mayonnaise.'],
      'Dolmadakia': ['Dolmadakia', 'Feuilles de vigne farcies au riz (5 pièces).'],
      'Tzatziki': ['Tzatziki', 'Crème de yaourt grec au concombre et à l’ail.'],
      'Melitzanosalata': ['Melitzanosalata', 'Aubergine rôtie aux poivrons, à l’ail et au persil.'],
      'Tirokafteri': ['Tirokafteri', 'Crème de yaourt grec au fromage, légèrement relevée.'],
      'Queso feta': ['Feta', 'Feta grecque.'],
      'Saganaki': ['Saganaki', 'Fromage kefalotyri à la plancha.'],
      'Bouyiourdi': ['Bouyiourdi', 'Fromage grec épicé, tomate et poivron au four.'],
      'Halloumi': ['Halloumi', 'Fromage halloumi. Portion 7,50 € · en assiette 9,50 €.'],
      'Burek + ayran': ['Burek + ayran', 'Burek au fromage accompagné d’ayran.'],
      'Patatas fritas': ['Frites', 'Portion.'],
      'Patatas bravas': ['Patatas bravas', 'Pommes de terre, sauce piquante.'],
      'Gyro de cerdo o pollo': ['Gyros porc ou poulet', 'Pita, tzatziki, porc ou poulet, tomate, frites et oignon.'],
      'Gyro falafel': ['Gyros falafel', 'Le classique en pita, au falafel.'],
      'Gyro mixto': ['Gyros mixte', 'Poulet et porc dans la même pita.'],
      'Combinado gyro': ['Assiette gyros', 'Le gyros, servi à l’assiette.'],
      'Combinado gyro mixto': ['Assiette gyros mixte', 'Poulet et porc, servis à l’assiette.'],
      'Combinado carnes': ['Assiette de viandes', 'Pita, tzatziki, gyros poulet ou porc, tomate, frites et oignon.'],
      'Souvlaki de pollo o cerdo': ['Souvlaki poulet ou porc', 'Brochettes de poulet ou de porc.'],
      'Skepasti': ['Skepasti', 'Double pita, tzatziki, gyros de porc, tomate, frites et oignon.'],
      'Loukaniko': ['Loukaniko', 'Saucisse spéciale et frites.'],
      'Bifteki relleno de queso': ['Bifteki farci au fromage', 'Steak haché grec de porc farci à la feta.'],
      'Kebab de ternera relleno': ['Kebab de veau farci', 'Roulé de veau farci au fromage ou au Philadelphia, avec frites, tzatziki et légumes.'],
      'Pita souvlaki': ['Pita souvlaki', 'Pita avec brochette de porc ou de poulet, frites, tzatziki et légumes.'],
      'Musaka': ['Moussaka', 'Aubergines, viande hachée, sauce béchamel et fromage râpé.'],
      'Baklava': ['Baklava', 'Pâtisserie feuilletée grecque au sirop de miel et cannelle. Petit 4,50 € · grand 5,50 €.'],
      'Kadaifi': ['Kadaïf', 'Pâte kadaïf en fils, fourrée aux fruits secs.'],
      'Karidopita': ['Karidopita', 'Gâteau grec au miel, cannelle, clou de girofle et brandy, servi avec une glace.'],
      'Portokalopita': ['Portokalopita', 'Yaourt, feuilles de pâte filo croustillantes et un sirop d’orange intense.']
    }
  },

  /* ----------------------------------------------------------
     RESEÑAS · traducidas del castellano, en el mismo orden
     ---------------------------------------------------------- */
  reviews: {
    ca: [
      'Ens ha encantat descobrir Yonius. Un restaurant grec familiar, d’aquells llocs on es nota que estimen el que fan.',
      'Menció especial per a la melitzanosalata: boníssima, casolana i amb el punt exacte de sabor. Un grec totalment recomanable.',
      'Tot el menjar boníssim, molt tradicional i amb ingredients frescos.',
      'Bon menjar, bona atenció de les cambreres i bon preu. És un lloc de 10!',
      'És més agradable menjar a la terrassa. El servei és ràpid i el personal, atent. No deixeu de tastar-ne les postres!',
      'Atenció excel·lent de les cambreres i el menjar, exquisit. Us el recomano.'
    ],
    en: [
      'We loved discovering Yonius. A family-run Greek restaurant, one of those places where you can tell they care about what they do.',
      'Special mention for the melitzanosalata: delicious, homemade and perfectly seasoned. A Greek restaurant we fully recommend.',
      'All the food was delicious, very traditional and made with fresh ingredients.',
      'Good food, lovely service from the waitresses and a good price. A perfect 10!',
      'It’s nicer to eat on the terrace. Service is quick and the staff attentive. Don’t miss the desserts!',
      'Excellent service from the waitresses and exquisite food. I recommend it.'
    ],
    fr: [
      'Nous avons adoré découvrir Yonius. Un restaurant grec familial, de ces endroits où l’on sent qu’ils aiment ce qu’ils font.',
      'Mention spéciale pour la melitzanosalata : délicieuse, maison et parfaitement assaisonnée. Un grec que l’on recommande sans hésiter.',
      'Tout était délicieux, très traditionnel et avec des produits frais.',
      'Bonne cuisine, serveuses attentionnées et bon prix. Un endroit qui mérite 10/10 !',
      'C’est plus agréable de manger en terrasse. Le service est rapide et le personnel attentionné. Ne manquez pas les desserts !',
      'Excellent accueil des serveuses et une cuisine exquise. Je vous le recommande.'
    ]
  }
};
