module.exports = {
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  title: 'УОМГО',
  description: 'Управление образованием Мысковского городского округа',
  menus: [
    // icons by https://fontawesome.com/icons
    {
      text: 'Home',
      icon: 'fa fa-home',
      url: '/'
    },
    {
      text: 'Tags',
      icon: 'fa fa-tag',
      url: '/tags'
    },
    {
      text: 'Github',
      icon: 'fab fa-github',
      url: 'https://github.com/yscoder',
      external: true
    },
    {
      text: 'Weibo',
      icon: 'fab fa-weibo',
      url: 'https://www.weibo.com/ysweb',
      external: true
    },
    {
      text: 'About',
      icon: 'fa fa-user-secret',
      url: '/about'
    }
  ],
}
