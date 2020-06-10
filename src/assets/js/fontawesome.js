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
    { font: faWrench, type: "repair" },
    { font: faMoneyCheckAlt, type: "purchase" },
    { font: faPrint, type: "print" },
    { font: faBusAlt, type: "traffic" }
]

export { FontAwesomeIcon, FontLibary, IconLibary }