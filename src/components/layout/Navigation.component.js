import React from "react";
import { Link, graphql } from "gatsby";
import ui from "../../locales/en/UI.json";

const Navigation = ({ items = [] }) => {
  const toggleMenu = () => {
    const elem = document.getElementById("kyma-menu");
    if (elem.classList.contains("offcanvas")) {
      elem.classList = "kyma-menu";
    } else {
      elem.classList = "kyma-menu offcanvas";
    }
  };

  const github = ui.socialMedia.github;

  return (
    <>
      <ul id="kyma-menu" className="kyma-menu">
        {items.map(item => {
          const linkTitle = ui.navigation[item.id];
          const linkComponent = item.path.includes("//") ? (
            <a className="link link-ordinary" href={item.path}>
              {linkTitle}
            </a>
          ) : (
            <Link className="link link-ordinary" to={item.path}>
              {linkTitle}
            </Link>
          );

          return <li key={item.id}>{linkComponent}</li>;
        })}
        <li>
          <a href={github.url} className="btn btn-github">
            <svg
              className="sprite-icon sprite-icon--28 sprite-icon--inverse"
              role="img"
              aria-labelledby="logoGithub"
            >
              <title id="logoGithub">{github.name}</title>
              <use xlinkHref="#github" />
            </svg>
            <span className="hidden-md">{github.name}</span>
          </a>
        </li>
      </ul>

      <button className="btn btn-burger" onClick={toggleMenu}>
        <span />
        <span />
        <span />
      </button>
    </>
  );
};

export const query = graphql`
  fragment Navigation on siteMetadata_2 {
    navigation {
      path
      id
    }
  }
`;

export default Navigation;
