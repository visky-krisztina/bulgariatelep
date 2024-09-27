import children  from '../assets/children.svg';
import teeneger from '../assets/teeneger.png';
import oldwoman from '../assets/oldwoman.png';


const homeCardData = [
    {
        title: 'Gyerekek',
        subTitle: '"Engedjétek, és ne akadályozzátok, hogy hozzám jöjjenek a kisgyermekek, mert ilyeneké a mennyek országa." - Máté 19,14',
        image: children,
        alt: 'gyerekek',
        top: 'styleMarginUpper'
    },
    {
        title: 'Fiatalok',
        subTitle: '"Miképpen egyik vassal a másikat élesítik, akképpen az ember élesíti az ő barátjának orcáját." - Péld. 27,17',
        image: teeneger,
        alt: 'fiatalok',
        top: 'styleMarginUp'
    },
    {
        title: 'Felnőttek',
        subTitle: '"Egymás terhét hordozzátok, és úgy töltsétek be a Krisztus törvényét." - Galata 6,2',
        image: oldwoman,
        alt: 'felnottek',
        top: 'styleMarginUpper'
    }
]

export default homeCardData;