import React, { useEffect, useRef } from 'react'
import styles from './App.module.scss'
import classnames from 'classnames'
import mainImg from './IMG/IMG_4783.JPG'
import AnimatedCursor from 'react-animated-cursor'
import Facebook from './IMG/Facebook - Negative.svg'
import Github from './IMG/Github - Negative.svg'
import Instagram from './IMG/Instagram - Negative.svg'
import LinkedIn from './IMG/LinkedIn - Negative.svg'

function App() {
  // const cursor = useRef()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <div className={styles.scrollBar}>
        <header
          className={classnames(
            styles.navHeader,
            'flex',
            'w-full',
            'justify-center',
            'items-center'
          )}
        >
          <div className="container flex justify-between text-primary">
            <div className={classnames(styles.logo)}>HYM</div>
            <div className={classnames(styles.nav, 'flex', 'justify-around')}>
              <div className={classnames(styles.navLink)}>
                <span className={classnames(styles.navSkill)}>SKILLS</span>
              </div>
              <div className={classnames(styles.navLink)}>
                <span className={classnames(styles.navSkill)}>PROJECTS</span>
              </div>
              <div className={classnames(styles.navLink)}>
                <span className={classnames(styles.navSkill)}>ACTIVITIES</span>
              </div>
              <div className={classnames(styles.navLink)}>
                <span className={classnames(styles.navSkill)}>CONTACTS</span>
              </div>
              <div className={classnames(styles.navLink)}>
                <span className={classnames(styles.navSkill)}>RESUME</span>
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
          className={classnames(styles.Here, 'grid', 'grid-cols-2', 'relative')}
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
                src={mainImg}
                alt=""
                className={classnames(styles.HereImg)}
              />
            </div>
            <div className={classnames(styles.leftCircle)}></div>
            <div className={classnames(styles.rightCircle)}></div>
          </div>
          <div className={classnames('bg-primary', 'col-span-1')}></div>
          {/* 分隔 */}
          <div
            className={classnames(
              'absolute',
              styles.Here,
              'grid',
              'grid-cols-2'
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
        <section>
          <h1
            className={classnames(
              styles.MyActivity,
              'uppercase',
              'text-center'
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
            <div className={classnames(styles.activityCard)}></div>
            <div className={classnames(styles.activityCard)}></div>
            <div className={classnames(styles.activityCard)}></div>
            <div className={classnames(styles.activityCard)}></div>
            <div className={classnames(styles.activityCard)}></div>
            <div className={classnames(styles.activityCard)}></div>
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
                <p className={styles.partersInfo}>淡江大學公共行政學系</p>
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
                <p className={styles.partersInfo}>伯大尼孤兒院課後半讀志工</p>
              </div>
            </div>
          </div>
          <div
            className={classnames(styles.contactSeciton, 'flex', 'flex-col')}
          >
            <div className={classnames(styles.contactMe)}>聯絡方式</div>
            <div className={classnames('grid', 'grid-cols-4','mt-24')}>
              <div >
                <p className="text-3xl">居住地區</p>
                <p className={classnames('mt-10','text-xl')}>台北市文山區</p>
              </div>
              <div>
                <p className="text-3xl">手機號碼</p>
                <p className={classnames('mt-10','text-xl')}>0926266959</p>
              </div>
              <div>
                <p className="text-3xl">信箱</p>
                <p className={classnames('mt-10','text-xl')}>tommy8852024@gmail.com</p>
              </div>
              <div>
                <p className="text-3xl">社群</p>
                <div className={classnames('flex','mt-10')}>
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
        <div className="Cursor">
          <AnimatedCursor
            innerSize={20}
            outerSize={20}
            color="246, 195, 39"
            outerAlpha={0.2}
            innerScale={1}
            outerScale={5}
          />
        </div>
      </div>
    </>
  )
}

export default App
