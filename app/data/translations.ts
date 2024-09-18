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
    }
}