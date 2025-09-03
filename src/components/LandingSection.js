import React from 'react';
import { Avatar, Heading, VStack, Box } from '@chakra-ui/react';
import FullScreenSection from './FullScreenSection';
import { motion } from 'framer-motion';

const greeting = 'Hello, I am Pete!';
const bio1 = 'A frontend developer';
const bio2 = 'specialised in React';
const MotionDiv = motion.div;

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    className="animated-bg"
    // w="100%"
    // h="100vh"
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    // backgroundColor="#2A4365"
    backgroundColor="#1a365d"
    borderRadius="360"
  >
    <VStack>
      <MotionDiv
        align="center"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 0.5 }}
      >
        <Avatar
          src="https://i.pravatar.cc/150?img=7"
          size="2xl"
          name="name"
          // mb={4}
          mt={-40}
        />
        <Heading
          fontSize={{ base: '14px', md: '20px' }}
          color="gray.400"
          mt={-8}
        >
          {greeting}
        </Heading>
      </MotionDiv>
      <Box h={{ base: 2, md: 6 }} />
      <MotionDiv
        initial={{ opacity: 0, x: 60 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
      >
        <Heading size="2xl" mt={12}>
          {bio1}
        </Heading>
      </MotionDiv>
      <MotionDiv
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, delay: 1.5 }}
      >
        <Heading size="2xl">{bio2}</Heading>
      </MotionDiv>
    </VStack>
  </FullScreenSection>
);

export default LandingSection;
