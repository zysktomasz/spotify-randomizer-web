import React from 'react';
import { ButtonGroup, ButtonGroupProps, IconButton } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/all';

function SocialMediaLinks(props: ButtonGroupProps): JSX.Element {
  return (
    <ButtonGroup variant="ghost" color="gray.600" {...props}>
      <IconButton
        as="a"
        href="https://www.linkedin.com/in/tomasz-zysk/"
        aria-label="LinkedIn"
        icon={<FaLinkedin fontSize="20px" />}
      />
      <IconButton as="a" href="https://github.com/zysktomasz" aria-label="GitHub" icon={<FaGithub fontSize="20px" />} />
      <IconButton as="a" href="http://zysk.it" aria-label="Portfolio Website" icon={<FaGlobe fontSize="20px" />} />
    </ButtonGroup>
  );
}

export default SocialMediaLinks;
