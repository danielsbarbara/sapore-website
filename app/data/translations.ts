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