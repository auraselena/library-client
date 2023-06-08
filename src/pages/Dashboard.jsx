import { Input, Flex, Box, Button, ButtonGroup, InputRightElement, InputGroup } from "@chakra-ui/react";
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

      <div className="bg-sidebar">
        <BookCard data={{ title: "Judul", name: "author nih" }} />
      </div>
    </>
  );
};

export default Dashboard;
