import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import styles from './main.module.scss'
import classnames from 'classnames'
// import mainImg from './IMG/IMG_4783.JPG'
import hereImg from './IMG/HERE.png'
import AnimatedCursor from 'react-animated-cursor'
import Facebook from './IMG/Facebook - Negative.svg'
import Github from './IMG/Github - Negative.svg'
import Instagram from './IMG/Instagram - Negative.svg'
import LinkedIn from './IMG/LinkedIn - Negative.svg'
import VanillaTilt from 'vanilla-tilt'

function Main() {
  // const [windowLocation, setWindowLocation] = useState('')
  const [navBar, setNavBar] = useState(false)
  const [skillshrink, setSkillshrink] = useState(false)
  const [hereShrink, setHereShrink] = useState(false)
  const [myActivityShrink, setMyActivityShrink] = useState(false)
  const [myActivityChangeColor, setMyActivityChangeColor] = useState(false)

  const [collapse, setCollapse] = useState(true)

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

    // console.log(encourageffsetTop.current.offsetTop)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [collapse])
  function nabShrink() {
    // let userScrollTOP06 = window.innerHeight * 0.7 + window.scrollY //使用者真正觸發的位置，頁面的八成
    // window.location.hash = ''

    const encourageSection = encourageOffsetTop.current.offsetTop
    const hereSection = hereOffsetTop.current.offsetTop
    const myActivitySection2 = myActivityOffsetTop.current.offsetTop

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
  return (
    <>
      <div className={styles.scrollBar}>
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
            <div className={classnames(styles.logo)}>HYM</div>
            <div className={classnames(styles.nav)}>
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
              <p className="text-7xl tracking-wider font-semibold">
                TOMMY <span className="text-secondary">HUANG</span>
              </p>
              <p className="text-6xl my-10 font-bold">黃彥銘</p>
              <p className="text-xl text-secondary">
                With great passion in front-end develop, also, UI/UX design is
                interested in. <br /> Currently, I'm continuously learning more
                techniques of front-end development.
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
              skillshrink ? styles.skillsActive : ''
            )}
          >
            <div
              className={classnames(
                styles.skillSection,
                'grid',
                'grid-cols-3',
                'text-center',
                'text-white'
              )}
            >
              <div className={classnames(styles.skillDetail)}>
                <p>技能</p>
                <p>技能介紹nvjfnvejvnevnenvnefnlv</p>
              </div>
              <div className={classnames(styles.skillDetail)}>
                <p>技能</p>
                <p>技能介紹nvjfnvejvnevnenvnefnlv</p>
              </div>
              <div className={classnames(styles.skillDetail)}>
                <p>技能</p>
                <p>技能介紹nvjfnvejvnevnenvnefnlv</p>
              </div>
              <div className={classnames(styles.skillDetail)}>
                <p>技能</p>
                <p>技能介紹nvjfnvejvnevnenvnefnlv</p>
              </div>
              <div className={classnames(styles.skillDetail)}>
                <p>技能</p>
                <p>技能介紹nvjfnvejvnevnenvnefnlv</p>
              </div>
              <div className={classnames(styles.skillDetail)}>
                <p>技能</p>
                <p>技能介紹nvjfnvejvnevnenvnefnlv</p>
              </div>
              <div className={classnames(styles.skillDetail)}>
                <p>技能</p>
                <p>技能介紹nvjfnvejvnevnenvnefnlv</p>
              </div>
              <div className={classnames(styles.skillDetail)}>
                <p>技能</p>
                <p>技能介紹nvjfnvejvnevnenvnefnlv</p>
              </div>
              <div className={classnames(styles.skillDetail)}>
                <p>技能</p>
                <p>技能介紹nvjfnvejvnevnenvnefnlv</p>
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
            'items-center'
          )}
          ref={encourageOffsetTop}
        >
          <div>
            <h1 className={classnames('text-6xl font-semibold', 'mb-10')}>
              團隊合作、積極進取、講一些幹話
            </h1>
            <p className="text-xl">
              我總是讓自己處理一個好棒棒的狀態,你覺得好棒棒,我也覺得好棒棒
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
                'bg-primary',
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
              <div className={classnames(styles.leftCircle)}></div>
              <div className={classnames(styles.rightCircle)}></div>
            </div>
            <div className={classnames('bg-primary', 'col-span-1')}></div>
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
              <div className={classnames(styles.coverLeftCircle)}></div>
              <div className={classnames(styles.coverRightCircle)}></div>
            </div>
            <div className={classnames('bg-primary', 'col-span-1')}></div>
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
          <div className={classnames(styles.vespaRight, 'col-span-1')}></div>
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
          <div
            className={classnames(styles.monteroseRight, 'col-span-1')}
          ></div>
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
              styles.activityBg2,
              myActivityChangeColor ? styles.activityBg2Active : ''
            )}
          ></div>

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
        </section>
        {/* Activity Card */}
        <section
          className={classnames(
            styles.activityCardSection,
            'grid',
            'justify-center'
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
            <div
              className={classnames(
                styles.activityCard,
                'flex',
                'flex-col',
                'items-center'
              )}
              ref={card1}
            >
              <div className={classnames(styles.cardImg)}></div>
              <p className="text-3xl py-5">Joeylene Rivera</p>
              <p className="text-xl px-5">
                A kiddo who uses Bootstrap and Laravel in web development.
              </p>
            </div>
            <div
              className={classnames(
                styles.activityCard,
                'flex',
                'flex-col',
                'items-center'
              )}
              ref={card2}
            >
              <div className={classnames(styles.cardImg)}></div>
              <p className="text-3xl py-5">Joeylene Rivera</p>
              <p className="text-xl px-5">
                A kiddo who uses Bootstrap and Laravel in web development.
              </p>
            </div>
            <div
              className={classnames(
                styles.activityCard,
                'flex',
                'flex-col',
                'items-center'
              )}
              ref={card3}
            >
              <div className={classnames(styles.cardImg)}></div>
              <p className="text-3xl py-5">Joeylene Rivera</p>
              <p className="text-xl px-5">
                A kiddo who uses Bootstrap and Laravel in web development.
              </p>
            </div>
            <div
              className={classnames(
                styles.activityCard,
                'flex',
                'flex-col',
                'items-center'
              )}
              ref={card4}
            >
              <div className={classnames(styles.cardImg)}></div>
              <p className="text-3xl py-5">Joeylene Rivera</p>
              <p className="text-xl px-5">
                A kiddo who uses Bootstrap and Laravel in web development.
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
              <div className={classnames(styles.cardImg)}></div>
              <p className="text-3xl py-5">Joeylene Rivera</p>
              <p className="text-xl px-5">
                A kiddo who uses Bootstrap and Laravel in web development.
              </p>
            </div>
            <div
              className={classnames(
                styles.activityCard,
                'flex',
                'flex-col',
                'items-center'
              )}
              ref={card6}
            >
              <div className={classnames(styles.cardImg)}></div>
              <p className="text-3xl py-5">Joeylene Rivera</p>
              <p className="text-xl px-5">
                A kiddo who uses Bootstrap and Laravel in web development.
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
            'pb-10'
          )}
          ref={contactOffsetTop}
        >
          <div className={classnames('flex', 'flex-col', styles.partersItems)}>
            <div
              className={classnames(
                'grid',
                'grid-cols-3',
                'items-center',
                styles.partersBorder
              )}
            >
              <div className="col-span-1 text-4xl">經歷</div>
              <div
                className={classnames(
                  styles.partersDetail,
                  'col-span-2',
                  'grid',
                  'grid-cols-3',
                  'gap-x-5',
                  'text-right'
                )}
              >
                <p className={styles.partersInfo}>2018市長選舉</p>
                <p className={styles.partersInfo}>2020立委選舉</p>
                <p className={styles.partersInfo}>資策會前端工程師班</p>
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
                <p className={styles.partersInfo2}>淡江大學公共行政學系</p>
                <p className={styles.partersInfo}>政治大學國發所碩二</p>
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
                <p className={styles.partersInfo}>
                  萬芳高中科學班小論文助理老師
                </p>
                <p className={styles.partersInfo}>伯大尼孤兒院課後伴讀志工</p>
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
                <p className={classnames('mt-10', 'text-xl')}>
                  tommy8852024@gmail.com
                </p>
              </div>
              <div>
                <p className="text-3xl">社群</p>
                <div className={classnames('flex', 'mt-10')}>
                  <img
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
                  />
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
