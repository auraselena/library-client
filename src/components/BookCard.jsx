import { Card, Square, CardHeader, CardBody, CardFooter, Image, Stack, Text, Divider, ButtonGroup, Button, Heading } from "@chakra-ui/react";

const BookCard = (props) => {
  return (
    <Card bg="#141d21" color="#ffffff" mt={10}>
      <CardBody>
        <Image src={props.data.image} alt="Book" borderRadius="lg" width="200px" />
        <Stack mt="4" spacing="2">
          <Heading size="sm">{props.data.title}</Heading>
          <Text size="sm">{props.data.name}</Text>
          <Text color="#ebfa8c" fontSize="sm">
            Available!
          </Text>
        </Stack>
      </CardBody>
      <CardFooter>
        <Button className="mx-auto" variant="solid" bg="#80b918">
          Borrow now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
