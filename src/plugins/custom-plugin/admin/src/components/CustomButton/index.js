import React from "react";
import { Button } from "@strapi/design-system";
import { useFetchClient } from "@strapi/helper-plugin";

const CustomButton = () => {
  const { get } = useFetchClient();
  const requestURL = "/custom-plugin/fetch-custom-data";

  const handleClick = async () => {
    const result = await get(requestURL);

    console.log(result);
  };

  return <Button onClick={handleClick}>Request from Custom Route</Button>;
};

export default CustomButton;
