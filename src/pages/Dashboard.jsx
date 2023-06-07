import { Flex, Box, Button, ButtonGroup, Spacer } from "@chakra-ui/react";

const Dashboard = () => {
  return (
    <>
      <Flex>
        <div className="header bg-sidebar w-screen h-screen">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="100%"
            height="100%"
            py={12}
            bgImage="url('https://assets.weforum.org/article/image/JMF96ETfn1kSViVnUou1Z0XIDwWcPpT5mrPc7-ytpAc.jpg')"
            bgPosition="center"
            bgRepeat="no-repeat"
            mb={2}
          >
            <Flex flexDirection="column">
              <h1 className="text-5xl font-bold text-white mb-9 bg-sidebar">
                Find books, author you love,<br></br>or discover more
              </h1>
              <ButtonGroup gap="4">
                <Button bg="#80b918">Sign up and start</Button>
                <Button bg="#040f16" color="#ffffff">
                  Sign in
                </Button>
              </ButtonGroup>
            </Flex>
          </Box>
        </div>
        <div className="content bg-sidebar">Content</div>
      </Flex>
    </>
  );
};

export default Dashboard;
