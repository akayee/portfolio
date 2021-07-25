import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Welcome to <br />
        My Personel Portfolio
      </SectionTitle>
      <SectionText>
        My purpose is being best software developer on the world!
      </SectionText>
      <Button onClick={()=> window.location = 'https//google.com'}>Learn More</Button>
    </LeftSection>
  </Section>
);

export default Hero;