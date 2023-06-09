import { Box, Flex, Text, Image, Button } from "@chakra-ui/react";

const DonateBook = () => {
  return (
    <>
      <Box className="bg-sidebar py-24">
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Box>
            <Box bg="#141d21" borderRadius="25" paddingX={8} paddingY={8} marginLeft={48}>
              <Text fontSize="3xl" as="b" color="#ebfa8c">
                Got old books looking for a new home?
              </Text>
              <Text fontSize="xl" color="#ffffff">
                Whether you're moving, cleaning, or just bored looking at your to-be-read pile that'll never get done, donate it to us now!
              </Text>
              <Button bg="#80b918" size="lg" marginTop={8}>
                Donate now
              </Button>
            </Box>
          </Box>
          <Box className="pr-48 -ml-10">
            <Image
              boxSize="400px"
              borderRadius="10"
              src="https://www.thespruce.com/thmb/sKD8bq7evzALE7MoLLOyESWDd_o=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-sell-used-books-for-the-most-cash-1388970-01-7815a93d4c95431999e1b5192ece1699.jpg"
            />
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default DonateBook;
