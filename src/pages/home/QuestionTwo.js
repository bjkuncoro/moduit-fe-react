import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Flex, Image, Stack, Button, Text , Tag, TagLabel, Input,InputGroup,InputRightElement,Heading } from "@chakra-ui/react";
import { IoChatbubbleEllipsesOutline, IoChatboxEllipsesOutline,IoLayers,IoPricetagsOutline, IoSearch } from "react-icons/io5";
import DataTable from 'react-data-table-component';
import { useHistory } from "react-router";

const QuestionTwo = () => {
  const dispatch = useDispatch();
  const dataQuestionTwo = useSelector((state) => state.data.dataQuestionTwo);
  const history = useHistory()

  const [dataQtwoList, setdataQtwoList] = useState([])
  const [column,setcolumn] =   useState(
    [
          {
              cell: (a) => (<Image
                width="60px"
                borderRadius='full'
                src={`https://ui-avatars.com/api/?name=${a.title}&background=d5e9ff&color=508af5`}
              />),
              width: '56px', 
              style: {
                borderBottom: '1px solid #FFFFFF',
                marginBottom: '-1px',
              },
          },
          {
            name: 'Title',
            selector: 'title',
            width:'250px',
            sortable: true,
          },
          {
            name: 'Product Code',
            selector: 'id',
            grow:1,
            width:'140px',
            sortable: false,
          //   right: true,
          },
          {
            name: 'Category',
            selector: 'category',
            width:'120px',
            grow:1,
            sortable: true,
        //   right: true,
          },
          {
            name: 'Description',
            selector: 'description',
            width:'380px',
            grow:2,
            wrap:true,
            format: row => `${row.description.slice(0, 100)}...`,
            sortable: false,
            //   right: true,
        },
        {
            name: 'Tags',
            selector: 'tags',
            cell: (a) =>
            (
                <Flex direction='row' wrap='wrap'>
                    {a.tags?
                    a?.tags.map(i=>{
                        return (
                            <Tag m='1' size={'md'} key={Math.random()} variant="subtle" colorScheme="cyan">
                                {/* <IoPricetagsOutline/> */}
                                <TagLabel>{i}</TagLabel>
                            </Tag>
                        )
                    }):
                    <Tag size={'md'} key={'md'} variant="subtle" colorScheme="cyan">
                        {/* <TagLeftIcon boxSize="12px" as={<IoPricetagsOutline/>} /> */}
                        <TagLabel>-</TagLabel>
                    </Tag>}
                </Flex>
            ),
        //   sortable: true,
        //   right: true,
          },
      ]
  )
  const customStyles = {
    header: {
      style: {
        minHeight: 30,
      },
    },
    headRow: {
      style: {
        border: "none",
      },
    },
    headCells: {
      style: {
        color: "#202124",
        fontSize: "14px",
      },
    },
    rows: {
      highlightOnHoverStyle: {
        backgroundColor: "rgb(230, 244, 244)",
        borderBottomColor: "#FFFFFF",
        borderRadius: "13px",
        outline: "1px solid #FFFFFF",
        fontSize: "15px",
      },
      style: {
        fontSize: "15px",
        paddingTop:10,
        paddingBottom:10,
      },
    },
    pagination: {
      style: {
        border: "none",
      },
    },
  };
  useEffect(() => {
    dispatch({ type: "data/GET_DATA_QUESTION_TWO" });
  }, []);

  useEffect(() => {
    // console.log(dataQuestionTwo);
    setdataQtwoList(dataQuestionTwo)
  }, [dataQuestionTwo]);

  const filterData = (e)=>{
    console.log(e.target.value)
    const res = dataQuestionTwo.filter(i=>i.title && i.title.toLowerCase().includes(e.target.value.toLowerCase()))
    // console.log(res)
    setdataQtwoList(res)
  }

  return (
    <Flex direction="row" minHeight='100vh' width="100%" bg="#f4f4fc">
      <Flex flex="2" p="5">
        <Flex width="100%" height="100%" bg="#fff" direction="column" alignItems="center" rounded={30} >
          <Image
            // borderRadius="full"
            mt="50"
            width="50%"
            src={require("./../../assets/img/Logo_beta_11.png")}
            alt="logo"
          />
          <Stack width="100%" mt={20} spacing={0}>
            <Button onClick={()=>history.push('/question-one')} _focus={{ boxShadow: "none" }} width="100%" height={59} colorScheme="cyan" variant="ghost" >
              <IoChatbubbleEllipsesOutline size={25} />
              <Text ml={3}>Question One</Text>
            </Button>
            <Button _focus={{ boxShadow: "none" }} width="100%" height={59} colorScheme="cyan" variant="ghost" >
              <IoChatboxEllipsesOutline size={25} />
              <Text ml={3}>Question Two</Text>
              <Flex
                width="1"
                position="absolute"
                right="0"
                height="100%"
                bg="indigo"
              />
            </Button>
          </Stack>
        </Flex>
      </Flex>
      <Flex direction='column' flex="11" p={5}>
        <Flex direction='row' justify='space-between'>
          <Heading m={3} fontWeight='bold' fontSize={28} color='teal'>
            Question Two
          </Heading>
          <InputGroup variant='filled' width='400px' rounded={13} size="md">
            <Input onChange={filterData} bg='#fff' placeholder="Searching By Title" />
            <InputRightElement children={<IoSearch color="green.500" />} />
          </InputGroup>
        </Flex>
        <Flex p={10} width="100%" bg="#fff" direction="row" justify='flex-start' alignItems="flex-start" rounded={30} >
          <div style={{width:'100%'}}>
              <DataTable
                  // title="Question Two Data"
                  columns={column}
                  data={dataQtwoList}
                  customStyles={customStyles}
                  highlightOnHover
                  pointerOnHover
                  pagination
              />
          </div>
        </Flex>
        <Flex mt={2} direction='row' justify='center'>
            <Text fontSize='15' fontWeight='light'>
                Copyright © 2021 <mark style={{backgroundColor:'transparent',color:'dodgerblue',fontWeight:'bold'}}>PT. Moduit Digital Indonesia</mark>. All rights reserved
            </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default QuestionTwo;
