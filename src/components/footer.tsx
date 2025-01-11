
const Footer = () => {
  const links = [
    {
      title: 'About Us',
      href: '#'
    },
    {
      title: 'Shipping & Delivery',
      href: '#'
    },
    {
      title: 'Terms of service',
      href: '#'
    },
    {
      title: 'Careers',
      href: '#'
    },
    {
      title: 'Returns & Exchanges',
      href: '#'
    },
    {
      title: 'Shipping information',
      href: '#'
    },
    {
      title: 'Privacy Policy',
      href: '#'
    },
    {
      title: 'Warranty Information',
      href: '#'
    },
    {
      title: 'Reviews',
      href: '#'
    }
  ];

  const socialLinks = [
    {
      title: 'Facebook',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.77,7.46H14.5v-1.9c0-.9.6-1.1,1-1.1h3V.5h-4.33C10.24.5,9.5,3.44,9.5,5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4Z"/>
        </svg>
      )
    },
    {
      title: 'Instagram',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,2.16c3.2,0,3.58,0,4.85.07,3.25.15,4.77,1.69,4.92,4.92.06,1.27.07,1.65.07,4.85s0,3.58-.07,4.85c-.15,3.23-1.66,4.77-4.92,4.92-1.27.06-1.64.07-4.85.07s-3.58,0-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.64-.07-4.85s0-3.58.07-4.85C2.38,3.92,3.9,2.38,7.15,2.23,8.42,2.18,8.8,2.16,12,2.16ZM12,0C8.74,0,8.33,0,7.05.07c-4.35.2-6.78,2.62-7,7C0,8.33,0,8.74,0,12S0,15.67.07,17c.2,4.36,2.62,6.78,7,7C8.33,24,8.74,24,12,24s3.67,0,4.95-.07c4.35-.2,6.78-2.62,7-7C24,15.67,24,15.26,24,12s0-3.67-.07-4.95c-.2-4.35-2.62-6.78-7-7C15.67,0,15.26,0,12,0Zm0,5.84A6.16,6.16,0,1,0,18.16,12,6.16,6.16,0,0,0,12,5.84ZM12,16a4,4,0,1,1,4-4A4,4,0,0,1,12,16ZM18.41,4.15a1.44,1.44,0,1,0,1.44,1.44A1.44,1.44,0,0,0,18.41,4.15Z"/>
        </svg>
      )
    },
    {
      title: 'Pinterest',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12,.5C5.93.5.5,5.93.5,12c0,4.87,3.17,9,7.58,10.41-.1-1-.19-2.45,0-3.49.18-.89,1.16-5.68,1.16-5.68s-.3-.59-.3-1.47c0-1.38.8-2.41,1.79-2.41.84,0,1.25.63,1.25,1.39,0,.85-.54,2.12-.82,3.29-.23,1,.49,1.79,1.47,1.79,1.76,0,3.12-1.86,3.12-4.54,0-2.37-1.7-4.02-4.14-4.02-2.82,0-4.47,2.13-4.47,4.33,0,.86.33,1.78.74,2.28.08.1.09.19.07.29-.07.29-.23.94-.26,1.07-.04.17-.14.21-.32.13-1.19-.55-1.94-2.28-1.94-3.68,0-3.12,2.27-5.97,6.55-5.97,3.44,0,6.11,2.44,6.11,5.7,0,3.4-2.14,6.13-5.11,6.13-1,0-1.94-.52-2.27-1.13,0,0-.49,1.91-.61,2.37-.22.86-.82,1.94-1.22,2.59,1.07.32,2.21.5,3.39.5,6.07,0,11.5-5.43,11.5-12C23.5,5.93,18.07.5,12,.5Z"/>
        </svg>
      )
    },
    {
      title: 'X',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
        </svg>
      )
    },
    {
      title: 'TikTok',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59,6.69a4.83,4.83,0,0,1,3.66,3.72c.54,2.34-.49,4.81-2.56,6.02v-2.11a4.83,4.83,0,0,0,1.13-4.82c-.14-.53-.8-.87-1.35-.87H18.54V6.69Zm-5.02,0V18.31a5.08,5.08,0,0,1-3.66,1.46c-2.35,0-4.25-1.9-4.25-4.25V9.38A4.82,4.82,0,0,0,4.25,8.12,4.83,4.83,0,0,0,.59,11.84v-2.1A4.83,4.83,0,0,1,4.25,6.69Zm5.02,0a4.83,4.83,0,0,0,3.66,3.72v2.1a4.83,4.83,0,0,1-3.66-1.46V6.69Z"/>
        </svg>
      )
    },
    {
      title: 'YouTube',
      href: '#',
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.5,6.19a3.02,3.02,0,0,0-2.12-2.12C19.54,3.5,12,3.5,12,3.5s-7.54,0-9.38.57A3.02,3.02,0,0,0,.5,6.19C0,8.03,0,12,0,12s0,3.97.5,5.81a3.02,3.02,0,0,0,2.12,2.12C4.46,20.5,12,20.5,12,20.5s7.54,0,9.38-.57a3.02,3.02,0,0,0,2.12-2.12C24,15.97,24,12,24,12S24,8.03,23.5,6.19ZM9.5,15.5v-7l6,3.5Z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center sm:items-start gap-8">
          <div className="flex-1">
           <h1 className="font-bold text-3xl sm:text-4xl">Gymgear</h1>
          </div>
          
          <div className="flex-1">
            <nav className="grid grid-cols-1 sm:grid-cols-3 gap-4 gap-x-20 md:gap-x-4 text-center sm:text-start">
              {links.map((link, index) => (
                <a 
                  key={index}
                  href={link.href}
                  className="text-sm hover:underline hover:text-purple-900 transition"
                >
                  {link.title}
                </a>
              ))}
            </nav>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-800">
          <div className="flex items-center justify-center sm:justify-start gap-4">
            <span className="text-sm">Follow us:</span>
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                className="text-white hover:text-gray-300 transition"
                aria-label={social.title}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;