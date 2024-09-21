export interface SelectLanguageType {
    pt: [{ value: 'pt', description: '🇵🇹 Português' }, { value: 'en', description: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglês' }, { value: 'fr', description: '🇫🇷 Francês' }]
    en: [{ value: 'pt', description: '🇵🇹 Portuguese' }, { value: 'en', description: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 English' }, { value: 'fr', description: '🇫🇷 French' }]
    fr: [{ value: 'pt', description: '🇵🇹 Portugais' }, { value: 'en', description: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Anglais' }, { value: 'fr', description: '🇫🇷 Français' }]
}

export interface TranslationType {
    selectLanguage: SelectLanguageType
    closedStatus: {
        pt: string
        en: string
        fr: string
    }
    openStatusForLunch: {
        pt: string
        en: string
        fr: string
    },
    openStatusForDinner: {
        pt: string
        en: string
        fr: string
    }
}

export const translations: any = {
    selectLanguage: {
        pt: [{ value: 'pt', description: '🇵🇹 Português' }, { value: 'en', description: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Inglês' }, { value: 'fr', description: '🇫🇷 Francês' }],
        en: [{ value: 'pt', description: '🇵🇹 Portuguese' }, { value: 'en', description: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 English' }, { value: 'fr', description: '🇫🇷 French' }],
        fr: [{ value: 'pt', description: '🇵🇹 Portugais' }, { value: 'en', description: '🏴󠁧󠁢󠁥󠁮󠁧󠁿 Anglais' }, { value: 'fr', description: '🇫🇷 Français' }]
    },
    closedStatus: {
        pt: 'Actualmente encerrado',
        en: 'Currently closed',
        fr: 'Actuellement fermé'
    },
    openStatusForLunch: {
        pt: 'Actualmente aberto para almoços',
        en: 'Currently open for lunch',
        fr: 'Actuellement ouvert pour le déjeuner'
    },
    openStatusForDinner: {
        pt: 'Actualmente aberto para jantares',
        en: 'Currently open for dinners',
        fr: 'Actuellement ouvert pour les dîners'
    },
    imageText: {
        pt: 'Restaurante - Pizzaria',
        en: 'Restaurant - Pizzeria',
        fr: 'Restaurant - Pizzeria'
    },
    slogan: {
        pt: 'Paixão Italiana, sabor autêntico',
        en: 'Italian passion, authentic flavor',
        fr: 'Passion italienne, saveur authentique'
    },
    menu: {
        pt: 'Menu',
        en: 'Menu',
        fr: 'Menu'
    },
    wines: {
        pt: 'Vinhos',
        en: 'Wines',
        fr: 'Vins'
    },
    desserts: {
        pt: 'Sobremesas',
        en: 'Desserts',
        fr: 'Desserts'
    },
    drinks: {
        pt: 'Bebidas',
        en: 'Drinks',
        fr: 'Boissons'
    },
    aboutUs: {
        pt: 'Sobre nós',
        en: 'About us',
        fr: 'A propos de nous'
    },
    menuDescription:{
        pt: 'Delicie-se com nossas pizzas artesanais e massas frescas, preparadas com o autêntico sabor italiano.',
        en: 'Enjoy our handmade pizzas and fresh pasta, prepared with authentic Italian flavor.',
        fr: 'Savourez nos pizzas faites à la main et nos pâtes fraîches, préparées avec une authentique saveur italienne.'
    },
    winesDescription: {
        pt: 'Descubra nossa seleção de vinhos, cuidadosamente escolhidos para acompanhar e realçar o sabor de cada prato.',
        en: 'Discover our selection of wines, carefully chosen to accompany and enhance the flavor of every dish.',
        fr: 'Découvrez notre sélection de vins, soigneusement choisis pour accompagner et rehausser la saveur de chaque plat.'
    },
    dessertsDescription: {
        pt: 'Encante-se com nossas sobremesas caseiras, feitas com receitas tradicionais italianas para adoçar sua experiência.',
        en: 'Delight in our homemade desserts, made using traditional Italian recipes to sweeten your experience.',
        fr: 'Délectez-vous de nos desserts maison, préparés selon des recettes italiennes traditionnelles, pour adoucir votre expérience.'
    },
    drinksDescription: {
        pt: 'Acompanhe sua refeição com nossa variedade de bebidas, desde refrescantes sucos e coquetéis a tradicionais licores italianos.',
        en: 'Accompany your meal with our range of drinks, from refreshing juices and cocktails to traditional Italian liqueurs.',
        fr: 'Accompagnez votre repas avec notre gamme de boissons, des jus et cocktails rafraîchissants aux liqueurs italiennes traditionnelles.'
    },
    topNavigationHomePage: {
        pt: 'Página Principal',
        en: 'Home Page',
        fr: 'Page d\'accueil'
    },
    topNavigationMenuPage:{
        pt: 'Menu',
        en: 'Menu',
        fr: 'Menu'
    },
    topNavigationDessertsPage:{
        pt: 'Sobremesas',
        en: 'Desserts',
        fr: 'Desserts'
    },
    topNavigationWinesPage:{
        pt: 'Vinhos',
        en: 'Wines',
        fr: 'Vins'
    },
    topNavigationDrinksPage:{
        pt: 'Bebidas',
        en: 'Drinks',
        fr: 'Boissons'
    },
    secNavigationSugestions: {
        pt: 'Sugestão do Dia',
        en: 'Tip of the Day',
        fr: 'Conseil du jour'
    },
    secNavigationMenu: {
        pt: 'Ementa',
        en: 'Menu',
        fr: 'Menu'
    },
    menuNavigationEntries: {
        pt: 'Entradas 🥖',
        en: 'Entries 🥖',
        fr: 'Entrées 🥖'
    },
    menuNavigationPasta: {
        pt: 'Massas 🍝',
        en: 'Pastas 🍝',
        fr: 'Pastas 🍝'
    },
    menuNavigationSalads: {
        pt: 'Saladas 🥗',
        en: 'Salads 🥗',
        fr: 'Salades 🥗'
    },
    menuNavigationPizzas: {
        pt: 'Pizzas 🍕',
        en: 'Pizzas 🍕',
        fr: 'Pizza 🍕'
    },
    menuNavigationFish: {
        pt: 'Peixe 🐟',
        en: 'Fish 🐟',
        fr: 'Poisson 🐟'
    },
    menuNavigationMeat: {
        pt: 'Carne 🥩',
        en: 'Meat 🥩',
        fr: 'Viande 🥩'
    },
    dessertsNavigationSweets: {
        pt: 'Doces',
        en: 'Sweets',
        fr: 'Bonbons'
    },
    dessertsNavigationIceCream: {
        pt: 'Gelados',
        en: 'Ice Creams',
        fr: 'Glaces'
    },
    saladsIntro:{
        pt:'Todas as saladas são temperadas',
        en: 'All salads are seasoned',
        fr: 'Toutes les salades sont assaisonnées'
    },
    pizzasIntro: {
        pt: 'Todas as pizzas têm molho de tomate molho de tomate e queijo mozarella.',
        en: 'All pizzas have tomato sauce and mozzarella cheese.',
        fr: 'Toutes les pizzas contiennent de la sauce tomate et de la mozzarella.'
    },
    fishIntro: {
        pt: 'Todos os peixes são acompanhados com batatas cozidas e legumes ou salada.',
        en: 'All fish is served with boiled potatoes and vegetables or salad',
        fr: 'Tous les poissons sont servis avec des pommes de terre bouillies et des légumes ou une salade.'
    },
    meatIntro: {
        pt: 'Todas as carnes são acompanhadas com batata frita e legumes ou salada.',
        en: 'All meats are served with fries and vegetables or salad',
        fr: 'Toutes les viandes sont servies avec des frites et des légumes ou une salade.'
    },
    tipsOfDay: {
        pt: 'Sugestões do dia',
        en: 'Suggestions of the day',
        fr: 'Suggestions du jour'
    },
    tipsOfDay1: {
        pt: '(Só ao Almoço)',
        en: '(Lunch Only)',
        fr: '(Déjeuner uniquement)'
    },
    tipsOfDayIngredients:{
        pt: 'Ingredientes:',
        en: 'Ingredients:',
        fr: 'Ingrédients:'
    },
    footer1: {
        pt:'Restaurante Sapore',
        en:'Restaurant Sapore',
        fr:'Restaurant Sapore'
    },
    footer2: {
        pt: 'Incluindo IVA à taxa atual',
        en: 'VAT included at the current rate',
        fr: 'VAT incluse au taux actuel'
    },
    footerSchedule: {
        pt: 'Horários',
        en: 'Schedule',
        fr: 'Horaires'
    },
    footerWeek: {
        pt: 'Segunda a Sabádo:',
        en: 'Monday to Saturday:',
        fr: 'Du Lundi au Samedi:'
    },
    footerLunch: {
        pt: 'Almoço',
        en: 'Lunch',
        fr: 'Déjeuner'
    },
    footerDinner: {
        pt: 'Jantar',
        en: 'Dinner',
        fr: 'Dîner'
    },
    footerClosed: {
        pt: 'Encerramos aos Domingos',
        en: 'Closed on Sundays',
        fr: 'Fermé le Dimanche'
    },
    footerContact: {
        pt: 'Contacte-nos',
        en: 'Contact us',
        fr: 'Contactez nous'
    },
    footerVisit: {
        pt: 'Visite-nos',
        en: 'Visit us',
        fr: 'Visitez-nous'
    },
    aboutUsVisit: {
        pt: 'VENHA VISITAR-NOS',
        en: 'COME AND VISIT US',
        fr: 'VENEZ NOUS RENDRE VISITE'
    },
    aboutUsWelcome: {
        pt: 'Bem-vindos ao nosso Restaurante Sapore',
        en: 'Welcome to our Sapore Restaurant',
        fr: 'Bienvenue dans notre restaurant Sapore'
    },
    aboutUsText1: {
        pt: 'Se pretende passar uma noite agradável com a sua família, um almoço a meio do trabalho ou uma visita turística à cidade e experimentar deliciosa comida, venha descobrir o nosso restaurante.',
        en: 'If you want to spend a pleasant evening with your family, a lunch in the middle of work or a sightseeing tour of the city and try some delicious food, come and discover our restaurant.',
        fr: 'Si vous souhaitez passer une agréable soirée en famille, un déjeuner en plein travail ou une visite touristique de la ville et déguster de délicieux plats, venez découvrir notre restaurant.'
    },
    aboutUsText2: {
        pt: 'Temos todo o prazer em oferecer-lhe as nossas especialidades saborosas e proporcionar-lhe uma experiência muito especial. Desfrute do bom tempo no nosso idílico terraço. Esqueça o tempo lá fora e sinta-se confortável nos nossos espaços climatizados.',
        en: 'We are happy to offer you our tasty specialties and provide you with a very special experience. Enjoy the good weather on our idyllic terrace. Forget the weather outside and make yourself comfortable in our air-conditioned rooms.',
        fr: 'Nous sommes ravis de vous proposer nos savoureuses spécialités et de vous faire vivre une expérience très particulière. Profitez du beau temps sur notre terrasse idyllique. Oubliez le temps qu\'il fait dehors et installez-vous confortablement dans nos chambres climatisées.'
    },
    aboutUsText3: {
        pt: 'As nossas bebidas e saborosas iguarias convencem logo os nossos clientes. O nosso Wi-Fi gratuito é o caminho mais direto para navegar na net.  De que está à espera?',
        en: 'Our drinks and tasty delicacies convince our guests straight away. Our free Wi-Fi is the most direct way to surf the net.  What are you waiting for?',
        fr: 'Nos boissons et nos délicieux plats convainquent immédiatement nos hôtes. Notre Wi-Fi gratuit est le moyen le plus direct de surfer sur le net.  Qu\'est-ce que vous attendez ?'
    },
    aboutUsText4: {
        pt: 'Teremos todo o gosto em dar-lhe as boas-vindas!  Apareça quando quiser. Também embalamos a sua comida para levar.',
        en: 'We\'d be delighted to welcome you!  Drop by any time. We can also pack your food to take away.',
        fr: 'Nous serons ravis de vous accueillir !  Passez nous voir quand vous le souhaitez. Nous pouvons également emballer vos plats à emporter.'
    },
    aboutUsText5: {
        pt: 'Estamos abertos 6 dias por semana das 12:00 às 15:30 horas e das 19:00 às 23:00 horas. O nosso dia de descanso é domingo.',
        en: 'We are open 6 days a week from 12:00 to 15:30 and from 19:00 to 23:00. Our day off is Sunday.',
        fr: 'Nous sommes ouverts 6 jours par semaine de 12h00 à 15h30 et de 19h00 à 23h00. Notre jour de repos est le dimanche.'
    },
    aboutUsLoc: {
        pt: 'Localização 📍',
        en: 'Location 📍',
        fr: 'Localisation 📍'
    },
    aboutUsLocalization: {
        pt: 'Estamos situados no centro de Lisboa, perto do Marquês de Pombal, e junto ao Parque Eduardo VII o Restaurante Sapore, proporciona aos nossos clientes um ambiente descontraído, ao sabor da excelente cozinha tradicional Italiana.',
        en: 'Located in the center of Lisbon, close to Marquês de Pombal, and next to Parque Eduardo VII, Sapore Restaurant offers our customers a relaxed atmosphere with excellent traditional Italian cuisine.',
        fr: 'Situé dans le centre de Lisbonne, à proximité du Marquês de Pombal et du parc Eduardo VII, le restaurant Sapore offre à ses clients une atmosphère détendue et une excellente cuisine italienne traditionnelle.'
    },
    loadingText: {
        pt: 'A carregar a ementa...',
        en: 'Loading the menu...',
        fr: 'Chargement du menu...'
    }
}