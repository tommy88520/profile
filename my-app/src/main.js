import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './main.module.scss'
import classnames from 'classnames'
// import mainImg from './IMG/IMG_4783.JPG'
import hereImg from './IMG/HERE.png'
// import AnimatedCursor from 'react-animated-cursor'
// import Facebook from './IMG/Facebook - Negative.svg'
// import Github from './IMG/Github - Negative.svg'
// import Instagram from './IMG/Instagram - Negative.svg'
// import LinkedIn from './IMG/LinkedIn - Negative.svg'
import Bethany from './IMG/schoolIcon/Bethany.png'
import Wanfang from './IMG/schoolIcon/Wanfang.png'
import Tamkang from './IMG/schoolIcon/Tamkang.jpeg'
import NCCU from './IMG/schoolIcon/NCCU.png'
import DPP from './IMG/schoolIcon/DPP.png'
import Industry from './IMG/schoolIcon/Industry.jpeg'
import Sun from './IMG/sun.svg'
import Moon from './IMG/moon.svg'

import VanillaTilt from 'vanilla-tilt'
import Snow from './snow'

function Main(props) {
  // const [windowLocation, setWindowLocation] = useState('')
  const { snowOpen, setSnowOpen } = props
  const [navBar, setNavBar] = useState(false)
  const [skillshrink, setSkillshrink] = useState(false)
  const [hereShrink, setHereShrink] = useState(false)
  const [myActivityShrink, setMyActivityShrink] = useState(false)
  const [myActivityChangeColor, setMyActivityChangeColor] = useState(false)
  const [mainHeight, setMainHeight] = useState('')

  const [collapse, setCollapse] = useState(true)
  const windowHeight = useRef()
  // const mainHeight = windowHeight.current.offsetHeight
  const nav = useRef()
  const skillOffsetTop = useRef()
  const encourageOffsetTop = useRef()
  const hereOffsetTop = useRef()
  const myActivityOffsetTop = useRef()
  const myActivityCardOffsetTop = useRef()
  const contactOffsetTop = useRef()

  const card1 = useRef()
  const card2 = useRef()
  const card3 = useRef()
  const card4 = useRef()
  const card5 = useRef()
  const card6 = useRef()

  const scrollToRef = (ref = null, offset = 0) => {
    if (ref && ref.current) {
      window.scrollTo({
        behavior: 'smooth',
        top: ref.current.offsetTop + offset,
      })
    } else {
      window.scrollTo({
        behavior: 'smooth',
        top: offset,
      })
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', nabShrink)
    VanillaTilt.init(card1.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.8,
    })
    VanillaTilt.init(card2.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.8,
    })
    VanillaTilt.init(card3.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.8,
    })
    VanillaTilt.init(card4.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.8,
    })
    VanillaTilt.init(card5.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.8,
    })
    VanillaTilt.init(card6.current, {
      max: 25,
      speed: 400,
      glare: true,
      'max-glare': 0.8,
    })

    // console.log(windowHeight.current.offsetHeight)

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapse, snowOpen])

  function nabShrink() {
    // let userScrollTOP06 = window.innerHeight * 0.7 + window.scrollY //使用者真正觸發的位置，頁面的八成
    // window.location.hash = ''
    if (
      !!encourageOffsetTop.current &&
      !!hereOffsetTop.current &&
      !!myActivityOffsetTop.current &&
      !!windowHeight.current.offsetHeight
    ) {
      const encourageSection = encourageOffsetTop.current.offsetTop
      const hereSection = hereOffsetTop.current.offsetTop
      const myActivitySection2 = myActivityOffsetTop.current.offsetTop
      setMainHeight(windowHeight.current.offsetHeight)

      if (window.pageYOffset >= 400) {
        setNavBar(true)
        setSkillshrink(true)
      } else {
        // setCollapse(true)
        setNavBar(false)
        setSkillshrink(false)
        setCollapse(true)
      }
      // encourageSection
      if (window.pageYOffset >= encourageSection - 500) {
        // console.log(123)
        setSkillshrink(false)
      }
      // hereSection
      if (window.pageYOffset >= hereSection - 300) {
        setHereShrink(true)
      } else {
        setHereShrink(false)
      }
      // myActivity
      if (window.pageYOffset >= myActivitySection2 - 400) {
        setMyActivityShrink(true)
        // console.log('123')
        // setMyActivityChangeColor(true)
      } else {
        setMyActivityShrink(false)
        setMyActivityChangeColor(false)
      }
      if (window.pageYOffset >= myActivitySection2 - 50) {
        // setMyActivityShrink(true)

        setMyActivityChangeColor(true)
      }
      // console.log(window.pageYOffset)
    }
  }
  return (
    <>
      {snowOpen && <Snow snowHeight={mainHeight} />}
      <div className={styles.scrollBar} ref={windowHeight}>
        <header
          className={classnames(
            navBar ? styles.navHeaderShrink : styles.navHeader
          )}
          refs={nav}
        >
          <div
            className={classnames(
              'container',
              'flex',
              'justify-between',
              'text-primary',
              styles.basicNav
            )}
          >
            <div
              className={classnames(styles.logo, snowOpen && styles.darkLogo)}
            >
              HYM
            </div>
            <div className={classnames(styles.nav, snowOpen && 'text-white')}>
              <button
                className={classnames(navBar ? styles.hamburger : 'd-none')}
                onClick={() => {
                  setCollapse(!collapse)
                }}
              >
                <div
                  className={classnames(
                    'bg-primary',
                    'w-full',
                    'h-2',
                    collapse ? styles.lineNotActive : styles.lineActive1
                  )}
                ></div>
                <div
                  className={classnames(
                    'bg-primary',
                    'w-full',
                    'h-2',
                    collapse ? styles.lineNotActive : styles.lineActive2
                  )}
                ></div>
                <div
                  className={classnames(
                    'bg-primary',
                    'w-full',
                    'h-2',
                    collapse ? styles.lineNotActive : styles.lineActive3
                  )}
                ></div>
              </button>
              <div
                className={classnames(collapse ? styles.navLink : styles.show)}
              >
                <span
                  className={classnames(styles.navSkill)}
                  onClick={() => {
                    if (skillOffsetTop !== null) {
                      scrollToRef(skillOffsetTop)
                    }
                  }}
                >
                  SKILLS
                </span>
              </div>
              <div
                className={classnames(collapse ? styles.navLink : styles.show)}
              >
                <span
                  className={classnames(styles.navSkill)}
                  onClick={() => {
                    if (hereOffsetTop !== null) {
                      scrollToRef(hereOffsetTop)
                    }
                  }}
                >
                  PROJECTS
                </span>
              </div>
              <div
                className={classnames(collapse ? styles.navLink : styles.show)}
              >
                <span
                  className={classnames(styles.navSkill)}
                  onClick={() => {
                    if (myActivityCardOffsetTop !== null) {
                      scrollToRef(myActivityCardOffsetTop)
                    }
                  }}
                >
                  ACTIVITIES
                </span>
              </div>
              <div
                className={classnames(collapse ? styles.navLink : styles.show)}
              >
                <span
                  className={classnames(styles.navSkill)}
                  onClick={() => {
                    if (contactOffsetTop !== null) {
                      scrollToRef(contactOffsetTop)
                    }
                  }}
                >
                  CONTACTS
                </span>
              </div>
              <div
                className={classnames(collapse ? styles.navLink : styles.show)}
              >
                <Link to={'/resume'}>
                  <span className={classnames(styles.navSkill)}>RESUME</span>
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
        </header>
        {/* 大圖區 */}
        <section className={classnames(styles.myImg, 'flex', 'justify-center')}>
          <div
            className={classnames(
              'grid',
              'grid-cols-4',
              'h-full',
              'w-full',
              'relative'
            )}
          >
            <div className="col-span-1"></div>
            <div
              className={classnames(styles.mainImg, 'bg-primary', 'col-span-3')}
            ></div>
            <div className={classnames(styles.info)}>
              <p
                className={classnames(
                  'text-7xl',
                  'tracking-wider',
                  'font-semibold',
                  'duration-500',
                  snowOpen && 'text-white'
                )}
              >
                TOMMY <span className="text-secondary">HUANG</span>
              </p>
              <p
                className={classnames(
                  'text-6xl',
                  'my-10',
                  'duration-500',
                  'font-bold',
                  snowOpen && 'text-white'
                )}
              >
                黃彥銘
              </p>
              <p className="text-xl text-secondary tracking-wider">
                HI ! 我是個懷抱著熱情的菜鳥前端工程師 ! <br />
                我不追求刺激，但喜歡挑戰新事物、精進自己的技能，更重視團隊合作！
              </p>
              <button
                className={classnames(
                  'mt-10',
                  'bg-primary',
                  'text-white',
                  styles.btn
                )}
              >
                LEARN ME MORE
              </button>
            </div>
          </div>
        </section>
        {/* SKILLS */}
        <section
          className={classnames(styles.skills, 'flex', 'justify-center')}
          id="skills"
          ref={skillOffsetTop}
        >
          <div
            className={classnames(
              styles.skillsInside,
              skillshrink ? styles.skillsActive : '',
              snowOpen && styles.skillsDarkInside
            )}
          >
            <div
              className={classnames(
                styles.skillSection,
                'grid',
                'grid-cols-3',
                'text-left',
                'text-white',
                snowOpen && 'text-primary'
              )}
            >
              <div className="flex justify-center items-center">
                <div className={classnames(styles.skillDetail)}>
                  <p
                    className={classnames(
                      'text-3xl',
                      'text-center',
                      'tracking-wider',
                      'mb-5',
                      snowOpen ? styles.textEffectDark : styles.textEffect
                    )}
                  >
                    React
                  </p>
                  <ul className="list-disc">
                    <li>熟悉Hook使用</li>
                    <li>ReactRouter路由管理</li>
                    <li>熟悉 component 使用</li>
                    <li>了解 React 生命週期</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className={classnames(styles.skillDetail)}>
                  <p
                    className={classnames(
                      'text-3xl',
                      'text-center',
                      'tracking-wider',
                      'mb-5',
                      snowOpen ? styles.textEffectDark : styles.textEffect
                    )}
                  >
                    JavaScript
                  </p>
                  <ul className="list-disc">
                    <li>使用 JavaScript 基礎語法</li>
                    <li>了解 ES6 語法</li>
                    <li>了解 ES6 語法</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className={classnames(styles.skillDetail)}>
                  <p
                    className={classnames(
                      'text-3xl',
                      'text-center',
                      'tracking-wider',
                      'mb-5',
                      snowOpen ? styles.textEffectDark : styles.textEffect
                    )}
                  >
                    Node.js
                  </p>
                  <ul className="list-disc">
                    <li>將資料庫資料前後端傳遞</li>
                    <li>會員JWT加密驗證</li>
                    <li>我不是機器人驗證</li>
                    <li>自訂Middleware解析、驗證資料</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className={classnames(styles.skillDetail)}>
                  <p
                    className={classnames(
                      'text-3xl',
                      'text-center',
                      'tracking-wider',
                      'mb-5',
                      snowOpen ? styles.textEffectDark : styles.textEffect
                    )}
                  >
                    Git
                  </p>
                  <ul className="list-disc">
                    <li>熟悉 Git Flow 開發流程</li>
                    <li>熟悉 GitHub 遠端版控</li>
                    <li>與組員使用Git共同開發協作</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className={classnames(styles.skillDetail)}>
                  <p
                    className={classnames(
                      'text-3xl',
                      'text-center',
                      'tracking-wider',
                      'mb-5',
                      snowOpen ? styles.textEffectDark : styles.textEffect
                    )}
                  >
                    Web Layout
                  </p>
                  <ul className="list-disc">
                    <li>使用 HTML5 / CSS3 網站設計</li>
                    <li>使用 RWD 響應式網頁設計</li>
                    <li>使用 Bootstrap 4 / Tailwind 規劃網頁</li>
                    <li>使用 SCSS 規劃網頁</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className={classnames(styles.skillDetail)}>
                  <p
                    className={classnames(
                      'text-3xl',
                      'text-center',
                      'tracking-wider',
                      'mb-5',
                      snowOpen ? styles.textEffectDark : styles.textEffect
                    )}
                  >
                    Figma
                  </p>
                  <ul className="list-disc">
                    <li>使用Figma簡易設計網頁版型</li>
                    <li>根據設計師規劃切版</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className={classnames(styles.skillDetail)}>
                  <p
                    className={classnames(
                      'text-3xl',
                      'text-center',
                      'tracking-wider',
                      'mb-5',
                      snowOpen ? styles.textEffectDark : styles.textEffect
                    )}
                  >
                    自行經營網拍
                  </p>
                  <ul className="list-disc">
                    <li>
                      自行找廠商進貨，企劃書、商品、商品照、頁面、文稿、都由自己包辦，月營業額曾連續三個月皆達8萬，受邀獲選優選賣家。
                    </li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className={classnames(styles.skillDetail)}>
                  <p
                    className={classnames(
                      'text-3xl',
                      'text-center',
                      'tracking-wider',
                      'mb-5',
                      snowOpen ? styles.textEffectDark : styles.textEffect
                    )}
                  >
                    立委競選團隊
                  </p>
                  <ul className="list-disc">
                    <li>協調與中央官員、地方議員行程、規劃共同活動</li>
                    <li>撰寫企劃書、活動細節規劃</li>
                    <li>主持活動、嘉賓邀請</li>
                  </ul>
                </div>
              </div>
              <div className="flex justify-center items-center">
                <div className={classnames(styles.skillDetail)}>
                  <p
                    className={classnames(
                      'text-3xl',
                      'text-center',
                      'tracking-wider',
                      'mb-5',
                      snowOpen ? styles.textEffectDark : styles.textEffect
                    )}
                  >
                    青年部實習計畫幹部
                  </p>
                  <ul className="list-disc">
                    <li>
                      擔任此計畫北區幹部，管理約15人團隊，以舉辦活動為主，搜集輿情、組織聯繫、處理成員問題為輔
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* 鼓勵區 */}
        <section
          className={classnames(
            styles.encourage,
            'flex',
            'flex-col',
            'justify-center',
            'items-center',
            snowOpen && 'text-white'
          )}
          ref={encourageOffsetTop}
        >
          <div>
            <h1 className={classnames('text-6xl font-semibold', 'mb-10')}>
              重視團隊合作、善於隨機應變、強調雙向溝通
            </h1>
            <p className="text-xl">
              我擁有良好的適應能力，可以適應新的工作環境，也擁有熱忱的心，樂於學習新技術。
            </p>
          </div>
        </section>
        {/* Here作品區域 */}
        <section
          className={classnames(
            styles.Here,
            'relative',
            'flex',
            'justify-center'
          )}
          ref={hereOffsetTop}
          id="Here"
        >
          <div
            className={classnames(
              styles.HereIn,
              'grid',
              'grid-cols-2',
              hereShrink ? styles.HereInActive : ''
            )}
          >
            <div
              className={classnames(
                snowOpen ? 'bg-white' : 'bg-primary',
                'col-span-1',
                'flex',
                'justify-center',
                'items-center'
              )}
            >
              <div className={classnames(styles.HereImgDiv)}>
                <img
                  src={hereImg}
                  alt=""
                  className={classnames(
                    styles.HereImg,
                    hereShrink ? styles.ImgOut : ''
                  )}
                />
              </div>
              <div
                className={classnames(
                  styles.leftCircle,
                  snowOpen && styles.leftCircleDark
                )}
              ></div>
              <div
                className={classnames(
                  styles.rightCircle,
                  snowOpen && styles.rightCircleDark
                )}
              ></div>
            </div>
            <div
              className={classnames(
                'col-span-1',
                snowOpen ? 'bg-white' : 'bg-primary'
              )}
            ></div>
          </div>
          {/* 覆蓋分隔 */}
          <div
            className={classnames(
              'absolute',
              styles.HereCover,
              'grid',
              'grid-cols-2',
              hereShrink ? styles.HereCoverActive : ''
            )}
          >
            <div
              className={classnames(
                // 'bg-primary',
                'col-span-1',
                'flex',
                'justify-center',
                'items-center'
              )}
            >
              <div
                className={classnames(
                  styles.coverLeftCircle,
                  snowOpen && styles.coverLeftCircleDark
                )}
              ></div>
              <div className={classnames(styles.coverRightCircle)}></div>
            </div>
            <div
              className={classnames(
                'col-span-1',
                snowOpen ? 'bg-white' : 'bg-primary'
              )}
            >
              <div className="flex flex-col justify-center  items-center h-full">
                <p
                  className={classnames(
                    'text-3xl',
                    snowOpen ? 'text-primary' : 'text-white'
                  )}
                >
                  資策會前端工程師養成班
                </p>
                <p
                  className={classnames(
                    styles.hereText,
                    snowOpen ? 'text-primary' : 'text-white'
                  )}
                >
                  在專案中負責撰寫會員中心的部分、包含會員資料庫建置、機器人驗證、Email寄信功能、Email驗證功能、JWT驗證會員、區分會員等級、前後端資料比對、顯示歷史訂單。
                  前端技術：使用原生Javascript，進行註冊、登入/登出、前端驗證(RegExp)、個人資料編輯的功能撰寫，使用HTML、CSS、Bootstrap進行畫面的設計與切版。
                  後端技術：使用MySQL、Node.js將前端的資料傳到資料庫，並使用Node.js寫入會員、訂單、商品資料，以及後端驗證(帳號比對、加密過後的密碼比對、機器人比對、驗證碼比對)。
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* vespa */}
        <section className={classnames(styles.vespa, 'grid', 'grid-cols-2')}>
          <div
            className={classnames(
              styles.vespaLeft,
              'col-span-1',
              'flex',
              'justify-center',
              'items-center'
            )}
          >
            <div className={classnames(styles.vespaLeftCircle)}></div>
            <div className={classnames(styles.vespaRightCircle)}></div>
          </div>
          <div className={classnames(styles.vespaRight, 'col-span-1')}>
            <div className="flex flex-col justify-center  items-center h-full">
              <p className="text-3xl text-white">
                無限廚房、VESPA官網 切版練習（含RWD）
              </p>
              <p className={classnames(styles.vespaText)}>
                運用Bootstrap4進行主畫面的排版，搭配手刻CSS排版，包含輪播牆、卡片，根據瀏覽器大小進行display
                none/block的設定，使得照片或文字不會爆版。
                Navbar運用fixed的效果，可以隨著畫面移動，適當使用relative、absolute的功能，使得畫面有重疊的效果，看起來更活潑。
              </p>
            </div>
          </div>
        </section>
        {/* monterose */}
        <section
          className={classnames(styles.monterose, 'grid', 'grid-cols-2')}
        >
          <div
            className={classnames(
              styles.monteroseLeft,
              'col-span-1',
              'flex',
              'justify-center',
              'items-center'
            )}
          >
            <div className={classnames(styles.monteroseLeftCircle)}></div>
            <div className={classnames(styles.monteroseRightCircle)}></div>
          </div>
          <div className={classnames(styles.monteroseRight, 'col-span-1')}>
            <div className="flex flex-col justify-center  items-center h-full">
              <p className="text-3xl text-white">
                monterose網 切版練習（含RWD）
              </p>
              <p className={classnames(styles.monteroseText)}>
                運用Tailwind進行主畫面的排版，搭配手刻CSS排版，包含輪播牆、卡片，根據瀏覽器大小進行display
                none/block的設定，使得照片或文字不會爆版。
                Navbar運用fixed的效果，可以隨著畫面移動，適當使用relative、absolute的功能，使得畫面有重疊的效果，看起來更活潑。
              </p>
            </div>
          </div>
        </section>
        {/* myActivity */}

        <section
          className={classnames(
            'overflow-hidden relative',
            styles.myActivitySection
          )}
          ref={myActivityOffsetTop}
        >
          <div className={classnames(styles.activityBg)}></div>
          <div
            className={classnames(
              snowOpen ? styles.activityBg2Dark : styles.activityBg2,
              myActivityChangeColor ? styles.activityBg2Active : ''
            )}
          ></div>

          {/* <h1
            className={classnames(
              styles.MyActivity,
              'uppercase',
              'text-center',
              myActivityShrink ? styles.MyActivityActive : '',
              myActivityChangeColor ? styles.changeColor : ''
            )}
          >
            my activity
          </h1> */}
          {snowOpen ? (
            <h1
              className={classnames(
                styles.MyActivityDark,
                'uppercase',
                'text-center',
                myActivityShrink ? styles.MyActivityActive : '',
                myActivityChangeColor ? styles.changeColorDark : ''
              )}
            >
              my activity
            </h1>
          ) : (
            <h1
              className={classnames(
                styles.MyActivity,
                'uppercase',
                'text-center',
                myActivityShrink ? styles.MyActivityActive : '',
                myActivityChangeColor ? styles.changeColor : ''
              )}
            >
              my activity
            </h1>
          )}
        </section>
        {/* Activity Card */}
        <section
          className={classnames(
            styles.activityCardSection,
            'grid',
            'justify-center',
            snowOpen ? '' : 'bg-primary'
          )}
          ref={myActivityCardOffsetTop}
        >
          <div
            className={classnames(
              'grid',
              'xl:grid-cols-3',
              'grid-cols-2',
              'gap-x-28',
              'gap-y-20'
            )}
          >
            {/* card1 */}
            <div
              className={classnames(
                styles.activityCard,
                'flex',
                'flex-col',
                'items-center'
              )}
              ref={card1}
            >
              <div className={classnames(styles.cardImg1)}></div>
              <p className="text-2xl py-4">淡江公行系畢業</p>
              <p className="text-lg px-5 pb-2">
                在校成績優良，在學期間多次獲得系上成績優良的獎學金、農會、國泰人壽的獎學金。
                <br />
                2019曾參選商管學院補選議員。
                <br /> 2018年曾投稿大專生研究計畫。
              </p>
            </div>
            {/* card2 */}
            <div
              className={classnames(
                styles.activityCard,
                'flex',
                'flex-col',
                'items-center'
              )}
              ref={card2}
            >
              <div className={classnames(styles.cardImg2)}></div>
              <p className="text-2xl py-5">市長競選團隊</p>
              <p className="text-lg px-5 pb-2">
                參與2018市長選舉團隊，為組織部成員，曾負責規劃台北市大安、文山區行程規劃，拜訪各地方要角、安排公聽會、協助舉辦各類小型活動等。
              </p>
            </div>
            {/* card3 */}
            <div
              className={classnames(
                styles.activityCard,
                'flex',
                'flex-col',
                'items-center'
              )}
              ref={card3}
            >
              <div className={classnames(styles.cardImg3)}></div>
              <p className="text-2xl py-5">舉辦華航企業參訪</p>
              <p className="text-lg px-5 pb-2">
                主辦華航企業參訪活動，邀請交通部次長、桃園市長、立委擔任講者，規劃活動流程、撰寫企畫書。
              </p>
            </div>
            {/* card4 */}
            <div
              className={classnames(
                styles.activityCard,
                'flex',
                'flex-col',
                'items-center'
              )}
              ref={card4}
            >
              <div className={classnames(styles.cardImg4)}></div>
              <p className="text-2xl py-5">青年部實習計畫幹部</p>
              <p className="text-lg px-5 pb-2">
                擔任此計畫北區幹部，管理約15人團隊，以舉辦活動為主，搜集輿情、組織聯繫、處理成員問題為輔。
              </p>
            </div>
            <div
              className={classnames(
                styles.activityCard,
                'flex',
                'flex-col',
                'items-center'
              )}
              ref={card5}
            >
              <div className={classnames(styles.cardImg5)}></div>
              <p className="text-2xl py-5">科學班小論文助理老師</p>
              <p className="text-sm px-5 pb-2">
                回到母校萬芳高中協助學弟妹參與「捷運盃高中校際小論文專題發表」，指導學生該如何撰寫論文，
                並主辦一場小講座，邀請蔡沐霖主任擔任講者，講解企業社會責任該如何在政府、居民、企業中實作。
              </p>
            </div>
            {/* card6 */}
            <div
              className={classnames(
                styles.activityCard,
                'flex',
                'flex-col',
                'items-center'
              )}
              ref={card6}
            >
              <div className={classnames(styles.cardImg6)}></div>
              <p className="text-2xl py-5">自行經營網拍</p>
              <p className="text-lg px-5 pb-3">
                自行找廠商進貨，企劃書、商品、商品照、頁面、文稿、都由自己包辦，月營業額曾連續三個月皆達8萬，受邀獲選優選賣家。
              </p>
            </div>
          </div>
        </section>
        {/* contactSection */}
        <section
          className={classnames(
            styles.contactSection,
            'flex',
            'flex-col',
            'items-center',
            'pt-44',
            'pb-10',
            snowOpen ? '' : 'bg-primary'
          )}
          ref={contactOffsetTop}
        >
          <div className={classnames('flex', 'flex-col', styles.partersItems)}>
            <div
              className={classnames(
                'grid',
                'grid-cols-4',
                'items-center',
                styles.partersBorder
              )}
            >
              <div className="col-span-1 text-4xl">經歷</div>
              <div
                className={classnames(
                  styles.partersDetail,
                  'col-span-3',
                  'grid',
                  'grid-cols-3',
                  'gap-x-5',
                  'text-right'
                )}
              >
                <div className="flex items-center justify-center">
                  <img src={DPP} alt="" className={styles.schoolIcon} />
                  <p className={styles.partersInfo}>2018市長選舉</p>
                </div>
                <div className="flex items-center justify-center">
                  <img src={DPP} alt="" className={styles.schoolIcon} />
                  <p className={styles.partersInfo}>2020立委選舉</p>
                </div>
                <div className="flex items-center justify-end">
                  <img src={Industry} alt="" className={styles.schoolIcon} />
                  <p className={styles.partersInfo}>資策會前端工程師班</p>
                </div>
              </div>
            </div>
            <div
              className={classnames(
                'grid',
                'grid-cols-3',
                'items-center',
                styles.partersBorder2
              )}
            >
              <div className="col-span-1 text-4xl">教育程度</div>
              <div
                className={classnames(
                  styles.partersDetail,
                  'col-span-2',
                  'grid',
                  'grid-cols-2',
                  'gap-x-5',
                  'text-right'
                )}
              >
                <div className="flex items-center justify-end">
                  <img src={Tamkang} alt="" className={styles.schoolIcon} />
                  <p className={styles.partersInfo2}>淡江大學公共行政學系</p>
                </div>
                <div className="flex items-center justify-end">
                  <img src={NCCU} alt="" className={styles.schoolIcon} />
                  <p className={styles.partersInfo}>政治大學國發所碩二</p>
                </div>
              </div>
            </div>
            <div
              className={classnames(
                'grid',
                'grid-cols-3',
                'items-center',
                styles.partersBorder
              )}
            >
              <div className="col-span-1 text-4xl">其他</div>
              <div
                className={classnames(
                  styles.partersDetail,
                  'col-span-2',
                  'grid',
                  'grid-cols-2',
                  'gap-x-5',
                  'text-right'
                )}
              >
                <div className="flex items-center justify-end">
                  <img src={Wanfang} alt="" className={styles.schoolIcon} />
                  <p className={styles.partersInfo}>
                    萬芳高中科學班小論文助理老師
                  </p>
                </div>
                <div className="flex items-center justify-end">
                  <img src={Bethany} alt="" className={styles.schoolIcon} />
                  <p className={styles.partersInfo}>伯大尼孤兒院課後伴讀志工</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={classnames(styles.contactSeciton, 'flex', 'flex-col')}
          >
            <div className={classnames(styles.contactMe)}>聯絡方式</div>
            <div className={classnames('grid', 'grid-cols-4', 'mt-24')}>
              <div>
                <p className="text-3xl">居住地區</p>
                <p className={classnames('mt-10', 'text-xl')}>台北市文山區</p>
              </div>
              <div>
                <p className="text-3xl">手機號碼</p>
                <p className={classnames('mt-10', 'text-xl')}>0926266959</p>
              </div>
              <div>
                <p className="text-3xl">信箱</p>
                <p className={classnames('mt-10', 'text-lg')}>
                  tommy8852024@gmail.com
                </p>
              </div>
              <div>
                <p className="text-3xl">社群</p>
                <div className={classnames('flex', 'mt-10')}>
                  {/* <img
                    src={Facebook}
                    alt=""
                    className={classnames(styles.icon)}
                  />
                  <img
                    src={Github}
                    alt=""
                    className={classnames(styles.icon)}
                  />
                  <img
                    src={Instagram}
                    alt=""
                    className={classnames(styles.icon)}
                  />
                  <img
                    src={LinkedIn}
                    alt=""
                    className={classnames(styles.icon)}
                  /> */}
                  <i
                    className={classnames(
                      'fa',
                      'fa-facebook-square',
                      styles.facebook
                    )}
                  ></i>
                  <i
                    className={classnames(
                      'fa',
                      'fa-instagram',
                      styles.instagram
                    )}
                  ></i>
                  <i
                    className={classnames('fa', 'fa-linkedin', styles.linkedin)}
                  ></i>
                  <i
                    className={classnames(
                      'fa',
                      'fa-github-square',
                      'github',
                      styles.github
                    )}
                  ></i>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* cursor */}
      </div>
    </>
  )
}

export default Main
