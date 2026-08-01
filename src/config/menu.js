export default [
    {
        label: 'Dashboard',
        name:'',
        icon: 'bi bi-grid',
        permissions: ['dashboard.index'],
        route: '/',
        activeState: '/',
        children: []
    },
    {
        label: 'Master Data',
        name: 'master-data',
        icon: 'bi bi-folder2-open',
        permissions: [],
        activeState: [],
        children: [
            {label: 'Test', permissions: [], route: '/'}
        ]
    }
]