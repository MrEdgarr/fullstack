export const routes = [
    {
        path: '/',
        component: () => import('@/layouts/default.vue'),
        children: [
            {
                path: '/',
                component: () => import('@/views/HomeView.vue'),
            },
        ],
    },
]
