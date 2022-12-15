import React, { useEffect } from "react";
import { GET_MOVIES } from "../graphql/Queries";
import { UPDATE_MOVIES } from "../graphql/Mutation";
import { useLazyQuery, useMutation } from "@apollo/client";

//import { REMOVE_NOTE } from "../graphql/Mutation";
import { Link } from "react-router-dom";

const Home = () => {
  //We need to use useEffect in order to prevetn multi-render issues
  useEffect(() => {
    getMovies();
  }, []);

  const [getMovies, { data, error }] = useLazyQuery(GET_MOVIES);
  const [updateMovie] = useMutation(UPDATE_MOVIES, {
    refetchQueries: [{ query: GET_MOVIES }],
  });
  if (error) return <h1>Error {error}</h1>;
  if (data) {
  }

  return (
    <div className="conteiner mt-4">
      {data &&
        data.getMovies.map(
          ({ id, title, description, likes, image, date_of_released }) => (
            <div className="mb-3 max-w-xs ml-3 cardclassName bg-indigo-900 text-white rounded-lg">
              <div className="max-w-xs object-fill">
                <img className="pt-10 pb-10 pl-10 pr-10 ml-3" src={image}></img>
                <div>
                  <a href="#">
                    <h4 className="mb-2 text-2xl  text-white">{title}</h4>
                  </a>

                  <p className="text-sm mb-3 mx-5 line-clamp-3">
                    {description}
                  </p>
                </div>

                <div className="border-t border-b">
                  <p className="text-sm mb-3 mt-2">
                    <spam>Release Date: {date_of_released}</spam>
                  </p>

                  <p className="mb-2 ">
                    <spam className="text-sm">likes: {likes}</spam>
                  </p>
                </div>
                <div data-id={id}>
                  {/**<Link
                    to="/create-note"
                    state={{
                      id: id,
                      title: title,
                      content: content,
                      author: author,
                      date: date,
                    }}
                    className="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
                  >
                    Update
                  </Link>*/}

                  <button
                    onClick={async (e) => {
                      //getting the document id
                      let getDocumentId =
                        e.target.parentElement.getAttribute("data-id");

                      //Calling the remove mutation and refetching the note list
                      return await updateMovie({
                        variables: { id: getDocumentId },
                      });
                    }}
                    className="bg-indigo-600 text-white text-sm leading-6 font-medium py-2 px-3 mb-3 mt-3 rounded-lg"
                  >
                    Add to Favorite
                  </button>
                </div>
              </div>
            </div>
          )
        )}
    </div>
  );
};
export default Home;
