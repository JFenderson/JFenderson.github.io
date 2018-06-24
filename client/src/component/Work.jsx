import React from 'react';
import moment from 'moment';


const Work = (props) => {
    const WorkObj = props.workData;
    const getWork = props.workData.map(function(item, index) {
        const startDate = moment(item.startDate).format('MMM, YYYY');
        const endDate = moment(item.endDate).format('MMM, YYYY');
        return (
            <div className="box-list__box" key={index}>
              <h3 className="section-box-title">{item.company}</h3>
              <h5>{item.position}</h5>
              <span>{item.startDate} - {item.endDate}</span>
            </div>
        )
    });

    return (
        <section className="section section__work">
          <h2 className="section__title">Work</h2>
          <div className="section-content">
            <div className="box-list">
              {getWork}
            </div>
          </div>
        </section>
        )
}


export default Work;