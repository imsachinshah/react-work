import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";

function Github() {
  // const [data, setData] = useState([]);
  // useEffect(() => {
  //   fetch('https://api.github.com/users/imsachinshah')
  //   .then((response) => response.json())
  //   .then((data) => {
  //       setData(data);
  //       console.log(data);
  //   })
  // }, [])

  const data = useLoaderData();
  return (
    <>
      <div className="mx-auto w-full max-w-7xl mb-5 h-full">
        <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16">
          <div className="relative z-10 max-w-screen-xl px-4  pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8">
            <div className="max-w-xl sm:mt-1 mt-80 space-y-8 text-center sm:text-left sm:ml-auto">
              <h2 className="text-4xl font-bold sm:text-4xl">
                {data.name}
                <span className="hidden sm:block text-2xl text-gray-700">
                  {data.login}
                </span>
                <span className="hidden sm:block text-xl text-gray-700">
                  {data.bio}
                </span>
                <span className="hidden sm:block text-xl text-gray-700">
                  <span className="text-orange-700">{data.followers}</span>{" "}
                  followers .{" "}
                  <span className="text-orange-700">{data.following}</span>{" "}
                  following
                </span>
              </h2>

              <h3 className="text-xl font-bold sm:text-xl">
                <span className="hidden sm:block text-lg text-gray-700">
                  {data.location}
                </span>
                <span className="hidden sm:block text-xl text-gray-700">
                  <span className="text-orange-700">{data.public_repos} </span>
                  Repositories
                </span>
              </h3>

              <Link
                className="inline-flex text-white items-center px-6 py-3 font-medium bg-orange-700 rounded-lg hover:opacity-75"
                to="https://github.com/in/imsachinshah"
              >
                <svg
                  fill="white"
                  width="30"
                  height="30"
                  xmlns="http://www.w3.org/2000/svg"
                  fillRule="evenodd"
                  clipRule="evenodd"
                >
                  <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
                </svg>
                &nbsp; Visit Github Profile
              </Link>
            </div>
          </div>

          <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full ">
            <img className="w-96" src={data.avatar_url} alt="github image" />
          </div>
        </aside>
      </div>
    </>
  );
}

export default Github;
