import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";
import React from "react";

type Props = {
  value: number;
  width?: string;
  setValue: (valueAsString: string, valueAsNumber: number) => void;
};

function HorizontalNumberInput(props: Props) {
  const { width, value, setValue } = props;
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } = useNumberInput({
    step: 1,
    min: 1,
    max: 100,
    onChange: setValue,
    value,
  });

  return (
    <HStack w={width}>
      <Button {...getDecrementButtonProps()}>-</Button>
      <Input {...getInputProps({ style: { textAlign: "right" } })} />
      <Button {...getIncrementButtonProps()}>+</Button>
    </HStack>
  );
}
HorizontalNumberInput.defaultProps = { width: "100%" };
export default HorizontalNumberInput;
