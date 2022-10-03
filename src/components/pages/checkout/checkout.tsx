import React, { useContext, useEffect, useState } from "react";
import {
  Avatar,
  Box,
  Button,
  Container,
  FormControl,
  Grid,
  IconButton,
  InputLabel,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
} from "@mui/material";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { submitOrder } from "../../../services/pricingRulesServices";
import { AppContext } from "../../../context/app-context";
import Summary from "./summary/summary";
import { productCode } from "../../../interfaces/checkout.interface";
import { applyPromoRules, convertToCurrency } from "../../../utils/utils";
import { useNavigate } from "react-router-dom";
import useToken from "../../../hooks/useToken";

export default function Checkout() {
  const navigate = useNavigate();
  const { token } = useToken();
  const { user, pricingRules, checkout } = useContext(AppContext);
  const { userDetails } = user;
  const { products, promotions } = pricingRules;
  const { cartItems, setCartItems, promoCode } = checkout;
  const [selectedProductCode, setSelectedProductCode] = useState<
    productCode | undefined
  >(productCode.classic);

  const handleChange = (e: SelectChangeEvent<productCode>) => {
    setSelectedProductCode(e.target.value as productCode);
  };

  const handleAdd = () =>
    setCartItems((items) => {
      const selectedItem = products?.filter(
        (item) => item.productCode === selectedProductCode
      );
      if (selectedItem) {
        if (items) {
          return [...items, ...selectedItem];
        }
        return [...selectedItem];
      }
    });

  const deleteItem = (index: number) => {
    setCartItems((items) => items?.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const token = await submitOrder(
      userDetails?.username,
      cartItems,
      promoCode
    );
  };

  useEffect(() => {
    if (!token) {
      navigate("/");
    }
  }, [token]);

  const renderCartItems = applyPromoRules(cartItems ?? [], promotions)?.map(
    (items, index) => {
      return (
        <ListItem
          key={`${items.productCode}${index}`}
          secondaryAction={
            <IconButton
              edge="end"
              aria-label="delete"
              onClick={() => deleteItem(index)}
            >
              <DeleteIcon />
            </IconButton>
          }
        >
          <ListItemAvatar>
            <Avatar>
              <FolderIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText
            primary={items.name}
            secondary={`
            ${items.description} - 
            ${convertToCurrency(items.retailPrice)}
            `}
          />
        </ListItem>
      );
    }
  );

  const renderOptions = pricingRules?.products?.map((items) => {
    return (
      <MenuItem key={items.productCode} value={items.productCode}>
        {items.name}
      </MenuItem>
    );
  });

  return (
    <>
      <h2>Checkout</h2>
      <Container maxWidth={"lg"}>
        <Grid container spacing={3}>
          <Grid item sm={8}>
            <Paper sx={{ minHeight: 200 }}>
              <Box component={"form"}>
                <List dense>
                  {renderCartItems}
                  <ListItem
                    secondaryAction={
                      <IconButton
                        edge="end"
                        aria-label="add"
                        onClick={handleAdd}
                      >
                        <AddCircleIcon />
                      </IconButton>
                    }
                  >
                    <ListItemAvatar>
                      <Avatar>
                        <FolderIcon />
                      </Avatar>
                    </ListItemAvatar>
                    <ListItemText>
                      <FormControl fullWidth>
                        <InputLabel>Product</InputLabel>
                        <Select
                          value={selectedProductCode}
                          defaultValue={selectedProductCode}
                          label="Product"
                          onChange={handleChange}
                        >
                          {renderOptions}
                        </Select>
                      </FormControl>
                    </ListItemText>
                  </ListItem>
                </List>
              </Box>
            </Paper>
          </Grid>
          <Grid item sm={4}>
            <Summary checkout={checkout} promotions={promotions} />
            <Button
              sx={{ marginTop: 3 }}
              variant={"contained"}
              color={"primary"}
              onClick={handleSubmit}
            >
              Submit order
            </Button>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
