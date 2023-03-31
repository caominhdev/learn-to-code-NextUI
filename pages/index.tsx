import InfoCard from "@/components/InfoCard";
import {
  Button,
  Col,
  Container,
  Grid,
  Link,
  Navbar,
  Text,
} from "@nextui-org/react";
import { NextPage } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const Home: NextPage = () => {
  return (
    <>
      <Container>
        <Navbar isCompact variant={"static"}>
          <Navbar.Brand>
            <Text b color="inherit">
              Learn To Code
            </Text>
          </Navbar.Brand>
          <Navbar.Content hideIn="md">
            <Navbar.Link href="#">Learning Platform</Navbar.Link>
            <Navbar.Link href="#">Community</Navbar.Link>
            <Navbar.Link href="#">Contact Us</Navbar.Link>
          </Navbar.Content>
          <Navbar.Content>
            <Navbar.Link color="inherit" href="#">
              Login
            </Navbar.Link>
            <Navbar.Item>
              <Button auto flat as={Link} href="#">
                Sign Up
              </Button>
            </Navbar.Item>
          </Navbar.Content>
        </Navbar>
        {/*  */}
        <Grid.Container
          gap={2}
          justify="center"
          css={{
            height: "500px",
            backgroundImage: "url(https://littlevisuals.co/images/i.o.jpg)",
          }}
        >
          <Grid xs={12} sm={6} alignItems="center">
            <Col css={{ width: "100%" }}>
              <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
                The Education Platform
              </Text>
              <Text weight={"bold"} size={70} css={{ textAlign: "center" }}>
                Of The Feature
              </Text>
              <Button
                size="md"
                shadow
                color="gradient"
                css={{ width: "100%", marginTop: "10px" }}
              >
                Join For Free
              </Button>
            </Col>
          </Grid>
        </Grid.Container>
        {/*  */}
        <Grid.Container gap={2}>
          <Grid xs={12} sm={4}>
            <InfoCard
              label="Course"
              title="Learn Next.js With Cooper Codes"
              imageURL="https://littlevisuals.co/images/german.jpg"
              studentCount="3,500"
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <InfoCard
              label="Course"
              title="Learn Next.js With Cooper Codes"
              imageURL="https://littlevisuals.co/images/german.jpg"
              studentCount="3,500"
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <InfoCard
              label="Course"
              title="Learn Next.js With Cooper Codes"
              imageURL="https://littlevisuals.co/images/german.jpg"
              studentCount="3,500"
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <InfoCard
              label="Course"
              title="Learn Next.js With Cooper Codes"
              imageURL="https://littlevisuals.co/images/german.jpg"
              studentCount="3,500"
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <InfoCard
              label="Course"
              title="Learn Next.js With Cooper Codes"
              imageURL="https://littlevisuals.co/images/german.jpg"
              studentCount="3,500"
            />
          </Grid>
          <Grid xs={12} sm={4}>
            <InfoCard
              label="Course"
              title="Learn Next.js With Cooper Codes"
              imageURL="https://littlevisuals.co/images/german.jpg"
              studentCount="3,500"
            />
          </Grid>
        </Grid.Container>
      </Container>
    </>
  );
};

export default Home;
