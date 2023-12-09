import { Box, Grid, Paper, Typography } from "@mui/material";
import { Fragment, useState } from "react";
import { useQuery } from "react-query";
import { DataGrid } from "@mui/x-data-grid";
import productAxios from "../../services/product.service";
import Loading from "../../components/general/loading";

const ProductList = () => {
  const userListQuery = useQuery(
    "productList",
    async () => {
      const res = await productAxios.getProducts();
      return res.data.products;
    },
    { staleTime: 60000 }
  );

  const columns = [
    { field: "title", headerName: "Title", width: 200, flex: 1 },
    { field: "description", headerName: "Description", width: 200, flex: 1 },
    { field: "price", headerName: "Price", width: 70, flex: 1 },
    {
      field: "brand",
      headerName: "Brand",
      width: 90,
      flex: 1,
    },
    {
      field: "category",
      headerName: "Category",
      width: 200,
      flex: 1,
    },
  ];

  return (
    <Fragment>
      {userListQuery.isLoading ? (
        <Loading />
      ) : (
        <Box p={4}>
          <Typography gutterBottom variant="h5" component="div">
            Product List
          </Typography>
          <Grid container spacing={3}>
            <Grid item xs={12}>
              <Paper elevation={3}>
                <DataGrid
                  rows={userListQuery.data || []}
                  columns={columns}
                  initialState={{
                    pagination: {
                      paginationModel: { page: 0, pageSize: 10 },
                    },
                  }}
                  pageSizeOptions={[10, 50]}
                />
              </Paper>
            </Grid>
          </Grid>
        </Box>
      )}
    </Fragment>
  );
};
export default ProductList;
