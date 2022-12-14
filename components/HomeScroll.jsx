import React, { useRef, useEffect } from 'react'

function HomeScroll() {
  let videoRef = useRef(null)
  let divRef = useRef(null)
  let accelAmount = 0.45 //越小延迟效果越大，越大延迟效果越小
  let scrollPos = 1
  let delay = 0

  useEffect(() => {
    const ScrollMagic = require('scrollmagic')
    let controller = new ScrollMagic.Controller()
    let scene = new ScrollMagic.Scene({
      duration: 4000,
      triggerElement: divRef,
      triggerHook: 0
    })
      .setPin(divRef)
      .addTo(controller)

    scene.on('update', (e) => {
      scrollPos = e.scrollPos / 1000
    })

    setInterval(() => {
      delay += (scrollPos - delay) * accelAmount
      videoRef.currentTime = delay
      // = scrollPos 如果不想要延迟动画
    }, 100) // 100 所处的位置的参数越高， scroll 的时候画面越流畅
  }, [])

  const toIphonePage = () => {
    window.location.href = '/iphone'
  }

  return (
    <div>
      <div
        ref={(e) => (divRef = e)}
        className="videoDiv"
        style={{ cursor: 'pointer' }}
        onClick={() => toIphonePage()}
      >
        <video
          ref={(e) => (videoRef = e)}
          width="100%"
          height="100%"
          src="/img/iphone11.mp4"
          type="video/mp4"
          muted="muted"
        />
      </div>
    </div>
  )
}

export default HomeScroll
