import { Input, Flex, Box, Button, ButtonGroup, InputRightElement, InputGroup, Text, Image } from "@chakra-ui/react";
import BookCard from "../components/BookCard";
import SignUpModal from "../components/SignUpModal";
import { BsSearchHeart } from "react-icons/bs";
import BookFair from "../components/BookFair";

const Dashboard = () => {
  return (
    <>
      <Box width="90vw" height="100vh" bg="#040f16" id="circle"></Box>

      <Box height="100vh" bgImage="url('https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg')" bgPosition="center" bgSize="cover"></Box>
      <Box id="above-circle">
        <h1 className="text-5xl font-bold text-white mb-9 bg-sidebar">
          Find books, author you love,<br></br>or discover more
        </h1>
        <InputGroup>
          <Input pr="4.5rem" placeholder="Search book or author" bg="#040f16" borderColor="#80b918" _placeholder={{ opacity: 0.4, color: "#80b918" }} className="mb-6" />
          <InputRightElement width="4.5rem">
            <BsSearchHeart color="#ffffff" size="25px" />
          </InputRightElement>
        </InputGroup>
        <SignUpModal />
      </Box>

      <Box className="bg-sidebar py-24 w-full">
        <Text paddingLeft="20" fontSize="4xl" as="b" color="#ebfa8c">
          Frequently Borrowed
        </Text>
        <Flex justify="space-evenly">
          <BookCard data={{ title: "Book 1", name: "Author 1", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1304353253i/7665409.jpg" }} />
          <BookCard data={{ title: "Book 2", name: "Author 2", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1431005462i/25498974.jpg" }} />
          <BookCard data={{ title: "Book 3", name: "Author 3", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1549121768i/43220998.jpg" }} />
          <BookCard data={{ title: "Book 4", name: "Author 4", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630823025i/56317605.jpg" }} />
          <BookCard data={{ title: "Book 4", name: "Author 4", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576370917l/32283133.jpg" }} />
        </Flex>
      </Box>

      <BookFair />
    </>
  );
};

export default Dashboard;
