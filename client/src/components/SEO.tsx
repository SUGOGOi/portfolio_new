import { Helmet } from "react-helmet-async";

const SEO: React.FC<{ title: string; description: string[] }> = ({
  title,
  description,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description[0]} />
      <meta name="author" content={description[1]} />
      <meta name="keywords" content={description[2]} />

      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta
        name="google-site-verification"
        content="kV29s9uC13ZzLb_NCOYFa1gmFeVpLG5HaQ5wJR3glDU"
      />
    </Helmet>
  );
};

export default SEO;
