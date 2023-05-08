import HandleHomeCopy from "../common/pageHeader";

const About = () => {
  return (
    <>
      <HandleHomeCopy
        title={
          <>Movie DB is New Application To Discover All Your Favorite Movies</>
        }
      />
      <div
        style={{ display: "inline-block", verticalAlign: "top", width: "50%" }}
      >
        <h6 className="mt-5 text-light text-decoration-underline">
          Some Info About TMDB{" "}
        </h6>
        <p className="text-light">
          TMDB (The Movie Database) is a popular online database that provides
          information related to movies, TV shows, and other media content. It
          was launched in 2008 and has grown to become one of the largest movie
          databases on the internet. offers an API that allows developers to
          access its vast collection of movie data for use in their own
          applications and websites.
        </p>
      </div>
      <div
        style={{ display: "inline-block", verticalAlign: "top", width: "50%" }}
      >
        <img
          src="https://pbs.twimg.com/profile_images/1243623122089041920/gVZIvphd_400x400.jpg"
          alt="TMDB (The Movie Data Base)"
          style={{
            display: "block",
            marginLeft: "auto",
            marginRight: "auto",
            width: "200px",
            height: "200px",
            borderRadius: "50%",
          }}
        />
      </div>

      <div className="mt-5">
        <h6 className="text-light text-decoration-underline">
          A Little About The Code
        </h6>
        <p className="text-light">
          in the opening of the page we have the Main page with some cards of
          movies. next we have the sign-in components that you directly with
          this end point /sign-up. For this one i use two libraries JOI and
          Formik. and it move you automatically to the sign in components.
        </p>
        <p className="mt-5 text-light">
          For the sign-up-admin i also using Formik and Joi but when you sign up
          it automatically transfer you directly to the site
        </p>
        <p className="mt-5 text-light">
          {" "}
          Its a function from the useAuth hook, and then navigates to a new page
          using the useNavigate hook. its using a single prop called redirect,
          which is used to specify the URL of the page to navigate to after
          logging out.{" "}
        </p>
      </div>
    </>
  );
};

export default About;
