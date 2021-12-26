import React from 'react'
import styles from './Airplane.module.scss'
import classnames from 'classnames'

function Airplane(props) {
  const { snowHeight } = props

  return (
    <div
      className={classnames(styles.background)}
      style={{ height: `${snowHeight}px` }}
    >
      <div className={classnames(classnames(styles.clouds))}></div>
      <div className={classnames(classnames(styles.clouds2))}></div>
      <div className={classnames(classnames(styles.clouds3))}></div>

      <a href="mailto:tommy8852024@gmail.com?subject=黃彥銘你好">
        <svg
          className={classnames(styles.airplane)}
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          width="301.18"
          height="99.44"
          viewBox="0 0 301.18 99.44"
        >
          <g>
            <polyline
              className={classnames(styles.cls1)}
              points="296.18 13.18 1.27 0.56 25.2 24.35"
            />
            <g>
              <polygon
                className={classnames(styles.cls2)}
                points="24.76 23.82 296.61 12.82 34.29 98.78 24.76 23.82"
              />
              <path
                d="M1166.08,987.66,907.75,1072.3l-9.38-73.81,267.71-10.83m7.14-1.29-276,11.17,9.67,76.09,266.31-87.26Z"
                transform="translate(-873.05 -974.19)"
              />
            </g>
            <g>
              <polygon
                className={classnames(styles.cls2)}
                points="41.11 38.61 295.66 13.13 34.45 98.72 41.11 38.61"
              />
              <path
                d="M1164.18,988.28l-256.1,83.92,6.52-58.94,249.58-25m9-1.91-259.52,26-6.79,61.28,266.31-87.26Z"
                transform="translate(-873.05 -974.19)"
              />
            </g>
            <g>
              <polygon
                className={classnames(styles.cls2)}
                points="41.76 38.55 297.93 13 99.94 96.46 41.76 38.55"
              />
              <path
                d="M1167.73,988l-194.63,82-57.2-56.93L1167.73,988m6.49-1.65-260.52,26,59.17,58.89,201.35-84.87Z"
                transform="translate(-873.05 -974.19)"
              />
            </g>
          </g>
        </svg>
      </a>
      <p className={classnames(styles.text)}>點擊飛機來寄信給我～</p>

      {/* <div className={classnames(styles.trees)}></div> */}
    </div>
  )
}

export default Airplane