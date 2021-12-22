import React from 'react'
import classnames from 'classnames'
import styles from './start.module.scss'
function Start() {
  return (
    <>
      <div className={classnames(styles.start)}>
        <div className={classnames(styles.fly)}>
          <div>誠摯的感謝</div>
          <div>您願意點進來觀看</div>
          <div>一起來認識我吧！</div>
        </div>
      </div>
    </>
  )
}

export default Start
