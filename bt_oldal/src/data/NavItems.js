export const NavItems = [
    {
      title: 'Rólunk',
      path: '/about',
      cName: 'nav-item'
    },
    {
      title: 'Alkalmaink',
      path: '/alkalmaink',
      cName: 'nav-item',
      subMenu: [
        {
          sTitle: 'Gyerekeknek',
          sPath: '/gyerekek',
          scName: 'dropdown-link'
        },
        {
          sTitle: 'Fiataloknak',
          sPath: '/fiatalok',
          scName: 'dropdown-link'
        },
        {
          sTitle: 'Felnőtteknek',
          sPath: '/felnottek',
          scName: 'dropdown-link'
        },
        {
          sTitle: 'Zenés istentiszteletek',
          sPath: '/zenesIstentiszteletek',
          scName: 'dropdown-link'
        },
        {
          sTitle: 'Csendesnapok',
          sPath: '/csendesNapok',
          scName: 'dropdown-link'
        }

      ]
    },
    {
      title: 'Prédikációk',
      path: '/predikaciok',
      cName: 'nav-item'
    },
    {
      title: 'Elérhetőség',
      path: '/contact',
      cName: 'nav-item'
    }
  ];