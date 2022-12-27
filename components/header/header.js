
import Link from 'next/link'
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { Menu, Divider } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import './header.module.scss'
import styles from './header.module.scss'
import { menuList } from './header.config'

import Logo from '../../assets/image/logo.png'

export const Header = ({ class_name, width_ }) =>
{
  const [anchorEl, setAnchorEl] = useState(null);
  const openStatus = Boolean(anchorEl);
  const menuOpen = (event) => { setAnchorEl(event.currentTarget); };
  const menuClose = () => { setAnchorEl(null); };

  return (
    <div className={class_name} style={{ width: width_ + 'px ' }}>
      <div className={`${styles.headerContainer} container_`}>
        <div className=''>
          <Image src={Logo} alt="logo-img" className='max-w-130 md:max-w-[100%]' />
        </div>

        <div className='hidden flex-row gap-5 cursor-pointer xl:flex'>
          {menuList.map((item, key) => (
            <Link href={item.link} key={key}>
              {item.title}
            </Link>
          ))}
        </div>

        <div className='mr-0 xl:mr-20 flex items-center'>
          <div className={`${styles.walletConnectBtn} h-fit rounded-full whitespace-nowrap text-[13px] md:text-15 px-10 py-[8px] md:px-20 md:py-15 `}>
            wallet connect
          </div>

          <div className='flex xl:hidden justify-center items-center px-20'>
            <MenuIcon className='text-[40px] cursor-pointer' onClick={menuOpen} />

            <Menu
              anchorEl={anchorEl}
              open={openStatus}
              onClose={menuClose}
              anchorOrigin={{ vertical: 'bottom', horizontal: 'right', }}
              transformOrigin={{ vertical: 'top', horizontal: 'right', }}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  color: 'white',
                  bgcolor: '#323150',
                  overflow: 'visible',
                  '& .MuiAvatar-root': {
                    width: 32, height: 32,
                    ml: -0.5, mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block', position: 'absolute',
                    top: 0, right: 14, width: 10, height: 10,
                    bgcolor: '#323150', zIndex: 0,
                    transform: 'translateY(-50%) rotate(45deg)',
                  },
                },
              }}
            >
              <div className='flex flex-col px-20'>
                {menuList.map((item, key) => (
                  <Link href={item.link} key={key} className='py-5 text-left'>
                    {item.title}
                  </Link>
                ))}
              </div>
            </Menu>
          </div>
        </div>
      </div>
    </div>
  )
}