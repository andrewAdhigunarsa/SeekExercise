import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../context/app-context";
import { Button, Container, Grid } from "@mui/material";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { getUserDetails } from "../../../services/userServices";
import useToken from "../../../hooks/useToken";
import {
  productCode,
  ProductInterface,
} from "../../../interfaces/checkout.interface";
import { getPricingRules } from "../../../services/pricingRulesServices";
import { URLS } from "../../../configs/urls";
import { useNavigate } from "react-router-dom";

export default function Dashboard() {
  const { token } = useToken();
  const navigate = useNavigate();
  const { user, pricingRules } = useContext(AppContext);
  const { userDetails } = user;
  const [rows, setRows] = useState<
    (Partial<ProductInterface> | undefined)[] | undefined
  >([]);

  const handleAddProduct = () => {
    navigate(URLS.checkout);
  };

  const columns: GridColDef[] = [
    { field: "name", headerName: "Name" },
    { field: "description", headerName: "description", width: 300 },
  ];

  useEffect(() => {
    if (user.userDetails) {
      const productRows: (Partial<ProductInterface> | undefined)[] | undefined =
        userDetails?.products
          ? userDetails?.products.map((code: productCode, index) => {
              const product = pricingRules.products?.filter(
                (p) => p.productCode == code
              )[0];
              return {
                id: index,
                name: product?.name,
                description: product?.description,
              };
            })
          : [];
      setRows(productRows);
    }
  }, [userDetails]);

  if (!user.userDetails) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <h2>Dashboard</h2>
      <Container maxWidth={"sm"}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            Hi {userDetails?.name}
          </Grid>
          <Grid
            item
            xs={12}
            sx={{
              minHeight: 200,
            }}
          >
            <DataGrid
              sx={{
                background: "#fff",
              }}
              rows={rows ?? []}
              columns={columns}
              pageSize={5}
              rowsPerPageOptions={[5]}
              autoHeight
              autoPageSize
            />
          </Grid>
          <Grid item xs={12}>
            <Button onClick={handleAddProduct}>Add product</Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
