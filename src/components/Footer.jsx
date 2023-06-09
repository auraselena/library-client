import { Flex, Text, Link, Box } from "@chakra-ui/react";
import { AiOutlineInstagram, AiOutlineTwitter } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <>
      <Flex direction="column">
        <div className="bg-bg py-24 text-white">
          <Flex direction="row" justifyContent="space-evenly">
            <Flex direction="column">
              <Text fontSize="3xl">LEXICON</Text>
              <Text>Millions of high-quality books from all around the world.</Text>
            </Flex>
            <Flex direction="column">
              <Link>News</Link>
              <Link>Career</Link>
              <Link>Privacy Policy</Link>
              <Link>Customer Support</Link>
              <Link>Feedback</Link>
            </Flex>
            <Flex direction="column">
              <Text as="b">Contact Us</Text>
              <Flex alignItems="center">
                <AiOutlineInstagram size={35} />
                <AiOutlineTwitter size={35} />
                <SiGmail size={28} />
              </Flex>
            </Flex>
          </Flex>
        </div>
        <div className="bg-lime-600 w-full text-center">©️ LEXICON. All Rights Reserved.</div>
      </Flex>
    </>
  );
};

export default Footer;
