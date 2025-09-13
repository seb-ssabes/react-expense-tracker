import { Box, Flex, Heading, Text, Stack } from "@chakra-ui/react";
import TransactionForm from "../add-transaction";
import TransactionChartSummary from "../chart";

export default function Summary({onClose, isOpen}) {
  return (
    <Box
      p="6"
      border="1px solid"
      borderColor="gray.100"
      overflow="hidden"
      borderRadius="10"
      bg="white"
    >
      <Flex
        w="full"
        justify="space-between"
        align="flex-start"
        flexDirection={{ base: "column", lg: "row" }}
        gap={10}
      >
        <Stack
          flex={1}
          spacing={6}
          align="flex-start"
        >
          <Heading size="md" color="gray.600">
            Balance is $100
          </Heading>

          <Flex
            direction="column"
            bg="gray.50"
            w="full"
            p={4}
            border="1px solid"
            borderColor="gray.100"
            borderRadius="md"
          >
            <Heading size="md" color="gray.600">
              $100
            </Heading>
            <Text color="gray.500">Total Income</Text>
          </Flex>

          <Flex
            direction="column"
            bg="gray.50"
            w="full"
            p={4}
            border="1px solid"
            borderColor="gray.100"
            borderRadius="md"
          >
            <Heading size="md" color="gray.600">
              $100
            </Heading>
            <Text color="gray.500">Total Expense</Text>
          </Flex>
        </Stack>

        <Box
          flex={1}
          display="flex"
          justifyContent="center"
          alignItems="center"
          minH="300px"
          border="1px dashed gray"
          borderRadius="md"
        >
          <Heading size="lg">
            <TransactionChartSummary />
          </Heading>

          <TransactionForm onClose={onClose} isOpen={isOpen}/>
        </Box>
      </Flex>
    </Box>
  );
}
