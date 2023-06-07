import { Card, CardHeader, CardBody, CardFooter, Image, Stack, Text, Divider, ButtonGroup, Button, Heading } from "@chakra-ui/react";

const BookCard = (props) => {
  return (
    <Card maxW="xs" bg="#040f16" color="#ffffff" border="1px">
      <CardBody>
        <Image src="https://cdn.gramedia.com/uploads/items/img466_PWkp431.jpg" alt="Green double couch with wooden legs" borderRadius="lg" width="100px" />
        <Stack mt="6" spacing="3">
          <Heading size="md">{props.data.title}</Heading>
          <Text>{props.data.name}</Text>
          <Text color="#ebfa8c" fontSize="2xl">
            Available!
          </Text>
        </Stack>
      </CardBody>
      <Divider />
      <CardFooter>
        <Button variant="solid" bg="#80b918">
          Borrow now
        </Button>
      </CardFooter>
    </Card>
  );
};

export default BookCard;
