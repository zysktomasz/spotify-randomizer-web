import React from 'react';
import FluidContainer from '../common/FluidContainer';
import { Heading, Stack } from '@chakra-ui/react';
import HowToElement from './HowToElement';
import { howToElementsData } from './howToElementsData';

function Homepage(): JSX.Element {
  const elements = howToElementsData.map((element, index) => {
    const indexPlusOne = ++index;
    return (
      <HowToElement key={indexPlusOne} number={indexPlusOne} heading={element.heading} content={element.content} />
    );
  });

  return (
    <FluidContainer>
      <Stack spacing={1}>
        <Heading size={'lg'} mb={5}>
          How does SpotifyRandomizer work ?
        </Heading>
        {elements}
      </Stack>
    </FluidContainer>
  );
}

export default Homepage;
