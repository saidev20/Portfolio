import { Box, Heading, Stack, Text, Wrap, WrapItem } from '@chakra-ui/react';

const normalizeItem = (item) => (typeof item === 'string' ? item : item?.name ?? '');

const SkillCategory = ({ title, items }) => (
  <Box
    bg="rgba(17, 17, 17, 0.8)"
    borderRadius="xl"
    border="1px solid"
    borderColor="whiteAlpha.200"
    p={6}
    w="full"
  >
    <Stack spacing={4}>
      <Heading size="md">{title}</Heading>
      <Wrap spacing={3}>
        {items.map((item) => {
          const value = normalizeItem(item);
          return (
            <WrapItem key={value}>
              <Box px={3} py={1} borderRadius="md" bg="whiteAlpha.100" border="1px solid" borderColor="whiteAlpha.200">
                <Text>{value}</Text>
              </Box>
            </WrapItem>
          );
        })}
      </Wrap>
    </Stack>
  </Box>
);

export default SkillCategory;
