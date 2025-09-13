import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import Summary from "../summary";
import ExpenseView from "../expense-view";



export default function Main() {
  const {isOpen, onOpen, onClose} = useDisclosure()

  return (
    <Flex textAlign={'center'} flexDirection={'column'} pr={'5'} pl={'5'}>
      <Flex alignItems={'center'} justifyContent={'space-between'} mt={'12'}>
        <Heading color={'gray.400'} display={["none", "block", "block", "block", "block"]}>
          Expense Tracker
        </Heading>
        <Flex alignItems={'center'}>
          <Button
            onClick={onOpen}
            bg={'gray.500'}
            color={'black'}
            ml={'4'}
              _hover={{
              bg: "gray.400",
              color: "white",
            }}
          >
            Add new Transaction
          </Button>
        </Flex>
      </Flex>
      <Summary isOpen={isOpen} onClose={onClose}/>
      <Flex
        w={'full'}
        alignItems={'flex-start'}
        justifyContent={'space-evenly'}
        flexDirection={["column", "column", "column", "row", "row"]}
      >
        <ExpenseView />
        <ExpenseView />
      </Flex>
    </Flex>
  )
}
