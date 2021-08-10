import React, { useEffect, useRef } from 'react';
import './HomePage.styles.scss';

import Cards from '../../components/Cards/Cards.index';

import { POSTED_JOBS } from '../../helpers/DummyData';
import { connect } from 'react-redux';
import { setBodyHeight } from '../../redux/auth/auth.action';
import { useCandidateController } from './useCandidateController';

function CandidateHomePage(props) {
  const {} = useCandidateController(props);
  const bodyRef = useRef(null);

  useEffect(() => {
    props.setBodyHeight(bodyRef.current.clientHeight);
  }, [props]);

  return (
    <React.Fragment>
      <div className='candidatePage' ref={bodyRef}>
        <div className='candidatePage_title'>Jobs available for you</div>
        <div className='candidatePage_availableJob'>
          {POSTED_JOBS.map((job, idx) => {
            return (
              <Cards.ActionCard
                key={idx}
                title={job.title}
                text={job.description}
                location={job.location}
                btnLabel='Apply'
                style={{ margin: '20px 0 0' }}
              />
            );
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setBodyHeight: (height) => dispatch(setBodyHeight(height)),
});

export default connect(null, mapDispatchToProps)(CandidateHomePage);
