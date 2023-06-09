import { Input, Flex, Box, InputRightElement, InputGroup, Text} from "@chakra-ui/react";
import BookCard from "../components/BookCard";
import SignUpModal from "../components/SignUpModal";
import { BsSearchHeart } from "react-icons/bs";
import BookFair from "../components/BookFair";
import DonateBook from "../components/DonateBook";
import ReviewCard from "../components/ReviewCard";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <>
      <Box width="90vw" height="100vh" bg="#040f16" id="circle"></Box>

      <Box height="100vh" bgImage="url('https://foodtank.com/wp-content/uploads/2021/07/alfons-morales-YLSwjSy7stw-unsplash.jpg')" bgPosition="center" bgSize="cover"></Box>
      <Box id="above-circle">
        <h1 className="text-5xl font-bold text-white mb-9">
          Find books, author you love,<br></br>or discover more
        </h1>
        <InputGroup>
          <Input pr="4.5rem" placeholder="Search for book or author" bg="#040f16" borderColor="#80b918" _placeholder={{ opacity: 0.4, color: "#80b918" }} className="mb-6" />
          <InputRightElement width="4.5rem">
            <BsSearchHeart color="#ffffff" size="25px" />
          </InputRightElement>
        </InputGroup>
        <h3 className="font-medium text-white mb-9">Millions of high-quality books from all around the world and reccommendations for you,<br></br>get started to discover all now.</h3>
        <SignUpModal />
      </Box>

      <Box className="bg-sidebar py-24 w-full">
        <Text paddingLeft="20" fontSize="4xl" as="b" color="#ebfa8c">
          Frequently Borrowed
        </Text>
        <Flex justify="space-evenly">
          <BookCard data={{ title: "Totto-chan: Gadis Cilik di Jendela", name: "Tetsuko Kuroyanagi", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1304353253i/7665409.jpg" }} />
          <BookCard data={{ title: "Ayah", name: "Andrea Hirata", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1431005462i/25498974.jpg" }} />
          <BookCard data={{ title: "The Fountains of Silence", name: "Ruta Sepetys", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1549121768i/43220998.jpg" }} />
          <BookCard data={{ title: "You Do You", name: "Fellexandro Ruby", image: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1630823025i/56317605.jpg" }} />
          <BookCard data={{ title: "Origin", name: "Dan Brown", image: "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1576370917l/32283133.jpg" }} />
        </Flex>
      </Box>

      <BookFair />
      <DonateBook />

      <Box className="bg-sidebar py-12 w-full">
        <Text paddingLeft="20" fontSize="4xl" as="b" color="#ebfa8c">
          Latest Reviews
        </Text>
        <Flex justify="space-evenly">
          <ReviewCard data={{pfp:"https://img.koreatimes.co.kr/upload/newsV2/images/202302/8ebb0a3dee3c40d89c150b9bc1d38889.jpg/dims/resize/740/optimize", name: "First Reviewer", review: "This library app has completely transformed how I access and enjoy books. The vast collection of audiobooks is also incredible, and I can access them anytime, anywhere.", book_title: "It Start With Us", book_cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1644605295i/60393672.jpg", author: "Colleen Hoover", rate: "5.0"}} />
          <ReviewCard data={{pfp:"https://www.vhv.rs/dpng/d/161-1615302_transparent-smug-png-kirby-pfp-png-download.png",name: "Second Reviewer", review: "Lexicon provides me books that I couldn't find in other platform. Been using this for few months and it allows me to not only borrow physical books but also access a wide range of digital resources, including research papers and academic journals.", book_title: "Ayah", book_cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1431005462i/25498974.jpg", author: "Andrea Hirata", rate: "5.0"}} />
          <ReviewCard data={{pfp:"https://i1.rgstatic.net/ii/profile.image/11431281114594035-1674569097139_Q512/Selena-Aura.jpg",name: "Third Reviewer", review: "The app's recommendation system is spot-on, suggesting books based on my preferences. Impressive.", book_title: "Pachinko", book_cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1588622924i/53331127.jpg", author: "Min Jin Lee", rate: "4.8"}} />
        </Flex>
      </Box>

      <Footer />
    </>
  );
};

export default Dashboard;
