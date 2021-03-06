/* eslint-disable react/forbid-prop-types */
/* Vendor imports */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql } from 'gatsby';
// import Img from 'gatsby-image';
import {
  Layout, Row, Col,
} from 'antd';
/* App imports */
import _ from 'lodash';
import SEO from '../../components/Seo';
import Header from '../../components/PageLayout/Header';
import PostCard from '../../components/PostCard';
import SidebarWrapper from '../../components/PageLayout/Sidebar';
// import Config from '../../../config';
// import Statistics from '../../../content/statistics.json';
import Utils from '../../utils/pageUtils';
import style from './tags.module.less';
import ResearchCard from '../../components/ResearchCard';

const TagPage = ({ data, pageContext }) => {
  const tagName = pageContext.tag;
  // const { tag } = pageContext;
  // const tagName = Statistics.tags[tag].name || tag;
  // const tagPagePath = Config.pages.tags;
  // const tagImage = data.allFile.edges.find((edge) => edge.node.name === tag).node
  //   .childImageSharp.fluid;
  const docs = data.allMarkdownRemark.edges;
  const posts = _.filter(docs, (doc) => doc.node.fields.parsed.type === 'posts');
  const research = _.filter(docs, (doc) => doc.node.fields.parsed.type === 'research');
  const tags = data.allTag ? data.allTag.edges : [];
  const tagsMap = _.mapValues(_.keyBy(tags, (tag) => tag.node.name), 'node');

  const tag = tagsMap[tagName];
  const tagPagePath = tag ? tag.path : '#';
  const tagDescription = tag ? tag.description : '';

  return (
    <Layout className="outerPadding">
      <Layout className="container">
        <Header />
        <SEO
          title={tagName}
          description={`All post about ${tagName}. ${tagDescription} `}
          path={Utils.resolvePageUrl(tagPagePath, tag)}
          keywords={[tagName]}
        />
        <SidebarWrapper>
          <div className={`marginTopTitle ${style.tagsList}`}>
            <h1 className="titleSeparate">
              #
              {tagName}
            </h1>
            {/* <div className={style.bannerImgContainer}> */}
            {/*  <Img className={style.bannerImg} fluid={tagImage} alt={tagName} /> */}
            {/* </div> */}
            <h4 className="textCenter">
              {tagDescription}
            </h4>
          </div>
          { research.length > 0 ? [
            <h2>Research</h2>,
            <Row gutter={[20, 20]}>
              {research.map((post, key) => (
              // eslint-disable-next-line react/no-array-index-key
                <Col key={key} xs={24} sm={24} md={24} lg={24}>
                  <ResearchCard data={post} tagsMap={tagsMap} />
                </Col>
              ))}
            </Row>,
          ] : null }
          { posts.length > 0 ? [
            <h2>Posts</h2>,
            <Row gutter={[20, 20]}>
              {posts.map((post, key) => (
                // eslint-disable-next-line react/no-array-index-key
                <Col key={key} xs={24} sm={24} md={12} lg={8}>
                  <PostCard data={post} tagsMap={tagsMap} />
                </Col>
              ))}
            </Row>,
          ] : null }
        </SidebarWrapper>
      </Layout>
    </Layout>
  );
};

TagPage.propTypes = {
  data: PropTypes.shape({
    allTag: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          name: PropTypes.string.isRequired,
          path: PropTypes.string.isRequired,
        }),
      ).isRequired,
    }).isRequired,
    allMarkdownRemark: PropTypes.shape({
      edges: PropTypes.arrayOf(PropTypes.object).isRequired,
    }).isRequired,
    allFile: PropTypes.shape({
      edges: PropTypes.arrayOf(
        PropTypes.shape({
          node: PropTypes.shape({
            name: PropTypes.string.isRequired,
            childImageSharp: PropTypes.shape({
              fluid: PropTypes.object.isRequired,
            }).isRequired,
          }).isRequired,
        }),
      ).isRequired,
    }).isRequired,
  }).isRequired,
  pageContext: PropTypes.shape({
    tag: PropTypes.string.isRequired,
  }).isRequired,
};

export const pageQuery = graphql`
  query($tag: String!) {
    allTag {
      edges {
        node {
          color
          name
          description
          path
        }
      }
    }
    allMarkdownRemark(
      filter: {
        fields: { parsed: { tags: { in: [$tag] } } }
        fileAbsolutePath: { regex: "/index.md$/" }
      }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          frontmatter {
            cover {
              childImageSharp {
                fluid(maxWidth: 600) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
          fields {
            parsed {
              date
              venue
              authors
              path
              title
              tags
              excerpt
              type
              links {
                name
                url
              }
            }
          }
        }
      }
    }
    allFile(filter: { name: { eq: $tag }, dir: { regex: "/tags$/" } }) {
      edges {
        node {
          name
          childImageSharp {
            fluid(maxHeight: 600) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`;

export default TagPage;
