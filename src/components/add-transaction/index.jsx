import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
  Radio,
  RadioGroup,
  Stack,
} from "@chakra-ui/react";

export default function TransactionForm({ onClose, isOpen }) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transaction</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl mb={4}>
              <FormLabel>Enter Description</FormLabel>
              <Input
                placeholder="Enter Transaction description"
                name="description"
                type="text"
              />
            </FormControl>

            <FormControl mb={4}>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter Transaction amount"
                name="amount"
                type="number"
              />
            </FormControl>

            <FormControl>
              <FormLabel>Select Type</FormLabel>
              <RadioGroup defaultValue="income">
                <Stack direction="row">
                  <Radio value="income" colorScheme="blue">
                    Income
                  </Radio>
                  <Radio value="expense" colorScheme="red">
                    Expense
                  </Radio>
                </Stack>
              </RadioGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" type="submit">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
}

