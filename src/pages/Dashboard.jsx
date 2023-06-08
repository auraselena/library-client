import { Input, Flex, Box, Button, ButtonGroup, InputRightElement, InputGroup, Text } from "@chakra-ui/react";
import BookCard from "../components/BookCard";
import SignUpModal from "../components/SignUpModal";
import { BsSearchHeart } from "react-icons/bs";

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

      <div className="bg-sidebar py-24">
        <Text paddingLeft="28" fontSize="4xl" as="b" color="#ebfa8c">
          New Publications
        </Text>
        <Flex justify="space-evenly">
          <BookCard data={{ title: "Book 1", name: "Author 1", image: "https://cdn.gramedia.com/uploads/items/img466_PWkp431.jpg" }} />
          <BookCard data={{ title: "Book 2", name: "Author 2", image: "https://cdn.gramedia.com/uploads/items/img466_PWkp431.jpg" }} />
          <BookCard data={{ title: "Book 3", name: "Author 3", image: "https://cdn.gramedia.com/uploads/items/img466_PWkp431.jpg" }} />
          <BookCard data={{ title: "Book 4", name: "Author 4", image: "https://cdn.gramedia.com/uploads/items/img466_PWkp431.jpg" }} />
        </Flex>
      </div>
    </>
  );
};

export default Dashboard;
