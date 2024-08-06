import React from 'react';

const ExploreSec = ({exploreImg, children}) => {
  return (
    <section>
        <div className="container">
            <div className="explore_left">
                {children}
            </div>
            <div className="explore_right">
              <img src={exploreImg} alt="explore" />
            </div>
        </div>
    </section>
  )
}

export default ExploreSec