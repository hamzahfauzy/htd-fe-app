import view from '../core/view.js'

export default class IndexController {

    async index(ctx) {
        return await view.render('index')
    }

    async setting(ctx){
        return await view.render('pages/setting')
    }

    async profile(ctx){
        const fields = [
            {label: 'Name', key: 'name'},
            {label: 'Email', key: 'email'},
            {label: 'Username', key: 'username'},
            {
                label: 'Status', key: 'is_active', 
                value: function(data, record){
                    const template = '<span class="badge rounded-pill px-3 py-2 border '+(data ? 'text-success-emphasis bg-success-subtle border-success-subtle' : 'text-danger-emphasis bg-danger-subtle border-danger-subtle')+'">value</span>'
                    return template.replace('value', data ? 'Active' : 'Not Active')
                }
            },
            {
                label: 'Roles', key: 'roles', 
                value: function(data, record){
                    var html = '';
                    for(const role of data)
                    {
                        html += '<span class="badge border text-success-emphasis bg-success-subtle border-success-subtle me-1">'+role.name+'</span>'
                    }
                    return html
                }
            },
        ]
        return await view.render('pages/profile', {
            fields
        })
    }
}