import * as React from "react"
import Main from "../components/Main"
import { graphql } from 'gatsby';

const Home = ({ data }) => {
  return (
    <>
      <Main data={data} />
    </>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark {
      nodes {
        html
        frontmatter {
          date

        }
      }
    }
  }
`;

export default Home;
