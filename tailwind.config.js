//     screens: {
//         'Android': '360px',
//     },

module.exports = {
    content: [
        './resources/**/*.blade.php',
        './resources/**/*.js',
        './resources/**/*.vue',
    ],
    theme: {
        screens:{
            'Android': '360px',
        },
        extend: {
            colors: {
                'blue-variant': {
                    'main-font': '#E7EAF2',
                    'font': '#B1B4BE',
                    'button': '#EFEFEF',
                    'gray-text': '#A0A0A0',
                    'blue-button': '#0047FF',
                    'form': '#ECECEC',
                    'form-back': '#F3F3F3'
                }
            },
            spacing: {
                '8': '8px',
                '15': '15px',
                '16': '16px',
                '24': '24px',
                '40':'40px',
                '66': '66px',
                '82':'82px',
                '86': '86.14px',
                '178': '178.26px',
                '200':'200px',
                '606': '606px'

            },
            borderRadius: {
                '12':'12px',
                '20':'20px',
                '28': '28px',
                '36': '36px',
                '44': '44px',

            },
            fontFamily: {
                Manrope: ['"Manrope"', "sans-serif"],
            }
        },
    },
    plugins: [],
}
