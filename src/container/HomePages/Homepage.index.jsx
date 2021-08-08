import React, { useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom';
import './HomePage.styles.scss';

import Cards from '../../components/Cards/Cards.index';
import NoData from '../../components/NoData/NoData.index';
import Modal from '../../components/Modal/Modal.index';

import NoJobs from '../../assets/no_data.png';

const POSTED_JOBS = [
  {
    title: 'UI UX Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
    location: 'Bengaluru',
  },
  {
    title: 'Front-end Designer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
    location: 'Gurgaon',
  },
  {
    title: 'Java Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
    location: 'Bengaluru',
  },
  {
    title: 'Frontend Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
    location: 'Bengaluru',
  },
  {
    title: 'Frontend Developer',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt…',
    location: 'Bengaluru',
  },
];

const APLICANTS_FOR_JOB = [
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
  {
    name: 'Eliza Lucas',
    email: 'abc123@email.com',
    skills: 'Coding, designing, graphics, website, app ui',
  },
];

function RecruitHomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { pathname } = useLocation();
  let history = useHistory();

  const handlePostJob = () => {
    history.push(`${pathname}/postjob`);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  return (
    <React.Fragment>
      <div className='recruiterPage'>
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

function CandidateHomePage() {
  return (
    <React.Fragment>
      <div className='candidatePage'>
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

const HomePage = {
  RecruitHomePage,
  CandidateHomePage,
};

export default HomePage;
