import * as React from "react";
import { Button, Flex, Grid } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { NameInput } from "./inputsForm/NameInput";
import { SexInput } from "./inputsForm/SexInput";
import { AgeInput } from "./inputsForm/AgeInput";

const MIN_AGE = 16
const MAX_AGE = 90

export const FormModelProfile = ({
  handleCreate,
  todo,
  onSubmit,
  type,
  setToggle,
}) => {

  const createMode = type === "create";

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name: createMode ? "" : todo?.name,
      sex: createMode ? "" : todo?.sex,
      age: createMode ? MIN_AGE : todo?.age,
    },
  });

  const registerSex = register("sex", { required: true });
  const registerName = register("name", { required: true });
  const registerAge = register("age", { required: true });

  const onChangeAge = (ageValue) => {
    setValue("age", ageValue);
  };

  const defaultSexValue = createMode ? "male" : todo.sex;

  const ageWatch = watch("age");

  return (
    <form onSubmit={handleSubmit(createMode ? handleCreate : onSubmit)}>
      <Grid gap={4}>
        <NameInput register={registerName} />

        <SexInput defaultValue={defaultSexValue} register={registerSex} />

        <AgeInput
          min={MIN_AGE}
          max={MAX_AGE}
          value={ageWatch}
          onChange={onChangeAge}
          register={registerAge}
        />

        <Flex justifyContent="flex-end" mt="10px" mb="-10px">
          <Button mr="10px" type="submit">
            Submit
          </Button>
          <Button onClick={setToggle}>Cancel</Button>
        </Flex>
      </Grid>
    </form>
  );
};
