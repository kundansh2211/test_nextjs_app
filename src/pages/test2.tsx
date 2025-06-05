import React from "react";
import Box from "@mui/material/Box";

function myComponent() {
  const [count, setCount] = React.useState(0);
  const [double, setDouble] = React.useState(0);

  React.useEffect(() => {
    setDouble(count * 2);
  }, [count]);

  return (
    <div style={{ backgroundColor: "red", padding: "16px" }}>
      <Box sx={{ px: "8px" }}>{double}</Box>
    </div>
  );
}

export default myComponent;