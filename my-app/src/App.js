import React, { useEffect } from 'react'
import styles from './App.module.scss'
import classnames from 'classnames'
import mainImg from './IMG/IMG_4783.JPG'

function App() {
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
              <div>SKILLS</div>
              <div>PROJECTS</div>
              <div>ACTIVITIES</div>
              <div>CONTACTS</div>
              <div>RESUME</div>
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
          <h1 className={classnames(styles.MyActivity, 'uppercase','text-6xl')}>
            my activity
          </h1>
        </section>
      </div>
    </>
  )
}

export default App
