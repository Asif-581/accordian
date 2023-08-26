import { Box, useSafeLayoutEffect } from "@chakra-ui/react";
import React, { useState } from "react";
import { Image } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";
import { Divider } from "@chakra-ui/react";
import { ChevronDownIcon, ChevronUpIcon } from "@chakra-ui/icons";
import { color } from "framer-motion";
import './../App'
const Accordian = () => {
  const query = [
    {
      id: 1,
      Question: "How many team members can i invite?",
      Answer:
        "You can invite up to 2 additional users on the Free plan. There is no limit on team members for the Premium plan.",
    },
    {
      id: 2,
      Question: "What is maximum file upload size?",
      Answer:
        "No more than 2GB. All files in your account must fit your allotted storage space",
    },
    {
      id: 3,
      Question: "How do I reset my password? ",
      Answer:
        "Click “Forgot password” from the login page or “Change password” from your profile page.",
    },
    {
      id: 4,
      Question: "Can I cancle my subscription?",
      Answer:
        "Yes! Send us a message and we’ll process your request no questions asked.",
    },
    {
      id: 5,
      Question: "Do you provide additional support",
      Answer:
        "Chat and email support is available 24/7. Phone lines are open during normal business hours.",
    },
  ];
  const [openItemId, setOpenItemId] = useState(null);

  const toggleAccordion = (itemId) => {
    setOpenItemId((prevOpenItemId) =>
      prevOpenItemId === itemId ? null : itemId
    );
  };

  return (
    <>
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        h="100vh"
        backgroundColor="hsl(240, 73%, 65%)"
      >
        <Box
          backgroundColor="white"
          zIndex="0"
          display="flex"
          justifyContent={{ lg:"space-between",sm:'center'}}
          padding={{lg:"80px",sm:'20px'}}
          borderRadius="20px"
          width={{lg:"930px" ,sm:'500px'}}
          
          flexDirection={{ sm: 'column', lg: 'row' }}
          alignItems={{sm:'center'}}
        >
          <Box display="flex" position={{ lg: "relative", sm: 'relative' }} right={{ lg:"100px",sm:'0px'}} bottom={{sm:'100px',lg:'0px'}}>
            <Image
              src="./../../images/illustration-woman-online-desktop.svg"
              alt="img"
              width="500px"
              
            />
            <Image
              src="./../../images/illustration-box-desktop.svg"
              alt="img"
              position="absolute"
              left="0px"
              top="100px"

            />
          </Box>
          <Box
            display="flex"
            flexDirection="column"
            justifyContent={{ lg:"space-evenly",sm:'center'}}
          >
            <Text fontSize="3xl" paddingBottom="20px" fontWeight="bold">
              FAQ
            </Text>
            {query.map(({ Answer, Question, id }) => {
              return (
                <>
                  <Box
                    display="flex"
                    justifyContent="space-between"
                    key={id}
                    w="400px"
                    h={{sm:'30px'}}
                  >
                    <Text
                      fontSize="md"
                      onClick={() => toggleAccordion(id)}
                      fontWeight={openItemId === id ? "bold" : null}
                      _hover={{ color: "hsl(14, 88%, 65%)" }}
                    >
                      {Question}
                    </Text>
                    {openItemId === id ? (
                      <ChevronUpIcon
                        onClick={() => toggleAccordion(id)}
                        color="hsl(14, 88%, 65%)"
                        fontSize="24px"
                      />
                    ) : (
                      <ChevronDownIcon
                        onClick={() => toggleAccordion(id)}
                        color="hsl(14, 88%, 65%)"
                        fontSize="24px"
                      />
                    )}
                  </Box>

                  {openItemId === id && (
                    <Box w="400px">
                      <Text>{Answer}</Text>
                    </Box>
                  )}

                  <Divider
                    orientation="horizontal"
                    variant="solid"
                    padding="5px"
                  />
                </>
              );
            })}
          </Box>
        </Box>
      </Box>
      <div className="attribution">
        Challenge by{" "}
        <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">
          Frontend Mentor
        </a>
        . Coded by <a href="#">Asif Saba</a>.
      </div>
    </>
  );
};

export default Accordian;
