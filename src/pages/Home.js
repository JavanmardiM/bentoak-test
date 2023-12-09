import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import ProductList from "./products/product-list";
import Charts from "./charts/charts";
import PropTypes from "prop-types";

export default function ColorTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <>
            <Box>{children}</Box>
          </>
        )}
      </div>
    );
  }

  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };

  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      "aria-controls": `simple-tabpanel-${index}`,
    };
  }

  const tabs = [
    {
      label: "products",
      component: <ProductList />,
    },
    {
      label: "charts",
      component: <Charts />,
    },
  ];

  return (
    <Box sx={{ width: "100%" }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        {tabs.map((tab, index) => (
          <Tab label={tab.label} key={index} {...a11yProps(index)} />
        ))}
      </Tabs>
      {tabs.map((item, index) => (
        <TabPanel value={value} index={index} key={index}>
          {item.component}
        </TabPanel>
      ))}
    </Box>
  );
}
