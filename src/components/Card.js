import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  // Implement the UI for the Card component according to the instructions.
  // You should be able to implement the component with the elements imported above.
  // Feel free to import other UI components from Chakra UI if you wish to.
  return (
      <VStack bg={"white"} color={"black"} textAlign={"left"}>
        <VStack>
          <Image src={imageSrc} />
        </VStack>
        <VStack padding={"20px 20px 10px 20px"}>
          <Heading fontSize={"md"}>{title}</Heading>
          <Text color={"blue.700"}>{description}</Text>
          <Text>See More <FontAwesomeIcon icon={faArrowRight} size={"1x"}/></Text>
        </VStack>
      </VStack>
  );
};

export default Card;
