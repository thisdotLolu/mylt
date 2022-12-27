import Image from 'next/image'
import { useState, useEffect } from 'react';
// import {styles} from './home.module.css'


import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';

import styles from './homeComponent.module.scss'
import myltRed from '../../assets/image/mylt-img/RED.gif'
import myltGold from '../../assets/image/mylt-img/GOLD.gif'
import myltPurple from '../../assets/image/mylt-img/PURPLE.gif'
import lottery from '../../assets/image/load-map/Lottery.gif'
import creatorUser from '../../assets/image/creator/user.png'
import ETHImg from '../../assets/image/creator/eth.png'

import star1 from '../../assets/image/Effect/star_1.png'
import star2 from '../../assets/image/Effect/star_2.png'
import star3 from '../../assets/image/Effect/star_3.png'
import star4 from '../../assets/image/Effect/star_4.png'
import timeline1 from '../../assets/image/timeline/item1.png'
import timeline2 from '../../assets/image/timeline/item2.png'
import timeline3 from '../../assets/image/timeline/item3.png'
import timeline4 from '../../assets/image/timeline/item4.png'
import timeline5 from '../../assets/image/timeline/item5.png'
import timeline6 from '../../assets/image/timeline/item6.png'
import lineEffect from '../../assets/image/Effect/line_effect.png'

