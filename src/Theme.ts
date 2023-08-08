
import { extendTheme,ThemeConfig } from '@chakra-ui/react'

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: false
};

// 3. extend the theme
 export const theme= extendTheme({config,
    colors:{
        gray:{
            50:'#f9f9f9',
            100: '#ededed',
            200:'#d3d3d3',
            300:'#b3b3b3',
            400:'#a0a0a0',
            500:'#898989',
            600:'#636363',
            700:'#202020',
            800:'#121212',
            900:'#111',
        },
        teal:{
            50:'#E6FFFA',
            100:'#B2F5EA',
            200:'#81E6D9',
            300:'#4FD1C5',
            400:'#38B2AC',
            500:'#319795',
            600:'#2C7A7B',
            700:'#285E61',
            800:'#234E52',
            900:'#1D4044',

        },
        cyan:{
            50:'#EDFDFD',
            100:'#C4F1F9',
            200:'#9DECF9',
            300:'#76E4F7',
            400:'#0BC5EA',
            500:'#00B5D8',
            600:'#00A3C4',
            700:'#0987A0',
            800:'#086F83',
            900:'#065666',

        },
        blue:{
            50:'#ebf8ff',
            100:'#bee3f8',
            200:'#90cdf4',
            300:'#63b3ed',
            400:'#4299e1',
            500:'#3182ce',
            600:'#2b6cb0',
            700:'#2c5282',
            800:'#2a4365',
            900:'#1A365D',

        },
        red:{
            50:'#FFF5F5',
            100:'#FED7D7',
            200:'#FEB2B2',
            300:'#FC8181',
            400:'#F56565',
            500:'#E53E3E',
            600:'#C53030',
            700:'#9B2C2C',
            800:'#822727',
            900:'#63171B',

        },


    }});
    
    
export default theme