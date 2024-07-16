import React from 'react'
import Link from 'next/link';

import './Header.scss';

export const Header = () => {
  return (
    <div className='header'>
      <div className="header-left">
        <div className="header-logo">
          <Link href='/' aria-label='Getty logo' className='link'>
						Getty
					</Link>
        </div>
      </div>
      <div className="header-right">

      </div>
    </div>
  )
}