let position = '';
export const HomeComponent = () =>
{
  const [firstLoad, setFirstLoad] = useState(false)
  const [timeFormat, setTimeFormat] = useState('alternate')
  useEffect(() => { position = timeFormat; }, [timeFormat])
  useEffect(() =>
  {
    if (firstLoad) return; setFirstLoad(true);
    window.addEventListener('resize', () => { CalculatePosition(); }, false);
    CalculatePosition();
  }, [])

  const CalculatePosition = () =>
  {
    let position_ = 'left';
    if (window.innerWidth > 900) position_ = 'alternate';
    if (position_ !== position) setTimeFormat(position_);

    console.log(position)
  }

  return (
    <>
    <div className={styles.hero_section_image}>
          <img src='/hero_image.png'/>
      </div>
      <div className='w-full'>
        <video src='./video/MYLT_firstSection.mp4' autoPlay muted loop />
      </div>

      {/* <div className={styles.firstScBg}>
        <div className='container_ grid grid-cols-1 md:grid-cols-2 gap-20 px-35 py-50 md:py-100'>
          <div className='w-full flex flex-col justify-end items-start'>
            <div className='text-[120px] leading-[90px] font-[400] BlackOpsOne'>MYLT</div>
            <div className='text-[18px] leading-[160.5%] font-[400] Poppins'>
              Mint Your Lottery Ticket is the first-ever Web 3.0-based NFT lottery, where you can constantly flip your tickets for profit even before the draw. Lottery winnings aren't all about luck anymore.
            </div>

            <div className='flex flex-row pt-30'>
              <div className={`${styles.Explor_btn} px-30 py-20`}>
                Explor more
              </div>
            </div>
          </div>

          <div className='w-full max-w-[450px] m-auto relative flex justify-center items-end'>
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
        </div>
      </div> */}

      <div className='container_'>
        <div className='flex flex-col px-30 py-50 md:px-80 md:py-100 md:pb-200'>
          <video src='./video/MYLT_Subtitles.mp4' controls={true} />

          <div className='text-[35px] leading-[60px] font-[700] tracking-[0.04em] pt-30 pb-5 md:pt-80 md:pb-20 md:text-[45px]'>
            What is MYLT?
          </div>

          <div className='text-[15px] leading-5 font-[300] md:text[22px] md:leading-8'>
            MYLT - “Mint Your Lottery Ticket”- is an Ethereum-based lottery where people can play and have fun while winning significant prizes. People purchase NFT's from the MYLT Lottery Collection and they become their playing ticket. MYLT offers the unique opportunity of profit from people's chance by letting them sell/auction their winning tickets. This decreases the risk as people can win from the lottery itself, either winning prizes or tokens to buy free tickets for future lotteries, or even flip their NFT's for profit in the early stages. It's all about the people and their freedom in choosing how to profit from their chance.
          </div>
        </div>
      </div>

      <div className='bg-[#ffffff0a] backdrop-blur-[5.5px]'>
        <div className='container_ relative grid grid-cols-1 md:grid-cols-2 gap-20 py-50'>
          <div className='flex flex-col items-center justify-end'>
            <div className='relative'>
              <Image src={lottery} alt="logo-img" className='w-full' />

              <Image src={star1} alt="star-effect" className='absolute top-[3%] right-[30%]' />
              <Image src={star2} alt="star-effect" className='absolute top-[65%] right-[3%] ' />
            </div>
          </div>

          <div className='w-full flex flex-col justify-end items-start p-25 md:p-0 md:pr-50'>
            <div className='text-[35px] leading-[60px] font-[600] md:text-[45px]'>Why choose us?</div>
            <div className='text-[18px] leading-[25px] font-[300] Poppins'>
              MYLT offers the unique opportunity of profit from people's chance by letting them sell/auction their winning tickets.
              This decreases the risk as people can win from the lottery itself, either winning prizes or tokens to buy free tickets for future lotteries, or even flip their NFT's for profit in the early stages. It's all about the people and their freedom in choosing how to profit from their chance.
            </div>

            <div className='flex flex-row pt-30'>
              <div className={`${styles.Explor_btn} px-30 py-20 cursor-pointer`}>
                Connect Wallet
              </div>
            </div>
          </div>

          <Image src={lineEffect} alt="line-effect"
            className='absolute right-0 -top-[90%] w-[50%] hidden lg:flex'
          />
        </div>
      </div>

      <div className={styles.fourthScBg}>
        <div className='relative'>
          <div className='container_ flex flex-col justify-center items-center py-80 px-35 z-10'>
            <div className='text-[45px] font-[700] z-10'>The Intersteller Story</div>
            <div className='text-[16px] font-[200] max-w-500 text-center Poppins z-10'>
              Our lottery might not octually come from this planel. As rare  as the antimatior you can find on Earth
            </div>

            <div className='w-full py-50 z-10'>
              <Timeline position={timeFormat}>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ backgroundColor: 'unset' }} />
                    <TimelineDot className='w-50 md:w-80 p-0 border-0'>
                      <Image src={timeline1} alt="timeline-item" />
                    </TimelineDot>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                  </TimelineSeparator>

                  <TimelineContent>
                    <div className={styles.timelineBox_contain}>
                      <div className={styles.timelineBox}>
                        <div className='px-15 py-10'>
                          <div className='text-[35px] font-[700]'>BAYC NFT</div>
                          <div className='text-[15px] font-[100]'>
                            The NFT collection took over the world in only a few months. Owning an NFT from BAYC is already more like a high-status symbol and a pretty expensive one to say the least. With only 10,000 NFTs in circulation and a floor price of 65 ETH ($75,000) per NFT in the latter stages of the 2022 bear market, this can quickly become one of your most profitable holdings when the NFTs restore their value in the upcoming bull run. Some BAYC NFT owners include Eminem, Neymar Jr, Justin Bieber, and potentially… you?
                          </div>
                        </div>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                    <TimelineDot className='w-50 md:w-80 p-0 border-0'>
                      <Image src={timeline2} alt="timeline-item" />
                    </TimelineDot>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                  </TimelineSeparator>

                  <TimelineContent>
                    <div className={styles.timelineBox_contain2}>
                      <div className={styles.timelineBox2}>
                        <div className='px-15 py-10'>
                          <div className='text-[35px] font-[700]'>MAYC NFT</div>
                          <div className='text-[15px] font-[100]'>
                            Yuga Labs, the team behind the BAYC NFT collection, went further by creating MAYC. With an already established team and clear goals, this project is destined for success. There are 20,000 MAYC NFTs, which are traded for around 10.8 ETH ($12,800). Not bad, considering that we are in the worst bear market in the last five years. All MAYC holders get multiple benefits as the project is closely associated with the BAYC, which will skyrocket the value of these NFTs in the next cycle.
                          </div>
                        </div>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                    <TimelineDot className='w-50 md:w-80 p-0 border-0'>
                      <Image src={timeline3} alt="timeline-item" />
                    </TimelineDot>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                  </TimelineSeparator>

                  <TimelineContent>
                    <div className={styles.timelineBox_contain}>
                      <div className={styles.timelineBox}>
                        <div className='px-15 py-10'>
                          <div className='text-[35px] font-[700]'>OTHERSIDE NFT</div>
                          <div className='text-[15px] font-[100]'>
                            Owning land in the real world can be expensive, so why not transition to the Metaverse? The Otherside NFT collection is one of the most extensive in the world of NFTs. Considering it has over 99,000 NFTs, it's crazy to think that the floor price per Otherside NFT stands at 1.10 ETH ($1,300), which is more than the late 2022 price of Ethereum! But these NFTs aren't like many others in the market. They are digital lands that can be used in the unique Otherside game. So, it won't be a surprise if the current value of the Otherside NFTs triples in the near future. And you can easily win them here at MYLT!
                          </div>
                        </div>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                    <TimelineDot className='w-50 md:w-80 p-0 border-0'>
                      <Image src={timeline4} alt="timeline-item" />
                    </TimelineDot>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                  </TimelineSeparator>

                  <TimelineContent>
                    <div className={styles.timelineBox_contain2}>
                      <div className={styles.timelineBox2}>
                        <div className='px-15 py-10'>
                          <div className='text-[35px] font-[700]'>Four Collectionary Rolex Watches</div>
                          <div className='text-[15px] font-[100]'>
                            Rolex watches will never go out of trend. It is one of the most luxurious items to have on your wrist. And deservedly, this is one of the best investments you can make. Over time the price of some collection Rolex watches has increased drastically. So, it’s safe to say the four Rolex watches you can win from MYLT can turn into a fortune in the future.
                          </div>
                        </div>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                    <TimelineDot className='w-50 md:w-80 p-0 border-0'>
                      <Image src={timeline5} alt="timeline-item" />
                    </TimelineDot>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                  </TimelineSeparator>

                  <TimelineContent>
                    <div className={styles.timelineBox_contain}>
                      <div className={styles.timelineBox}>
                        <div className='px-15 py-10'>
                          <div className='text-[35px] font-[700]'>Apple Products</div>
                          <div className='text-[15px] font-[100]'>
                            In the digital era, technological gadgets are incredibly useful in our daily life. And when it comes to products like these, the first company that comes to mind is Apple. From our MYLT lottery, you can win the latest Apple devices that will help with your productivity tasks and entertainment for years to come.
                          </div>
                        </div>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineConnector sx={{ backgroundColor: '#FB3951' }} />
                    <TimelineDot className='w-50 md:w-80 p-0 border-0'>
                      <Image src={timeline6} alt="timeline-item" />
                    </TimelineDot>
                    <TimelineConnector sx={{ backgroundColor: 'unset' }} />
                  </TimelineSeparator>

                  <TimelineContent>
                    <div className={styles.timelineBox_contain2}>
                      <div className={styles.timelineBox2}>
                        <div className='px-15 py-10'>
                          <div className='text-[35px] font-[700]'>MYLT TOKENS</div>
                          <div className='text-[15px] font-[100]'>
                            The MYLT tokens are at the core of your significant winning chance in our lottery. When playing frequently, you will encounter them as winning prizes and begin to stack them. You should know that these tokens are unique tools that are extremely valuable as they can be used for buying tickets from all the MYLT lotteries. Of course, you would need enough of them to make a purchase, so hope for the winning tickets to bring you many tokens at once.
                          </div>
                        </div>
                      </div>
                    </div>
                  </TimelineContent>
                </TimelineItem>
              </Timeline>
            </div>

            <div className='flex flex-row justify-center z-10'>
              <div className={`${styles.Explor_btn} px-50 py-10 cursor-pointer select-none`}>
                Mint
              </div>
            </div>
          </div>

          <Image src={star3} alt="star-effect" className='absolute top-[8%] right-[10%] z-0' />
          <Image src={star4} alt="star-effect" className='absolute top-[5%] right-[15%] z-0 ' />
          <Image src={star4} alt="star-effect" className='absolute top-[95%] left-[5%] z-0 ' />
        </div>

        <div className='bg-[#ffffff0a] backdrop-blur-[5.5px]'>
          <div className='container_ grid grid-cols-1 md:grid-cols-2 gap-20 py-50'>
            <div className='w-full flex flex-col justify-end items-start px-20 md:px-50'>
              <div className='text-[35px] leading-[60px] font-[600] md:text-[45px]'>75%+ Winning Tickets</div>
              <div className='text-[18px] leading-[25px] font-[300] Poppins'>
                There aren't any lotteries around, with over 75% winning tickets. The significant chance of winning will act as if the big bang was on Earth, unleashing powerful waves of players who constantly flip their tickets for profit. All in search of the enormous jackpot prize coming from the depths of the galaxy. The NFT supply for our lottery is only 2,000 tickets, so hurry up before they are all gone.
              </div>

              <div className='flex flex-row pt-30'>
                <div className={`${styles.Explor_btn} px-30 py-15 cursor-pointer`}>
                  Connect Wallet
                </div>
              </div>
            </div>

            <div className='flex flex-col items-center justify-end pt-50 md:pt-0'>
              <Image
                unoptimized={true}
                src={myltPurple}
                alt="logo-img"
                className='w-[80%] max-w-[300px]'
              />
            </div>
          </div>
        </div>
      </div>

      <div className={styles.fifthScBg}>
        <div className='container_ flex flex-col justify-center items-center py-80 px-35'>
          <div className='text-[30px] font-[700] leading-[35px] md:leading-[50px] max-w-[500px] text-center md:text-[45px] pb-20'>Cheaper Tickets in Our Community Whitelist</div>
          <div className='text-[16px] font-[200] max-w-[800px] text-center Poppins pb-80'>
            For our first lottery, 800 addresses from our community whitelist will receive the chance to exploit three unique bundle offers to increase their chance of winning. The maximum number of tickets that can be sold at bundle prices is only 900.
          </div>

          <div className='w-full grid grid-cols-1 gap-50 sm:grid-cols-2 md:grid-cols-3'>
            <div className='flex flex-col justify-center items-center'>
              <div className={`${styles.nftBuyBox} w-full max-w-[250px] px-40 py-50`}>
                <div className='text-[18px] font-[200] text-[#bfb4b4]'>
                  <div>Buy 1</div>
                  <div>NFT tickets at</div>
                </div>

                <div className='text-[18px] font-[500] pt-20'>
                  0.6 ETH
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <div className={`${styles.nftBuyBox} w-full max-w-[250px] px-40 py-50`}>
                <div className='text-[18px] font-[200] text-[#bfb4b4]'>
                  <div>Buy 2</div>
                  <div>NFT tickets at</div>
                </div>

                <div className='text-[18px] font-[500] pt-20'>
                  0.58 ETH
                </div>
              </div>
            </div>

            <div className='flex flex-col justify-center items-center'>
              <div className={`${styles.nftBuyBox} w-full max-w-[250px] px-40 py-50`}>
                <div className='text-[18px] font-[200] text-[#bfb4b4]'>
                  <div>Buy 4</div>
                  <div>NFT tickets at</div>
                </div>

                <div className='text-[18px] font-[500] pt-20'>
                  0.5 ETH
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='container_'>
        <div className='flex flex-col justify-center items-center py-50 px-35'>
          <div className='text-[32px] font-[600] leading-[36px] text-center pb-20'>Our creator</div>
          <div className='text-[16px] font-[400] leading-[24px] text-center Poppins pb-80'>
            We Have the Support of Leading Crypto Content Creators
          </div>

          <div className='w-full grid grid-cols-1 gap-30 sm:grid-cols-2 md:grid-cols-3'>
            <div className={`${styles.creatorBox} w-full md:w-[90%] h-[100px] m-auto flex flex-row items-center px-20`}>
              <div className='flex-1 flex flex-row gap-10 justify-center'>
                <Image src={creatorUser} alt="mylt-img" className='w-[50px] h-[50px] rounded-full' />
                <div className='flex-1 flex flex-col'>
                  <div className='text-15 leading-[20px] font-[500]'>Emerson Philips</div>
                  <div className='flex text-15 leading-[20px] font-[700]'>
                    <Image src={ETHImg} alt="mylt-img" /> 3.2 ETH
                  </div>
                </div>
              </div>

              <a className='text-yellow text-15 underline cursor-pointer'> Follow</a>
            </div>

            <div className={`${styles.creatorBox} w-full md:w-[90%] h-[100px] m-auto flex flex-row items-center px-20`}>
              <div className='flex-1 flex flex-row gap-10 justify-center'>
                <Image src={creatorUser} alt="mylt-img" className='w-[50px] h-[50px] rounded-full' />
                <div className='flex-1 flex flex-col'>
                  <div className='text-15 leading-[20px] font-[500]'>Emerson Philips</div>
                  <div className='flex text-15 leading-[20px] font-[700]'>
                    <Image src={ETHImg} alt="mylt-img" /> 3.2 ETH
                  </div>
                </div>
              </div>

              <a className='text-yellow text-15 underline cursor-pointer'> Follow</a>
            </div>

            <div className={`${styles.creatorBox} w-full md:w-[90%] h-[100px] m-auto flex flex-row items-center px-20`}>
              <div className='flex-1 flex flex-row gap-10 justify-center'>
                <Image src={creatorUser} alt="mylt-img" className='w-[50px] h-[50px] rounded-full' />
                <div className='flex-1 flex flex-col'>
                  <div className='text-15 leading-[20px] font-[500]'>Emerson Philips</div>
                  <div className='flex text-15 leading-[20px] font-[700]'>
                    <Image src={ETHImg} alt="mylt-img" /> 3.2 ETH
                  </div>
                </div>
              </div>

              <a className='text-yellow text-15 underline cursor-pointer'> Follow</a>
            </div>

            <div className={`${styles.creatorBox} w-full md:w-[90%] h-[100px] m-auto flex flex-row items-center px-20`}>
              <div className='flex-1 flex flex-row gap-10 justify-center'>
                <Image src={creatorUser} alt="mylt-img" className='w-[50px] h-[50px] rounded-full' />
                <div className='flex-1 flex flex-col'>
                  <div className='text-15 leading-[20px] font-[500]'>Emerson Philips</div>
                  <div className='flex text-15 leading-[20px] font-[700]'>
                    <Image src={ETHImg} alt="mylt-img" /> 3.2 ETH
                  </div>
                </div>
              </div>

              <a className='text-yellow text-15 underline cursor-pointer'> Follow</a>
            </div>

            <div className={`${styles.creatorBox} w-full md:w-[90%] h-[100px] m-auto flex flex-row items-center px-20`}>
              <div className='flex-1 flex flex-row gap-10 justify-center'>
                <Image src={creatorUser} alt="mylt-img" className='w-[50px] h-[50px] rounded-full' />
                <div className='flex-1 flex flex-col'>
                  <div className='text-15 leading-[20px] font-[500]'>Emerson Philips</div>
                  <div className='flex text-15 leading-[20px] font-[700]'>
                    <Image src={ETHImg} alt="mylt-img" /> 3.2 ETH
                  </div>
                </div>
              </div>

              <a className='text-yellow text-15 underline cursor-pointer'> Follow</a>
            </div>

            <div className={`${styles.creatorBox} w-full md:w-[90%] h-[100px] m-auto flex flex-row items-center px-20`}>
              <div className='flex-1 flex flex-row gap-10 justify-center'>
                <Image src={creatorUser} alt="mylt-img" className='w-[50px] h-[50px] rounded-full' />
                <div className='flex-1 flex flex-col'>
                  <div className='text-15 leading-[20px] font-[500]'>Emerson Philips</div>
                  <div className='flex text-15 leading-[20px] font-[700]'>
                    <Image src={ETHImg} alt="mylt-img" /> 3.2 ETH
                  </div>
                </div>
              </div>

              <a className='text-yellow text-15 underline cursor-pointer'> Follow</a>
            </div>

            <div className={`${styles.creatorBox} w-full md:w-[90%] h-[100px] m-auto flex flex-row items-center px-20`}>
              <div className='flex-1 flex flex-row gap-10 justify-center'>
                <Image src={creatorUser} alt="mylt-img" className='w-[50px] h-[50px] rounded-full' />
                <div className='flex-1 flex flex-col'>
                  <div className='text-15 leading-[20px] font-[500]'>Emerson Philips</div>
                  <div className='flex text-15 leading-[20px] font-[700]'>
                    <Image src={ETHImg} alt="mylt-img" /> 3.2 ETH
                  </div>
                </div>
              </div>

              <a className='text-yellow text-15 underline cursor-pointer'> Follow</a>
            </div>

            <div className={`${styles.creatorBox} w-full md:w-[90%] h-[100px] m-auto flex flex-row items-center px-20`}>
              <div className='flex-1 flex flex-row gap-10 justify-center'>
                <Image src={creatorUser} alt="mylt-img" className='w-[50px] h-[50px] rounded-full' />
                <div className='flex-1 flex flex-col'>
                  <div className='text-15 leading-[20px] font-[500]'>Emerson Philips</div>
                  <div className='flex text-15 leading-[20px] font-[700]'>
                    <Image src={ETHImg} alt="mylt-img" /> 3.2 ETH
                  </div>
                </div>
              </div>

              <a className='text-yellow text-15 underline cursor-pointer'> Follow</a>
            </div>

            <div className={`${styles.creatorBox} w-full md:w-[90%] h-[100px] m-auto flex flex-row items-center px-20`}>
              <div className='flex-1 flex flex-row gap-10 justify-center'>
                <Image src={creatorUser} alt="mylt-img" className='w-[50px] h-[50px] rounded-full' />
                <div className='flex-1 flex flex-col'>
                  <div className='text-15 leading-[20px] font-[500]'>Emerson Philips</div>
                  <div className='flex text-15 leading-[20px] font-[700]'>
                    <Image src={ETHImg} alt="mylt-img" /> 3.2 ETH
                  </div>
                </div>
              </div>

              <a className='text-yellow text-15 underline cursor-pointer'> Follow</a>
            </div>
          </div>

          <div className='flex flex-row justify-center items-center pt-40'>
            <div className='px-[20px] py-[12px] rounded-full border border-yellow text-yellow text-15 cursor-pointer select-none'>
              Explor more
            </div>
          </div>
        </div>
      </div>
    </>
  )
}