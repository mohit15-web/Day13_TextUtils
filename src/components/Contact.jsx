
function Contact() {
  return (
    <div className="flex flex-col items-center justify-center h-[90vh]">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <h1 className="text-2xl mb-2">Created by: Mohit Chaudhary</h1>
      <h1 className="text-2xl mb-2">Email Address: mohitchoudharu2@gmail.com</h1>
      <h1 className="text-2xl">
        Github link:{" "}
        <a
          href="https://github.com/mohit15-web"
          className="text-blue-500 hover:text-blue-700"
        >
          Click me
        </a>
      </h1>
    </div>
  );
}

export default Contact;
