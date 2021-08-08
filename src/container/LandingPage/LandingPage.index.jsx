import React from 'react';
import { useHistory } from 'react-router-dom';
import './LandingPage.styles.scss';

import Logo from '../../components/Logo/Logo.index';
import Button from '../../components/Button/Button.index';
import CoverImg from '../../assets/cover.jpg';
import Cards from '../../components/Cards/Cards.index';

const cardContent = [
  {
    title: 'Get more visibility',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Organize your candidates',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
  {
    title: 'Verify their abilities',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.',
  },
];

function LandingPage(props) {
  let history = useHistory();
  return (
    <React.Fragment>
      <div className='bodyWrap'>
        <section className='cover'>
          <div className='cover_text'>
            <p className='cover_text_welcome'>Welcome to</p>
            <Logo size='large' />
            <div className='getStarted'>
              <Button primary onClick={() => history.push('/signup')}>
                Get Started
              </Button>
            </div>
          </div>
          <div className='cover_image'>
            <img src={CoverImg} alt='hand shaking' />
          </div>
        </section>
        <section className='whyUs'>
          <div className='whyUs_text'>why us</div>
          <div className='whyUs_cards'>
            {cardContent.map((card, idx) => {
              return (
                <Cards.InfoCard key={idx} title={card.title} text={card.text} />
              );
            })}
          </div>
        </section>
        <section className='companiesTrust'>
          <div className='companiesTrust_text'>companies who trust us</div>
          <div className='companiesTrust_brand'></div>
        </section>
      </div>
    </React.Fragment>
  );
}

export default LandingPage;
