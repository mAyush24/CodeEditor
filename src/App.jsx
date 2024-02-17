import { Box } from "@chakra-ui/react";
import CodeEditor from "./components/CodeEditor";

function App() {
  return (
    <Box minH="100vh" bg="#1E1E1E" color="gray.500" px={4} py={5}>
      <CodeEditor />
    </Box>
  );
}

export default App;
