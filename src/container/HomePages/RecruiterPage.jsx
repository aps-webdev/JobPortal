import React, { useEffect, useRef } from 'react';
import './HomePage.styles.scss';

import NoJobs from '../../assets/no_data.png';
import Modal from '../../components/Modal/Modal.index';
import Cards from '../../components/Cards/Cards.index';
import NoData from '../../components/NoData/NoData.index';
import { POSTED_JOBS, APLICANTS_FOR_JOB } from '../../helpers/DummyData';

import { useRecruiterController } from './useRecruiterController';
import { connect } from 'react-redux';
import { setBodyHeight } from '../../redux/auth/auth.action';

function RecruitHomePage(props) {
  const { toggleModal, isModalOpen, handlePostJob } =
    useRecruiterController(props);

  const bodyRef = useRef(null);

  useEffect(() => {
    props.setBodyHeight(bodyRef.current.clientHeight);
  }, [props]);

  return (
    <React.Fragment>
      <div className='recruiterPage' ref={bodyRef}>
        <div className='recruiterPage_title'>Jobs posted by you</div>
        {1 ? (
          <div className='recruiterPage_postedJob'>
            {POSTED_JOBS.map((job, idx) => {
              return (
                <Cards.ActionCard
                  key={idx}
                  title={job.title}
                  text={job.description}
                  location={job.location}
                  btnLabel='View applications'
                  style={{ margin: '20px 0 0' }}
                  onClick={toggleModal}
                />
              );
            })}
          </div>
        ) : (
          <div className='recruiterPage_nodataContainer'>
            <NoData
              icon={NoJobs}
              info='Your posted jobs will show here!'
              btnLabel='Post a Job'
              onClick={handlePostJob}
            />
          </div>
        )}
      </div>
      {isModalOpen ? (
        <Modal
          text='Applicants for this job'
          description='Total 35 applications'
          onClose={toggleModal}
        >
          {0 ? (
            <div className='modalNoDataChild'>
              <NoData info='No applications available!' />
            </div>
          ) : (
            <div className='modalDataChild'>
              {APLICANTS_FOR_JOB.map((applicant, idx) => {
                return (
                  <Cards.AvatarCard
                    key={idx}
                    name={applicant.name}
                    email={applicant.email}
                    skills={applicant.skills}
                    style={{ marginBottom: '30px' }}
                  />
                );
              })}
            </div>
          )}
        </Modal>
      ) : null}
    </React.Fragment>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setBodyHeight: (height) => dispatch(setBodyHeight(height)),
});

export default connect(null, mapDispatchToProps)(RecruitHomePage);
