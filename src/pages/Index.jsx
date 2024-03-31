import { FaGithub, FaCode, FaEye } from "react-icons/fa";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="max-w-5xl mx-auto p-8 bg-white shadow-lg rounded-lg flex flex-col md:flex-row">
        <div className="md:w-1/2 mb-8 md:mb-0 md:mr-8">
          <h1 className="text-4xl font-bold mb-4">GPT Engineer</h1>
          <p className="text-xl mb-8">Make any frontend no-code editable with AI</p>
          <ul className="space-y-4">
            <li className="flex items-center">
              <FaGithub className="mr-2 text-2xl" />
              <span>Connect to frontend codebase (via GitHub)</span>
            </li>
            <li className="flex items-center">
              <FaCode className="mr-2 text-2xl" />
              <span>Add OpenAPI of the backend</span>
            </li>
            <li className="flex items-center">
              <FaEye className="mr-2 text-2xl" />
              <span>Ask for complex frontend changes, get instant previews, with GitHub codebase as single source of truth</span>
            </li>
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <img src="https://storage.googleapis.com/dara-c1b52.appspot.com/daras_ai/media/bd4da3ae-ef04-11ee-bc85-02420a0001f6/gooey.ai%20-%20An%20analogue%20film%20still%20of%20an%20astronaut%20on%20a%20spaceship%20rocket%20with%20a%20laptop%20writing%20coden.png" alt="QR Code" className="w-64 h-64" />
        </div>
      </div>
    </div>
  );
};

export default Index;
