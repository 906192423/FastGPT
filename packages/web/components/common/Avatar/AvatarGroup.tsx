import React from 'react';
import Avatar from '.';
import { Box, Flex } from '@chakra-ui/react';

/**
 * AvatarGroup
 *
 * @param avatars - avatars array
 * @param max - max avatars to show
 * @param [groupId] - group id to make the key unique
 * @returns
 */
function AvatarGroup({
  avatars,
  max = 3,
  total
}: {
  max?: number;
  avatars: string[];
  total?: number;
}) {
  const remain = (total ?? avatars.length) - max;
  return (
    <Flex position="relative">
      {avatars.slice(0, max).map((avatar, index) => (
        <Avatar
          key={index}
          src={avatar}
          position={index > 0 ? 'absolute' : 'relative'}
          left={index > 0 ? `${index * 15}px` : 0}
          zIndex={index > 0 ? index + 1 : 0}
          w={'24px'}
          borderRadius={'50%'}
        />
      ))}
      {remain > 0 && (
        <Box
          position="relative"
          left={`${(max - 1) * 15 + 15}px`}
          w={'24px'}
          h={'24px'}
          borderRadius="50%"
          display="flex"
          alignItems="center"
          justifyContent="center"
          fontSize="sm"
          color="myGray.500"
        >
          +{String(remain)}
        </Box>
      )}
    </Flex>
  );
}

export default AvatarGroup;
