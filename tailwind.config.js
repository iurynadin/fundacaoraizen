module.exports = {
    content: ["./pages/*.{html,js}"],
    theme: {
        container: {
            center: true,
            padding: {
                DEFAULT: "1rem",
                'md': '1.2rem',
                'sm': '1rem'
            },
        },
        screens: {
            'sm': '640px',
            'md': '768px',
            'lg': '1020px',
            'xl': '1214px',
            '2xl': '1536px',
        },
        extend: {
            colors: {
                rosa: "#EA368E",
                laranja: "#F57920",
                amarelo: "#FDB515",
                cyan: "#05C3DE",
                roxo: "#781E77",
            },
            fontFamily: {
                worksans: ["work-sans"],
                montserrat: ["Montserrat"],
            },
            translate: {
                secondaryout: "calc((100vh + 500px) * -1)",
            },
            width: {
                shape90: "calc(100% - 20px)",
                canoamarelo: "calc(100% - 220px)"
            },
            boxShadow: {
            },
            aspectRatio: {
                quesomosVideo: "13 / 7",
                infanciaSlider: "9/6",
                juventudeFoto: "1.33",
                mensagem: "3 / 2",
                embedvideo: "16 / 9",

            },
            backgroundImage: {
                quemsomos: "url('../svgs/bg-quemsomos.svg')",
                ondeestamos: "url('../svgs/bg-ondeestamos.svg')",
                mensagens: "url('../svgs/bg-mensagens.svg')",
                videocover: "url('../video/videocover.jpg')",
                canosativa: "url('../svgs/canos-ativa.svg')",
                canosxl: "url('../svgs/canosxl.svg')",
                canos2xl: "url('../svgs/canos2xl.svg')",
            },
            boxShadow: {
            },
        },
    },
    plugins: [],
};
