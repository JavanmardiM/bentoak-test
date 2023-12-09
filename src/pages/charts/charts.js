import { Box, Grid } from "@mui/material";
import CustomPieChart from "../../components/charts/pie-chart";
import CustomLineChart from "../../components/charts/line-chart";
import CustomRadarChart from "../../components/charts/radar-chart";
import { useQuery } from "react-query";
import chartAxios from "../../services/chart.service";
import CustomBarChart from "../../components/charts/bar-chart";

const Charts = () => {
  const userListQuery = useQuery(
    "postList",
    async () => {
      const res = await chartAxios.getPosts();
      return res.data;
    },
    { staleTime: 60000 }
  );

  let barData = userListQuery?.data?.slice(0, 10).map((item, index) => {
    return {
      name: item.title?.substring(0, 5),
      count: item.id + index,
    };
  });

  const radarData = [
    { name: "A", x: 21 },
    { name: "B", x: 22 },
    { name: "C", x: -32 },
    { name: "D", x: -14 },
    { name: "E", x: -51 },
    { name: "F", x: 16 },
  ];

  const lineData = [
    {
      name: "A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
  ];
  const pieData = [
    { name: "A", value: 45, color: "#67729D" },
    { name: "B", value: 30, color: "#BB9CC0" },
    { name: "C", value: 15, color: "#E7BCDE" },
    { name: "D", value: 10, color: "#FED9ED" },
  ];
  return (
    <>
      <Box p={4}>
        <Grid container spacing={4} direction="column">
          <Grid
            item
            container
            spacing={4}
            direction="row"
            justify="space-between"
            alignItems="center"
          >
            <Grid item>
              <CustomPieChart data={pieData} />
            </Grid>
            <Grid item>
              <CustomLineChart data={lineData} />
            </Grid>
            <Grid item>
              <CustomRadarChart data={radarData} />
            </Grid>
          </Grid>
          <Grid item>
            <CustomBarChart data={barData} />
          </Grid>
        </Grid>
      </Box>
    </>
  );
};
export default Charts;
