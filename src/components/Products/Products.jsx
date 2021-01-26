import React from "react";
import Grid from "@material-ui/core";

const products = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    description:
      "Nicknamed the “swiss cheese plant”, the Monstera Deliciosa is famous for its quirky natural leaf holes. These holes are theorized to maximize sun fleck capture on the forest floor. ",
  },
  {
    id: 2,
    name: "Snake Plant Laurentii",
    description:
      "The Snake Plant Laurentii is a succulent plant characterized by its upright swordlike leaves with vibrant yellow edges. A multitasker, the snake plant purifies indoor air by removing toxins such as formaldehyde, xylene, and toluene.",
  },
];

const Products = () => {
  <main>
    <Grid container justify="center" spacing={4}>
      {products.map((product) => (
        <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
          <Product product={product} />
        </Grid>
      ))}
    </Grid>
  </main>;
};

export default Products;
