import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './resume.module.scss'
import classnames from 'classnames'
import Avatar from './IMG/Avatar2.JPG'
import Website from './IMG/CV/website.svg'
import Location from './IMG/CV/mdi_location_on.svg'
import Call from './IMG/CV/mdi_call.svg'
import Mail from './IMG/CV/mdi_mail.svg'
import Facebook from './IMG/Facebook - Negative.svg'
import Github from './IMG/Github - Negative.svg'
import Instagram from './IMG/Instagram - Negative.svg'
import LinkedIn from './IMG/LinkedIn - Negative.svg'
import ReactIcon from './IMG/skillIcon/React.svg'
import JsIcon from './IMG/skillIcon/JavaScript.svg'
import FigmaIcon from './IMG/skillIcon/Figma.svg'
import Bootstrap from './IMG/skillIcon/Bootstrap.svg'
import Node from './IMG/skillIcon/Node.svg'
import Tailwind from './IMG/skillIcon/Tailwind.svg'
import MySQLIcon from './IMG/skillIcon/MySQL.svg'
import PHPIcon from './IMG/skillIcon/PHP.svg'
import Snow from './snow'
import Sun from './IMG/sun.svg'
import Moon from './IMG/moon.svg'
import Airplane from './Airplane'

import * as echarts from 'echarts'
import { Icon } from '@iconify/react'
function Resume(props) {
  const { snowOpen, setSnowOpen } = props
  const chart = useRef()
  const skills = useRef()
  const totalHeight = useRef()
  const navbarHeight = useRef() // const resumeHeight = totalHeight.current.offsetHeight
  const [navBar, setNavBar] = useState(true)
  const [resumeHeight, setResumeHeight] = useState('')
  const [collapse, setCollapse] = useState(true)

  const facebookClick = () => {
    window.open('https://www.facebook.com/tommy8852024')
  }
  const instagramClick = () => {
    window.open('https://www.instagram.com/tommy88520/')
  }
  const linkedinClick = () => {
    window.open('https://www.linkedin.com/in/yan-ming-huang-b4355221a/')
  }
  const githubClick = () => {
    window.open('https://github.com/tommy88520')
  }
  const resumeClick = () => {
    window.open(
      'https://drive.google.com/file/d/1gco6XJpXHnhPvlgLNT2P7VX41LSoI3Oc/view?usp=sharing'
    )
  }
  const chartOption = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // Use axis to trigger tooltip
        type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
      },
    },
    legend: {
      top: '5%',
    },
    grid: {
      left: '3%',
      right: '4%',
      bottom: '10%',
      containLabel: true,
    },
    xAxis: {
      type: 'value',
    },
    yAxis: {
      type: 'category',
      data: ['隨機應變', '團隊合作', '創意發想'],
    },
    textStyle: {
      fontSize: 20,
    },
    series: [
      {
        name: '評分',
        type: 'bar',
        stack: 'total',
        label: {
          show: true,
        },
        emphasis: {
          focus: 'series',
        },
        data: [7, 9, 10],
      },
    ],
  }
  //   圓餅圖
  const skillsOption = {
    tooltip: {
      trigger: 'item',
    },
    legend: {
      //   top: '5%',
      //   left: 'center',
      show: false,
    },
    textStyle: {
      fontSize: 12,
    },
    series: [
      {
        name: 'Access From',
        type: 'pie',
        radius: ['40%', '70%'],
        avoidLabelOverlap: false,
        itemStyle: {
          borderRadius: 10,
          borderColor: '#fff',
          borderWidth: 2,
        },
        label: {
          show: false,
          position: 'center',
        },
        emphasis: {
          label: {
            show: true,
            fontSize: '20',
            fontWeight: 'bold',
          },
        },
        labelLine: {
          show: false,
        },
        top: '-8%',
        position: 'center',

        data: [
          { value: 10, name: 'JavaScript' },
          { value: 10, name: 'Bootstrap' },
          { value: 10, name: 'Tailwind' },
          { value: 10, name: 'Node.js' },
          { value: 10, name: 'React' },
        ],
      },
    ],
  }

  function resizeChart() {
    window.location.reload()
    if (window.innerWidth < 800) {
      // console.log(123)
      setNavBar(true)
    } else {
      setNavBar(false)
    }
  }
  useEffect(() => {
    const myChart = echarts.init(chart.current)
    myChart.setOption(chartOption)
    const mySkills = echarts.init(skills.current)
    mySkills.setOption(skillsOption)
    // window.addEventListener('resize', mySkills)
    if (!!totalHeight && !!navbarHeight) {
      const total = totalHeight.current.offsetHeight
      // + navbarHeight.current.offsetHeight
      // console.log(total)
      setResumeHeight(total)
    }

    window.addEventListener('resize', resizeChart)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [snowOpen, totalHeight, resumeHeight])

  useEffect(() => {
    const snowState = JSON.parse(localStorage.getItem('snowOpen'))
    setSnowOpen(!snowState)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      {snowOpen ? (
        <Snow snowHeight={resumeHeight} />
      ) : (
        <Airplane snowHeight={resumeHeight} />
      )}

      <nav className={classnames(styles.navHeaderShrink)} ref={navbarHeight}>
        <div
          className={classnames(
            'container',
            'flex',
            'justify-between',
            'text-primary',
            styles.basicNav
          )}
        >
          <Link to={'/'}>
            <div
              className={classnames(
                styles.logo,
                snowOpen && styles.darkLogo,
                'font-semibold'
              )}
            >
              HYM
            </div>
          </Link>
          <div
            className={classnames(styles.nav, snowOpen && 'text-white', 'px-2')}
          >
            <button
              className={classnames(navBar ? styles.hamburger : 'd-none')}
              onClick={() => {
                setCollapse(!collapse)
              }}
            >
              <div
                className={classnames(
                  'bg-primary',
                  // 'w-full',
                  'h-2',
                  collapse ? styles.lineNotActive : styles.lineActive1
                )}
              ></div>
              <div
                className={classnames(
                  'bg-primary',
                  // 'w-full',
                  'h-2',
                  collapse ? styles.lineNotActive : styles.lineActive2
                )}
              ></div>
              <div
                className={classnames(
                  'bg-primary',
                  // 'w-full',
                  'h-2',
                  collapse ? styles.lineNotActive : styles.lineActive3
                )}
              ></div>
            </button>
            <button
              className={classnames(collapse ? styles.navLink : styles.show)}
              onClick={resumeClick}
            >
              <span className={classnames(styles.navSkill)}>RESUME</span>
            </button>

            <div
              className={classnames(collapse ? styles.navLink : styles.show)}
            >
              <Link to={'/'}>
                <span className={classnames(styles.navSkill)}>Home</span>
              </Link>
            </div>
            <div
              className={classnames(collapse ? styles.navLink : styles.show)}
            >
              <div
                className={classnames(
                  'h-full',
                  'flex',
                  'items-center',
                  'w-full'
                )}
              >
                <div
                  className={classnames(
                    styles.backgroundButton,
                    'flex',
                    'justify-center',
                    'items-center',
                    snowOpen ? 'bg-white' : 'bg-black'
                  )}
                  onClick={() => {
                    setSnowOpen(!snowOpen)
                    localStorage.setItem('snowOpen', snowOpen)
                  }}
                >
                  <div
                    className={classnames(
                      styles.sun,
                      snowOpen && styles.sunActive
                    )}
                  >
                    <img src={Sun} alt="" />
                  </div>
                  <div
                    className={classnames(
                      styles.moon,
                      snowOpen && styles.moonActive
                    )}
                  >
                    <img src={Moon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div
        className={classnames(
          styles.background,
          'flex',
          'justify-center'
          // navBar && 'pt-20'
        )}
        ref={totalHeight}
      >
        <div
          className={classnames(
            styles.resumeSection,
            'grid',
            'sm:grid-cols-2',
            'grid-cols-1',
            'gap-3',
            'p-2',
            snowOpen && styles.snowBackground
            // 'justify-center'
          )}
        >
          <div className={classnames(styles.leftSection, 'col-span-1')}>
            {/* 頭貼區 */}
            <div
              className={classnames(styles.nameSection, 'flex', 'items-center')}
            >
              <div>
                <img
                  src={Avatar}
                  alt=""
                  className={classnames(styles.avatar)}
                />
              </div>
              <div className={classnames(styles.name)}>
                <p className="text-2xl">Tommy</p>
                <p className="text-2xl">黃彥銘</p>
                <p className="text-base">FrontEnd Development</p>
              </div>
            </div>
            {/* 資訊區 */}
            <div
              className={classnames(
                styles.contactInfo,
                'grid',
                'grid-rows-4',
                'gap-2',
                'p-2'
              )}
            >
              <div className={classnames(styles.contactDetail)}>
                <img src={Mail} alt="" className="p-1 mr-3" />
                <p className="tracking-wider">tommy8852024@gmail.com</p>
              </div>
              <div className={classnames(styles.contactDetail)}>
                <img src={Call} alt="" className="p-1 mr-3" />
                <p className="tracking-wider">0926266959</p>
              </div>
              <div className={classnames(styles.contactDetail)}>
                <img src={Website} alt="" className="p-1 mr-3" />
                <a href="https://tommy88520.github.io/profile/#/">
                  <p className="tracking-wider">我的作品集</p>
                </a>
              </div>
              <div className={classnames(styles.contactDetail)}>
                <img src={Location} alt="" className="p-1 mr-3" />
                <p className="tracking-wider">台北市文山區</p>
              </div>
            </div>
            {/* Industry Knowledge */}
            {/* education */}
            <div className="p-2">
              <div
                className={classnames('flex', 'p-2', styles.IndustryKnowledge)}
              >
                <p className={classnames(styles.experienceSection1, 'text-xl')}>
                  EDUCATION
                </p>
                <div className="w-1/2 flex items-center">
                  <div className={classnames(styles.experienceLine)}></div>
                </div>
              </div>
              <div className={classnames(styles.education, 'p-2', 'mt-2')}>
                <div
                  className={classnames(
                    'w-full',
                    'flex',
                    'justify-between',
                    'items-center'
                    // 'mt-2'
                  )}
                >
                  <p>資策會前端工程師班</p>
                  <p className={classnames('text-xs')}>結業</p>
                </div>
                <div
                  className={classnames(
                    'w-full',
                    'flex',
                    'justify-between',
                    'items-center',
                    'my-2'
                  )}
                >
                  <p>政治大學國發所碩二</p>
                  <p className={classnames('text-xs')}>就學中</p>
                </div>
                <div
                  className={classnames(
                    'w-full',
                    'flex',
                    'justify-between',
                    'items-center'
                  )}
                >
                  <p>淡江公共行政學系</p>
                  <p className={classnames('text-xs')}>學士畢業</p>
                </div>
                <p className="text-xs mt-1">
                  在校成績優良，在學期間多次獲得系上成績優良的獎學金、農會、國泰人壽的獎學金。
                  <br />
                  2019曾參選商管學院補選議員、2018年曾投稿大專生研究計畫。
                </p>
              </div>
            </div>
            {/* <div className="p-2">
                <div className={classnames(styles.IndustryKnowledge, 'px-5')}>
                  <p>Industry Knowledge</p>
                  <ul className={classnames('list-disc')}>
                    <li>User Interface</li>
                    <li>User experience</li>
                    <li>撰寫企劃</li>
                  </ul>
                </div>
              </div> */}
            {/* 自評區 */}
            <div className="p-2">
              <div
                className={classnames(styles.SelfEvaluation)}
                ref={chart}
              ></div>
            </div>
            {/* Social media */}
            <div className="p-2">
              <div className={classnames(styles.SocialMedia)}>
                <div className={classnames(styles.socialText, 'p-2')}>
                  <p className="text-xl uppercase">Social media</p>
                </div>
                <div
                  className={classnames(
                    styles.SocialMediaIcon,
                    'grid',
                    'grid-cols-4',
                    'p-2'
                  )}
                >
                  <button>
                    <img
                      src={Facebook}
                      alt=""
                      className={classnames(styles.mediaIcon)}
                      onClick={facebookClick}
                    />
                  </button>
                  <button>
                    <img
                      src={Github}
                      alt=""
                      className={classnames(styles.mediaIcon)}
                      onClick={githubClick}
                    />
                  </button>
                  <button>
                    <img
                      src={Instagram}
                      alt=""
                      className={classnames(styles.mediaIcon)}
                      onClick={instagramClick}
                    />
                  </button>
                  <button>
                    <img
                      src={LinkedIn}
                      alt=""
                      className={classnames(styles.mediaIcon)}
                      onClick={linkedinClick}
                    />
                  </button>
                </div>
              </div>
            </div>
            {/* Hobbies */}
            <div className="p-2">
              <div className={classnames(styles.SocialMedia)}>
                <div className={classnames(styles.socialText, 'p-2')}>
                  <p className="text-xl uppercase">Hobbies</p>
                </div>
                <div
                  className={classnames(
                    styles.SocialMediaIcon,
                    'grid',
                    'grid-cols-4',
                    'p-2'
                  )}
                >
                  <div>
                    <Icon
                      icon="bx:bxs-basketball"
                      className={classnames(styles.mediaIcon)}
                    />
                    <p className="text-xs text-center">Basketball</p>
                  </div>
                  <div>
                    <Icon
                      icon="healthicons:gym"
                      className={classnames(styles.mediaIcon)}
                    />
                    <p className="text-xs text-center">GYM</p>
                  </div>
                  <div>
                    <Icon
                      icon="healthicons:travel-alt"
                      className={classnames(styles.mediaIcon)}
                    />
                    <p className="text-xs text-center">Travel</p>
                  </div>
                  <div>
                    <Icon
                      icon="bx:bxs-movie-play"
                      className={classnames(styles.mediaIcon)}
                    />
                    <p className="text-xs text-center">Movie</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 右邊區 */}
          <div className={classnames(styles.rightSection, 'col-span-1', 'p-2')}>
            <div>
              <div className={classnames('flex')}>
                <p className={classnames(styles.experienceSection1)}>
                  EXPERIENCE
                </p>
                <div className="w-1/2 flex items-center">
                  <div className={classnames(styles.experienceLine)}></div>
                </div>
              </div>
              <div className={classnames('py-1')}>
                <p>資策會前端工程師班</p>
                <p className={classnames('text-xs')}>2021/6/17 - 2021/11/20</p>
                <p className={classnames('text-sm', 'pt-1')}>
                  在專案中負責撰寫會員中心的部分、包含會員資料庫建置、
                  <span className="text-red-400">
                    機器人驗證、Email寄信功能、Email驗證功能、JWT驗證會員
                  </span>
                  、區分會員等級、前後端資料比對、顯示歷史訂單。
                </p>
              </div>
              <div className={classnames('py-1')}>
                <p>民進黨青年部實習計畫幹部</p>
                {/* <p className={classnames('text-xs')}>Seniour UI designer</p> */}
                <p className={classnames('text-xs')}>2020/9 - 2021/1 </p>
                <p className={classnames('text-sm', 'pt-1')}>
                  擔任此計畫北區幹部，管理約15人團隊，以舉辦活動為主，搜集輿情、組織聯繫、處理成員問題為輔。
                </p>
              </div>
              <div className={classnames('py-1')}>
                <p>立委競選團隊</p>
                {/* <p className={classnames('text-xs')}>Seniour UI designer</p> */}
                <p className={classnames('text-xs')}>2020/9 - 2021/1 </p>
                <p className={classnames('text-sm', 'pt-1')}>
                  參與新北市永和區選舉團隊， 擔任組織部執行長，
                  <span className="text-red-400">
                    管理約10人團隊，協調與中央官員、地方議員行程、規劃共同活動，包含撰寫企劃書、活動細節規劃、主持活動、嘉賓邀請
                  </span>
                  等。
                </p>
              </div>
              <div className={classnames('py-1')}>
                <p>自行經營網拍</p>
                {/* <p className={classnames('text-xs')}>Seniour UI designer</p> */}
                <p className={classnames('text-xs')}>2020/9 - 2021/1 </p>
                <p className={classnames('text-sm', 'pt-1')}>
                  自行找廠商進貨，企劃書、商品、商品照、頁面、文稿、都由自己包辦，月營業額曾連續三個月皆達8萬，受邀獲選優選賣家。
                </p>
              </div>
            </div>
            {/* Skills */}
            <div className="relative">
              <div className={classnames('flex', 'my-2')}>
                <p className={classnames(styles.experienceSection1)}>SKILLS</p>
                <div className="w-1/2 flex items-center">
                  <div className={classnames(styles.experienceLine)}></div>
                </div>
              </div>
              <div
                className={classnames(styles.SelfSkillsEvaluation)}
                ref={skills}
              ></div>
              <img
                src={ReactIcon}
                alt=""
                className={classnames(
                  'absolute',
                  'top-8',
                  'left-2',
                  styles.reactIcon
                )}
              />
              <img
                src={JsIcon}
                alt=""
                className={classnames(
                  'absolute',
                  'top-8',
                  'right-0',
                  styles.reactIcon
                )}
              />
              <img
                src={Node}
                alt=""
                className={classnames(
                  'absolute',
                  'bottom-10',
                  'left-2',
                  styles.reactIcon
                )}
              />
              <img
                src={Bootstrap}
                alt=""
                className={classnames(
                  'absolute',
                  'bottom-10',
                  'right-0',
                  styles.reactIcon
                )}
              />
              <img
                src={Tailwind}
                alt=""
                className={classnames('absolute', styles.TailwindIcon)}
              />
            </div>
            <div>
              <div className={classnames('flex', 'mt-2', 'mb-3')}>
                <p
                  className={classnames(styles.experienceSection1, 'uppercase')}
                >
                  Others skills
                </p>
                <div className="w-1/2 flex items-center">
                  <div className={classnames(styles.experienceLine)}></div>
                </div>
              </div>
              <div className={classnames('w-full', 'grid', 'grid-cols-3')}>
                <img src={FigmaIcon} alt="" className={classnames('m-auto')} />
                <img src={MySQLIcon} alt="" className={classnames('m-auto')} />
                <img src={PHPIcon} alt="" className={classnames('m-auto')} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Resume
