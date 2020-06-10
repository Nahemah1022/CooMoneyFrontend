import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faWrench,
    faCalendarDay,
    faPaperclip,
    faCamera,
    faMoneyCheckAlt,
    faPrint,
    faBusAlt
} from '@fortawesome/free-solid-svg-icons'

let FontLibary = [
    faCalendarDay,
    faPaperclip,
    faCamera,
    faWrench,
    faMoneyCheckAlt,
    faPrint,
    faBusAlt
];
library.add(FontLibary)

let IconLibary = [
    { index: 1, font: faWrench, type: "repair" },
    { index: 2, font: faMoneyCheckAlt, type: "purchase" },
    { index: 3, font: faPrint, type: "print" },
    { index: 4, font: faBusAlt, type: "traffic" }
]

export { FontAwesomeIcon, FontLibary, IconLibary }