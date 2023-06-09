import { Text, Box, Flex, Button, Image } from "@chakra-ui/react";

const BookFair = () => {
  return (
    <>
      <Box className="bg-sidebar py-24">
        <Flex flexDirection="row" justifyContent="center" alignItems="center">
          <Box className="pr-48">
            <Image
              boxSize="400px"
              borderRadius="full"
              src="https://rare-gallery.com/uploads/posts/5295469-books-hand-stack-holding-read-library-book-woman-finger-letter-tattoo-thinking-writing-poetry-author-carrying-book-arm-writer-essays-think-free-pictures.jpg"
            />
          </Box>
          <Box maxW="sm" className="py-24">
            <Text fontSize="4xl" as="b" color="#ebfa8c">
              Upcoming Book Fair
            </Text>
            <Text fontSize="xl" color="#ffffff">
              Discover thousands of newly published books, attend literary events and meet the authors. Know the upcoming book fairs all around the world and enjoy knowledge.
            </Text>
            <Button bg="#80b918" size="lg" marginTop={8}>
              Discover all
            </Button>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default BookFair;
