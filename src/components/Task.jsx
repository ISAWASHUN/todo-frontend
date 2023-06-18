import React from 'react'
import { Checkbox, Text, Flex } from "@chakra-ui/react";
import { CloseIcon } from '@chakra-ui/icons';

const Task = (props) => {
  return (
    <Flex mb="16px" justifyContent="space-between" alignItems="center">
      <Checkbox 
      colorScheme="blue" 
      size="lg"
      isChecked={props.isDone}
      onChange={() => {props.toggleIsDone(props.id, props.index)}}
      >
        <Text>{props.name}</Text>
      </Checkbox>
      <CloseIcon onClick={() => props.destroyTask(props.id)} />
      </Flex>
  )
}

export default Task