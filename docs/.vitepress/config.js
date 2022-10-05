function sidebarFood() {
    return [{
            text: '概览',
            items: [
                { text: '食品', link: '/food/index' },
            ]
        },
        {
            text: '薯片',
            items: [
                { text: '薯片类', link: '/food/potato_chips' },
            ]
        }
    ]
}


function sidebarAdditive() {
    return [{
            text: '概览',
            items: [
                { text: '添加剂', link: '/additive/index' },
            ]
        },
        {
            text: "防腐剂",
            items: [
                { text: "苯甲酸钠", link: '/additive/bjsn' },
                { text: "山梨酸钾", link: '/additive/potassium_sorbate' },
            ]
        },
        {
            text: "甜味剂",
            items: [
                { text: "安赛蜜", link: '/additive/asm' },
                { text: "阿斯巴甜", link: '/additive/asbt' },
            ]
        },
    ]
}

export default {
    title: 'TechAndHenhuo',
    description: '科技与狠活',
    // head: [
    //   ['script', { defer: true, src: '' }],
    // ],
    themeConfig: {
        socialLinks: [
            { icon: 'github', link: 'https://github.com/istommao/TechAndHenhuo' }
        ],
        nav: [
            { text: '食品', link: '/food/index' },
            { text: '添加剂', link: '/additive/index' },
        ],
        sidebar: {
            "/additive/": sidebarAdditive(),
            "/food/": sidebarFood(),
        }
    }
}