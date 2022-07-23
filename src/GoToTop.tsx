
import React, { useEffect, useState } from 'react'

const GotoTop = () => {
  const [showTop, setShowTop] = useState<Boolean>(false)

  useEffect(() => {
    const handleScroll= () => {
      setShowTop(window.scrollY >= 200)
    }
    window.addEventListener('scroll', handleScroll)
    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <>
      <div className="row">
        <div className="col-md-3">
          {showTop && (
            <button className="btn " onClick={() => window.scrollTo({top:0})}>
              Go To Top
            </button>

          )}

        </div>
      </div>
    </>
  )
}

export default GotoTop