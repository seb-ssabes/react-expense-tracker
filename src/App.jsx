
import { Box, Container, Flex } from '@chakra-ui/react'
import './App.css'
import Main from './components/main'

function App() {
  return (
    <Container bg={'#f8fafd'} maxW={'container.3xl'} height={'100vh'} p={0}>
      <Flex height={'full'} flexDirection="column">
        <Box flex={1} w="100%">
          <Main />
        </Box>
      </Flex>
    </Container>
  )
}

export default App
