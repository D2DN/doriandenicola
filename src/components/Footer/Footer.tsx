import React from "react";
import { useTranslation } from "react-i18next";
import "./Footer.scss";

function Footer() {
  const { t } = useTranslation();

  return <div className="footer">{t("Copyright")}</div>;
}

export default Footer;
