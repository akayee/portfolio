import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 16, text: 'Completed Software Project'},
  { number: 8, text: 'Years of Experience', },
  { number: 11, text: 'Software Language', }
];

const Acomplishments = () => (
  <Section>
    <SectionTitle>Personel Acomplishments</SectionTitle>
    <Boxes>
      {data.map((card,index)=>(
        <Box key={index}>
          <BoxNum> {card.number}</BoxNum>
          <BoxText> {card.text} </BoxText>
        </Box>
      ))}
    </Boxes>
    <SectionDivider />
  </Section>
);

export default Acomplishments;
