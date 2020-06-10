import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
    faWrench,
    faCalendarDay,
    faPaperclip,
    faCamera,
    faMoneyBillAlt,
    faPrint,
    faTaxi,
    faBriefcaseMedical,
    faUtensils,
    faServer,
    faTruckLoading
} from '@fortawesome/free-solid-svg-icons'

let FontLibary = [
    faCalendarDay,
    faPaperclip,
    faCamera,
    faWrench,
    faMoneyBillAlt,
    faPrint,
    faTaxi,
    faBriefcaseMedical,
    faUtensils,
    faServer,
    faTruckLoading
];
library.add(FontLibary)

let IconLibary = [
    { font: faUtensils, type: "meal" },
    { font: faTaxi, type: "traffic" },
    { font: faServer, type: "device" },
    { font: faBriefcaseMedical, type: "medical" },
    { font: faWrench, type: "repair" },
    { font: faPrint, type: "print" },
    { font: faMoneyBillAlt, type: "purchase" },
    { font: faTruckLoading, type: "rent" },
]

export { FontAwesomeIcon, FontLibary, IconLibary }