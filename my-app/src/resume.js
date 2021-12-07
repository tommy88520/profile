import React, { useEffect, useRef, useState } from 'react'
// import { Link } from 'react-router-dom'
import styles from './resume.module.scss'
import classnames from 'classnames'
import hereImg from './IMG/HERE.png'
import Website from './IMG/CV/website.svg'
import Location from './IMG/CV/mdi_location_on.svg'
import Call from './IMG/CV/mdi_call.svg'
import Mail from './IMG/CV/mdi_mail.svg'
import Facebook from './IMG/Facebook - Negative.svg'
import Github from './IMG/Github - Negative.svg'
import Instagram from './IMG/Instagram - Negative.svg'
import LinkedIn from './IMG/LinkedIn - Negative.svg'
import * as echarts from 'echarts'
import { Icon } from '@iconify/react'
function Resume() {
  const chart = useRef()
  useEffect(() => {
    const myChart = echarts.init(chart.current)
    const option = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          // Use axis to trigger tooltip
          type: 'shadow', // 'shadow' as default; can also be 'line' or 'shadow'
        },
      },
      legend: {},
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true,
      },
      xAxis: {
        type: 'value',
      },
      yAxis: {
        type: 'category',
        data: ['團隊合作', '隨機應變', '創意發想'],
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
    myChart.setOption(option)
  })

  return (
    <>
      <div className={classnames(styles.background)}>
        <div
          className={classnames(
            styles.resumeSection,
            'grid',
            'grid-cols-2',
            'gap-3',
            'p-2'
            // 'justify-center'
          )}
        >
          <div className={classnames(styles.leftSection, 'col-span-1')}>
            {/* 頭貼區 */}
            <div className={classnames(styles.nameSection)}>
              <div>
                <img
                  src={hereImg}
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
                <img src={Mail} alt="" className="p-1 mr-5" />
                <p className="tracking-wider">tommy8852024@gmail.com</p>
              </div>
              <div className={classnames(styles.contactDetail)}>
                <img src={Call} alt="" className="p-1 mr-5" />
                <p className="tracking-wider">0926266959</p>
              </div>
              <div className={classnames(styles.contactDetail)}>
                <img src={Website} alt="" className="p-1 mr-5" />
                <p className="tracking-wider">wnkcvonmwkc</p>
              </div>
              <div className={classnames(styles.contactDetail)}>
                <img src={Location} alt="" className="p-1  mr-5" />
                <p className="tracking-wider">台北市文山區</p>
              </div>
            </div>
            {/* Industry Knowledge */}
            <div className="p-2">
              <div className={classnames(styles.IndustryKnowledge, 'px-5')}>
                <p>Industry Knowledge</p>
                <ul className={classnames('list-disc')}>
                  <li>User Interface</li>
                  <li>User experience</li>
                  <li>撰寫企劃</li>
                </ul>
              </div>
            </div>
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
                  <p className="text-xl">Social media</p>
                </div>
                <div
                  className={classnames(
                    styles.SocialMediaIcon,
                    'grid',
                    'grid-cols-4',
                    'p-2'
                  )}
                >
                  <img
                    src={Facebook}
                    alt=""
                    className={classnames(styles.mediaIcon)}
                  />
                  <img
                    src={Github}
                    alt=""
                    className={classnames(styles.mediaIcon)}
                  />
                  <img
                    src={Instagram}
                    alt=""
                    className={classnames(styles.mediaIcon)}
                  />
                  <img
                    src={LinkedIn}
                    alt=""
                    className={classnames(styles.mediaIcon)}
                  />
                </div>
              </div>
            </div>
            {/* Hobbies */}
            <div className="p-2">
              <div className={classnames(styles.SocialMedia)}>
                <div className={classnames(styles.socialText, 'p-2')}>
                  <p className="text-xl">Social media</p>
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
          <div className={classnames(styles.rightSection, 'col-span-1')}></div>
        </div>
      </div>
    </>
  )
}

export default Resume
