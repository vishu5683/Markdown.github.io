import React from 'react';
import "./Home.css"



const Main = ({ data }) => {
  const { allMarkdownRemark } = data;
  const { nodes } = allMarkdownRemark;
  const { frontmatter, html } = nodes[0]; // Assuming you have only one node in your query result

  return (
    <>


      <div>
        <h1>{frontmatter.title}</h1>
       
        <h2>{frontmatter.date}</h2>
       
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </div>

     
    </>
  );
};

export default Main;
