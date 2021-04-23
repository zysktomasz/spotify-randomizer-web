import React from 'react';
import { Box, Circle, Heading, Stack, Text } from '@chakra-ui/react';

export interface HowToElementProps {
  number: number;
  heading: string;
  content?: string;
}

function HowToElement(props: HowToElementProps): JSX.Element {
  const { number, heading, content } = props;
  return (
    <Box p={5} shadow="md" borderWidth="1px">
      <Box d="flex" alignItems="baseline">
        <Circle size="40px" bg="green.300" color="white">
          <Text fontSize={17}>{number}</Text>
        </Circle>
        <Stack ml={3} spacing={5}>
          <Heading fontSize="xl">{heading}</Heading>
          <Text width={800}>{content}</Text>
        </Stack>
      </Box>
    </Box>
  );
}

export default HowToElement;
