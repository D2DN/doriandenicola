import React from "react";
import Typography from "@mui/material/Typography";
import { useTranslation, Trans } from "react-i18next";

import "./WhoIAm.scss";

function WhoIAm(): JSX.Element {
  const { t } = useTranslation();

  return (
    <div className="WhoIAm">
      <Typography variant="h2">{t("Hi")}</Typography>
      <Typography variant="h2">
        <Trans i18nKey="WhoIAm" components={{ bold: <strong /> }} />
      </Typography>

      <Typography variant="h2">
        <Trans
          i18nKey="MyJob"
          components={{
            bold: <strong className="cerbexa" />,
          }}
        />
      </Typography>

      <div className="more">
        <Typography variant="h5">{t("Link")}</Typography>
        <div className="link-content">
          <a
            href="https://www.linkedin.com/in/dorian-de-nicola/"
            target="_blank"
            rel="noreferrer"
            className="link"
          >
            <i className="icon fa-2xl fa-brands fa-linkedin" />
          </a>
          <a href="https://github.com/D2DN" target="_blank" rel="noreferrer" className="link">
            <i className="icon fa-2xl fa-brands fa-github" />
          </a>
        </div>{" "}
      </div>
    </div>
  );
}

export default WhoIAm;