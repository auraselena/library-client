import { Card, CardBody, Image, Text } from "@chakra-ui/react";
import { AiFillStar } from "react-icons/ai";

const ReviewCard = (props) => {
  return (
    <Card maxW="sm" bg="#141d21" color="#ffffff" mt={10} border="2px" borderStyle="dashed" borderColor="#80b918">
      <CardBody>
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Image width="50px" borderRadius="full" src={props.data.pfp} alt="Book" />
            <Text size="sm" as="b" paddingLeft={4}>
              {props.data.name}
            </Text>
          </div>
          <div className="flex items-center">
            <AiFillStar color="yellow" />
            <Text paddingLeft={2}>{props.data.rate}</Text>
          </div>
        </div>

        <Text size="sm" marginTop={8}>
          {props.data.review}
        </Text>
      </CardBody>
      <div className="flex justify-between items-center px-12 py-12">
        <Text color="#ebfa8c" fontSize="sm">
          <b>{props.data.book_title}</b>
          <br></br>{props.data.author}
        </Text>
        <Image width="70px" src={props.data.book_cover} />
      </div>
    </Card>
  );
};

export default ReviewCard;
