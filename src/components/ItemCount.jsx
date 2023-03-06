import { useState } from "react";
import {
  Text,
  ButtonGroup,
  IconButton,
  Tooltip,
  Center,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ItemCount = ({ stock }) => {
  const [count, setCount] = useState(1);

  const onAdd = () => {
    setCount(count + 1);
  };

  const onSubstract = () => {
    setCount(count - 1);
  };

  return (
    <>
      <ButtonGroup size="sm" isAttached variant="outline">
        {count < 1 ? (
          <Tooltip label="cantidad mínima" placement="bottom">
            <IconButton icon={<MinusIcon />} isDisabled />
          </Tooltip>
        ) : (
          <IconButton icon={<MinusIcon />} onClick={onSubstract} />
        )}
        <Center w="50px" h="30px">
          <Text as="b">{count}</Text>
        </Center>
        {count < 5 ? (
          <IconButton icon={<AddIcon />} onClick={onAdd} />
        ) : (
          <Tooltip label="cantidad máxima" placement="bottom">
            <IconButton icon={<AddIcon />} isDisabled />
          </Tooltip>
        )}
      </ButtonGroup>
    </>
  );
};

export default ItemCount;
