import Image from 'next/image'

import styles from './footer.module.scss'
import { footerMenu } from './footer.config'
import Logo from '../../assets/image/logo.png'
import Twitter from '../../assets/image/footer/twitter.svg'
import Discord from '../../assets/image/footer/discord.svg'
import Telegram from '../../assets/image/footer/telegram.svg'

import myltRed from '../../assets/image/mylt-img/RED.gif'
import myltGold from '../../assets/image/mylt-img/GOLD.gif'
import myltPurple from '../../assets/image/mylt-img/PURPLE.gif'

export const Footer = () =>
{
  return (
    <div className={styles.footerBg}>
      <div className="flex flex-col justify-center items-center py-30">

        <div className='relative max-w-200 mx-20 flex justify-center items-center'>
          <Image
            src={myltGold}
            alt="mylt-img"
            unoptimized={true}
            className='w-[50%] absolute -rotate-12 left-[0%]'
          />

          <Image
            src={myltPurple}
            alt="mylt-img"
            unoptimized={true}
            className='w-[50%] z-10'
          />

          <Image
            src={myltRed}
            alt="mylt-img"
            unoptimized={true}
            className='w-[50%] absolute rotate-12 right-[0%]'
          />
        </div>

        {/* <div className='flex flex-row justify-center items-center'>
          <Image src={Logo} alt="logo-img" className='max-w-130 md:max-w-180' />
        </div> */}

        <div className='flex flex-col sm:flex-row justify-center items-center gap-30 py-20'>
          {footerMenu.map((menu, key) => (
            <div key={key}
              className='text-[15px] sm:text-[18px] font-[500] leading-3 sm:leading-5'
            >
              {menu.title}
            </div>
          ))}
        </div>

        <div className='flex flex-col gap-20 xs:flex-row'>
          <div className={`${styles.footerMenu} flex flex-row p-5 sm:p-[8px] w-30 h-30 sm:w-40 sm:h-40`}>
            <Image src={Twitter} alt="logo-img" className='w-full h-full' />
          </div>

          <div className={`${styles.footerMenu} flex flex-row p-5 sm:p-[8px] w-30 h-30 sm:w-40 sm:h-40`}>
            <Image src={Discord} alt="logo-img" className='w-full h-full' />
          </div>

          <div className={`${styles.footerMenu} flex flex-row p-5 sm:p-[8px] w-30 h-30 sm:w-40 sm:h-40`}>
            <Image src={Telegram} alt="logo-img" className='w-full h-full' />
          </div>
        </div>
      </div>
    </div>
  )
}