import IconHome from '~icons/heroicons/home'
import IconMovie from '~icons/mdi/movie-outline'
import IconNow from '~icons/simple-icons/now'
import IconShowtime from '~icons/material-symbols/slideshow-outline'
import IconComingSoon from '~icons/hugeicons/coming-soon-02'
import IconPromotion from '~icons/lsicon/badge-promotion-outline'
import IconNewspaper from '~icons/mdi/newspaper-variant-outline'
export const MAIN_NAVIGATION = [
    {
        name: 'Trang chủ',
        icon: IconHome,
        path: '',
    },
    {
        name: 'Phim',
        icon: IconMovie,
        path: '',
        childrenMenu: [
            {
                name: 'Đang chiếu',
                icon: IconNow,
                path: '',
            },
            {
                name: 'Sắp chiếu',
                icon: IconComingSoon,
                path: '',
            },
        ],
    },
    {
        name: 'Lịch Chiếu',
        icon: IconShowtime,
        path: '',
    },
    {
        name: 'Khuyến mãi',
        icon: IconPromotion,
        path: '',
    },
    {
        name: 'Tin tức',
        icon: IconNewspaper,
        path: '',
    },
]
