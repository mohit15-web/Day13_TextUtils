
const AboutUs = () => {
  return (
    <div className="h-[100vh] m-10">

    <div className="max-w-3xl mx-auto p-6 rounded-lg shadow-md border ">
      <h2 className="text-3xl font-bold mb-4 text-center dark:text-gray-200">About Us</h2>
      <p className="text-lg  dark:text-gray-300 mb-4">
        Welcome to TextUtils, your go-to solution for managing and manipulating text effortlessly. Our application offers a variety of features designed to help you handle text in the most efficient way possible.
      </p>
      <p className="text-lg  dark:text-gray-300 mb-4">
        With TextUtils, you can easily:
      </p>
      <ul className="list-disc list-inside text-lg  dark:text-gray-300 mb-4">
        <li>Convert text to uppercase or lowercase with a single click.</li>
        <li>Count the number of characters and words in your text.</li>
        <li>Remove extra spaces to clean up your text.</li>
        <li>Copy text to your clipboard for easy sharing.</li>
      </ul>
      <p className="text-lg  dark:text-gray-300 mb-4">
        Our mission is to provide a simple and intuitive tool that enhances your productivity and makes text manipulation a breeze. Whether you're drafting an email, writing a report, or coding, TextUtils is here to help you streamline your workflow.
      </p>
      <p className="text-lg  dark:text-gray-300">
        Thank you for using TextUtils. We hope you enjoy using our app as much as we enjoyed creating it for you!
      </p>
    </div>
    </div>

  );
};

export default AboutUs;
