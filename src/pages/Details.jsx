import { useEffect, useContext } from "react";
import { useParams } from "react-router";
import { AppContext } from "../context/AppContext";

const Details = () => {
  const { imageDetails, getImageDetails, loading } = useContext(AppContext);
  const { id } = useParams();

  useEffect(() => {
    getImageDetails(id);
  }, [id]);

  if (loading) return <p className="text-center text-gray-500">Loading...</p>;

  if (!imageDetails)
    return <p className="text-center text-red-500">Image not found</p>;

  return (
    <div className="max-w-6xl h-screen mx-auto px-4 py-10 flex flex-col lg:flex-row items-center gap-8">
      {/* Left Side: Image */}
      <div className="flex-1">
        <img
          src={imageDetails.largeImageURL}
          alt={imageDetails.tags}
          className="w-full shadow-lg"
        />
      </div>

      {/* Right Side: Download & View */}
      <div className="w-full lg:w-1/3 bg-white shadow-lg p-4 rounded-lg">

        {/* Buttons */}
        <div className="mt-4 flex gap-4">
          <a
            // href={resolutions.find((res) => res.size === selectedSize)?.url}
            download
            className="bg-green-500 text-white px-4 py-2 rounded-md flex-1 text-center hover:bg-green-600 transition"
          >
            Download
          </a>
          <a
            // href={resolutions.find((res) => res.size === selectedSize)?.url}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gray-300 px-4 py-2 rounded-md flex-1 text-center hover:bg-gray-400 transition"
          >
            View
          </a>
        </div>
      </div>
    </div>
  );
};

export default Details;
