import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import { CardContent } from "@mui/material";
import { Link } from "@mui/material";

// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

// Images
import bgImage from "assets/images/bg-sign-in-basic.jpeg";

function Basic() {

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <CardContent>
          <h1>Page Not Found - 404</h1>
        </CardContent>
        <Link href="/dashboard" underline="none">Go To Dashboard</Link>
      </Card>
    </BasicLayout>
  );
}

export default Basic;
